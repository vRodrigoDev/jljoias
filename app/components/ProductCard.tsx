"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "../context/CartContext";

export interface ProductProps {
  id?: string;
  name?: string;
  price?: number;
  image?: string;
  category?: string;
  product?: {
    id: string;
    name: string;
    price: number;
    image: string;
    category?: string;
  };
}

export function ProductCard(props: ProductProps) {
  const { addToCart } = useCart();

  // Suporta tanto props diretas quanto <ProductCard product={item} />
  const id = props.product?.id || props.id || "1";
  const name = props.product?.name || props.name || "Joia JLJoias";
  const price = props.product?.price || props.price || 0;
  const image =
    props.product?.image ||
    props.image ||
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000";
  const category = props.product?.category || props.category || "Coleção Exclusiva";

  const handleBuy = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id,
      name,
      price,
      image,
      quantity: 1,
    });
  };

  const whatsappMsg = encodeURIComponent(
    `Olá! Tenho interesse em comprar a peça: ${name} (R$ ${price.toFixed(2)}).`
  );

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group h-full">
      <div>
        {/* Link para o detalhe da peça */}
        <Link href={`/produto/${id}`} className="block relative aspect-square overflow-hidden bg-gray-50">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        <div className="p-5">
          <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-1">
            {category}
          </span>
          <Link href={`/produto/${id}`}>
            <h3 className="text-sm font-semibold text-[#1A1A1A] line-clamp-2 hover:text-[#340C40] transition-colors leading-snug">
              {name}
            </h3>
          </Link>
          <div className="mt-3">
            <span className="text-lg font-bold text-[#340C40] block">
              R$ {price.toFixed(2)}
            </span>
            <span className="text-[11px] text-gray-400">
              ou 10x de R$ {(price / 10).toFixed(2)} sem juros
            </span>
          </div>
        </div>
      </div>

      {/* Botões */}
      <div className="p-5 pt-0 space-y-2">
        <button
          type="button"
          onClick={handleBuy}
          className="w-full bg-[#340C40] hover:bg-[#4A125C] text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4" /> Comprar
        </button>

        <a
          href={`https://wa.me/55SEUNUMERO?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-white border border-gray-200 hover:border-emerald-500 text-gray-700 hover:text-emerald-700 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" /> WhatsApp
        </a>
      </div>
    </div>
  );
}