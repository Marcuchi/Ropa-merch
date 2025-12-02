import React from 'react';
import { Flag, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Flag className="text-white w-5 h-5" />
            <span className="text-xl font-display font-bold text-white">
              SPEED QUEENS
            </span>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0 text-sm">
            <a href="#" className="hover:text-cyan-400 transition-colors">Términos</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Contacto</a>
          </div>

          <div className="text-sm flex items-center">
            Hecho con <Heart className="w-4 h-4 text-fuchsia-500 mx-1 fill-fuchsia-500" /> en Córdoba
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Speed Queens Academy. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;