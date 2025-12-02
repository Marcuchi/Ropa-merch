import React from 'react';
import { Calendar, MapPin, Trophy } from 'lucide-react';
import { EVENTS } from '../constants';

const Events: React.FC = () => {
  return (
    <section id="eventos" className="py-24 bg-sq-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            CALENDARIO DE <span className="text-gradient">EVENTOS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            No te pierdas ninguna de nuestras actividades. Desde clases iniciales hasta campeonatos profesionales.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((event) => (
            <div 
              key={event.id} 
              className={`relative rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group ${
                event.highlight ? 'ring-2 ring-fuchsia-500 shadow-[0_0_30px_rgba(192,38,211,0.2)]' : 'border border-gray-800 bg-sq-panel'
              }`}
            >
              {event.highlight && (
                <div className="absolute top-0 right-0 bg-fuchsia-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-20">
                  DESTACADO
                </div>
              )}
              
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center text-cyan-400 mb-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="font-mono font-bold">{event.date}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {event.title}
                </h3>
                
                <div className="flex items-center text-gray-500 mb-6 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {event.location}
                </div>
                
                <p className="text-gray-400 mb-6 flex-grow border-l-2 border-gray-700 pl-4">
                  {event.description}
                </p>

                {event.highlight ? (
                  <button className="w-full bg-gradient-brand text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    <Trophy className="w-4 h-4" />
                    Inscribirse Ahora
                  </button>
                ) : (
                  <button className="w-full border border-gray-600 text-white font-bold py-3 rounded-lg hover:bg-white/5 transition-colors">
                    Más Info
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;