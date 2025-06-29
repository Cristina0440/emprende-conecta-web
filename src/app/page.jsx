'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-3xl font-bold mb-4">Bienvenida a Emprendo&Conecta</h1>
      <p className="mb-6 text-gray-600 max-w-md">
        Descubre productos únicos de emprendedores peruanos.
        Inicia sesión o regístrate para comenzar.
      </p>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-[#0B3B5B] text-white px-6 py-2 rounded-full"
        >
          Iniciar Sesión
        </Link>
        <Link
          href="/registro"
          className="border border-[#0B3B5B] text-[#0B3B5B] px-6 py-2 rounded-full"
        >
          Registrarse
        </Link>
      </div>
    </main>
  );
}
