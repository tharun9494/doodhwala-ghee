import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+91 98765 43210",
    link: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@doodhwala.com",
    link: "mailto:info@doodhwala.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: "Farm Fresh Dairy, Village Gaon, District Amritsar, Punjab - 143001",
    link: null,
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon - Sat: 9:00 AM - 7:00 PM",
    link: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium text-ghee-amber uppercase tracking-wider">
                Get In Touch
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
                Contact <span className="text-gradient-gold">Us</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                Have questions about our ghee? Want to place a bulk order? We'd love to hear from you!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <div className="p-8 md:p-10 bg-cream-warm rounded-2xl shadow-soft">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 bg-background border-border"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="h-12 bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="h-12 bg-background border-border"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-background border-border resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="order-1 lg:order-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                    Let's Connect
                  </h2>
                  <p className="text-muted-foreground">
                    Whether you're a home cook, a restaurant owner, or a wholesale buyer, we're here to serve you with the finest desi ghee.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  {contactInfo.map((info) => (
                    <div
                      key={info.title}
                      className="flex items-start gap-4 p-5 bg-cream-warm rounded-xl"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-ghee-gold/10 text-ghee-amber shrink-0">
                        <info.icon size={22} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-ghee-amber transition-colors text-sm"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm">
                            {info.details}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="pb-16 md:pb-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="rounded-2xl overflow-hidden shadow-medium h-80 md:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108889.18154380788!2d74.7844932!3d31.6339793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0x8fbd263103a38861!2sAmritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DOODHWALA Location"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
