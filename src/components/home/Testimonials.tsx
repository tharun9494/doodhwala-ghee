import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    quote:
      "The best ghee I've ever tasted! The aroma reminds me of my grandmother's homemade ghee. Truly authentic.",
    rating: 5,
  },
  {
    name: "Rajesh Patel",
    location: "Mumbai",
    quote:
      "Finally found ghee that is pure and chemical-free. My family's health has improved since we switched to DOODHWALA.",
    rating: 5,
  },
  {
    name: "Anita Verma",
    location: "Bangalore",
    quote:
      "Perfect for cooking and religious purposes. The golden color and rich taste speak of its purity.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="text-sm font-medium text-ghee-amber uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">
            What Our <span className="text-gradient-gold">Customers</span> Say
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hear from families who have made DOODHWALA a part of their daily lives.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-6 md:p-8 bg-cream-warm rounded-2xl shadow-soft hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-ghee-gold text-ghee-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ghee-gold/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-ghee-amber">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
