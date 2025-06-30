// app/emprendimientos/EmprendimientoCard.jsx
'use client'  // Indica que este componente puede usar interactividad del lado del cliente si es necesario

import Image from 'next/image';  // Podemos usar next/image para optimizar imágenes (opcional)
import React from 'react';

const EmprendimientoCard = ({ name, address, imageSrc, rating }) => {
  return (
    <article className="bg-white rounded-lg shadow-md p-4 flex flex-col items-start">
      {/* Imagen del emprendimiento */}
      <img 
        src={imageSrc} 
        alt={name} 
        className="w-full h-40 object-cover rounded-md mb-3" 
      />
      {/* Si se prefiere Next Image: 
      <Image src={imageSrc} alt={name} width={300} height={160} className="rounded-md mb-3 object-cover" /> 
      */}
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-1">{address}</p>
      <p className="text-sm text-yellow-500 font-medium">
        ⭐ {rating} / 5.0
      </p>
    </article>
  );
};

export default EmprendimientoCard;
