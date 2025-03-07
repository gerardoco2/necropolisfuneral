"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { Button, HStack, Input, Select } from "@chakra-ui/react";
import Afiliacion from "../Afiliacion";

const inter = Inter({ subsets: ["latin"], weight: "800" });

const slogan = "Un Mundo En Servicios Funerarios";

const Hero = () => {
  const heading = slogan.split("");

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="relative h-screen min-h-screen w-screen overflow-hidden pb-10 pt-15 md:pt-20 xl:pb-25 xl:pt-46">
        <video
          className="absolute left-0 top-0 h-full w-full object-cover"
          autoPlay
          loop
          playsInline
          muted
        >
          <source src="/videos/0910.mp4" type="video/mp4" />
        </video>

        <div className="align-center absolute  inset-0 mx-5 flex flex-col items-center justify-center">
          <div className=" xs:w-full lg:3/4 flex  flex-col items-center justify-center md:w-3/4">
            <Image
              src="/images/logo/logo_necrolpolishome_light.png"
              width={600}
              height={700}
              alt=""
            />

            {/* <p className="w-3/4 text-center text-white font-semibold my-8">Empresa Falconiana de Servicios Funerarios, especialistas en la administración, creación, desarrollo, asesorías online sobre la ordenanza de ley, desinfección de áreas, planificación para cementerios públicos municipales y privados, planes de previsión familiar individuales y colectivos</p> */}

            <motion.p
              initial="hidden"
              whileInView="reveal"
              transition={{
                staggerChildren: 0.08,
                duration: 5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              variants={charVariants}
              className="my-8 w-3/4 text-center text-3xl font-semibold text-white"
            >
              {/* {heading.map((char) => (
                <motion.span
                  className={inter.className}
                  key={char}
                  transition={{ duration: 5, repeat: Infinity, repeatDelay: 2 }}
                  variants={charVariants}
                >
                  {char.toUpperCase()}
                </motion.span>
              ))} */}
            </motion.p>
          </div>
        </div>

        <div className=" relative z-10 mx-auto max-w-c-1390 px-4 md:px-0 2xl:px-8 ">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              {/* <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Un mundo en servicios Funerarios
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Necropolis Funeral 
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  
                </span>
              </h1>
              <p >
              Empresa Falconiana de Servicios Funerarios, especialistas en la administración, creación, desarrollo, asesorías online sobre la ordenanza de ley, desinfección de áreas, planificación para cementerios públicos municipales y privados, planes de previsión familiar individuales y colectivos
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get Started
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p>
              </div> */}
            </div>

            <div className="animate_right flex  md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">{/* <Afiliacion /> */}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
