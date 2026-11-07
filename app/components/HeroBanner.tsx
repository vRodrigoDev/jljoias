"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { PRODUCTS } from "../products";

export function HeroBanner() {
  const featuredProducts = PRODUCTS.slice(0, 7);

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Lado Esquerdo: Textos */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#9C7A4A] block mb-3">
              Coleção Rommanel
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#1C1917] leading-[1.15] mb-5 tracking-tight">
              Semijoias que traduzem sofisticação, beleza e autenticidade.
            </h1>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Uma seleção especial de gargantilhas e escapulários Rommanel, com
              acabamento refinado e o brilho característico da marca.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                href="/#vitrine"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-stone-800 text-stone-900 text-xs font-medium tracking-widest uppercase hover:bg-stone-900 hover:text-white transition-all duration-300"
              >
                Ver Coleção
              </Link>
            </div>
          </div>

          {/* Lado Direito: Carrossel */}
          <div className="lg:col-span-7 w-full max-w-sm sm:max-w-none mx-auto">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              slidesPerView={1}
              spaceBetween={16}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2.3,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              className="pb-12"
            >
              {featuredProducts.map((product) => (
                <SwiperSlide key={product.id} className="h-auto">
                  <Link
                    href={`/produto/${product.id}`}
                    className="block group bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between"
                  >
                    <div>
                      <span className="inline-block px-2.5 py-0.5 mb-3 rounded-full bg-[#340C40] text-white text-[9px] font-semibold tracking-wider uppercase">
                        {product.category}
                      </span>

                      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-stone-50 flex items-center justify-center">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <h3 className="text-xs sm:text-sm font-medium text-stone-800 line-clamp-1 group-hover:text-[#9C7A4A] transition-colors">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm sm:text-base font-semibold text-stone-950 font-serif">
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(product.price)}
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