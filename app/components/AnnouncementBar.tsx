"use client";

import { Truck, ShieldCheck } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-[var(--color-brand-black)] text-[var(--color-brand-gold)] text-xs py-2 px-4 border-b border-[var(--color-brand-gold)]/20 uppercase tracking-widest">
      <div className="container mx-auto flex justify-between items-center text-center sm:text-left">
        <span className="flex items-center gap-2 justify-center w-full sm:w-auto">
          <Truck className="w-4 h-4" /> Frete Grátis acima de R$ 399 para todo o Brasil
        </span>
        <span className="hidden sm:flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" /> Garantia Vitalícia no Banho 18k
        </span>
      </div>
    </div>
  );
}