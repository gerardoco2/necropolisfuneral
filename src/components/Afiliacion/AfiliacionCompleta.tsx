"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
// import logoBanco from "@/assets/images/logoBanco.jpeg";

interface Beneficiario {
  nombre: string;
  apellido: string;
  cedula: string;
  fechaNac: string;
  edad: number;
  parentesco: string;
}

interface AfiliacionCompletaFormData {
  nombre: string;
  apellido: string;
  cedula: string;
  numeroCta: string;
  contrato: string;
  banco: string;
  monto: number;
  token: string;
  telefono: string;
  cedulaPago: string;
  beneficiario: Beneficiario[];
}

const AfiliacionCompleta = () => {
  const router = useRouter();
  const enviar = () => {
    router.push("/afiliacion/pago");
  };

  const [tasaBcv, setTasaBcv] = useState(98.0); // Valor inicial de la tasa del BCV

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AfiliacionCompletaFormData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "beneficiario",
  });

  const onSubmit: SubmitHandler<AfiliacionCompletaFormData> = async (data) => {
    try {
      fetch("/api/afiliado", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          enviar();
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Función para calcular la edad
  const calcularEdad = (fechaNac: string): number => {
    const fechaNacimiento = new Date(fechaNac);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();

    // Ajustar la edad si aún no ha pasado el mes de cumpleaños
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }

    return edad;
  };

  // Observar cambios en los campos de fecha de nacimiento
  const fechasNacimiento = watch("beneficiario");

  return (
    <Box
      p={8}
      maxWidth="100%"
      mx="auto"
      className=" inset-0 flex  min-h-screen flex-col items-center rounded-lg border border-white bg-white bg-opacity-15 p-4 shadow-solid-3  dark:border-strokedark dark:bg-blacksection dark:bg-opacity-50 dark:hover:bg-hoverdark dark:hover:bg-opacity-50 xl:p-8 "
    >
      <h3 className=" my-auto mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
        Formulario de Inscripcion
      </h3>
      <div className="flex">
        <form onSubmit={handleSubmit(onSubmit)}>
          <HStack>
            <Input
              placeholder="Nombre"
              style={{ color: "white" }}
              {...register("nombre", {
                required: "El nombre  es obligatorio",
              })}
            />
            <Input
              placeholder="Apellido"
              style={{ color: "white" }}
              {...register("apellido", {
                required: " El apellido  es obligatorio",
              })}
            />
            <Input
              placeholder="numero de cuenta bancaria"
              style={{ color: "white" }}
              {...register("numeroCta", {
                required: " El Numero de cuenta  es obligatorio",
              })}
            />
          </HStack>
          {errors.nombre && (
            <p style={{ color: "white", fontSize: "0,875rem" }}>
              {errors.nombre.message}
            </p>
          )}
          {errors.apellido && (
            <p style={{ color: "white", fontSize: "0,875rem" }}>
              {errors.apellido.message}
            </p>
          )}
          <HStack marginTop={3}>
            <Input
              placeholder="Cedula"
              style={{ color: "white", width: "50%" }}
              {...register("cedula", {
                required: "La cedula es obligatoria",
              })}
            />
            <Select
              style={{ color: "white" }}
              placeholder="Tipo de Contrato"
              {...register("contrato", {
                required: "Por favor, selecciona un tipo de contrato",
              })}
            >
              <option value="26">Coro</option>
              <option value="25">La Vela</option>
            </Select>
          </HStack>
          {errors.cedula && (
            <p style={{ color: "white", fontSize: "0,875rem" }}>
              {errors.cedula.message}
            </p>
          )}
          {errors.contrato && (
            <p style={{ color: "white", fontSize: "0,875rem" }}>
              {errors.contrato.message}
            </p>
          )}

          <Heading as="h2" size="md" mt={6} mb={4}>
            Registra los datos tus Beneficiarion :
          </Heading>
          {fields.map((field, index) => (
            <Box
              key={field.id}
              width="100%"
              p={4}
              borderWidth={1}
              borderRadius="md"
            >
              <HStack spacing={3}>
                <FormControl>
                  <FormLabel>Nombre Completo:</FormLabel>
                  <Input
                    {...register(`beneficiario.${index}.nombre`, {
                      required: "Este campo es obligatorio",
                    })}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Apellido:</FormLabel>
                  <Input
                    {...register(`beneficiario.${index}.apellido`, {
                      required: "Este campo es obligatorio",
                    })}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Cédula:</FormLabel>
                  <Input
                    {...register(`beneficiario.${index}.cedula`, {
                      required: "Este campo es obligatorio",
                    })}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Fecha de Nacimiento:</FormLabel>
                  <Input
                    type="date"
                    {...register(`beneficiario.${index}.fechaNac`, {
                      required: "Este campo es obligatorio",
                      onChange: (e) => {
                        const fechaNac = e.target.value;
                        const edad = calcularEdad(fechaNac);
                        setValue(`beneficiario.${index}.edad`, edad);
                      },
                    })}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Edad:</FormLabel>
                  <Input
                    type="number"
                    {...register(`beneficiario.${index}.edad`, {
                      required: "Este campo es obligatorio",
                    })}
                    readOnly
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Parentesco:</FormLabel>
                  <Select
                    style={{ color: "white" }}
                    placeholder="Parentesco"
                    {...register(`beneficiario.${index}.parentesco`, {
                      required: "Por favor, selecciona un parentesco",
                    })}
                  >
                    <option value="01">Esposa (o)</option>
                    <option value="02">Hija (o)</option>
                    <option value="03">Madre / Padre</option>
                    <option value="04">Hermana (o)</option>
                    <option value="05">Sobrina (o)</option>
                    <option value="06">Nieta (o)</option>
                    <option value="07">Tia (o)</option>
                    <option value="08">Aburla (o)</option>
                    <option value="09">Prima (o)</option>
                  </Select>
                </FormControl>

                <Button
                  colorScheme="red"
                  size="sm"
                  onClick={() => remove(index)}
                >
                  x
                </Button>
              </HStack>
            </Box>
          ))}
          {/* Botón para agregar beneficiarios */}
          {fields.length < 10 ? (
            <Button
              className="mt-5"
              colorScheme="teal"
              onClick={() =>
                append({
                  nombre: "",
                  apellido: "",
                  cedula: "",
                  fechaNac: "",
                  edad: 0,
                  parentesco: "",
                })
              }
            >
              Agregar Beneficiario
            </Button>
          ) : (
            <Text color="red.500" fontSize="sm">
              Has alcanzado el límite de 10 beneficiarios.
            </Text>
          )}
          <Heading as="h2" size="md" mt={6} mb={4}>
            Registra tu pago :
          </Heading>
          <HStack spacing={3}>
            {/* <Image src={logoBanco} alt={""}></Image> */}
          </HStack>

          <HStack spacing={3}>
            <FormControl>
              <FormLabel>Banco:</FormLabel>
              <Select
                style={{ color: "white" }}
                placeholder="Banco"
                {...register("banco", {
                  required: "Por favor, selecciona tu banco",
                })}
              >
                <option value="01">Banco Provincial</option>
                <option value="01">Banco de Venezuela (BDV)</option>
                <option value="02">BNC (Banco Nacional de Crédito)</option>
                <option value="03">Mercantil</option>
                <option value="04">Bancamiga</option>
                <option value="05">Banco del Tesoro</option>
                <option value="06">Banco Bicentenario</option>
                <option value="07">Banco Exterior</option>
                <option value="08">Banplus</option>
                <option value="09">Banco Plaza</option>
                <option value="10">Banco Caroní</option>
                <option value="11">Banco del Caribe</option>
                <option value="12">Banco Activo</option>
                <option value="13">Banco Sofitasa</option>
                <option value="14">Banco del Sur</option>
                <option value="15">Banco Nacional de Finanzas (BFC)</option>
                <option value="16">
                  Banco de la Fuerza Armada Nacional (BANFANB)
                </option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Cedula:</FormLabel>
              <Input
                type="text"
                placeholder="Cedula"
                style={{ color: "white" }}
                {...register("cedulaPago", {
                  required: "El numero de cedula es obligatorio",
                })}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Telefono:</FormLabel>
              <Input
                type="number"
                placeholder="Telefono"
                style={{ color: "white" }}
                {...register("telefono", {
                  required: "El telefono es obligatorio",
                })}
              />
            </FormControl>
          </HStack>

          <HStack mt={5} spacing={3}>
            <FormControl>
              <FormLabel>token:</FormLabel>
              <Input
                type="number"
                placeholder="Token del banco por sms"
                style={{ color: "white !important" }}
                {...register("token")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Monto a Pagar:</FormLabel>
              <Input
                type="number"
                disabled
                value={`${tasaBcv * 5} Bs.`}
                placeholder={`${tasaBcv * 5} Bs.`}
                style={{ color: "white" }}
                {...register("monto")}
              />
            </FormControl>
          </HStack>
          <HStack mt={5}>
            <Button width="100%" type="submit" onClick={() => enviar()}>
              Enviar inscripcion
            </Button>
          </HStack>
        </form>
      </div>
    </Box>
  );
};

export default AfiliacionCompleta;
