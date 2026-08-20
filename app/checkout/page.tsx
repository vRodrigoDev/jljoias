"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lock, ArrowLeft, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    email: "",
    phone: "",
    cep: "",
    address: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const item = {
    name: "Corrente Grumet 10mm Dupla Camada Ouro 18k",
    size: "60CM",
    price: 489.0,
    discountPix: 24.45,
    totalPix: 464.55,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=300",
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] font-sans pb-16">

      {/* CABEÇALHO DO CHECKOUT */}
      <header className="bg-white border-b border-[#E5E7EB] py-5 px-6 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-serif font-bold tracking-widest text-[#1A1A1A]">
            JL<span className="text-[#340C40] font-light">JOIAS</span>
          </Link>

          <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 text-xs font-semibold">
            <Lock className="w-3.5 h-3.5" />
            <span>AMBIENTE 100% CRIPTOGRAFADO</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">

        {/* BOTÃO VOLTAR */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 hover:text-[#340C40] mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao produto
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* FORMULÁRIO DE ENTREGA (7 Colunas) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E7EB] shadow-sm">
            <h2 className="text-lg font-serif font-light text-[#1A1A1A] mb-6 pb-4 border-b border-[#E5E7EB] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#F5EFF8] text-[#340C40] text-xs font-bold flex items-center justify-center">1</span>
              Dados para Entrega
            </h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Nome Completo *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl px-4 py-3 text-xs text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#340C40] focus:ring-1 focus:ring-[#340C40] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">CPF *</label>
                  <input
                    type="text"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                    placeholder="000.000.000-00"
                    className="w-full bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl px-4 py-3 text-xs text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#340C40] focus:ring-1 focus:ring-[#340C40] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">E-mail para confirmação *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu.email@exemplo.com"
                    className="w-full bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl px-4 py-3 text-xs text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#340C40] focus:ring-1 focus:ring-[#340C40] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">WhatsApp com DDD *</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 90000-0000"
                    className="w-full bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl px-4 py-3 text-xs text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#340C40] focus:ring-1 focus:ring-[#340C40] transition-all"
                  />
                </div>
              </div>

              <hr className="my-6 border-[#E5E7EB]" />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">CEP *</label>
                  <input
                    type="text"
                    name="cep"
                    value={formData.cep}
                    onChange={handleChange}
                    placeholder="00000-000"
                    className="w-full bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl px-4 py-3 text-xs text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#340C40] focus:ring-1 focus:ring-[#340C40] transition-all"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Rua / Avenida *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Nome da sua rua"
                    className="w-full bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl px-4 py-3 text-xs text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#340C40] focus:ring-1 focus:ring-[#340C40] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Número *</label>
                  <input
                    type="text"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="123"
                    className="w-full bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl px-4 py-3 text-xs text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#340C40] focus:ring-1 focus:ring-[#340C40] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Bairro *</label>
                  <input
                    type="text"
                    name="neighborhood"
                    value={formData.neighborhood}
                    onChange={handleChange}
                    placeholder="Seu bairro"
                    className="w-full bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl px-4 py-3 text-xs text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#340C40] focus:ring-1 focus:ring-[#340C40] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Cidade / UF *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="São Paulo / SP"
                    className="w-full bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl px-4 py-3 text-xs text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#340C40] focus:ring-1 focus:ring-[#340C40] transition-all"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* RESUMO DO PEDIDO (5 Colunas) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E7EB] shadow-sm space-y-6">
            <h2 className="text-lg font-serif font-light text-[#1A1A1A] pb-4 border-b border-[#E5E7EB] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#F5EFF8] text-[#340C40] text-xs font-bold flex items-center justify-center">2</span>
              Resumo do Pedido
            </h2>

            {/* ITEM SELECIONADO */}
            <div className="flex gap-4 p-3 bg-[#FAFAFA] rounded-xl border border-[#E5E7EB]">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white border border-[#E5E7EB] flex-shrink-0">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1 text-xs justify-center flex flex-col">
                <h3 className="font-semibold text-[#1A1A1A] line-clamp-1">{item.name}</h3>
                <span className="text-gray-500 font-medium mt-0.5">TAM: {item.size}</span>
                <span className="text-[#340C40] font-bold mt-1">R$ {item.price.toFixed(2)}</span>
              </div>
            </div>

            {/* CÁLCULO DE VALORES */}
            <div className="space-y-2.5 text-xs pt-2">
              <div className="flex justify-between text-gray-600 font-medium">
                <span>Subtotal:</span>
                <span className="text-[#1A1A1A]">R$ {item.price.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-600 font-medium">
                <span>Frete (Sedex Seguro):</span>
                <span className="text-emerald-700 font-bold">GRÁTIS</span>
              </div>

              <div className="flex justify-between text-emerald-700 font-medium">
                <span>Desconto PIX (5%):</span>
                <span>- R$ {item.discountPix.toFixed(2)}</span>
              </div>

              <hr className="border-[#E5E7EB] my-2" />

              <div className="flex justify-between text-sm font-bold text-[#1A1A1A]">
                <span>Total no Cartão:</span>
                <span>R$ {item.price.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm font-bold text-emerald-800 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                <span>Total no PIX (-5%):</span>
                <span>R$ {item.totalPix.toFixed(2)}</span>
              </div>
            </div>

            {/* BOTÃO FINALIZAR PEDIDO */}
            <button
              type="button"
              className="w-full bg-[#340C40] hover:bg-[#4A125C] text-white font-semibold text-xs uppercase tracking-widest py-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg mt-6"
            >
              <CheckCircle2 className="w-4 h-4" /> Finalizar Pedido com Segurança
            </button>

            {/* SELO DE GARANTIA */}
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#340C40]" />
              <span>GARANTIA DE ENTREGA JLJOIAS</span>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}