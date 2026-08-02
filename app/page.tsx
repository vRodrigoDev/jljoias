import { AnnouncementBar } from "./components/AnnouncementBar";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { ProductCarousel } from "./components/ProductCarousel";
import { Footer } from "./components/Footer";

// Nossos produtos fictícios para testar a vitrine
const mockProducts = [
  {
    id: "1",
    name: "Corrente Grumet 10mm Dupla Camada",
    price: 489.00,
    category: "Correntes",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    name: "Pulseira Tijolo Baiano Ouro 18k",
    price: 329.00,
    category: "Pulseiras",
    image: "https://images.unsplash.com/photo-1611591475141-860322384f67?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    name: "Anel Solitário Onyx Masculino",
    price: 259.00,
    category: "Anéis",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "4",
    name: "Corrente Cartier 7mm Fecho Gaveta",
    price: 549.00,
    category: "Correntes",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-black)] text-white">
      {/* 1. Barra de anúncios no topo */}
      <AnnouncementBar />

      {/* 2. Menu de Navegação */}
      <Header />

      {/* 3. Hero Banner em Destaque */}
      <HeroBanner />

      {/* 4. Carrossel: Mais Vendidos */}
      <ProductCarousel
        title="Mais Vendidos"
        subtitle="Destaques da Coleção"
        products={mockProducts}
      />

      {/* 5. Carrossel: Correntes Masculinas */}
      <ProductCarousel
        title="Correntes Masculinas"
        subtitle="Presença & Acabamento"
        products={mockProducts.filter(p => p.category === "Correntes")}
      />

      {/* 6. Carrossel: Pulseiras Masculinas */}
      <ProductCarousel
        title="Pulseiras Masculinas"
        subtitle="Elegância no Pulso"
        products={mockProducts.filter(p => p.category === "Pulseiras")}
      />

      {/* 7. Carrossel: Anéis Exclusivos */}
      <ProductCarousel
        title="Anéis Exclusivos"
        subtitle="Sofisticação & Detalhe"
        products={mockProducts.filter(p => p.category === "Anéis")}
      />

      {/* 8. Rodapé de Grife */}
      <Footer />
    </main>
  );
}