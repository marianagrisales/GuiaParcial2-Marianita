import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getProductById } from '@/src/util/pets.util';

import Navbar from '../../dashboard/components/Navbar';

import ProductBuyPanel from './ProductBuyPanel';

function EstrellasConNota({ rating }: { rating: number }) {
    return (
        <div className="flex flex-wrap items-center gap-2">
            <div className="flex gap-0.5" aria-hidden>
                <span className={rating >= 1 ? 'text-amber-400' : 'text-zinc-300'}>★</span>
                <span className={rating >= 2 ? 'text-amber-400' : 'text-zinc-300'}>★</span>
                <span className={rating >= 3 ? 'text-amber-400' : 'text-zinc-300'}>★</span>
                <span className={rating >= 4 ? 'text-amber-400' : 'text-zinc-300'}>★</span>
                <span className={rating >= 5 ? 'text-amber-400' : 'text-zinc-300'}>★</span>
            </div>
            <span className="text-sm text-zinc-500">({rating.toFixed(1)})</span>
        </div>
    );
}

function IconoCamion({ className }: { className?: string }) {
    return (
        <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
                d="M14 18V6a2 2 0 00-2-2H4a2 2 0 00-2 2v11a1 1 0 001 1h1m12-1a2 2 0 104 0 2 2 0 00-4 0zm4 0V9a2 2 0 00-2-2h-3l-2-2H8m8 11a2 2 0 11-4 0 2 2 0 014 0zM6 18a2 2 0 100-4 2 2 0 000 4z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function IconoDevolucion({ className }: { className?: string }) {
    return (
        <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
                d="M9 15L4 10l5-5M4 10h12a4 4 0 014 4v2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function IconoHoja({ className }: { className?: string }) {
    return (
        <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
                d="M11 20c5.5-3.5 8.5-8.5 8-14a8 8 0 00-8-8c-5.5.5-10 4-11 10 0 6 4 10 11 12z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

type ProductDetailPageProps = {
    params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
    const { id } = await params;
    const product = getProductById(id);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="mx-auto max-w-6xl px-4 pb-16 pt-6">
                <Link
                    href="/"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-violet-600"
                >
                    ← Volver al feed
                </Link>

                <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
                    <div
                        className={`relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl px-6 py-12 sm:min-h-[360px] ${product.bgClass}`}
                    >
                        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                            <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold text-white">
                                {product.brand}
                            </span>
                            <span className="rounded-full border border-zinc-900 bg-white px-3 py-1 text-xs font-semibold text-zinc-900">
                                {product.category}
                            </span>
                        </div>
                        <span className="select-none text-[clamp(5rem,18vw,9rem)] leading-none drop-shadow-sm">
                            {product.emoji}
                        </span>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
                                {product.name}
                            </h1>
                            <EstrellasConNota rating={product.rating} />
                            <p className="text-base leading-relaxed text-zinc-600">{product.description}</p>
                        </div>

                        <ProductBuyPanel price={product.price} />

                        <div className="grid gap-3 sm:grid-cols-3">
                            <div className="flex flex-col gap-2 rounded-xl border border-zinc-200 bg-zinc-50/80 px-4 py-3 text-center sm:text-left">
                                <IconoCamion className="mx-auto shrink-0 text-zinc-700 sm:mx-0" />
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Envío</p>
                                    <p className="text-sm font-medium text-zinc-800">Envío 24-48h</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 rounded-xl border border-zinc-200 bg-zinc-50/80 px-4 py-3 text-center sm:text-left">
                                <IconoDevolucion className="mx-auto shrink-0 text-zinc-700 sm:mx-0" />
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                                        Devolución
                                    </p>
                                    <p className="text-sm font-medium text-zinc-800">Devolución 30 días</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 rounded-xl border border-zinc-200 bg-zinc-50/80 px-4 py-3 text-center sm:text-left">
                                <IconoHoja className="mx-auto shrink-0 text-zinc-700 sm:mx-0" />
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                                        Natural
                                    </p>
                                    <p className="text-sm font-medium text-zinc-800">Sin OGM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
                    <h2 className="text-lg font-bold text-zinc-900">Descripción</h2>
                    <p className="mt-3 leading-relaxed text-zinc-600">{product.description}</p>
                </section>

                <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
                    <h2 className="text-lg font-bold text-zinc-900">Composición</h2>
                    {/* Cada producto tiene una lista distinta; por eso recorremos el array. */}
                    <ul className="mt-3 list-inside list-disc space-y-2 text-zinc-600">
                        {product.composition.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
                    <h2 className="text-lg font-bold text-zinc-900">Análisis nutricional</h2>
                    <ul className="mt-3 divide-y divide-zinc-100 rounded-xl border border-zinc-100">
                        {product.nutrition.map((n) => (
                            <li key={n.name} className="flex justify-between gap-4 px-4 py-3 text-zinc-600">
                                <span>{n.name}</span>
                                <span className="font-semibold text-zinc-900">{n.value}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
                    <h2 className="text-lg font-bold text-zinc-900">Uso recomendado</h2>
                    <p className="mt-3 leading-relaxed text-zinc-600">{product.usage}</p>
                </section>
            </div>
        </div>
    );
}
