"use client";
import Image from "next/image";
import { useState } from "react";


const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };


  return (
    <>
    
      <section className="relative overflow-hidden min-h-screen w-screen h-screen pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      
      <video className="absolute top-0 left-0  w-full h-full object-cover" autoPlay loop playsInline muted >
        <source src="/videos/video2.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0  flex flex-col align-center items-center justify-center mx-5" >
        <div className="backdrop-opacity-10 xs:w-full md:w-3/4 lg:3/4 backdrop-invert bg-white/30 flex flex-col items-center justify-center" >
          <Image src="/images/logo/logo_necrolpolis-dark.png" width={600} height={700} alt=""/>
          <p className="w-3/4 text-center text-black font-semibold my-8">Empresa Falconiana de Servicios Funerarios, especialistas en la administración, creación, desarrollo, asesorías online sobre la ordenanza de ley, desinfección de áreas, planificación para cementerios públicos municipales y privados, planes de previsión familiar individuales y colectivos</p>
        </div>
      </div>

        <div className=" relative z-10 mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-8 " >
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

            <div className="animate_right hidden md:w-1/2 lg:block">
              {/* <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    priority
                    className="hidden rounded-lg shadow-solid-l dark:block"
                    src="/images/hero/necropolis-fachada.jpg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
