"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { Header } from "../../components/Header";
import { AnnouncementBar } from "../../components/AnnouncementBar";
import { Footer } from "../../components/Footer";
import { PRODUCTS } from "../../products";

export default function ProductDetailPage() {
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : Array.isArray(params?.id) ? params.id[0] : "";

  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  if (!product) {
    return notFound();
  }

  const mensagemWhatsApp = encodeURIComponent(
    `Olá! Tenho interesse na peça *${product.name}* (Ref: ${product.code}) no valor de R$ ${product.price.toFixed(2).replace(".", ",")}. Poderia me passar mais detalhes?`
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <AnnouncementBar />
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="mb-6">
          <Link
            href="/"
            className="text-xs uppercase tracking-wider text-stone-500 hover:text-stone-900 transition-colors"
          >
            ← Voltar para o início
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="relative aspect-square w-full bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm flex items-center justify-center">
            {product.badge && (
              <span className="absolute top-4 left-4 z-10 text-[11px] uppercase font-bold tracking-wider bg-[#3B194C] text-white px-3 py-1 rounded-full">
                {product.badge}
              </span>
            )}

            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover p-6"
              priority
            />
          </div>

          <div className="flex flex-col space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#9C7A4A] font-semibold">
                {product.category} • Ref: {product.code}
              </span>
              <h1 className="text-2xl sm:text-3xl font-serif text-[#1C1917] mt-2 font-normal leading-snug">
                {product.name}
              </h1>
              <p className="mt-4 text-3xl font-bold text-[#1C1917]">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </p>
              <p className="text-xs text-stone-500 mt-1">
                Em até 12x no cartão ou à vista no Pix
              </p>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <h2 className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-2">
                Descrição da Peça
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={`https://wa.me/5583988261180?text=${mensagemWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block bg-[#2D1B36] hover:bg-[#3D2548] text-white py-4 px-6 rounded-2xl font-medium text-sm transition-all shadow-md hover:shadow-lg"
              >
                Comprar pelo WhatsApp
              </a>

              <Link
                href="/"
                className="w-full text-center block border border-stone-300 hover:bg-stone-100 text-stone-800 py-3 px-6 rounded-2xl text-xs font-medium transition-colors"
              >
                Continuar Vendo Peças
              </Link>
            </div>

            <div className="bg-[#F4F1EA] p-4 rounded-2xl text-xs text-stone-600 space-y-1">
              <p className="font-semibold text-stone-800">Garantia Rommanel:</p>
              <p>• Joia folheada a ouro 18k antialérgica com certificado de garantia de 1 ano.</p>
              <p>• Entregas em João Pessoa e região, e envios para todo o Brasil.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}