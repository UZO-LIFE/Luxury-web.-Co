import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Collection } from "./components/Collection";
import { Footer } from "./components/Footer";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold-light selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Featured Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 border-t border-l border-gold-light/30"></div>
              <img 
                src="https://images.unsplash.com/photo-1511406361295-0a5ff814c0ad?auto=format&fit=crop&q=80&w=1000" 
                alt="Craftsmanship" 
                className="w-full h-[600px] object-cover rounded-sm shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b border-r border-gold-light/30"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-[0.4em] text-gold-dark mb-6 block font-semibold">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Crafting Legacies, <br />Not Just Luxury.</h2>
              <p className="text-luxury-brown/70 leading-relaxed mb-10 font-light text-lg">
                At Aurelius, we believe that true luxury is found in the details that others overlook. Every piece in our collection is a testament to a century of artisanal expertise, blending traditional techniques with contemporary vision.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-[1px] bg-gold-light mt-3"></div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">Sustainable Sourcing</h4>
                    <p className="text-sm text-luxury-brown/60 font-light">Only the finest ethically sourced materials enter our workshops.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-[1px] bg-gold-light mt-3"></div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">Artisanal Mastery</h4>
                    <p className="text-sm text-luxury-brown/60 font-light">Each item is handcrafted by master artisans with decades of experience.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Collection />

        {/* Quote Section */}
        <section className="py-32 bg-luxury-brown text-luxury-cream text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-4xl font-serif text-gold-light mb-8 block">"</span>
            <h2 className="text-3xl md:text-4xl font-serif italic font-light leading-relaxed mb-8">
              Luxury must be comfortable, otherwise it is not luxury.
            </h2>
            <div className="w-12 h-[1px] bg-gold-light mx-auto mb-4"></div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-light font-medium">Coco Chanel</p>
          </motion.div>
        </section>

        {/* Instagram/Social Grid */}
        <section className="py-24 bg-luxury-cream overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 flex justify-between items-end">
            <h2 className="text-3xl font-serif">The Aurelius World</h2>
            <p className="text-xs uppercase tracking-widest text-luxury-brown/50">#AureliusLegacy</p>
          </div>
          <div className="flex gap-4 animate-scroll">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex-shrink-0 w-72 h-72 grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer">
                <img 
                  src={`https://picsum.photos/seed/luxury${i}/600/600`} 
                  alt="Social" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
