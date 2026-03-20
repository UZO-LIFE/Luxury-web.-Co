import { motion } from "motion/react";

const products = [
  {
    id: 1,
    name: "The Sovereign Timepiece",
    category: "Horology",
    price: "£12,400",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    name: "Gilded Mahogany Trunk",
    category: "Leather Goods",
    price: "£4,200",
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    name: "Aurelius Signature Scent",
    category: "Fragrance",
    price: "£280",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1000"
  }
];

export function Collection() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <h3 className="text-sm uppercase tracking-[0.3em] text-gold-dark mb-4 font-semibold">Current Season</h3>
          <h2 className="text-4xl md:text-5xl font-serif">The Autumnal <br />Gold Collection</h2>
        </div>
        <a href="#" className="text-xs uppercase tracking-widest border-b border-luxury-brown pb-2 hover:text-gold-light hover:border-gold-light transition-all">
          View All Pieces
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {products.map((product, index) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-white">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-luxury-brown/0 group-hover:bg-luxury-brown/10 transition-colors duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-luxury-cream/90 backdrop-blur-sm">
                <button className="w-full py-3 bg-luxury-brown text-luxury-cream text-xs uppercase tracking-widest hover:bg-gold-dark transition-colors">
                  Quick View
                </button>
              </div>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-brown/50 mb-2">{product.category}</p>
            <h4 className="text-lg font-serif mb-1 group-hover:text-gold-dark transition-colors">{product.name}</h4>
            <p className="font-sans text-sm tracking-widest">{product.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
