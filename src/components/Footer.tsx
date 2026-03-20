import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-luxury-brown text-luxury-cream pt-24 pb-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-serif tracking-widest uppercase text-gold mb-8">Aurelius</h2>
            <p className="text-sm text-luxury-cream/60 leading-relaxed font-light">
              Crafting timeless elegance since 1924. Our commitment to excellence is reflected in every stitch, every tick, and every drop.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-8 text-gold-light">The House</h4>
            <ul className="space-y-4 text-sm font-light text-luxury-cream/70">
              <li><a href="#" className="hover:text-gold-light transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-gold-light transition-colors">Craftsmanship</a></li>
              <li><a href="#" className="hover:text-gold-light transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-gold-light transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-8 text-gold-light">Services</h4>
            <ul className="space-y-4 text-sm font-light text-luxury-cream/70">
              <li><a href="#" className="hover:text-gold-light transition-colors">Bespoke Orders</a></li>
              <li><a href="#" className="hover:text-gold-light transition-colors">Care & Repair</a></li>
              <li><a href="#" className="hover:text-gold-light transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-gold-light transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-8 text-gold-light">Newsletter</h4>
            <p className="text-sm font-light text-luxury-cream/70 mb-6">Join the inner circle for exclusive previews.</p>
            <div className="flex border-b border-luxury-cream/20 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none text-sm w-full placeholder:text-luxury-cream/30"
              />
              <button className="text-gold-light hover:text-white transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-luxury-cream/10 gap-8">
          <div className="flex space-x-6">
            <a href="#" className="text-luxury-cream/40 hover:text-gold-light transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-luxury-cream/40 hover:text-gold-light transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-luxury-cream/40 hover:text-gold-light transition-colors"><Twitter size={20} /></a>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-cream/30">
            © 2026 Aurelius Luxury Ltd. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-[10px] uppercase tracking-[0.2em] text-luxury-cream/30">
            <a href="#" className="hover:text-luxury-cream transition-colors">Privacy</a>
            <a href="#" className="hover:text-luxury-cream transition-colors">Terms</a>
            <a href="#" className="hover:text-luxury-cream transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
