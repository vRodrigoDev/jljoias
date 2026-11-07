"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS } from "./products";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { ProductCard } from "./components/ProductCard";
import Link from "next/link";

function VitrineContent() {
  const searchParams = useSearchParams();
  const categoriaAtiva = searchParams.get("categoria");

  // Filtro de produtos
  const produtosExibidos = !categoriaAtiva
    ? PRODUCTS
    : PRODUCTS.filter((p) => {
        const cat = p.category.toLowerCase();
        const param = categoriaAtiva.toLowerCase();

        if (param === "correntes" || param === "gargantilhas") {
          return cat === "gargantilhas" || cat === "correntes" || cat === "escapulários";
        }

        return cat === param;
      });

  const tituloSecao = !categoriaAtiva
    ? "Nossas Peças"
    : categoriaAtiva.toLowerCase() === "gargantilhas" || categoriaAtiva.toLowerCase() === "correntes"
    ? "Correntes & Gargantilhas"
    : categoriaAtiva;

  return (
    <section id="vitrine" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-stone-200">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-[#9C7A4A] font-semibold block">
            CATÁLOGO
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#1C1917]">
            {tituloSecao}
          </h2>
        </div>

        {/* Botão de limpar filtro e ver todas as peças */}
        {categoriaAtiva && (
          <Link
            href="/#vitrine"
            className="text-xs text-stone-500 hover:text-stone-800 underline underline-offset-4 mt-2 sm:mt-0 transition-colors"
          >
            Ver todas as peças ({PRODUCTS.length})
          </Link>
        )}
      </div>

      {/* Grelha de Produtos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {produtosExibidos.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {produtosExibidos.length === 0 && (
        <div className="text-center py-16">
          <p className="text-stone-500 text-sm">
            Nenhuma peça encontrada nesta categoria no momento.
          </p>
        </div>
      )}
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* 1. Cabeçalho fixo no topo com os botões e categorias */}
      <Header />

      {/* 2. Banner com o carrossel */}
      <HeroBanner />

      {/* 3. Vitrine com filtragem dinâmica */}
      <Suspense fallback={<div className="py-12 text-center text-stone-400">A carregar catálogo...</div>}>
        <VitrineContent />
      </Suspense>
    </main>
  );
}