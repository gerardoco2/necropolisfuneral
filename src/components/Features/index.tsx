"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="servicios" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Descatacados",
              subtitle: "Nuestros Servicios",
              description: `Ofrecemos un variedad de Servicios que nos hacen ser lideres a nivel nacional!`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
