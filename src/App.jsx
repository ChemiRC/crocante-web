import React from 'react';

// --- COMPONENTES SECUNDARIOS ---

const HeroSection = () => (
  <header className="flex flex-col items-center justify-center min-h-screen relative text-center px-4 pt-10">
    {/* LOGO DORADO */}
    <img 
      src="/logo-crocante-dorado.PNG" 
      alt="Crocante Logo Dorado" 
      className="w-80 md:w-[45rem] z-10 drop-shadow-2xl object-contain animate-fade-in"
    />

    {/* ESLOGAN CON EFECTO GLASSMORPHISM */}
    <div className="mt-6 z-10 bg-white/60 px-10 py-4 rounded-full backdrop-blur-lg border border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <p className="text-[#a67c00] tracking-[0.4em] uppercase text-sm md:text-lg font-bold">
        Repostería con intención
      </p>
    </div>

    {/* CONTENEDOR DE ENLACES */}
    <div className="flex items-center gap-12 mt-12 z-10 bg-white/40 px-8 py-3 rounded-full backdrop-blur-md">
      
      {/* BOTÓN DEL MENÚ EN PDF */}
      <a 
        href="https://drive.google.com/file/d/1tJjf7eTc-TE7ZiTH3TmuxR7pTQe76Zu2/view" 
        target="_blank" 
        rel="noreferrer"
        className="transform hover:scale-110 transition-transform duration-500 ease-out"
        aria-label="Ver Menú Crocante"
        title="Ver Menú"
      >
        <img 
          src="/globo-batidor-dorado.PNG" 
          alt="Icono Globo Batidor Dorado" 
          className="w-12 h-12 object-contain drop-shadow-md" 
          style={{ transform: 'rotate(-8deg)' }} 
        />
      </a>

      {/* DIVISOR VERTICAL */}
      <div className="h-8 w-[1px] bg-[#d4af37]/60"></div>

      {/* BOTÓN DE INSTAGRAM */}
      <a 
        href="https://www.instagram.com/crocante_reposteria?igsh=dm9ib3d0ZmkzdnZn" 
        target="_blank" 
        rel="noreferrer"
        className="text-[#d4af37] transform hover:scale-110 hover:text-[#ff69b4] transition-all duration-500 ease-out drop-shadow-md"
        aria-label="Visitar Instagram de Crocante"
        title="Instagram"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>
    </div>
  </header>
);

const PromoSection = () => (
  <section className="py-24 px-6 max-w-5xl mx-auto relative z-10">
    <div className="bg-white/95 p-10 md:p-16 rounded-2xl border border-[#d4af37]/20 shadow-2xl flex flex-col md:flex-row gap-16 items-center backdrop-blur-sm">
      
      <div className="flex-1 space-y-8 text-center md:text-left">
        <h2 className="text-xs md:text-sm tracking-[0.4em] text-[#a67c00] uppercase font-bold">
          — Edición Especial 10 de Mayo —
        </h2>
        
        <div className="space-y-3">
          <h3 className="text-6xl md:text-7xl font-serif text-[#a67c00] tracking-tighter">
            MAMÁ,
          </h3>
          <h4 className="text-4xl md:text-5xl font-serif text-[#d4af37] italic opacity-90">
            hoy te entendí
          </h4>
        </div>

        <p className="text-2xl font-light text-[#c5a028] italic">
          Amor en capas
        </p>
        
        <p className="text-gray-600 font-light text-lg leading-relaxed border-t border-[#d4af37]/30 pt-6">
          Pastel de queso mascarpone, <br/> frutos rojos y litchie
        </p>
        
        {/* BOTÓN WHATSAPP */}
        <a 
          href="https://wa.me/523325482404" 
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-4 bg-[#d4af37] text-white px-12 py-4 rounded-sm hover:bg-[#ff69b4] hover:shadow-[0_10px_20px_rgba(255,105,180,0.3)] hover:-translate-y-1 transition-all duration-500 text-xs tracking-[0.2em] uppercase font-bold"
        >
          Consultar Disponibilidad
        </a>
      </div>
      
      {/* FOTO DEL PASTEL */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative overflow-hidden rounded-xl shadow-lg group">
         {/* Capa superpuesta para darle un tono cálido al hacer hover */}
         <div className="absolute inset-0 bg-[#d4af37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
         <img 
            src="/pastel10demayo.jpeg" 
            alt="Pastel Amor en Capas" 
            className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-in-out"
         />
      </div>

    </div>
  </section>
);

// --- COMPONENTE PRINCIPAL ---

function App() {
  return (
    <div 
      className="min-h-screen font-sans selection:bg-[#d4af37] selection:text-white bg-cover bg-fixed bg-center relative"
      style={{ 
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.90)), url('https://images.unsplash.com/photo-1595856461942-70b5ce98e9ab?q=80&w=2071&auto=format&fit=crop')` 
      }}
    >
      <HeroSection />
      <PromoSection />
      
      {/* FOOTER SENCILLO */}
      <footer className="text-center py-8 text-[#a67c00] text-sm tracking-widest uppercase font-light relative z-10">
        © {new Date().getFullYear()} Crocante Repostería
      </footer>
    </div>
  );
}

export default App;