import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { MERCH_ITEMS } from '../constants';

const Merch: React.FC = () => {
  return (
    <section id="merch" className="py-24 bg-sq-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            OFFICIAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">MERCH</span>
          </h2>
          <p className="text-gray-400">Llevá la velocidad con vos. Diseños exclusivos Speed Queens.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MERCH_ITEMS.map((item) => (
            <div key={item.id} className="group relative">
              <div className="aspect-[1/1] w-full overflow-hidden rounded-lg bg-gray-800 relative border border-gray-700">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-black font-bold py-2 px-6 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    Ver Producto
                  </button>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <p className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-1">{item.category}</p>
                  <h3 className="text-lg font-medium text-white">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {item.name}
                    </a>
                  </h3>
                </div>
                <p className="text-lg font-medium text-gray-300">${item.price.toLocaleString()}</p>
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500 group-hover:text-fuchsia-400 transition-colors">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Agregar al carrito
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <button className="border border-white/20 text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-colors uppercase tracking-wider">
                Ver Tienda Completa
            </button>
        </div>
      </div>
    </section>
  );
};

export default Merch;