'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export interface Product {
  id: string | number;
  slug?: string;
  name: string;
  category?: string;
  price: string | number;
  image?: string;
  imageUrl?: string;
}

interface ProductCarouselProps {
  title?: string;
  subtitle?: string;
  products?: Product[];
}

export function ProductCarousel({
  title = 'Destaques & Mais Vendidos',
  subtitle = 'Coleção Exclusiva',
  products = [],
}: ProductCarouselProps) {
  // Garante itens duplicados suficientes para o loop infinito funcionar sem erro do Swiper
  const displayProducts =
    products.length > 0 && products.length < 6
      ? [...products, ...products, ...products]
      : products;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {subtitle && (
            <span className="text-[#340C40] text-xs uppercase tracking-[0.2em] font-semibold block mb-1">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A]">
              {title}
            </h2>
          )}
        </div>
      )}

      {displayProducts.length > 0 ? (
        <Swiper
          modules={[Autoplay, Pagination]}
          grabCursor={true}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 16 },
            640: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 3.5, spaceBetween: 24 },
          }}
          className="!pb-12"
        >
          {displayProducts.map((product, index) => {
            const productSlug =
              product.slug ||
              product.name
                ?.toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w-]+/g, '') ||
              product.id;

            const productImage =
              product.image || product.imageUrl || '/placeholder.png';

            return (
              <SwiperSlide key={`${product.id}-${index}`}>
                <Link
                  href={`/produto/${productSlug}`}
                  className="block bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full"
                >
                  <div className="relative aspect-square w-full bg-[#FAFAFA] overflow-hidden">
                    {product.category && (
                      <span className="absolute top-3 left-3 z-10 bg-[#340C40] text-white text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full font-medium shadow-sm">
                        {product.category}
                      </span>
                    )}
                    <Image
                      src={productImage}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4 text-center">
                    <h3 className="text-[#1A1A1A] font-medium text-sm line-clamp-1 mb-1">
                      {product.name}
                    </h3>
                    <span className="text-[#340C40] text-sm font-bold block">
                      {typeof product.price === 'number'
                        ? `R$ ${product.price.toFixed(2).replace('.', ',')}`
                        : product.price}
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : null}
    </div>
  );
}

// Export default para compatibilidade com qualquer tipo de import
export default ProductCarousel;