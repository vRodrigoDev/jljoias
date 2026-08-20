"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnnouncementBar } from "../../components/AnnouncementBar";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ShoppingBag, MessageCircle, ShieldCheck, Truck, ArrowLeft } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { ClientWrapper } from "../../components/ClientWrapper";

// Base de catálogo das joias
const productsData: Record<string, {
  id: string;
  name: string;
  price: number;
  pixDiscountPrice: number;
  description: string;
  category: string;
  sizes: string[];
  images: string[];
}> = {
  "1": {
    id: "1",
    name: "Corrente Grumet 10mm Dupla Camada Ouro 18k",
    price: 489.00,
    pixDiscountPrice: 464.55,
    description: "Corrente masculina modelo Grumet confeccionada com banho duplo de Ouro 18k e camada de verniz protetor antialérgico italiano. Peça robusta com fecho gaveta de alta segurança.",
    category: "Correntes",
    sizes: ["50cm", "60cm", "70cm"],
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000",
    ]
  },
  "2": {
    id: "2",
    name: "Pulseira Tijolo Baiano Ouro 18k",
    price: 329.00,
    pixDiscountPrice: 312.55,
    description: "Pulseira estruturada no estilo Tijolo Baiano banhada a Ouro 18k de alta resistência e acabamento espelhado artesanal.",
    category: "Pulseiras",
    sizes: ["19cm", "21cm", "23cm"],
    images: [
      "https://images.unsplash.com/photo-1611591475141-860322384f67?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000",
    ]
  },
  "3": {
    id: "3",
    name: "Anel Solitário Onyx Masculino",
    price: 259.00,
    pixDiscountPrice: 246.05,
    description: "Anel imponente com pedra natural Onyx cravada em liga reforçada e banho nobre de Ouro 18k.",
    category: "Anéis",
    sizes: ["18", "20", "22", "24", "26"],
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000",
    ]
  },
  "4": {
    id: "4",
    name: "Corrente Cartier 7mm Fecho Gaveta",
    price: 549.00,
    pixDiscountPrice: 521.55,
    description: "Clássica corrente Cartier com elos uniformes polidos e acabamento em banho triplo com verniz cerâmico protetor.",
    category: "Correntes",
    sizes: ["60cm", "70cm"],
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000",
    ]
  }
};

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const productId = resolvedParams?.id || "1";
  const product = productsData[productId] || productsData["1"];

  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "Único");
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: activeImage,
      quantity: 1,
    });
  };

  const whatsappMsg = encodeURIComponent(
    `Olá!\nTenho interesse em comprar a peça:\n\nProduto: ${product.name}\nTamanho: ${selectedSize}\nValor: R$ ${product.price.toFixed(2)}`
  );

  return (
    <ClientWrapper>
      <main className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] relative font-sans">
        <AnnouncementBar />
        <Header />

        <div className="container mx-auto px-6 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 hover:text-[#340C40] mb-8 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar para a loja
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Galeria */}
            <div className="flex flex-col-reverse md:flex-row gap-4">
              <div className="flex md:flex-col gap-3">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                      activeImage === img
                        ? "border-[#340C40] ring-2 ring-[#340C40]/20 scale-105"
                        : "border-[#E5E7EB] opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>

              <div className="relative aspect-square w-full bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={activeImage}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover transition-all duration-500 hover:scale-105 cursor-zoom-in"
                />
              </div>
            </div>

            {/* Informações da Peça */}
            <div className="flex flex-col justify-between h-full py-2">
              <div>
                <span className="text-xs text-[#340C40] uppercase tracking-[0.25em] font-bold block mb-2">
                  {product.category} • Banho Triplo 18K
                </span>

                <h1 className="text-2xl sm:text-4xl font-serif text-[#1A1A1A] font-light tracking-tight leading-snug mb-6">
                  {product.name}
                </h1>

                <div className="p-5 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm mb-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl sm:text-4xl font-bold text-[#340C40] tracking-tight">
                      R$ {product.pixDiscountPrice.toFixed(2)}
                    </span>
                    <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">
                      NO PIX (5% OFF)
                    </span>
                  </div>
                  <p className="text-xs text-[#6B7280] mt-2 font-medium">
                    ou R$ {product.price.toFixed(2)} em até <strong className="text-[#1A1A1A] font-semibold">10x de R$ {(product.price / 10).toFixed(2)}</strong> sem juros
                  </p>
                </div>

                <p className="text-[#4B5563] text-sm leading-relaxed mb-6 font-light">
                  {product.description}
                </p>

                {/* Seleção de Tamanho */}
                <div className="mb-8">
                  <label className="text-xs uppercase tracking-widest text-[#1A1A1A] font-bold block mb-3">
                    Tamanho / Opções:
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase transition-all cursor-pointer ${
                          selectedSize === size
                            ? "bg-[#340C40] text-white shadow-md scale-105"
                            : "bg-white border border-[#E5E7EB] text-gray-700 hover:border-[#340C40] hover:text-[#340C40]"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="space-y-3 mt-4">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full bg-[#340C40] hover:bg-[#4A125C] text-white font-semibold text-xs uppercase tracking-widest py-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" /> Comprar Agora
                </button>

                <a
                  href={`https://wa.me/55SEUNUMERO?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white border border-[#E5E7EB] hover:border-emerald-500 text-[#1A1A1A] hover:text-emerald-700 text-xs uppercase tracking-widest py-3.5 rounded-full flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" /> Finalizar Pedido pelo WhatsApp
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E5E7EB] grid grid-cols-2 gap-4 text-xs text-[#6B7280]">
                <div className="flex items-center gap-2 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#340C40]" />
                  <span>Garantia Vitalícia no Banho</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <Truck className="w-4 h-4 text-[#340C40]" />
                  <span>Frete Seguro com Rastreio</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </ClientWrapper>
  );
}