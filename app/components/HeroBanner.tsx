"use client";

import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroBanner() {
  return (
    <section className="relative h-[85vh] min-h-[550px] w-full bg-[var(--color-brand-black)] flex items-center justify-center overflow-hidden">
      {/* Imagem de Fundo Elegante */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611591475141-860322384f67?auto=format&fit=crop&q=80&w=2000')`
        }}
      />

      {/* Degradê de sobreposição para o texto ter leitura perfeita */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-black)] via-[var(--color-brand-black)]/40 to-transparent" />

      {/* Conteúdo do Banner */}
      <div className="relative container mx-auto px-4 text-center z-10 flex flex-col items-center">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[var(--color-brand-gold)] text-xs sm:text-sm uppercase tracking-[0.3em] mb-4 font-semibold"
        >
          Coleção Exclusiva Banhar a Ouro 18k
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif text-white font-light tracking-tight max-w-4xl leading-tight mb-6"
        >
          Elegância que transmite <span className="italic text-[var(--color-brand-gold)] font-normal">presença.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-300 text-sm sm:text-base font-light max-w-xl mb-10 tracking-wide"
        >
          Joias masculinas banhadas a ouro com qualidade premium, acabamento impecável e design contemporâneo.
        </motion.p>

        {/* Botões Duplos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            href="#mais-vendidos"
            className="bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-hover)] text-[var(--color-brand-black)] px-8 py-4 uppercase text-xs tracking-widest font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-[var(--color-brand-gold)]/10"
          >
            Comprar Agora <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://wa.me/55SEUNUMERO?text=Olá!%20Gostaria%20de%20atendimento%20VIP%20para%20escolher%20minha%20joia."
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 hover:border-[var(--color-brand-gold)] text-white hover:text-[var(--color-brand-gold)] px-8 py-4 uppercase text-xs tracking-widest font-semibold flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm"
          >
            <MessageCircle className="w-4 h-4 text-green-400" /> Falar no WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
}