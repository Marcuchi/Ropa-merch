import React from 'react';
import { MapPin, Instagram } from 'lucide-react';
import { SOCIALS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="academia" className="py-24 bg-sq-panel border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                QUIENES <span className="text-cyan-400">SOMOS</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                <strong className="text-white">Speed Queens</strong> nace de la pasión por el automovilismo y la necesidad de crear un espacio seguro y profesional para mujeres en el deporte motor.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mt-4">
                Ubicadas en el corazón fierrero de Córdoba, en <strong className="text-fuchsia-400">Colonia Caroya</strong>, ofrecemos entrenamiento de alto rendimiento, mecánica básica y estrategia de carrera. Nuestro objetivo es romper barreras y llevar a nuestras pilotos a lo más alto del podio.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {SOCIALS.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-colors border border-gray-700"
                >
                  {social.icon}
                  Seguinos en {social.name}
                </a>
              ))}
            </div>

            <div className="p-6 bg-sq-dark rounded-xl border border-gray-800">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-fuchsia-500 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-lg">Nuestra Ubicación</h4>
                  <p className="text-gray-400">Kartódromo de Colonia Caroya</p>
                  <p className="text-gray-400">Ruta E66, Córdoba, Argentina</p>
                  <div className="mt-4 text-sm text-cyan-400 font-bold cursor-pointer hover:underline">
                    Ver en Google Maps &rarr;
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Decorative frames */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-cyan-500/30 rounded-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-fuchsia-500/30 rounded-2xl"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1574515598684-2a6237583e74?q=80&w=2070&auto=format&fit=crop" 
              alt="Piloto femenina preparándose" 
              className="relative w-full rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;