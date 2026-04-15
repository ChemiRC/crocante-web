import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-crocante-dark text-white font-sans">
      
      {/* 1. SECCIÓN PRINCIPAL (HERO) */}
      <header className="flex flex-col items-center justify-center h-screen border-b border-white/10 relative overflow-hidden">
        {/* Efecto de luz tenue de fondo */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-crocante-gold to-transparent"></div>

        <h1 className="text-7xl md:text-9xl font-serif text-white z-10 drop-shadow-lg">
          Crocante
        </h1>
        <p className="mt-4 text-crocante-gold tracking-[0.4em] uppercase text-sm md:text-base z-10 text-center px-4">
          Repostería con intención
        </p>

        {/* BOTÓN DE INSTAGRAM */}
        <a 
          href="https://www.instagram.com/crocante_reposteria?igsh=dm9ib3d0ZmkzdnZn" 
          target="_blank" 
          rel="noreferrer"
          className="z-10 mt-8 text-white/50 hover:text-crocante-gold transform hover:scale-110 transition-all duration-300"
          aria-label="Visitar Instagram de Crocante"
        >
          {/* Código SVG que dibuja el logo de Instagram */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </header>

      {/* 2. SECCIÓN DE CATERING / RITUALES */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-center text-2xl tracking-widest text-crocante-gold mb-16 uppercase">
          Proyectos de Catering
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-center bg-white/5 p-10 rounded-2xl border border-white/10 shadow-2xl hover:border-crocante-gold/30 transition-colors duration-500">
          <div className="flex-1 space-y-6">
            <h3 className="text-4xl font-serif italic text-white">Ritual Dulce de Fin de Año</h3>
            <p className="opacity-80 font-light leading-relaxed text-lg">
              Una experiencia diseñada para compartir. Disfruta de nuestra combinación <span className="text-crocante-gold">Oro y Miel</span> (naranja, mantequilla y romero) junto a la <span className="text-crocante-gold">Gelatina Origen</span> (frutos del bosque, libre de azúcar).
            </p>
            <p className="text-3xl font-bold text-white">$750 MXN <span className="text-sm font-normal opacity-60">por ambos productos</span></p>
            
            <a 
              href="https://wa.me/523325482404" 
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 border border-crocante-gold text-crocante-gold px-8 py-3 rounded-full hover:bg-crocante-gold hover:text-black transition-all text-sm tracking-widest uppercase font-semibold"
            >
              Reservar Pedido
            </a>
          </div>
          
          {/* Espacio reservado para la imagen de la promoción */}
          <div className="w-full md:w-1/2 aspect-square bg-[#111] rounded-xl border border-white/10 flex items-center justify-center opacity-60 overflow-hidden relative group">
             <div className="absolute inset-0 bg-crocante-gold/5 group-hover:bg-transparent transition-colors duration-500"></div>
             <p className="text-xs tracking-widest opacity-50 uppercase text-center px-4">
                [ Aquí irá la imagen de Oro y Miel + Gelatina Origen ]
             </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;