import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-brown-deep via-brown-earth to-brown-deep relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-ghee-gold blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full bg-ghee-amber blur-3xl"
        />
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--ghee-gold)) 1px, transparent 0)`,
          backgroundSize: "30px 30px",
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-ghee-gold/20 rounded-full text-sm font-medium text-ghee-gold mb-6"
          >
            Limited Time Offer
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cream-light leading-tight"
          >
            Ready to Experience{" "}
            <span className="text-ghee-gold relative inline-block">
              Pure Tradition?
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.path
                  d="M0 4 Q50 0 100 4 T200 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-ghee-gold"
                />
              </motion.svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-cream-warm/80 max-w-xl mx-auto"
          >
            Order your first jar of DOODHWALA Pure Desi Ghee today and taste the difference that quality makes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="hero"
              size="xl"
              asChild
              className="shadow-gold group"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Order Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              asChild
              className="border-ghee-gold text-ghee-gold hover:bg-ghee-gold hover:text-brown-deep"
            >
              <a href="tel:+919876543210" className="flex items-center gap-2">
                <Phone size={20} />
                Call Us Now
              </a>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-cream-warm/60"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Free Delivery
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Cash on Delivery
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Quality Guaranteed
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
