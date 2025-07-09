'use client'
import { useParams } from 'next/navigation'

export default function CategoriaPage() {
  const { nombre } = useParams()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Productos de la categoría: {nombre}</h1>
      {/* Mostrar productos filtrados por categoría */}
    </div>
  )
}
