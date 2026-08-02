"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ShoppingBag, Trash2, ArrowRight } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  image: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  // Produto fictício no carrinho para testar a interface
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Corrente Grumet 10mm Dupla Camada Ouro 18k",
      price: 489.00,
      size: "60cm",
      quantity: 1,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
    },
  ]);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Fundo escuro com transparência */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[var(--color-brand-black)] border-l border-white/10 text-white flex flex-col justify-between shadow-2xl">

          {/* TOPO DO CARRINHO */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[var(--color-brand-gold)]">
              <ShoppingBag className="w-5 h-5" />
              <h2 className="text-sm uppercase tracking-widest font-bold">Seu Carrinho</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* LISTA DE PRODUTOS */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <ShoppingBag className="w-12 h-12 mx-auto mb-4 opacity-30 text-[var(--color-brand-gold)]" />
                <p className="text-xs uppercase tracking-widest">Seu carrinho está vazio.</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 bg-[var(--color-brand-gray)] border border-white/5">
                  <div className="relative w-20 h-20 bg-black shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-xs font-serif text-white line-clamp-2">{item.name}</h4>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[10px] text-gray-400 uppercase block mt-1">Tam: {item.size}</span>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-[var(--color-brand-gold)] font-bold">
                        R$ {item.price.toFixed(2)}
                      </span>
                      <span className="text-[10px] text-gray-400">Qtd: {item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* RODAPÉ DO CARRINHO COM LINK PARA O CHECKOUT */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-black/50 space-y-4">
              <div className="flex justify-between text-xs uppercase tracking-widest">
                <span className="text-gray-400">Subtotal:</span>
                <span className="text-white font-bold">R$ {total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-xs uppercase tracking-widest text-green-400">
                <span>Total no PIX (-5%):</span>
                <span className="font-bold">R$ {(total * 0.95).toFixed(2)}</span>
              </div>

              <Link
                href="/checkout"
                onClick={onClose}
                className="w-full bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-hover)] text-[var(--color-brand-black)] py-4 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg shadow-[var(--color-brand-gold)]/10 text-center block"
              >
                Finalizar Compra <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={onClose}
                className="w-full text-center text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
              >
                Continuar Comprando
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}