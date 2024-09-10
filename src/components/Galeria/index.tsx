import React from 'react'

const images = [
    "/images/galeria/galeria_01.jpg",
    "/images/galeria/galeria_02.jpg",
    "/images/galeria/galeria_03.jpg",
    "/images/galeria/galeria_04.jpg",
    "/images/galeria/galeria_05.jpg",
    "/images/galeria/galeria_06.jpg",
    "/images/galeria/galeria_07.jpg",
    "/images/galeria/galeria_08.jpg",

];

const Galeria = () => {
  return (
      <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4">
        {images.map((src, index) => (
            <div key={index} className="mb-4 break-inside-avoid ">
                <img  alt={src} src={src} className="w-fit object-cover rounded-lg" /> 
            </div>
         ))}
    </div>
  )
}

export default Galeria