"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { PRODUCTS, Product } from "../products";

import "swiper/css";
import "swiper/css/pagination";

interface ProductCarouselProps {
  products?: Product[];
}

export default function ProductCarousel({ products = PRODUCTS }: ProductCarouselProps) {
  return (
    <div className="w-full py-8">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id} className="flex justify-center p-2">
            <div className="w-full max-w-xs bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
              {/* Imagem do Produto com Tag de Categoria */}
              <div className="relative w-full aspect-square bg-[#FAF8F5] overflow-hidden">
                <span className="absolute top-3 left-3 z-10 text-[10px] uppercase font-semibold tracking-wider bg-stone-900/80 text-white px-2.5 py-1 rounded-full">
                  {item.category}
                </span>

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-center p-4 hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
              </div>

              {/* Informações da Peça */}
              <div className="p-4 flex flex-col flex-1 justify-between text-center bg-white">
                <div>
                  <h3 className="text-sm font-medium text-stone-800 line-clamp-2 min-h-[2.5rem]">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-base font-semibold text-stone-900">
                    R$ {item.price.toFixed(2).replace(".", ",")}
                  </p>
                </div>

                <Link
                  href={`/produto/${item.id}`}
                  className="mt-4 block w-full py-2 px-4 rounded-xl text-xs font-medium text-stone-800 border border-stone-200 hover:bg-stone-50 transition-colors"
                >
                  Ver Detalhes
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}