import { Leaf, Heart, Award, Droplets } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/common/AnimatedSection";

const features = [
  {
    icon: Leaf,
    title: "100% Pure & Natural",
    description:
      "Made from the milk of grass-fed desi cows, our ghee is completely natural with no artificial additives.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: Heart,
    title: "Traditional Bilona Method",
    description:
      "We follow the age-old Bilona churning process to preserve the authentic taste and nutritional value.",
    gradient: "from-rose-400 to-pink-500",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Every batch is tested for purity and quality to ensure you receive only the finest desi ghee.",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    icon: Droplets,
    title: "No Preservatives",
    description:
      "Absolutely no chemicals, preservatives, or artificial flavoring. Just pure, wholesome ghee.",
    gradient: "from-blue-400 to-cyan-500",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-28 bg-cream-warm relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--ghee-gold) / 0.15) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-ghee-gold/10 rounded-full text-sm font-medium text-ghee-amber uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            The <span className="text-gradient-gold">DOODHWALA</span> Difference
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We take pride in delivering the purest desi ghee, made with time-honored traditions and uncompromising quality standards.
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <AnimatedSection
              key={feature.title}
              delay={index * 0.1}
              direction="up"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group h-full p-6 md:p-8 bg-background rounded-2xl shadow-soft hover:shadow-gold cursor-default border border-transparent hover:border-ghee-gold/20 transition-colors duration-300"
              >
                <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
