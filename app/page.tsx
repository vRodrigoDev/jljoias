"use client";

import dynamic from "next/dynamic";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { Footer } from "./components/Footer";

// Carrega o carrossel de produtos dinamicamente sem quebra de SSR
const ProductCarousel = dynamic(
  () => import("./components/ProductCarousel").then((mod) => mod.ProductCarousel),
  { ssr: false }
);

const products = [
  {
    id: "1",
    name: "Corrente Grumet 10mm Dupla Camada Ouro 18k",
    price: 489.0,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
    category: "Correntes",
  },
  {
    id: "2",
    name: "Pulseira Tijolo Baiano Ouro 18k",
    price: 329.0,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800",
    category: "Pulseiras",
  },
  {
    id: "3",
    name: "Anel Solitário Onyx Masculino",
    price: 259.0,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800",
    category: "Anéis",
  },
  {
    id: "4",
    name: "Corrente Cartier 7mm Fecho Gaveta",
    price: 549.0,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
    category: "Correntes",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] relative font-sans">
      <AnnouncementBar />
      <Header />
      <HeroBanner />
      <section id="mais-vendidos" className="scroll-mt-12">
        <ProductCarousel
          title="Destaques & Mais Vendidos"
          subtitle="Coleção Exclusiva"
          products={products}
        />
      </section>
      <Footer />
    </main>
  );
}