"use client";

import { Truck, ShieldCheck } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-[#FAFAFA] text-[#1A1A1A] text-[11px] py-2 px-4 border-b border-[#E5E7EB] uppercase tracking-widest font-medium">
      <div className="container mx-auto flex justify-between items-center text-center sm:text-left">
        <span className="flex items-center gap-2 justify-center w-full sm:w-auto text-gray-700">
          <Truck className="w-3.5 h-3.5 text-[#340C40]" /> Frete Grátis acima de R$ 399 para todo o Brasil
        </span>
        <span className="hidden sm:flex items-center gap-2 text-gray-700">
          <ShieldCheck className="w-3.5 h-3.5 text-[#340C40]" /> Garantia Vitalícia no Banho 18k
        </span>
      </div>
    </div>
  );
}