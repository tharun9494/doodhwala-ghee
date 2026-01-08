import { Leaf, Heart, Award, Droplets } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Pure & Natural",
    description:
      "Made from the milk of grass-fed desi cows, our ghee is completely natural with no artificial additives.",
  },
  {
    icon: Heart,
    title: "Traditional Bilona Method",
    description:
      "We follow the age-old Bilona churning process to preserve the authentic taste and nutritional value.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Every batch is tested for purity and quality to ensure you receive only the finest desi ghee.",
  },
  {
    icon: Droplets,
    title: "No Preservatives",
    description:
      "Absolutely no chemicals, preservatives, or artificial flavoring. Just pure, wholesome ghee.",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-28 bg-cream-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="text-sm font-medium text-ghee-amber uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">
            The <span className="text-gradient-gold">DOODHWALA</span> Difference
          </h2>
          <p className="mt-4 text-muted-foreground">
            We take pride in delivering the purest desi ghee, made with time-honored traditions and uncompromising quality standards.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 md:p-8 bg-background rounded-2xl shadow-soft hover-lift cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-ghee-gold/10 text-ghee-amber mb-5 group-hover:bg-ghee-gold group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon size={28} />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
