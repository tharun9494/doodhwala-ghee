import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-brown-deep via-brown-earth to-brown-deep relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-ghee-gold blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full bg-ghee-amber blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cream-light leading-tight">
            Ready to Experience{" "}
            <span className="text-ghee-gold">Pure Tradition?</span>
          </h2>
          <p className="mt-5 text-lg text-cream-warm/80 max-w-xl mx-auto">
            Order your first jar of DOODHWALA Pure Desi Ghee today and taste the difference that quality makes.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="xl"
              asChild
              className="shadow-gold"
            >
              <Link to="/contact">Order Now</Link>
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              asChild
              className="border-ghee-gold text-ghee-gold hover:bg-ghee-gold hover:text-brown-deep"
            >
              <a href="tel:+919876543210" className="flex items-center gap-2">
                <Phone size={20} />
                Call Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
