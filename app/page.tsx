import { AnnouncementBar } from "./components/AnnouncementBar";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { Footer } from "./components/Footer";
import { ProductCard } from "./components/ProductCard";
import { PRODUCTS } from "./products";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <AnnouncementBar />
      <Header />

      <main className="flex-1">
        {/* Carrossel apenas aqui no topo */}
        <HeroBanner />

        {/* Vitrine fixa embaixo (grade parada com as 6 peças) */}
        <section id="vitrine" className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif text-[#1C1917] tracking-wide font-normal">
              Coleção Rommanel
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-3 mb-2" />
            <p className="text-sm text-stone-500 font-light">
              Peças banhadas a ouro 18k selecionadas para você
            </p>
          </div>

          {/* Grade estática de 2 a 3 colunas, sem carrossel e sem mexer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}