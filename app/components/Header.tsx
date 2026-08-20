"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingBag, User, Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CartDrawer } from "./CartDrawer";
import { useCart } from "../context/CartContext";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { totalItems, openCart } = useCart();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
    setIsMobileMenuOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Buscando por: ${searchQuery}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/90 border-b border-[var(--color-brand-border,#E5E7EB)] text-[var(--color-brand-dark,#1A1A1A)] transition-all">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">

          {/* Menu Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[var(--color-brand-dark,#1A1A1A)] hover:text-[var(--color-brand-purple,#340C40)] transition-colors p-1 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-gray-600">
            <Link
              href="/"
              onClick={handleHomeClick}
              className="hover:text-[var(--color-brand-purple,#340C40)] transition-colors cursor-pointer"
            >
              Início
            </Link>
            <Link href="/categoria/correntes" className="hover:text-[var(--color-brand-purple,#340C40)] transition-colors">
              Correntes
            </Link>
            <Link href="/categoria/pulseiras" className="hover:text-[var(--color-brand-purple,#340C40)] transition-colors">
              Pulseiras
            </Link>
            <Link href="/categoria/aneis" className="hover:text-[var(--color-brand-purple,#340C40)] transition-colors">
              Anéis
            </Link>
          </nav>

          {/* Logo Centralizada */}
          <Link
            href="/"
            onClick={handleHomeClick}
            className="text-2xl font-serif font-bold tracking-widest text-[var(--color-brand-dark,#1A1A1A)] hover:opacity-90 transition-opacity cursor-pointer"
          >
            JL<span className="text-[var(--color-brand-purple,#340C40)] font-light">JOIAS</span>
          </Link>

          {/* Ações Direita */}
          <div className="flex items-center gap-6 text-gray-700">
            {/* Lupa de Busca */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              title="Buscar"
              className="hover:text-[var(--color-brand-purple,#340C40)] transition-colors p-1 cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Instagram Oficial */}
            <a
              href="https://www.instagram.com/jljoiasjpa_reserva/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block hover:text-[var(--color-brand-purple,#340C40)] transition-colors p-1"
              title="Instagram Oficial @jljoiasjpa_reserva"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Minha Conta */}
            <Link href="/login" className="hidden sm:block hover:text-[var(--color-brand-purple,#340C40)] transition-colors">
              <User className="w-5 h-5" />
            </Link>

            {/* Carrinho com contador */}
            <button
              onClick={openCart}
              className="relative hover:text-[var(--color-brand-purple,#340C40)] transition-colors cursor-pointer p-1"
              title="Abrir Carrinho"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[var(--color-brand-purple,#340C40)] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Barra de Busca Expansível */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-[#FAFAFA] border-t border-[var(--color-brand-border,#E5E7EB)] px-6 py-4"
            >
              <form onSubmit={handleSearchSubmit} className="container mx-auto flex items-center gap-3">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="O que você está procurando? (Ex: Corrente Grumet, Anel Onyx...)"
                  className="w-full bg-transparent text-xs text-[#1A1A1A] placeholder-gray-400 focus:outline-none"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="text-xs text-gray-400 hover:text-[#340C40] uppercase font-semibold cursor-pointer"
                >
                  Fechar
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white border-b border-[var(--color-brand-border,#E5E7EB)] overflow-hidden shadow-md"
            >
              <div className="px-6 py-6">
                <nav className="flex flex-col gap-4 text-xs font-semibold uppercase tracking-widest text-[#1A1A1A]">
                  <Link
                    href="/"
                    onClick={handleHomeClick}
                    className="py-2 border-b border-gray-100 hover:text-[var(--color-brand-purple,#340C40)] transition-colors cursor-pointer"
                  >
                    Início
                  </Link>
                  <Link
                    href="/categoria/correntes"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-2 border-b border-gray-100 hover:text-[var(--color-brand-purple,#340C40)] transition-colors"
                  >
                    Correntes
                  </Link>
                  <Link
                    href="/categoria/pulseiras"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-2 border-b border-gray-100 hover:text-[var(--color-brand-purple,#340C40)] transition-colors"
                  >
                    Pulseiras
                  </Link>
                  <Link
                    href="/categoria/aneis"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-2 border-b border-gray-100 hover:text-[var(--color-brand-purple,#340C40)] transition-colors"
                  >
                    Anéis
                  </Link>
                  <a
                    href="https://www.instagram.com/jljoiasjpa_reserva/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 text-[var(--color-brand-purple,#340C40)] font-bold flex items-center justify-between"
                  >
                    Seguir no Instagram <span>→</span>
                  </a>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Gaveta do Carrinho Global */}
      <CartDrawer />
    </>
  );
}