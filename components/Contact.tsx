import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-sq-dark relative overflow-hidden">
        {/* Background gradient blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-sq-panel border border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl font-display font-bold text-center text-white mb-2">
            ¿LISTA PARA CORRER?
          </h2>
          <p className="text-center text-gray-400 mb-8">
            Dejanos tus datos y te contactamos para tu primera clase de prueba.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-sq-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-sq-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-400 mb-2">Interés Principal</label>
              <select 
                id="interest"
                className="w-full bg-sq-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              >
                <option>Clases de Iniciación</option>
                <option>Competición (Avanzado)</option>
                <option>Eventos Corporativos</option>
                <option>Otro</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
              <textarea 
                id="message"
                rows={4}
                className="w-full bg-sq-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="¿Tenés experiencia previa?"
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-gradient-brand text-white font-bold py-4 rounded-lg hover:opacity-90 transition-all transform active:scale-95 shadow-lg">
              ENVIAR CONSULTA
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;