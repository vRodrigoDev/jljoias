"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnnouncementBar } from "../../components/AnnouncementBar";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CartDrawer } from "../../components/CartDrawer";
import { ShoppingBag, MessageCircle, ShieldCheck, Truck, ArrowLeft } from "lucide-react";

export default function ProductDetailPage() {
  const [selectedSize, setSelectedSize] = useState("60cm");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const product = {
    id: "1",
    name: "Corrente Grumet 10mm Dupla Camada Ouro 18k",
    price: 489.00,
    pixDiscountPrice: 464.55,
    description: "Corrente masculina modelo Grumet confeccionada com banho duplo de Ouro 18k e camada de verniz protetor antialérgico italiano. Peça robusta com fecho gaveta de alta segurança.",
    sizes: ["50cm", "60cm", "70cm"],
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000",
    ]
  };

  const [activeImage, setActiveImage] = useState(product.images[0]);

  const whatsappMsg = encodeURIComponent(
    `Olá!\nTenho interesse em finalizar a compra da seguinte joia:\n\n` +
    `Produto: ${product.name}\n` +
    `Tamanho: ${selectedSize}\n` +
    `Valor: R$ ${product.price.toFixed(2)}\n\n` +
    `Poderia me auxiliar com o pedido?`
  );

  return (
    <main className="min-h-screen bg-[var(--color-brand-black)] text-white relative">
      <AnnouncementBar />
      <Header />

      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-[var(--color-brand-gold)] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar para a loja
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* GALERIA */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`relative w-20 h-20 border transition-all ${
                    activeImage === img
                      ? "border-[var(--color-brand-gold)]"
                      : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>

            <div className="relative aspect-square w-full bg-[var(--color-brand-gray)] border border-white/5 overflow-hidden">
              <Image
                src={activeImage}
                alt={product.name}
                fill
                priority
                className="object-cover transition-all duration-500 hover:scale-110 cursor-zoom-in"
              />
            </div>
          </div>

          {/* DETALHES */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs text-[var(--color-brand-gold)] uppercase tracking-[0.2em] font-semibold block mb-2">
                Banho Triplo de Ouro 18K
              </span>

              <h1 className="text-2xl sm:text-3xl font-serif text-white tracking-wide mb-4">
                {product.name}
              </h1>

              <div className="p-4 bg-[var(--color-brand-gray)] border border-white/5 mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-[var(--color-brand-gold)]">
                    R$ {product.pixDiscountPrice.toFixed(2)}
                  </span>
                  <span className="text-xs text-green-400 uppercase tracking-wider font-semibold">
                    No PIX (5% OFF)
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  ou R$ {product.price.toFixed(2)} em até <strong className="text-white">10x de R$ {(product.price / 10).toFixed(2)}</strong> sem juros
                </p>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="mb-6">
                <label className="text-xs uppercase tracking-widest text-gray-400 block mb-3">
                  Tamanho da Corrente:
                </label>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-5 py-2.5 text-xs font-semibold uppercase transition-all ${
                        selectedSize === size
                          ? "bg-[var(--color-brand-gold)] text-[var(--color-brand-black)]"
                          : "border border-white/20 text-gray-300 hover:border-[var(--color-brand-gold)]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3 mt-6">
              {/* BOTÃO QUE ABRE O CARRINHO */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="w-full bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-hover)] text-[var(--color-brand-black)] font-bold text-xs uppercase tracking-widest py-4 flex items-center justify-center gap-2 transition-all shadow-lg shadow-[var(--color-brand-gold)]/10 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" /> Comprar Agora
              </button>

              <a
                href={`https://wa.me/55SEUNUMERO?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-green-500/50 hover:bg-green-500/10 text-green-400 text-xs uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4" /> Finalizar Pedido pelo WhatsApp
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[var(--color-brand-gold)]" />
                <span>Garantia Vitalícia no Banho</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[var(--color-brand-gold)]" />
                <span>Frete Seguro com Rastreio</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      <Footer />

      {/* DRAWER DO CARRINHO */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </main>
  );
}