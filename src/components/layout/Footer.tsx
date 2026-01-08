import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-deep text-cream-light relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--ghee-gold)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-display font-bold text-ghee-gold">
              DOODHWALA
            </h3>
            <p className="text-cream-warm/80 text-sm leading-relaxed max-w-xs">
              Pure Desi Cow Ghee made with traditional Bilona method. From our farms to your home, we deliver health and tradition.
            </p>
            <div className="flex gap-4 pt-2">
              {["facebook", "instagram", "twitter"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-cream-warm/10 flex items-center justify-center hover:bg-ghee-gold transition-colors duration-300"
                >
                  <span className="text-sm capitalize">{social[0].toUpperCase()}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-display font-semibold text-cream-light">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-cream-warm/80 hover:text-ghee-gold transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-display font-semibold text-cream-light">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm text-cream-warm/80 hover:text-ghee-gold transition-colors duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-ghee-gold/10 flex items-center justify-center group-hover:bg-ghee-gold transition-colors">
                  <Phone size={14} className="text-ghee-gold group-hover:text-brown-deep" />
                </div>
                +91 98765 43210
              </a>
              <a
                href="mailto:info@doodhwala.com"
                className="flex items-center gap-3 text-sm text-cream-warm/80 hover:text-ghee-gold transition-colors duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-ghee-gold/10 flex items-center justify-center group-hover:bg-ghee-gold transition-colors">
                  <Mail size={14} className="text-ghee-gold group-hover:text-brown-deep" />
                </div>
                info@doodhwala.com
              </a>
              <div className="flex items-start gap-3 text-sm text-cream-warm/80">
                <div className="w-8 h-8 rounded-lg bg-ghee-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-ghee-gold" />
                </div>
                <span>Farm Fresh Dairy, Village Gaon, District Amritsar, Punjab - 143001</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-cream-warm/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cream-warm/60 flex items-center gap-1">
              © {currentYear} DOODHWALA. Made with{" "}
              <Heart className="w-3 h-3 text-red-400 fill-red-400" /> in India
            </p>
            <p className="text-xs text-cream-warm/60">
              Pure Desi Ghee since generations
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
