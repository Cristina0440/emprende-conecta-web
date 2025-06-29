'use client';

export default function LayoutAuth({ children }) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Columna izquierda (azul) */}
      <div className="bg-[#0B3B5B] text-white flex flex-col items-center justify-center p-8">
        <img src="/carrito.png" alt="Logo" className="w-16 h-16 mb-4" />
        <h1 className="text-2xl font-bold mb-2">E&C</h1>
        <p className="text-center text-sm max-w-xs">
          Conecta con emprendedores peruanos y descubre productos únicos cerca de ti.
        </p>
      </div>

      {/* Columna derecha (contenido dinámico) */}
      <div className="bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          {children}
        </div>
      </div>
    </div>
  );
}
