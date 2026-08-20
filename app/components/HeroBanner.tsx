"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: string;
  image: string;
}

const baseProducts: Product[] = [
  {
    id: "1",
    slug: "colar-solitario-de-luxo",
    name: "Colar Solitário de Luxo",
    category: "Correntes",
    price: "R$ 489,00",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    slug: "pulseira-tijolo-baiano-ouro-18k",
    name: "Pulseira Tijolo Baiano Ouro 18k",
    category: "Pulseiras",
    price: "R$ 329,00",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    slug: "anel-solitario-onyx-masculino",
    name: "Anel Solitário Onyx Masculino",
    category: "Anéis",
    price: "R$ 259,00",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "4",
    slug: "corrente-cartier-7mm-fecho-gaveta",
    name: "Corrente Cartier 7mm Fecho Gaveta",
    category: "Correntes",
    price: "R$ 549,00",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
  },
];

// Duplicação para manter slides suficientes e garantir loop contínuo sem travamentos
const heroProducts: Product[] = [...baseProducts, ...baseProducts, ...baseProducts];

export function HeroBanner() {
  const scrollToProducts = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#mais-vendidos");
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative w-full bg-[#FAFAFA] py-12 lg:py-20 border-b border-[#E5E7EB] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* COLUNA ESQUERDA: Textos e Botões (5 Colunas) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-10">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#340C40] text-xs uppercase tracking-[0.3em] mb-3 font-semibold"
            >
              COLEÇÃO EXCLUSIVA & MINIMALISTA
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] font-light tracking-tight leading-tight mb-4"
            >
              Joias que revelam sua <span className="italic text-[#340C40] font-normal">personalidade.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#6B7280] text-sm sm:text-base font-light max-w-md mb-8 leading-relaxed"
            >
              Design contemporâneo, acabamento refinado e peças criadas para destacar a sua elegância em qualquer ocasião.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <Link
                href="#mais-vendidos"
                onClick={scrollToProducts}
                className="bg-[#340C40] hover:bg-[#4A125C] text-white px-7 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer active:scale-95"
              >
                COMPRAR AGORA <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/55SEUNUMERO?text=Olá!%20Gostaria%20de%20atendimento%20VIP%20para%20escolher%20minha%20joia."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[#340C40] text-[#340C40] hover:bg-[#340C40] hover:text-white px-7 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" /> FALAR NO WHATSAPP
              </a>
            </motion.div>
          </div>

          {/* COLUNA DIREITA: Área do Carrossel de 3 Cards (7 Colunas) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 w-full overflow-hidden"
          >
            <div className="w-full relative hero-carousel-wrapper">
              <Swiper
                modules={[Autoplay, Pagination, EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                spaceBetween={12}
                loop={true}
                speed={700}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 60,
                  modifier: 1.1,
                  scale: 0.86,
                  slideShadows: false,
                }}
                pagination={{
                  clickable: true,
                  el: ".hero-custom-pagination",
                }}
                className="w-full py-4"
              >
                {heroProducts.map((product, index) => (
                  <SwiperSlide key={`${product.id}-${index}`} className="h-auto">
                    <Link
                      href={`/produto/${product.slug}`}
                      className="group block bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm transition-all duration-500 card-inner h-full select-none cursor-pointer"
                    >
                      {/* Imagem do Produto */}
                      <div className="relative aspect-[4/5] w-full bg-[#FAFAFA] overflow-hidden">
                        <span className="absolute top-2.5 left-2.5 z-10 bg-[#340C40] text-white text-[8px] sm:text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full font-medium shadow-sm">
                          {product.category}
                        </span>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      {/* Informações do Produto */}
                      <div className="p-3 sm:p-4 text-center bg-white">
                        <h3 className="text-[#1A1A1A] font-medium text-xs sm:text-sm tracking-tight line-clamp-1 mb-1 group-hover:text-[#340C40] transition-colors">
                          {product.name}
                        </h3>
                        <span className="text-[#340C40] text-xs sm:text-sm font-bold block">
                          {product.price}
                        </span>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Dots de Paginação Centralizados */}
              <div className="hero-custom-pagination flex justify-center items-center gap-1.5 mt-4" />
            </div>
          </motion.div>

        </div>
      </div>

      <style jsx global>{`
        .hero-carousel-wrapper .swiper {
          overflow: hidden !important;
        }

        .hero-carousel-wrapper .swiper-slide {
          transition: all 0.4s ease !important;
          opacity: 0.45;
        }

        /* Slide Central em Maior Destaque */
        .hero-carousel-wrapper .swiper-slide-active {
          opacity: 1 !important;
          z-index: 20;
        }

        .hero-carousel-wrapper .swiper-slide-active .card-inner {
          box-shadow: 0 16px 32px -8px rgba(52, 12, 64, 0.22) !important;
          border-color: rgba(52, 12, 64, 0.35) !important;
        }

        /* Estilização dos Pontos de Navegação */
        .hero-custom-pagination .swiper-pagination-bullet {
          background: #6b7280 !important;
          opacity: 0.35;
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          transition: all 0.3s ease;
          margin: 0 2.5px !important;
        }

        .hero-custom-pagination .swiper-pagination-bullet-active {
          background: #340c40 !important;
          opacity: 1;
          width: 20px;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
}

export default HeroBanner;