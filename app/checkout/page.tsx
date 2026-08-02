"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, CreditCard, QrCode, CheckCircle2 } from "lucide-react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card">("pix");
  const [isPaid, setIsPaid] = useState(false);

  // Item simulado do checkout
  const product = {
    name: "Corrente Grumet 10mm Dupla Camada Ouro 18k",
    size: "60cm",
    price: 489.00,
    pixPrice: 464.55,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
  };

  const finalPrice = paymentMethod === "pix" ? product.pixPrice : product.price;

  const handleFinishPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPaid(true);
  };

  if (isPaid) {
    return (
      <main className="min-h-screen bg-[var(--color-brand-black)] text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[var(--color-brand-gray)] border border-white/10 p-8 text-center space-y-6">
          <CheckCircle2 className="w-16 h-16 text-[var(--color-brand-gold)] mx-auto" />
          <h1 className="text-2xl font-serif font-bold text-white">Pedido Confirmado!</h1>
          <p className="text-xs text-gray-400 leading-relaxed">
            Obrigado por comprar na <strong className="text-white">JLJoias</strong>. Enviamos o comprovante e o código de rastreamento para o seu e-mail e WhatsApp.
          </p>
          <div className="p-4 bg-black/40 border border-white/5 text-left text-xs space-y-2">
            <p className="text-gray-400"><strong className="text-white">Pedido:</strong> #JL-{Math.floor(100000 + Math.random() * 900000)}</p>
            <p className="text-gray-400"><strong className="text-white">Item:</strong> {product.name} ({product.size})</p>
            <p className="text-gray-400"><strong className="text-white">Total Pago:</strong> R$ {finalPrice.toFixed(2)}</p>
          </div>
          <Link
            href="/"
            className="inline-block w-full bg-[var(--color-brand-gold)] text-[var(--color-brand-black)] font-bold text-xs uppercase tracking-widest py-3.5"
          >
            Voltar para a Loja
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-brand-black)] text-white pb-16">
      {/* TOPO CHECKOUT SEGURO */}
      <header className="border-b border-white/10 py-6 bg-black/50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-serif font-bold tracking-widest text-white">
            JL<span className="text-[var(--color-brand-gold)] font-light">JOIAS</span>
          </Link>
          <div className="flex items-center gap-2 text-xs text-green-400 font-semibold uppercase tracking-wider">
            <Lock className="w-4 h-4" /> Ambiente 100% Criptografado
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Link
          href="/produto/1"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-[var(--color-brand-gold)] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao produto
        </Link>

        <form onSubmit={handleFinishPayment} className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* COLUNA 1 & 2: DADOS DO CLIENTE E PAGAMENTO */}
          <div className="lg:col-span-2 space-y-8">

            {/* 1. DADOS PESSOAIS */}
            <div className="bg-[var(--color-brand-gray)] border border-white/5 p-6 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-gold)] flex items-center gap-2">
                1. Identificação do Cliente
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nome Completo *"
                  required
                  className="bg-black/50 border border-white/10 px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[var(--color-brand-gold)] outline-none"
                />
                <input
                  type="text"
                  placeholder="CPF *"
                  required
                  className="bg-black/50 border border-white/10 px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[var(--color-brand-gold)] outline-none"
                />
                <input
                  type="email"
                  placeholder="E-mail para confirmação *"
                  required
                  className="bg-black/50 border border-white/10 px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[var(--color-brand-gold)] outline-none"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp com DDD *"
                  required
                  className="bg-black/50 border border-white/10 px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[var(--color-brand-gold)] outline-none"
                />
              </div>
            </div>

            {/* 2. ENDEREÇO DE ENTREGA */}
            <div className="bg-[var(--color-brand-gray)] border border-white/5 p-6 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-gold)]">
                2. Endereço de Entrega
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="CEP *"
                  required
                  className="bg-black/50 border border-white/10 px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[var(--color-brand-gold)] outline-none sm:col-span-1"
                />
                <input
                  type="text"
                  placeholder="Rua / Avenida *"
                  required
                  className="bg-black/50 border border-white/10 px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[var(--color-brand-gold)] outline-none sm:col-span-2"
                />
                <input
                  type="text"
                  placeholder="Número *"
                  required
                  className="bg-black/50 border border-white/10 px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[var(--color-brand-gold)] outline-none"
                />
                <input
                  type="text"
                  placeholder="Bairro *"
                  required
                  className="bg-black/50 border border-white/10 px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[var(--color-brand-gold)] outline-none"
                />
                <input
                  type="text"
                  placeholder="Cidade / UF *"
                  required
                  className="bg-black/50 border border-white/10 px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[var(--color-brand-gold)] outline-none"
                />
              </div>
            </div>

            {/* 3. PAGAMENTO */}
            <div className="bg-[var(--color-brand-gray)] border border-white/5 p-6 space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-gold)]">
                3. Forma de Pagamento
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("pix")}
                  className={`p-4 border flex flex-col items-center gap-2 transition-all ${
                    paymentMethod === "pix"
                      ? "border-green-500 bg-green-500/10 text-white"
                      : "border-white/10 text-gray-400 hover:border-white/20"
                  }`}
                >
                  <QrCode className="w-6 h-6 text-green-400" />
                  <span className="text-xs uppercase font-bold">PIX (5% OFF)</span>
                  <span className="text-[10px] text-green-400 font-medium">Aprovação Imediata</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`p-4 border flex flex-col items-center gap-2 transition-all ${
                    paymentMethod === "card"
                      ? "border-[var(--color-brand-gold)] bg-[var(--color-brand-gold)]/10 text-white"
                      : "border-white/10 text-gray-400 hover:border-white/20"
                  }`}
                >
                  <CreditCard className="w-6 h-6 text-[var(--color-brand-gold)]" />
                  <span className="text-xs uppercase font-bold">Cartão de Crédito</span>
                  <span className="text-[10px] text-gray-400">Em até 10x sem juros</span>
                </button>
              </div>

              {/* CONTEÚDO DINÂMICO PIX OU CARTÃO */}
              {paymentMethod === "pix" ? (
                <div className="p-4 bg-black/40 border border-green-500/20 text-center space-y-2">
                  <p className="text-xs text-green-400 font-semibold uppercase">
                    Economia de R$ {(product.price - product.pixPrice).toFixed(2)} aplicada!
                  </p>
                  <p className="text-[11px] text-gray-400">
                    O QR Code do PIX e a chave 'Copia e Cola' serão gerados após clicar no botão de finalizar.
                  </p>
                </div>
              ) : (
                <div className="space-y-3 pt-2">
                  <input
                    type="text"
                    placeholder="Número do Cartão"
                    required
                    className="w-full bg-black/50 border border-white/10 px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[var(--color-brand-gold)] outline-none"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Validade (MM/AA)"
                      required
                      className="bg-black/50 border border-white/10 px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[var(--color-brand-gold)] outline-none"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      required
                      className="bg-black/50 border border-white/10 px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[var(--color-brand-gold)] outline-none"
                    />
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* COLUNA 3: RESUMO DO PEDIDO */}
          <div className="space-y-6">
            <div className="bg-[var(--color-brand-gray)] border border-white/5 p-6 space-y-6 sticky top-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white border-b border-white/10 pb-4">
                Resumo do Pedido
              </h3>

              <div className="flex gap-4 items-center">
                <div className="relative w-16 h-16 bg-black shrink-0 border border-white/10">
                  <Image src={product.image} alt="" fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-serif text-white">{product.name}</h4>
                  <span className="text-[10px] text-gray-400 uppercase">Tam: {product.size}</span>
                  <p className="text-xs text-[var(--color-brand-gold)] font-bold mt-1">
                    R$ {product.price.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-2 text-xs">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal:</span>
                  <span>R$ {product.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Frete (Sedex Seguro):</span>
                  <span className="text-green-400 uppercase font-semibold">Grátis</span>
                </div>
                {paymentMethod === "pix" && (
                  <div className="flex justify-between text-green-400">
                    <span>Desconto PIX (5%):</span>
                    <span>- R$ {(product.price - product.pixPrice).toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-white border-t border-white/10 pt-3">
                  <span>Total:</span>
                  <span className="text-[var(--color-brand-gold)]">R$ {finalPrice.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-hover)] text-[var(--color-brand-black)] font-bold text-xs uppercase tracking-widest py-4 transition-all shadow-lg shadow-[var(--color-brand-gold)]/10 cursor-pointer"
              >
                Pagar R$ {finalPrice.toFixed(2)} Agora
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[var(--color-brand-gold)]" /> Garantia de Entrega JLJoias
              </div>
            </div>
          </div>

        </form>
      </div>
    </main>
  );
}