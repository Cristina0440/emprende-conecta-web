// app/emprendimientos/page.jsx
import React from 'react';
import EmprendimientoCard from './EmprendimientoCard';
import Navbar from '../components/Navbar';

const EmprendimientosPage = () => {
  // Datos de ejemplo para los emprendimientos
  const emprendimientos = [
    {
      id: 1,
      name: 'Tienda EcoMarket',
      address: 'Av. Los Olivos 123',
      imageSrc: '/tienda-ecomarket.jpg',  // Ruta de imagen en /public
      rating: 4.5
    },
    {
      id: 2,
      name: 'Café Literario',
      address: 'Calle Ficción 456',
      imageSrc: '/cafe-literario.jpg',
      rating: 4.7
    },
    // ...otros emprendimientos
  ];

  return (
    <>
    <Navbar usuario="Rosmeri Ccanto Flores" />
    <section className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Emprendimientos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {emprendimientos.map(emp => (
          <EmprendimientoCard
            key={emp.id}
            name={emp.name}
            address={emp.address}
            imageSrc={emp.imageSrc}
            rating={emp.rating}
          />
        ))}
      </div>
    </section>
  </> 
  );
};

export default EmprendimientosPage;
