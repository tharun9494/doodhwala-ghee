import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ghee.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-ghee-gold blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-ghee-amber blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left animate-fade-up">
            <div className="inline-block px-4 py-1.5 bg-ghee-gold/10 rounded-full">
              <span className="text-sm font-medium text-ghee-amber">
                ✨ 100% Pure & Natural
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              Pure Desi Ghee,{" "}
              <span className="text-gradient-gold">From Our Farms</span> to Your Home
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Experience the authentic taste of traditional Bilona method ghee. Made with love from grass-fed desi cows, bringing health and flavor to every meal.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-ghee-gold" />
                Traditional Bilona Method
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-ghee-gold" />
                No Preservatives
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-ghee-gold" />
                Farm Fresh
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Order Now</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Pure Desi Cow Ghee in traditional brass bowl"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-medium"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-ghee-gold/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-ghee-amber/15 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
