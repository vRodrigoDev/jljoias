"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { PRODUCTS } from "../products";

import "swiper/css";
import "swiper/css/pagination";

export function HeroBanner() {
  return (
    <section className="relative w-full bg-[#FAF8F5] py-8 md:py-12 border-b border-stone-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Lado Esquerdo: Texto da Coleção */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] uppercase tracking-widest text-[#9C7A4A] font-semibold block">
              COLEÇÃO ROMMANEL
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1917] font-normal leading-tight">
              Semijoias que traduzem <br />
              <span className="italic">sofisticação, beleza e autenticidade.</span>
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed max-w-sm">
              Uma seleção especial de gargantilhas e escapulários Rommanel, com acabamento refinado e o brilho característico da marca.
            </p>
            <div className="pt-2">
              <a
                href="#vitrine"
                className="inline-block border border-stone-800 text-stone-800 hover:bg-stone-900 hover:text-white px-6 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase transition-colors"
              >
                VER COLEÇÃO
              </a>
            </div>
          </div>

          {/* Lado Direito: Carrossel com os cartões dos produtos */}
          <div className="lg:col-span-8 overflow-hidden">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              spaceBetween={20}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 2.2 },
                1024: { slidesPerView: 2.6 },
              }}
              className="pb-10"
            >
              {PRODUCTS.map((product) => (
                <SwiperSlide key={product.id}>
                  <Link
                    href={`/produto/${product.id}`}
                    className="block bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow border border-stone-200/60 relative group"
                  >
                    {/* Tag no topo */}
                    <span className="absolute top-3 left-3 z-10 text-[9px] uppercase font-bold tracking-wider bg-[#3B194C] text-white px-2.5 py-0.5 rounded-full">
                      {product.category || "GARGANTILHAS"}
                    </span>

                    {/* Imagem da Joia */}
                    <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-3 bg-[#FAF8F5]/40 flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Título e Preço */}
                    <div className="text-center pt-1">
                      <h3 className="text-xs font-medium text-stone-800 truncate">
                        {product.name}
                      </h3>
                      <p className="text-sm font-bold text-[#1C1917] mt-1">
                        R$ {product.price.toFixed(2).replace(".", ",")}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}