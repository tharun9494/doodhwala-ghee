import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/common/AnimatedSection";
import farmImage from "@/assets/farm-cows.jpg";

const highlights = [
  "Grass-fed desi cows in natural pastures",
  "No antibiotics or growth hormones",
  "Sustainable farming practices",
  "Supporting local farmer communities",
];

const FarmSection = () => {
  return (
    <section className="py-20 md:py-28 bg-cream-warm relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ghee-gold/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <AnimatedSection direction="left" className="order-2 lg:order-1 space-y-6">
            <span className="inline-block px-4 py-1.5 bg-ghee-gold/10 rounded-full text-sm font-medium text-ghee-amber uppercase tracking-wider">
              Farm to Table
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Straight From Our{" "}
              <span className="text-gradient-gold">Green Pastures</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our desi cows roam freely in the lush green fields of Punjab, eating natural grass and living stress-free lives. This care reflects in every spoonful of our ghee.
            </p>

            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle className="w-5 h-5 text-ghee-amber shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pt-4">
              <Button variant="hero" size="lg" asChild className="group">
                <Link to="/about">
                  Learn Our Story
                  <motion.span
                    className="inline-block ml-1"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection direction="right" className="order-1 lg:order-2 relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={farmImage}
                alt="Desi cows grazing in green pastures at sunrise"
                className="w-full rounded-2xl shadow-medium"
              />
            </motion.div>
            
            {/* Stats Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 left-4 md:left-6 bg-background p-5 rounded-xl shadow-gold border border-ghee-gold/20"
            >
              <div className="flex gap-6">
                <div className="text-center">
                  <p className="text-2xl font-display font-bold text-ghee-amber">100%</p>
                  <p className="text-xs text-muted-foreground">Natural</p>
                </div>
                <div className="text-center border-l border-border pl-6">
                  <p className="text-2xl font-display font-bold text-ghee-amber">A2</p>
                  <p className="text-xs text-muted-foreground">Milk Only</p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-28 h-28 bg-ghee-gold/15 rounded-full blur-2xl -z-10" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FarmSection;
