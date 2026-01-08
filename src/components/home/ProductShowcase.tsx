import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import gheeJarImage from "@/assets/ghee-jar.jpg";

const ProductShowcase = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-cream-warm overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Product Image */}
          <div className="relative flex justify-center">
            <div className="relative">
              <img
                src={gheeJarImage}
                alt="Premium DOODHWALA Desi Ghee Jar"
                className="w-72 md:w-80 rounded-2xl shadow-gold"
              />
              {/* Floating Badge */}
              <div className="absolute -top-3 -right-3 bg-ghee-gold text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Premium Quality
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-ghee-gold/20 rounded-full -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-ghee-gold/10 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            <span className="text-sm font-medium text-ghee-amber uppercase tracking-wider">
              Our Product
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Pure Desi Cow Ghee{" "}
              <span className="text-gradient-gold">Gold Standard</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              Each jar of DOODHWALA ghee is a testament to our commitment to purity. Rich in vitamins A, D, E, and K, our ghee enhances the flavor of every dish while nourishing your body.
            </p>

            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="text-center p-4 rounded-xl bg-cream-warm">
                <p className="text-2xl font-display font-bold text-ghee-amber">250g</p>
                <p className="text-xs text-muted-foreground mt-1">Starter Pack</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-ghee-gold/10 border-2 border-ghee-gold">
                <p className="text-2xl font-display font-bold text-ghee-amber">500g</p>
                <p className="text-xs text-muted-foreground mt-1">Most Popular</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-cream-warm">
                <p className="text-2xl font-display font-bold text-ghee-amber">1Kg</p>
                <p className="text-xs text-muted-foreground mt-1">Family Size</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Order Now</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+919876543210">Call for Bulk Orders</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
