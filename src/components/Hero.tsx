import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-cream/20 via-transparent to-luxury-cream"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="block text-xs uppercase tracking-[0.4em] mb-6 font-medium text-luxury-brown/60"
        >
          Est. 1924 • London
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-serif font-light leading-tight mb-8"
        >
          The Art of <br />
          <span className="italic text-gold">Refined</span> Living
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="px-10 py-4 bg-luxury-brown text-luxury-cream uppercase tracking-widest text-xs hover:bg-gold-dark transition-all duration-500 rounded-sm">
            Explore Collection
          </button>
          <button className="px-10 py-4 border border-luxury-brown/30 uppercase tracking-widest text-xs hover:border-gold-light hover:text-gold-light transition-all duration-500 rounded-sm">
            Our Heritage
          </button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold-light to-transparent"></div>
      </motion.div>
    </section>
  );
}
