"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, User, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Header() {
  const router = useRouter();
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

  const handleCategoryClick = (categoria?: string) => {
    if (!categoria) {
      router.push("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    router.push(`/?categoria=${encodeURIComponent(categoria)}`);

    setTimeout(() => {
      const vitrineElement = document.getElementById("vitrine");
      if (vitrineElement) {
        vitrineElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/60">
      {/* Linha Principal do Cabeçalho */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Menu de Categorias (Visível apenas em telas Médias/Grandes) */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-wider uppercase text-stone-700">
          <button
            type="button"
            onClick={() => handleCategoryClick()}
            className="hover:text-stone-900 transition-colors uppercase tracking-wider font-medium text-xs cursor-pointer"
          >
            INÍCIO
          </button>
          <button
            type="button"
            onClick={() => handleCategoryClick("Gargantilhas")}
            className="hover:text-stone-900 transition-colors uppercase tracking-wider font-medium text-xs cursor-pointer"
          >
            CORRENTES
          </button>
          <button
            type="button"
            onClick={() => handleCategoryClick("Pulseiras")}
            className="hover:text-stone-900 transition-colors uppercase tracking-wider font-medium text-xs cursor-pointer"
          >
            PULSEIRAS
          </button>
          <button
            type="button"
            onClick={() => handleCategoryClick("Anéis")}
            className="hover:text-stone-900 transition-colors uppercase tracking-wider font-medium text-xs cursor-pointer"
          >
            ANÉIS
          </button>
        </nav>

        {/* Logótipo */}
        <div className="flex-initial text-left">
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-block"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-widest text-[#1C1917] font-semibold">
              JL<span className="font-light tracking-normal">JOIAS</span>
            </span>
          </Link>
        </div>

        {/* Ações / Ícones da Direita */}
        <div className="flex items-center space-x-4 sm:space-x-5 text-stone-700">
          <button
            type="button"
            aria-label="Pesquisar"
            className="hover:text-stone-950 transition-colors p-1 cursor-pointer"
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
            className="hover:text-stone-950 transition-colors p-1 hidden sm:block cursor-pointer"
          >
            <User className="w-5 h-5 stroke-[1.5]" />
          </button>

          {/* Botão da Sacola / Carrinho */}
          <button
            type="button"
            onClick={handleOpenCart}
            aria-label="Sacola de Compras"
            className="relative hover:text-stone-950 transition-colors p-1 cursor-pointer"
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

      {/* Barra de Categorias Mobile (Exibida somente no celular e telas pequenas) */}
      <div className="md:hidden flex items-center space-x-6 overflow-x-auto px-4 py-2.5 border-t border-stone-200/50 no-scrollbar text-[11px] font-medium tracking-wider uppercase text-stone-600 bg-[#FAF8F5]">
        <button
          type="button"
          onClick={() => handleCategoryClick()}
          className="whitespace-nowrap hover:text-stone-900 transition-colors py-0.5 cursor-pointer"
        >
          INÍCIO
        </button>
        <button
          type="button"
          onClick={() => handleCategoryClick("Gargantilhas")}
          className="whitespace-nowrap hover:text-stone-900 transition-colors py-0.5 cursor-pointer"
        >
          CORRENTES
        </button>
        <button
          type="button"
          onClick={() => handleCategoryClick("Pulseiras")}
          className="whitespace-nowrap hover:text-stone-900 transition-colors py-0.5 cursor-pointer"
        >
          PULSEIRAS
        </button>
        <button
          type="button"
          onClick={() => handleCategoryClick("Anéis")}
          className="whitespace-nowrap hover:text-stone-900 transition-colors py-0.5 cursor-pointer"
        >
          ANÉIS
        </button>
      </div>
    </header>
  );
}