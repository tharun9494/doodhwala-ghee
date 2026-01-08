import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import StatsSection from "@/components/home/StatsSection";
import FarmSection from "@/components/home/FarmSection";
import Process from "@/components/home/Process";
import ProductShowcase from "@/components/home/ProductShowcase";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <StatsSection />
        <FarmSection />
        <Process />
        <ProductShowcase />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
