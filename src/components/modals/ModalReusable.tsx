"use-client";
import React, { ReactNode } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  UseDisclosureProps,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  titulo: string;
  children: ReactNode;
  footerContent?: ReactNode;
}

const ModalReusable = ({
  isOpen,
  onClose,
  titulo,
  children,
  footerContent,
}: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textColor="black">{titulo}</ModalHeader>
        <ModalCloseButton />
        <ModalBody textColor="black">{children}</ModalBody>

        <ModalFooter>
          {footerContent || (
            <Button colorScheme="blue" onClick={onClose}>
              Cerrar
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalReusable;
