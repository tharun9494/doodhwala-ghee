import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/common/AnimatedSection";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    quote:
      "The best ghee I've ever tasted! The aroma reminds me of my grandmother's homemade ghee. Truly authentic and delicious.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Rajesh Patel",
    location: "Mumbai",
    quote:
      "Finally found ghee that is pure and chemical-free. My family's health has improved since we switched to DOODHWALA.",
    rating: 5,
    avatar: "RP",
  },
  {
    name: "Anita Verma",
    location: "Bangalore",
    quote:
      "Perfect for cooking and religious purposes. The golden color and rich taste speak of its purity. Highly recommend!",
    rating: 5,
    avatar: "AV",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-ghee-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-ghee-amber/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-ghee-gold/10 rounded-full text-sm font-medium text-ghee-amber uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            What Our <span className="text-gradient-gold">Customers</span> Say
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Hear from families who have made DOODHWALA a part of their daily lives.
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.name}
              delay={index * 0.15}
              direction="up"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="relative h-full p-6 md:p-8 bg-cream-warm rounded-2xl shadow-soft group"
              >
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-ghee-gold rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 pt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <Star
                        size={18}
                        className="fill-ghee-gold text-ghee-gold"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ghee-gold to-ghee-amber flex items-center justify-center shadow-md">
                    <span className="text-sm font-bold text-primary-foreground">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      📍 {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
