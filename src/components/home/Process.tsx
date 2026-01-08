import { motion } from "framer-motion";
import AnimatedSection from "@/components/common/AnimatedSection";
import bilonaImage from "@/assets/bilona-process.jpg";
import gheePourImage from "@/assets/ghee-pour.jpg";

const steps = [
  {
    number: "01",
    title: "Fresh Milk Collection",
    description: "Milk collected daily from grass-fed desi cows on our farms",
  },
  {
    number: "02",
    title: "Curd Setting",
    description: "Milk is set into curd using traditional clay pot methods",
  },
  {
    number: "03",
    title: "Bilona Churning",
    description: "Hand-churned using wooden Bilona to extract pure butter",
  },
  {
    number: "04",
    title: "Slow Heating",
    description: "Butter is slow-cooked on low flame to create golden ghee",
  },
];

const Process = () => {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-ghee-gold/10 rounded-full text-sm font-medium text-ghee-amber uppercase tracking-wider mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            The Traditional <span className="text-gradient-gold">Bilona</span> Method
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            An ancient churning technique that preserves the nutritional essence and rich aroma of pure desi ghee.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <AnimatedSection direction="left" className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="space-y-4"
              >
                <img
                  src={bilonaImage}
                  alt="Traditional Bilona churning process"
                  className="w-full rounded-2xl shadow-medium"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="pt-8"
              >
                <img
                  src={gheePourImage}
                  alt="Pure golden ghee being poured"
                  className="w-full rounded-2xl shadow-medium"
                />
              </motion.div>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-ghee-gold/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-ghee-amber/10 rounded-full blur-3xl -z-10" />
          </AnimatedSection>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <AnimatedSection
                key={step.number}
                delay={index * 0.1}
                direction="right"
              >
                <motion.div
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="flex gap-5 p-5 rounded-xl bg-cream-warm/50 hover:bg-cream-warm border border-transparent hover:border-ghee-gold/20 transition-all duration-300 cursor-default"
                >
                  <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-ghee-gold to-ghee-amber text-primary-foreground font-display font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
