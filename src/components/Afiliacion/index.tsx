"use client";
import {
  Button,
  HStack,
  Input,
  Select,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { redirect, useRouter } from "next/navigation";
import React, { FormEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { generaTxt } from "../../utils/generaTxt";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import ModalReusable from "../modals/ModalReusable";

interface AfiliadoFormData {
  nombre: string;
  apellido: string;
  cedula: number;
  contrato: string;
}

export default function Afiliacion() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AfiliadoFormData>();

  const toast = useToast();
  const router = useRouter();

  const onSubmit: SubmitHandler<AfiliadoFormData> = async (data) => {
    console.log(data);
    toast({
      title: "Éxito",
      description: "Tu afiliación ha sido enviada correctamente.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    const response = await fetch(`../api/afiliado/${data.cedula}`);
    const result = await response.json();
    console.log(result);

    if (result.status === 200) {
      console.log("existe");
      onOpen();
    } else {
      router.push("/afiliacion");
    }
  };

  return (
    <>
      <div className=" inset-0 flex   flex-col items-center rounded-lg border border-white bg-white bg-opacity-15 p-4 shadow-solid-3  dark:border-strokedark dark:bg-blacksection dark:bg-opacity-50 dark:hover:bg-hoverdark dark:hover:bg-opacity-50 xl:p-8 ">
        <h3 className=" my-auto mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          Comienza tu Afiliacion
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
            <HStack mt={5}>
              <Button width="100%" type="submit">
                Inscribeme
              </Button>
            </HStack>
          </form>
        </div>
      </div>
      <ModalReusable
        isOpen={isOpen}
        onClose={onClose}
        titulo="Cedula ya registrada"
      >
        <p>Usuario con la cedula introducida ya se encuentra registrado.</p>
      </ModalReusable>
    </>
  );
}
