import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919876543210";
  const message = "Hello! I'm interested in DOODHWALA Pure Desi Ghee.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <span className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-foreground text-background text-sm px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
        Chat with us!
      </span>
      
      {/* Button */}
      <div className="relative">
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
        
        {/* Main Button */}
        <div className="relative w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer">
          <MessageCircle className="w-7 h-7 text-white fill-white" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
