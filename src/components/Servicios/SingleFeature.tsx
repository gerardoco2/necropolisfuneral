import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { id, icon, title, description } = feature;

  const trimmed_desc =
    description.length > 361
      ? description
          .substring(0, 361)
          .substring(0, description.substring(0, 361).lastIndexOf(" ")) + "..."
      : description;

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
        className="animate_top z-40 flex flex-col items-center rounded-lg border border-white bg-white p-4 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-8 "
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary">
          {/* <Image src={icon} width={36} height={36} alt="title" /> */}
          <feature.icon className="absolute text-2xl text-terciary" />
        </div>
        <Link href={`/articulos/${id}`}>
          <div className="flex flex-col items-center">
            <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle ">
              {title}
            </h3>
            <p className="text-justify">{trimmed_desc}</p>
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default SingleFeature;
