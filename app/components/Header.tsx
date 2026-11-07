"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Header() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false);

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
    }, 100);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Botão Hambúrguer Mobile */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir Menu de Navegação"
              className="p-1.5 text-stone-700 hover:text-stone-950 transition-colors cursor-pointer"
            >
              <Menu className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Menu Desktop */}
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

          {/* Logo Central */}
          <div className="flex-initial text-center md:text-left">
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

          {/* Ações da Direita */}
          <div className="flex items-center space-x-3 sm:space-x-5 text-stone-700">
            <button
              type="button"
              aria-label="Pesquisar"
              className="hover:text-stone-950 transition-colors p-1 cursor-pointer"
            >
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-stone-950 transition-colors p-1 hidden sm:flex items-center justify-center"
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
      </header>

      {/* Menu Gaveta Lateral Mobile */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 left-0 bottom-0 w-[280px] bg-[#FAF8F5] z-50 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-stone-200">
            <span className="font-serif text-xl tracking-widest text-[#1C1917] font-semibold">
              JL<span className="font-light tracking-normal">JOIAS</span>
            </span>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Fechar Menu"
              className="p-1 text-stone-500 hover:text-stone-900 transition-colors"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col space-y-6 text-sm font-medium tracking-wider uppercase text-stone-800">
            <button
              type="button"
              onClick={() => handleCategoryClick()}
              className="text-left py-1 hover:text-[#9C7A4A] transition-colors"
            >
              INÍCIO
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick("Gargantilhas")}
              className="text-left py-1 hover:text-[#9C7A4A] transition-colors"
            >
              CORRENTES & GARGANTILHAS
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick("Pulseiras")}
              className="text-left py-1 hover:text-[#9C7A4A] transition-colors"
            >
              PULSEIRAS
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick("Anéis")}
              className="text-left py-1 hover:text-[#9C7A4A] transition-colors"
            >
              ANÉIS
            </button>
          </nav>
        </div>

        <div className="pt-6 border-t border-stone-200">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-stone-600 hover:text-stone-900 text-xs tracking-wider uppercase font-medium transition-colors"
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
            <span>Seguir no Instagram</span>
          </a>
        </div>
      </aside>
    </>
  );
}