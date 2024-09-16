import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";


const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  const trimmed_desc = description.substring(0,361).substring(0, description.substring(0, 361).lastIndexOf(' ')) + '...';

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
          {/* <Image src={icon} width={36} height={36} alt="title" /> */}
          <feature.icon className="text-terciary absolute text-2xl" />
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {title}
        </h3>
        <p>{
          trimmed_desc        
        }</p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
