"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, MessageCircle } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  // Formatação para Moeda Brasileira (R$)
  const formattedPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const installmentValue = (price / 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  // Criação do link automático com mensagem personalizada pro WhatsApp
  const whatsappMsg = encodeURIComponent(
    `Olá!\nTenho interesse nesta joia:\n\nProduto: ${name}\nPreço: ${formattedPrice}\n\nGostaria de finalizar a compra.`
  );
  const whatsappUrl = `https://wa.me/55SEUNUMERO?text=${whatsappMsg}`;

  return (
    <div className="group bg-[var(--color-brand-gray)] border border-white/5 rounded-none overflow-hidden transition-all duration-300 hover:border-[var(--color-brand-gold)]/40 flex flex-col justify-between">

      {/* Área da Imagem da Joia */}
      <div className="relative aspect-square w-full bg-[var(--color-brand-black)] overflow-hidden">
        <span className="absolute top-3 left-3 z-10 bg-[var(--color-brand-black)]/80 backdrop-blur-md text-[var(--color-brand-gold)] border border-[var(--color-brand-gold)]/30 text-[10px] uppercase tracking-widest px-2.5 py-1">
          Ouro 18K
        </span>

        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Informações da Joia */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1">
            {category}
          </span>

          <h3 className="text-white font-serif text-base tracking-wide line-clamp-1 group-hover:text-[var(--color-brand-gold)] transition-colors">
            {name}
          </h3>

          <div className="mt-3">
            <span className="text-[var(--color-brand-gold)] text-lg font-bold tracking-tight block">
              {formattedPrice}
            </span>
            <span className="text-gray-400 text-xs">
              ou 10x de <strong className="text-white">{installmentValue}</strong> sem juros
            </span>
          </div>
        </div>

        {/* Botões Duplos de Venda */}
        <div className="mt-6 flex flex-col gap-2">
          <Link
            href={`/produto/${id}`}
            className="w-full bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-hover)] text-[var(--color-brand-black)] font-bold text-xs uppercase tracking-widest py-3 flex items-center justify-center gap-2 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" /> Comprar
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border border-white/10 hover:border-green-500/50 text-gray-300 hover:text-green-400 text-xs uppercase tracking-widest py-2.5 flex items-center justify-center gap-2 transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 text-green-400" /> WhatsApp
          </a>
        </div>
      </div>

    </div>
  );
}