"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { PRODUCTS } from "../products";

import "swiper/css";
import "swiper/css/pagination";

export function HeroBanner() {
  return (
    <section className="w-full bg-[#FAF8F5] py-10 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Lado Esquerdo: Textos do Banner */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#9C7A4A] font-medium">
              Coleção Rommanel
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1917] font-normal leading-tight">
              Joias e Semijoias <br />
              <span className="italic">Exclusivas</span>
            </h1>
            <p className="text-sm sm:text-base text-stone-600 font-light max-w-md mx-auto lg:mx-0">
              Gargantilhas e escapulários folheados a ouro 18k com acabamento impecável para realçar o seu brilho.
            </p>
            <div className="pt-2">
              <a
                href="#vitrine"
                className="inline-block px-7 py-3 rounded-full border border-stone-800 text-stone-900 text-xs uppercase tracking-wider font-medium hover:bg-stone-900 hover:text-white transition-all duration-300"
              >
                Ver Coleção
              </a>
            </div>
          </div>

          {/* Lado Direito: Carrossel do Topo com as 6 peças reais */}
          <div className="lg:col-span-7 w-full">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              breakpoints={{
                480: { slidesPerView: 1.6 },
                768: { slidesPerView: 2.3 },
                1024: { slidesPerView: 2.3 },
              }}
              className="!pb-12"
            >
              {PRODUCTS.map((item) => (
                <SwiperSlide key={item.id} className="py-4">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-100 transition-all duration-300 flex flex-col">
                    {/* Imagem do Produto com Tag da Categoria */}
                    <div className="relative w-full aspect-square bg-[#F7F5F0] overflow-hidden">
                      <span className="absolute top-3 left-3 z-10 text-[10px] uppercase font-bold tracking-wider bg-[#3B194C] text-white px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover p-3 hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 80vw, 30vw"
                        priority
                      />
                    </div>

                    {/* Dados da Peça */}
                    <div className="p-4 text-center bg-white">
                      <h3 className="text-sm font-semibold text-[#2D1B36] line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-base font-bold text-[#3B194C]">
                        R$ {item.price.toFixed(2).replace(".", ",")}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
}