import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const linkClass = 'transition hover:text-violet-600';

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-100/80 bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
                <Link href="/" className="flex items-center gap-2 text-zinc-900">
                    <span className="text-xl leading-none text-violet-600" aria-hidden>
                        🐾
                    </span>
                    <span className="text-xl font-bold tracking-tight">PetFood</span>
                </Link>

                <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-zinc-600">
                    <Link href="/" className={linkClass}>
                        Inicio
                    </Link>
                    <Link href="/perros" className={linkClass}>
                        Perros
                    </Link>
                    <Link href="/gatos" className={linkClass}>
                        Gatos
                    </Link>
                    <Link href="/ofertas" className={linkClass}>
                        Ofertas
                    </Link>
                </nav>

                <label className="relative flex min-w-[200px] max-w-full flex-1 items-center rounded-full border border-zinc-200 bg-white pl-3 pr-2 shadow-sm sm:max-w-md md:min-w-[260px] md:flex-none">
                    <Image src="/lupa.png" alt="" width={18} height={18} className="shrink-0 opacity-50" />
                    <input
                        type="search"
                        placeholder="Buscar alimento..."
                        className="min-w-0 flex-1 border-0 bg-transparent py-2 pl-2 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-0"
                    />
                </label>

                <button
                    type="button"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:border-violet-200 hover:bg-violet-50"
                    aria-label="Carrito de compras"
                >
                    <Image src="/carrito-de-compras.png" alt="" width={22} height={22} />
                </button>
            </div>
        </header>
    );
}
