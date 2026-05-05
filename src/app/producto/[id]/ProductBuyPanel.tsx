'use client';

import { useState } from 'react';

type ProductBuyPanelProps = {
    price: number;
};

export default function ProductBuyPanel({ price }: ProductBuyPanelProps) {
    const [qty, setQty] = useState(1);

    return (
        <div className="space-y-5">
            <p className="text-3xl font-bold tracking-tight text-zinc-900">
                ${price.toFixed(2)} <span className="text-lg font-semibold text-zinc-600">/ bolsa</span>
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="inline-flex items-center rounded-xl border border-zinc-200 bg-white shadow-sm">
                    <button
                        type="button"
                        className="flex h-11 w-11 items-center justify-center rounded-l-xl text-lg font-medium text-zinc-600 transition hover:bg-zinc-50"
                        onClick={() => setQty((q) => Math.max(1, q - 1))}
                        aria-label="Reducir cantidad"
                    >
                        −
                    </button>
                    <span className="min-w-[2.5rem] text-center text-base font-semibold text-zinc-900">{qty}</span>
                    <button
                        type="button"
                        className="flex h-11 w-11 items-center justify-center rounded-r-xl text-lg font-medium text-zinc-600 transition hover:bg-zinc-50"
                        onClick={() => setQty((q) => q + 1)}
                        aria-label="Aumentar cantidad"
                    >
                        +
                    </button>
                </div>

                <button
                    type="button"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-violet-700 sm:flex-none sm:min-w-[240px]"
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path
                            d="M3 3h2l.4 2M7 13h10l3-7H6.4M7 13l-1.2 6H19M7 13H5.2M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Añadir al carrito
                </button>
            </div>
        </div>
    );
}
