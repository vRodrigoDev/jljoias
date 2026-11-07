"use client";

import Link from "next/link";
import { Search, User, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Header() {
  const cart = useCart() as unknown as Record<string, unknown>;
  const totalItems = typeof cart.totalItems === "number" ? cart.totalItems : 0;

  const handleOpenCart = () => {
    const fn = (cart["openCart"] ??
      cart["setIsOpen"] ??
      cart["toggleCart"] ??
      cart["setIsCartOpen"]) as ((val?: boolean) => void) | undefined;

    if (typeof fn === "function") {
      fn(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Menu de Categorias (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-wider uppercase text-stone-700">
          <Link href="/#vitrine" className="hover:text-stone-900 transition-colors">
            INÍCIO
          </Link>
          <Link
            href="/?categoria=Gargantilhas#vitrine"
            className="hover:text-stone-900 transition-colors"
          >
            CORRENTES
          </Link>
          <Link
            href="/?categoria=Pulseiras#vitrine"
            className="hover:text-stone-900 transition-colors"
          >
            PULSEIRAS
          </Link>
          <Link
            href="/?categoria=Anéis#vitrine"
            className="hover:text-stone-900 transition-colors"
          >
            ANÉIS
          </Link>
        </nav>

        {/* Logótipo Central */}
        <div className="flex-1 md:flex-initial text-center md:text-left">
          <Link href="/" className="inline-block">
            <span className="font-serif text-2xl tracking-widest text-[#1C1917] font-semibold">
              JL<span className="font-light tracking-normal">JOIAS</span>
            </span>
          </Link>
        </div>

        {/* Ações / Ícones da Direita */}
        <div className="flex items-center space-x-5 text-stone-700">
          <button
            type="button"
            aria-label="Pesquisar"
            className="hover:text-stone-950 transition-colors p-1"
          >
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>

          {/* Ícone Instagram nativo em SVG */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-stone-950 transition-colors p-1 flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 fill-none stroke-current stroke-[1.5]"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          <button
            type="button"
            aria-label="Minha Conta"
            className="hover:text-stone-950 transition-colors p-1 hidden sm:block"
          >
            <User className="w-5 h-5 stroke-[1.5]" />
          </button>

          {/* Botão da Sacola / Carrinho */}
          <button
            type="button"
            onClick={handleOpenCart}
            aria-label="Sacola de Compras"
            className="relative hover:text-stone-950 transition-colors p-1"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#3B194C] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}