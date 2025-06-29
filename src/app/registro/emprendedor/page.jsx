'use client';

export default function EmprendedorRegistro() {
  return (
    <div className="w-full max-w-sm">
      <h2 className="text-xl font-semibold mb-4">Registro - Emprendedor</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nombre del negocio"
          className="px-4 py-2 border rounded-full text-sm"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="px-4 py-2 border rounded-full text-sm"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="px-4 py-2 border rounded-full text-sm"
        />
        <button type="submit" className="bg-[#0B3B5B] text-white py-2 rounded-full">
          Registrarse
        </button>
      </form>
    </div>
  );
}
