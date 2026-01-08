import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/common/AnimatedSection";
import gheeJarImage from "@/assets/ghee-jar.jpg";

const sizes = [
  { weight: "250g", label: "Starter Pack", popular: false },
  { weight: "500g", label: "Most Popular", popular: true },
  { weight: "1Kg", label: "Family Size", popular: false },
];

const ProductShowcase = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-cream-warm overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--ghee-gold) / 0.1) 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Product Image */}
          <AnimatedSection direction="left" className="relative flex justify-center">
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src={gheeJarImage}
                alt="Premium DOODHWALA Desi Ghee Jar"
                className="w-72 md:w-80 rounded-2xl shadow-gold"
              />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.3 }}
                className="absolute -top-3 -right-3 bg-gradient-to-br from-ghee-gold to-ghee-amber text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                ⭐ Premium
              </motion.div>
            </motion.div>
            
            {/* Decorative circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-dashed border-ghee-gold/20 rounded-full -z-10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-dashed border-ghee-gold/10 rounded-full -z-10"
            />
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" className="text-center lg:text-left space-y-6">
            <span className="inline-block px-4 py-1.5 bg-ghee-gold/10 rounded-full text-sm font-medium text-ghee-amber uppercase tracking-wider">
              Our Product
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Pure Desi Cow Ghee{" "}
              <span className="text-gradient-gold">Gold Standard</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-lg mx-auto lg:mx-0">
              Each jar of DOODHWALA ghee is a testament to our commitment to purity. Rich in vitamins A, D, E, and K, our ghee enhances the flavor of every dish.
            </p>

            <div className="grid grid-cols-3 gap-4 py-4">
              {sizes.map((size, index) => (
                <motion.div
                  key={size.weight}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`text-center p-4 rounded-xl cursor-default transition-all ${
                    size.popular
                      ? "bg-gradient-to-br from-ghee-gold to-ghee-amber text-primary-foreground shadow-gold"
                      : "bg-cream-warm hover:shadow-soft"
                  }`}
                >
                  <p className={`text-2xl font-display font-bold ${size.popular ? "" : "text-ghee-amber"}`}>
                    {size.weight}
                  </p>
                  <p className={`text-xs mt-1 ${size.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {size.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Button variant="hero" size="lg" asChild className="group">
                <Link to="/contact">
                  Order Now
                  <motion.span
                    className="inline-block ml-1"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+919876543210">Call for Bulk Orders</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
