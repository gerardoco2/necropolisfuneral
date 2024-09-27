'use client'
import React, { useRef } from 'react'
import SingleFeature from '../Features/SingleFeature'
import featuresData from '../Features/featuresData'
import SingleService from './SingleService'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeader from '../common/SectionHeader'
import ImageContainer from '../ImageContainer'

const HorizontalScroll = () => {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({target: targetRef})
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%'])

  return (
    <>


    <div className="carousel py-7  mt-4 " ref={targetRef} >
            {/* <!-- Section Title Start --> */}
    <SectionHeader 
        headerInfo={{
        title: "Sin Costo de Inscripcion",
        subtitle: "Afiliacion a",
        description: `todos los servicios que tenemos para ti.`,
        }}
    />
    {/* <!-- Section Title End --> */}
        <div className="contentContainer h-auto">
            <motion.div className="services" style={{x}}>
                {/* { featuresData.map( feature => (
                    <div className="item">
                        <SingleService feature={feature}  />
                    </div>
                    ))
                 } */}
                 <ImageContainer imageSource="/images/galeria/galeria_01.jpg" description='Servicios Funerarios'/>
                 <ImageContainer imageSource="/images/galeria/galeria_02.jpg" description='Traslados'/>
                 <ImageContainer imageSource="/images/galeria/galeria_03.jpg" description='Desinfeccion'/>
                 <ImageContainer imageSource="/images/galeria/galeria_04.jpg" description='Tanatopraxia'/>
                 <ImageContainer imageSource="/images/galeria/galeria_05.jpg" description='Resguardo'/>
                 <ImageContainer imageSource="/images/galeria/galeria_06.jpg" description='Cremacion'/>
                 <ImageContainer imageSource="/images/galeria/galeria_07.jpg" description='Floristeria'/>
                 <ImageContainer imageSource="/images/galeria/galeria_08.jpg" description='Contratos'/>
                 <ImageContainer imageSource="/images/galeria/galeria_08.jpg" description='Individuales'/>
            </motion.div>
        </div>
    </div>
    </>
  )
}

export default HorizontalScroll