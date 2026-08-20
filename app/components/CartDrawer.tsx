"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export function CartDrawer() {
  const { cartItems, isCartOpen, closeCart, removeFromCart, subtotal, pixTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* OVERLAY ESCURO */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      {/* PAINEL LATERAL */}
      <div className="relative w-full max-w-md bg-white text-[#1A1A1A] h-full shadow-2xl flex flex-col justify-between z-10 border-l border-[#E5E7EB]">

        {/* CABEÇALHO */}
        <div className="p-6 border-b border-[#E5E7EB] flex items-center justify-between bg-[#FAFAFA]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#340C40]" />
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[#1A1A1A]">
              Seu Carrinho
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-gray-400 hover:text-[#340C40] transition-colors rounded-full hover:bg-gray-100 cursor-pointer"
            title="Fechar carrinho"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* LISTA DE PRODUTOS */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size || ""}`}
                className="flex gap-4 p-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-2xl relative shadow-sm"
              >
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white border border-[#E5E7EB] flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between pr-6">
                  <div>
                    <h3 className="text-xs font-semibold text-[#1A1A1A] line-clamp-2 leading-snug">
                      {item.name}
                    </h3>
                    {item.size && (
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider block mt-1">
                        TAM: {item.size}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-bold text-[#340C40]">
                      R$ {item.price.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-gray-500 font-medium">
                      Qtd: {item.quantity}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id, item.size)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors p-1.5 rounded-full hover:bg-red-50 cursor-pointer"
                  title="Remover produto"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <ShoppingBag className="w-12 h-12 text-gray-300 mb-3" />
              <p className="text-sm font-medium text-gray-600">Seu carrinho está vazio.</p>
              <p className="text-xs text-gray-400 mt-1">Navegue pelas joias e adicione suas peças favoritas!</p>
            </div>
          )}
        </div>

        {/* RODAPÉ */}
        <div className="p-6 border-t border-[#E5E7EB] bg-[#FAFAFA] space-y-4">
          <div className="space-y-2 text-xs">
            <div className="flex justify-between text-gray-600 font-medium">
              <span>SUBTOTAL:</span>
              <span className="text-[#1A1A1A] font-bold">R$ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-emerald-700 font-bold bg-emerald-50 p-2.5 rounded-xl border border-emerald-100">
              <span>TOTAL NO PIX (-5%):</span>
              <span>R$ {pixTotal.toFixed(2)}</span>
            </div>
          </div>

          {cartItems.length > 0 ? (
            <Link
              href="/checkout"
              onClick={closeCart}
              className="w-full bg-[#340C40] hover:bg-[#4A125C] text-white font-semibold text-xs uppercase tracking-widest py-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
            >
              Finalizar Compra <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <button
              disabled
              className="w-full bg-gray-200 text-gray-400 font-semibold text-xs uppercase tracking-widest py-4 rounded-full flex items-center justify-center gap-2 cursor-not-allowed"
            >
              Carrinho Vazio
            </button>
          )}

          <button
            onClick={closeCart}
            className="w-full text-center text-xs text-gray-500 hover:text-[#340C40] uppercase tracking-widest font-medium py-1 transition-colors cursor-pointer"
          >
            Continuar Comprando
          </button>
        </div>

      </div>
    </div>
  );
}