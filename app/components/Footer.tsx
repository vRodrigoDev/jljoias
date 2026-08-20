"use client";

import Link from "next/link";
import { MessageCircle, Shield, RefreshCw, Lock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#FAFAFA] text-[#6B7280] border-t border-[#E5E7EB] pt-16 pb-8">
      {/* 1. SEÇÃO DE CONFIANÇA E GARANTIA */}
      <div className="container mx-auto px-6 pb-12 border-b border-[#E5E7EB]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

          <div className="flex items-center gap-4 justify-center md:justify-start bg-white p-5 rounded-2xl border border-[#E5E7EB] shadow-sm">
            <div className="p-3 bg-[#F5EFF8] text-[#340C40] rounded-xl">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[#1A1A1A] text-sm font-semibold uppercase tracking-wider">Garantia Vitalícia</h4>
              <p className="text-xs text-[#6B7280] mt-0.5">Proteção total no banho de ouro 18k.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start bg-white p-5 rounded-2xl border border-[#E5E7EB] shadow-sm">
            <div className="p-3 bg-[#F5EFF8] text-[#340C40] rounded-xl">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[#1A1A1A] text-sm font-semibold uppercase tracking-wider">Primeira Troca Grátis</h4>
              <p className="text-xs text-[#6B7280] mt-0.5">Até 30 dias para trocar sem custo.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start bg-white p-5 rounded-2xl border border-[#E5E7EB] shadow-sm">
            <div className="p-3 bg-[#F5EFF8] text-[#340C40] rounded-xl">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[#1A1A1A] text-sm font-semibold uppercase tracking-wider">Pagamento Criptografado</h4>
              <p className="text-xs text-[#6B7280] mt-0.5">Ambiente 100% seguro via Mercado Pago.</p>
            </div>
          </div>

        </div>
      </div>

      {/* 2. LINKS NAVEGAÇÃO E INSTITUCIONAL */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-xs">

        {/* Coluna 1: Marca */}
        <div>
          <span className="text-xl font-serif font-bold tracking-widest text-[#1A1A1A] block mb-4">
            JL<span className="text-[#340C40] font-light">JOIAS</span>
          </span>
          <p className="text-[#6B7280] leading-relaxed mb-4 font-light">
            Especialistas em joias de luxo banhadas a ouro 18k. Design contemporâneo, elegância e sofisticação para revelar sua personalidade.
          </p>
          <a
            href="https://wa.me/55SEUNUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#340C40] hover:text-[#4A125C] font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-green-600" /> Atendimento VIP no WhatsApp
          </a>
        </div>

        {/* Coluna 2: Categorias */}
        <div>
          <h4 className="text-[#1A1A1A] uppercase tracking-widest font-semibold mb-4 text-xs">Coleções</h4>
          <ul className="space-y-2.5 font-medium">
            <li><Link href="/categoria/correntes" className="hover:text-[#340C40] transition-colors">Correntes & Colares</Link></li>
            <li><Link href="/categoria/pulseiras" className="hover:text-[#340C40] transition-colors">Pulseiras Exclusivas</Link></li>
            <li><Link href="/categoria/aneis" className="hover:text-[#340C40] transition-colors">Anéis Selecionados</Link></li>
            <li><Link href="#mais-vendidos" className="hover:text-[#340C40] transition-colors">Mais Vendidos</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Suporte & Ajuda */}
        <div>
          <h4 className="text-[#1A1A1A] uppercase tracking-widest font-semibold mb-4 text-xs">Atendimento</h4>
          <ul className="space-y-2.5 font-medium">
            <li><Link href="/faq" className="hover:text-[#340C40] transition-colors">Perguntas Frequentes (FAQ)</Link></li>
            <li><Link href="/trocas" className="hover:text-[#340C40] transition-colors">Política de Trocas e Devoluções</Link></li>
            <li><Link href="/garantia" className="hover:text-[#340C40] transition-colors">Termos de Garantia</Link></li>
            <li><Link href="/contato" className="hover:text-[#340C40] transition-colors">Fale Conosco</Link></li>
          </ul>
        </div>

        {/* Coluna 4: Redes & Pagamento */}
        <div>
          <h4 className="text-[#1A1A1A] uppercase tracking-widest font-semibold mb-4 text-xs">Siga a Marca</h4>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-[#340C40] transition-colors mb-6 font-medium"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @jljoias_oficial
          </a>

          <h4 className="text-[#1A1A1A] uppercase tracking-widest font-semibold mb-2 text-xs">Formas de Pagamento</h4>
          <span className="text-[#6B7280] text-[11px] block leading-relaxed">PIX com 5% OFF, Cartão em até 10x sem juros, Mercado Pago.</span>
        </div>

      </div>

      {/* 3. DIREITOS AUTORAIS */}
      <div className="container mx-auto px-6 pt-8 border-t border-[#E5E7EB] text-center text-[11px] text-[#6B7280]">
        <p>© {new Date().getFullYear()} JLJoias. Todos os direitos reservados. Fotos meramente ilustrativas.</p>
      </div>
    </footer>
  );
}