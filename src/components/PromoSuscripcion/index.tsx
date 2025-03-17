"use server";
import React from "react";
import Afiliacion from "../Afiliacion";
import { HStack, List, ListIcon, ListItem } from "@chakra-ui/react";
import { MdCheckCircle, MdSettings } from "react-icons/md";

const PromoSuscripcion = () => {
  return (
    <section className=" py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-32.5">
          <div className="md:w-1/2">
            <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
              Al completar tu afiliacion Online recibes
            </h2>
            <List spacing={3}>
              <ListItem>
                <HStack>
                  <MdCheckCircle color="green-500" />
                  <p>Carnet de afiliacion</p>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <MdCheckCircle color="green-500" />
                  <p>Afiliacion real y comprobable</p>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <MdCheckCircle color="green-500" />
                  <p>Acceso online para verificacion de tu cuenta</p>
                </HStack>
              </ListItem>

              <ListItem>
                <HStack>
                  <MdCheckCircle color="green-500" />
                  <p>Historial de pagos</p>
                </HStack>
              </ListItem>
            </List>
          </div>
          <div className=" relative mx-auto  md:w-1/2">
            <Afiliacion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSuscripcion;
