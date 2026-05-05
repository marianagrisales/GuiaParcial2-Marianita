'use client';

import Link from 'next/link';
import { useState } from 'react';

import { products, type Product } from '@/src/util/pets.util';

import Navbar from './dashboard/components/Navbar';

/** Estilos del filtro activo vs inactivo (se reutilizan en cada botón). */
const estiloFiltroActivo =
    'rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700';
const estiloFiltroNormal =
    'rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 shadow-sm transition hover:border-zinc-300';

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5" aria-label={`${rating} de 5 estrellas`}>
            <span className={rating >= 1 ? 'text-amber-400' : 'text-zinc-300'}>★</span>
            <span className={rating >= 2 ? 'text-amber-400' : 'text-zinc-300'}>★</span>
            <span className={rating >= 3 ? 'text-amber-400' : 'text-zinc-300'}>★</span>
            <span className={rating >= 4 ? 'text-amber-400' : 'text-zinc-300'}>★</span>
            <span className={rating >= 5 ? 'text-amber-400' : 'text-zinc-300'}>★</span>
        </div>
    );
}

export default function Home() {
    const [filtroActivo, setFiltroActivo] = useState('Todos');

    const productosFiltrados =
        filtroActivo === 'Todos' ? products : products.filter((p) => p.category === filtroActivo);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <section className="bg-gradient-to-b from-rose-50/90 via-white to-white">
                <div className="mx-auto max-w-6xl px-4 pb-10 pt-10 md:pt-14">
                    <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-zinc-900 md:text-4xl lg:text-[2.75rem]">
                        Alimento premium para tu mejor amigo{' '}
                        <span className="inline text-violet-600" aria-hidden>
                            🐾
                        </span>
                    </h1>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-500 md:text-lg">
                        Descubre recetas seleccionadas por veterinarios, con ingredientes frescos y entrega a domicilio.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                        <button
                            type="button"
                            onClick={() => setFiltroActivo('Todos')}
                            className={filtroActivo === 'Todos' ? estiloFiltroActivo : estiloFiltroNormal}
                        >
                            Todos
                        </button>
                        <button
                            type="button"
                            onClick={() => setFiltroActivo('Perro adulto')}
                            className={filtroActivo === 'Perro adulto' ? estiloFiltroActivo : estiloFiltroNormal}
                        >
                            Perro adulto
                        </button>
                        <button
                            type="button"
                            onClick={() => setFiltroActivo('Cachorro')}
                            className={filtroActivo === 'Cachorro' ? estiloFiltroActivo : estiloFiltroNormal}
                        >
                            Cachorro
                        </button>
                        <button
                            type="button"
                            onClick={() => setFiltroActivo('Gato adulto')}
                            className={filtroActivo === 'Gato adulto' ? estiloFiltroActivo : estiloFiltroNormal}
                        >
                            Gato adulto
                        </button>
                        <button
                            type="button"
                            onClick={() => setFiltroActivo('Gatito')}
                            className={filtroActivo === 'Gatito' ? estiloFiltroActivo : estiloFiltroNormal}
                        >
                            Gatito
                        </button>
                        <button
                            type="button"
                            onClick={() => setFiltroActivo('Snacks')}
                            className={filtroActivo === 'Snacks' ? estiloFiltroActivo : estiloFiltroNormal}
                        >
                            Snacks
                        </button>
                    </div>
                </div>
            </section>

            <main className="mx-auto max-w-6xl px-4 pb-16">
                <div className="mb-8 flex flex-wrap items-end justify-between gap-2">
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Productos destacados</h2>
                    <p className="text-sm text-zinc-500">
                        {productosFiltrados.length} {productosFiltrados.length === 1 ? 'resultado' : 'resultados'}
                    </p>
                </div>

                {/*
                  Aquí sí usamos .map: los productos vienen de un array en pets.util.ts.
                  Así no repetimos la misma tarjeta 12 veces en el código.
                */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {productosFiltrados.map((product: Product) => (
                        <article
                            key={product.id}
                            className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md shadow-zinc-200/60 ring-1 ring-zinc-100 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-zinc-200/80"
                        >
                            <div
                                className={`flex min-h-[160px] items-center justify-center rounded-b-none px-4 pt-6 ${product.bgClass}`}
                            >
                                <span className="select-none text-7xl leading-none drop-shadow-sm">
                                    {product.emoji}
                                </span>
                            </div>
                            <div className="flex flex-1 flex-col space-y-3 px-4 pb-5 pt-4">
                                <div className="flex items-start justify-between gap-2">
                                    <span className="rounded-full border border-zinc-200 bg-white px-2.5 py-0.5 text-xs font-semibold text-zinc-700">
                                        {product.category}
                                    </span>
                                    <span className="shrink-0 text-xs font-medium text-zinc-400">{product.brand}</span>
                                </div>
                                <h3 className="line-clamp-2 min-h-[2.5rem] text-base font-bold leading-snug text-zinc-900">
                                    {product.name}
                                </h3>
                                <StarRating rating={product.rating} />
                                <div className="mt-auto flex items-center justify-between gap-3 pt-1">
                                    <p className="text-lg font-bold text-zinc-900">${product.price.toFixed(2)}</p>
                                    <Link
                                        href={`/producto/${product.id}`}
                                        className="shrink-0 rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-700"
                                    >
                                        Ver detalles
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
}
