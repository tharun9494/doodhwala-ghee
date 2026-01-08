import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import farmImage from "@/assets/farm-cows.jpg";

const highlights = [
  "Grass-fed desi cows in natural pastures",
  "No antibiotics or growth hormones",
  "Sustainable farming practices",
  "Supporting local farmer communities",
];

const FarmSection = () => {
  return (
    <section className="py-20 md:py-28 bg-cream-warm">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 space-y-6">
            <span className="text-sm font-medium text-ghee-amber uppercase tracking-wider">
              Farm to Table
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Straight From Our{" "}
              <span className="text-gradient-gold">Green Pastures</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our desi cows roam freely in the lush green fields of Punjab, eating natural grass and living stress-free lives. This care reflects in every spoonful of our ghee - rich, aromatic, and full of goodness.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-ghee-amber shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button variant="hero" size="lg" asChild>
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <img
              src={farmImage}
              alt="Desi cows grazing in green pastures at sunrise"
              className="w-full rounded-2xl shadow-medium"
            />
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-4 md:left-6 bg-background p-5 rounded-xl shadow-medium">
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
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-28 h-28 bg-ghee-gold/15 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmSection;
