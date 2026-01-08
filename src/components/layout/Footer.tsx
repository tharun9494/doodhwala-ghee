import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brown-deep text-cream-light">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-ghee-gold">
              DOODHWALA
            </h3>
            <p className="text-cream-warm/80 text-sm leading-relaxed max-w-xs">
              Pure Desi Cow Ghee made with traditional Bilona method. From our farms to your home, we deliver health and tradition.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold text-cream-light">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-sm text-cream-warm/80 hover:text-ghee-gold transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm text-cream-warm/80 hover:text-ghee-gold transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-sm text-cream-warm/80 hover:text-ghee-gold transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold text-cream-light">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm text-cream-warm/80 hover:text-ghee-gold transition-colors duration-200"
              >
                <Phone size={16} className="text-ghee-gold" />
                +91 98765 43210
              </a>
              <a
                href="mailto:info@doodhwala.com"
                className="flex items-center gap-3 text-sm text-cream-warm/80 hover:text-ghee-gold transition-colors duration-200"
              >
                <Mail size={16} className="text-ghee-gold" />
                info@doodhwala.com
              </a>
              <div className="flex items-start gap-3 text-sm text-cream-warm/80">
                <MapPin size={16} className="text-ghee-gold mt-0.5 shrink-0" />
                <span>Farm Fresh Dairy, Village Gaon, District Amritsar, Punjab - 143001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-cream-warm/20">
          <p className="text-center text-xs text-cream-warm/60">
            © {new Date().getFullYear()} DOODHWALA. All rights reserved. Pure Desi Ghee since generations.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
