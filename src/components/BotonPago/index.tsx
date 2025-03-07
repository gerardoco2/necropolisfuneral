"use client";
import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
// import btpago from "../../../public/images/btpago.jpg";
import btpago from "./btpago.jpg";
import Image from "next/image";

const BotonDePago = () => {
  return (
    <HStack display="flex justify-center">
      {/* <Image src={btpago} width="120px" /> */}
      <Image src={btpago} alt={""} />
    </HStack>
  );
};

export default BotonDePago;
