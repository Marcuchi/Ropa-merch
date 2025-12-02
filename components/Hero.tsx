import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1596561175658-0098df65e156?q=80&w=2070&auto=format&fit=crop" 
            alt="Karting track" 
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sq-dark/80 via-sq-dark/60 to-sq-dark"></div>
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-fuchsia-500/10 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-cyan-400 font-bold tracking-widest uppercase mb-4 animate-pulse">
            Academia de Karting Femenino
        </h2>
        <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 leading-tight">
          LA VELOCIDAD <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
            NO TIENE GÉNERO
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 mb-10">
          Formamos a las próximas campeonas en Colonia Caroya. 
          Unite a la comunidad de mujeres más rápida de Córdoba.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#eventos" className="group bg-white text-sq-dark hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center">
            Ver Próximas Carreras
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#academia" className="px-8 py-4 rounded-lg font-bold text-lg border border-white/30 text-white hover:bg-white/10 transition-all backdrop-blur-sm">
            Sobre Nosotros
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;