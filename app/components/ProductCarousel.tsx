"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ProductCard } from "./ProductCard";

// Importando os estilos visuais do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products: Product[];
}

export function ProductCarousel({ title, subtitle, products }: ProductCarouselProps) {
  return (
    <section className="py-16 container mx-auto px-4">
      {/* Título da Seção */}
      <div className="text-center mb-10">
        {subtitle && (
          <span className="text-[var(--color-brand-gold)] text-xs uppercase tracking-[0.2em] font-semibold block mb-2">
            {subtitle}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
          {title}
        </h2>
        <div className="w-12 h-[1px] bg-[var(--color-brand-gold)] mx-auto mt-4" />
      </div>

      {/* O Carrossel Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-12"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}