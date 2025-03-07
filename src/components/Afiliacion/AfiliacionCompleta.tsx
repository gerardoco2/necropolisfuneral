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
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

interface Beneficiario {
  nombreCompleto: string;
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
  beneficiario: Beneficiario[];
}

const AfiliacionCompleta = () => {
  const router = useRouter();
  const enviar = () => {
    router.push("/afiliacion/pago");
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AfiliacionCompletaFormData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "beneficiario",
  });

  const onSubmit: SubmitHandler<AfiliacionCompletaFormData> = () => {};

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
              placeholder="numero de Ceunta bancaria"
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
              <option value="individual">Individual</option>
              <option value="colectivo">Colectivo</option>
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
            Registra los datos tus Beneficiarions :
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
                    {...register(`beneficiario.${index}.nombreCompleto`, {
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
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Parentesco:</FormLabel>
                  <Input
                    {...register(`beneficiario.${index}.parentesco`, {
                      required: "Este campo es obligatorio",
                    })}
                  />
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
              colorScheme="teal"
              onClick={() =>
                append({
                  nombreCompleto: "",
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
