import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Eye, Target, Shield, Sparkles, Users } from "lucide-react";
import farmImage from "@/assets/farm-cows.jpg";
import bilonaImage from "@/assets/bilona-process.jpg";

const values = [
  {
    icon: Heart,
    title: "Tradition & Heritage",
    description: "We preserve the age-old Bilona method passed down through generations, ensuring every drop carries the essence of our ancestors' wisdom.",
  },
  {
    icon: Shield,
    title: "Uncompromising Purity",
    description: "No shortcuts, no additives. Our ghee is made from the milk of grass-fed desi cows, free from chemicals and preservatives.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We support local farmers and their families, creating sustainable livelihoods while delivering quality to your doorstep.",
  },
  {
    icon: Sparkles,
    title: "Quality Excellence",
    description: "Every batch is tested rigorously. We take pride in delivering only the finest, most aromatic ghee to your kitchen.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium text-ghee-amber uppercase tracking-wider">
                Our Story
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
                The <span className="text-gradient-gold">DOODHWALA</span> Story
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                A journey from lush green pastures to your kitchen, rooted in tradition and driven by a passion for purity.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative">
                <img
                  src={farmImage}
                  alt="Desi cows grazing in green pastures"
                  className="w-full rounded-2xl shadow-medium"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-ghee-gold/10 rounded-full blur-2xl -z-10" />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  From Humble Beginnings to{" "}
                  <span className="text-gradient-gold">Premium Quality</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    DOODHWALA was born from a simple yet profound realization – the ghee our grandmothers made at home was irreplaceable. That rich aroma, that golden color, that pure taste – it was more than just food; it was a connection to our roots.
                  </p>
                  <p>
                    In an age of mass production and adulteration, we decided to go back to the basics. We partnered with local farmers who share our values, working with desi cows that roam freely and graze on natural pastures.
                  </p>
                  <p>
                    Today, DOODHWALA stands as a symbol of purity, trust, and tradition. Every jar of our ghee carries the legacy of generations and the promise of uncompromising quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bilona Method Section */}
        <section className="py-16 md:py-24 bg-cream-warm">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1 space-y-6">
                <span className="text-sm font-medium text-ghee-amber uppercase tracking-wider">
                  Ancient Wisdom
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  The Sacred <span className="text-gradient-gold">Bilona</span> Method
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The Bilona method is an ancient Indian technique where curd is hand-churned using a wooden churner (Bilona) to extract butter. This butter is then slow-cooked on a low flame to produce the purest form of ghee.
                  </p>
                  <p>
                    Unlike industrial processes that use cream separation, the Bilona method preserves the wholesome goodness of A2 milk, resulting in ghee that is richer in nutrients and has that distinctive, irresistible aroma.
                  </p>
                  <p>
                    Every spoonful of DOODHWALA ghee is a result of this time-honored process, bringing you the authentic taste of tradition.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2 relative">
                <img
                  src={bilonaImage}
                  alt="Traditional Bilona churning process"
                  className="w-full rounded-2xl shadow-medium"
                />
                <div className="absolute -top-4 -left-4 w-28 h-28 bg-ghee-amber/15 rounded-full blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Mission */}
              <div className="p-8 md:p-10 bg-cream-warm rounded-2xl shadow-soft hover-lift">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-ghee-gold/10 text-ghee-amber mb-6">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To bring the authentic taste of pure desi ghee to every Indian household, preserving the traditional Bilona method while supporting local farmers and sustainable practices. We believe that every family deserves access to pure, unadulterated ghee that nourishes both body and soul.
                </p>
              </div>

              {/* Vision */}
              <div className="p-8 md:p-10 bg-cream-warm rounded-2xl shadow-soft hover-lift">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-ghee-gold/10 text-ghee-amber mb-6">
                  <Eye size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become India's most trusted desi ghee brand, known for our unwavering commitment to quality, purity, and tradition. We envision a future where every meal is enriched with the goodness of authentic ghee, and where traditional dairy farming thrives alongside modern values.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-cream-warm">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-sm font-medium text-ghee-amber uppercase tracking-wider">
                Our Values
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-foreground">
                What <span className="text-gradient-gold">Drives</span> Us
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="text-center p-6 rounded-2xl bg-background hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-ghee-gold/10 text-ghee-amber mb-5">
                    <value.icon size={28} />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-brown-deep via-brown-earth to-brown-deep">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-cream-light">
                Experience the <span className="text-ghee-gold">Difference</span>
              </h2>
              <p className="mt-4 text-cream-warm/80">
                Join thousands of families who have made DOODHWALA their trusted choice for pure desi ghee.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">Order Now</Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild className="border-ghee-gold text-ghee-gold hover:bg-ghee-gold hover:text-brown-deep">
                  <Link to="/">Back to Home</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
