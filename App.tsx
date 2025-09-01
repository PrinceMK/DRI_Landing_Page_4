import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { MaterialsShowcase } from "./components/MaterialsShowcase";
import { OffersAndLaunches } from "./components/OffersAndLaunches";
import { LiveCustomerSatisfaction } from "./components/LiveCustomerSatisfaction";

import { Testimonials } from "./components/Testimonials";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/Footer";
import { ProductPage } from "./components/ProductPage";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "product">("home");
  const [productPageData, setProductPageData] = useState<{category: string, subcategory: string} | null>(null);

  const handleProductPageOpen = (category: string, subcategory: string) => {
    setProductPageData({ category, subcategory });
    setCurrentPage("product");
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    setProductPageData(null);
  };

  if (currentPage === "product" && productPageData) {
    return (
      <div className="min-h-screen bg-white">
        <Header onProductPageOpen={handleProductPageOpen} />
        <ProductPage 
          category={productPageData.category}
          subcategory={productPageData.subcategory}
          onBack={handleBackToHome}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onProductPageOpen={handleProductPageOpen} />
      <main>
        <Hero />
        <OffersAndLaunches />
        <MaterialsShowcase />
        <Services />
        <LiveCustomerSatisfaction />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}