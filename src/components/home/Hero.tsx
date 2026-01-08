import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-ghee.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-ghee-gold blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-ghee-amber blur-3xl"
        />
        <motion.div
          animate={{
            y: [-20, 20, -20],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-ghee-gold/10 blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 bg-ghee-gold/10 rounded-full border border-ghee-gold/20"
            >
              <span className="text-sm font-medium text-ghee-amber">
                ✨ 100% Pure & Natural
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight"
            >
              Pure Desi Ghee,{" "}
              <span className="text-gradient-gold">
                From Our Farms
              </span>{" "}
              to Your Home
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              Experience the authentic taste of traditional Bilona method ghee. Made with love from grass-fed desi cows, bringing health and flavor to every meal.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-muted-foreground"
            >
              {["Traditional Bilona Method", "No Preservatives", "Farm Fresh"].map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-background/50 rounded-full backdrop-blur-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-ghee-gold animate-pulse" />
                  {badge}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <Button variant="hero" size="xl" asChild className="group">
                <Link to="/contact">
                  Order Now
                  <motion.span
                    className="inline-block ml-1"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Floating decoration */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 w-20 h-20 bg-ghee-gold/20 rounded-2xl backdrop-blur-sm z-20 flex items-center justify-center"
              >
                <span className="text-3xl">🥄</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-ghee-amber/20 rounded-2xl backdrop-blur-sm z-20 flex items-center justify-center"
              >
                <span className="text-4xl">🐄</span>
              </motion.div>

              <img
                src={heroImage}
                alt="Pure Desi Cow Ghee in traditional brass bowl"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-gold"
              />
              
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-ghee-gold/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Decorative circles */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border-2 border-ghee-gold/10 rounded-full -z-10"
            />
            <motion.div
              animate={{ scale: [1.1, 1, 1.1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-ghee-gold/5 rounded-full -z-10"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-ghee-gold rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
