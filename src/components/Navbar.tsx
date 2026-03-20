import { motion } from "motion/react";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-luxury-cream/80 backdrop-blur-md border-b border-luxury-brown/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="hidden lg:flex space-x-8 text-xs uppercase tracking-[0.2em] font-medium">
            <a href="#" className="hover:text-gold-light transition-colors">Collections</a>
            <a href="#" className="hover:text-gold-light transition-colors">Bespoke</a>
            <a href="#" className="hover:text-gold-light transition-colors">Heritage</a>
          </div>

          <div className="flex-shrink-0">
            <h1 className="text-3xl font-serif tracking-widest uppercase text-gold">Aurelius</h1>
          </div>

          <div className="flex items-center space-x-6">
            <button className="p-2 hover:text-gold-light transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className="p-2 hover:text-gold-light transition-colors relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-gold-light rounded-full"></span>
            </button>
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-luxury-cream border-b border-luxury-brown/10 px-6 py-8 space-y-6 text-center uppercase tracking-widest text-sm"
        >
          <a href="#" className="block py-2">Collections</a>
          <a href="#" className="block py-2">Bespoke</a>
          <a href="#" className="block py-2">Heritage</a>
          <a href="#" className="block py-2">Store Locator</a>
        </motion.div>
      )}
    </nav>
  );
}
