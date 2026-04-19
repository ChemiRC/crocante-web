import React from 'react';

// ARREGLO DE DATOS: Aquí vive la información de tus pasteles.
// Si quieres agregar uno nuevo, solo lo añades a esta lista.
const pasteles = [
  {
    imagen: "/avellanisimo-crocante.jpeg",
    categoria: "Clásicos y Cremosos",
    titulo: "Avellanísimo",
    slogan: "Intensidad que abraza",
    descripcion: "Cheesecake estilo NY con crema de avellanas tostadas, dulce de leche y tropiezos de avellana.",
    frases: ["Alma neoyorquina.", "Mano mexicana.", "Gozo hecho postre."],
    waName: "Avellanísimo"
  },
  {
    imagen: "/yucatan-crocante.jpeg",
    categoria: "Tropical y Auténtico",
    titulo: "Yucatán",
    slogan: "Caribe que acaricia",
    descripcion: "Bizcocho de coco y ron, humectado con un toque del Caribe, coronado con láminas de piña y coco.",
    frases: ["Dulzura bajo el sol maya.", "Un susurro de ron y selva.", "Tesoro en el paladar."],
    waName: "Yucatán"
  },
  {
    imagen: "/oro-y-miel-crocante.jpeg",
    categoria: "Sutiles y Cítricos",
    titulo: "Oro y Miel",
    slogan: "Delicadeza que ilumina",
    descripcion: "Bizcocho de naranja suave con romero fresco, decorado con rodajas naturales y polvo dorado.",
    frases: ["Luz en forma de pastel.", "Oro comestible.", "Un ritual de conexión."],
    waName: "Oro y Miel"
  },
  {
    imagen: "/zadquiel-crocante.jpeg",
    categoria: "Sutiles y Cítricos",
    titulo: "Zadquiel",
    slogan: "Delicadeza que ilumina",
    descripcion: "Bizcocho de plátano con betún de queso crema, decorado con plátano fresco y hoja dorada.",
    frases: ["Armonía celestial.", "Paz manifiesta.", "Reflejo de la divinidad."],
    waName: "Zadquiel"
  },
  {
    imagen: "/anillo-cacao-crocante.jpeg",
    categoria: "Chocolate Oscuro",
    titulo: "Anillo Cacao",
    slogan: "Sabiduría en reflejos",
    descripcion: "Pastel de chocolate cubierto con ganache y coronado con frambuesas y toque de oro.",
    frases: ["Perfección en el detalle.", "Anillo de satisfacción.", "Manjar para el corazón."],
    waName: "Anillo Cacao"
  },
  {
    imagen: "/amor-de-dos-crocante.jpeg",
    categoria: "Frutas y Dualidades",
    titulo: "Amor de Dos",
    slogan: "Delicadeza que toca",
    descripcion: "Bizcocho de vainilla y queso que funde la dulce compañía con el toque ácido de frambuesas.",
    frases: ["Dualidad comestible.", "Dulce para compartir.", "Unión perfecta."],
    waName: "Amor de Dos"
  },
  {
    imagen: "/hapy-corazoncito-crocante.jpeg",
    categoria: "Frutas y Dualidades",
    titulo: "Corazoncito",
    slogan: "Deleite de alegría",
    descripcion: "Bizcocho de vainilla que late. Su cobertura de crema de queso y frambuesas evocan gozo vital.",
    frases: ["Latidos de alegría.", "Celebración pastel.", "Gozo en rebanada."],
    waName: "Happy Corazoncito"
  },
  {
    imagen: "/amorcito-mio-crocante.jpeg",
    categoria: "Sutiles y Cítricos",
    titulo: "Amorcito Mío",
    slogan: "Delicadeza que ilumina",
    descripcion: "Pastel de queso cubierto con rodajas de fresas frescas y crema de fresa.",
    frases: ["Abrazo de postre.", "Invitación dulce.", "Pasión y frescura."],
    waName: "Amorcito Mío"
  },
  {
    imagen: "/tentación-crocante.jpeg",
    categoria: "Frutas y Dualidades",
    titulo: "Tentación",
    slogan: "El equilibrio perfecto",
    descripcion: "Rosca de zanahoria con nuez y chocolate blanco. Coronada con crema de queso y fresas.",
    frases: ["Dualidad del azúcar.", "Promesa del fruto.", "Tentación divina."],
    waName: "Tentación"
  }
];

function App() {
  return (
    <div 
      className="min-h-screen font-sans selection:bg-[#d4af37] selection:text-white bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.60), rgba(255, 255, 255, 0.85)), url('https://images.unsplash.com/photo-1595856461942-70b5ce98e9ab?q=80&w=2071&auto=format&fit=crop')` }}
    >
      
      {/* SECCIÓN PRINCIPAL (HERO) */}
      <header className="flex flex-col items-center justify-center h-screen relative text-center px-4">
        <img 
          src="/logo-crocante-dorado.PNG" 
          alt="Crocante Logo Dorado" 
          className="w-80 md:w-[45rem] z-10 drop-shadow-xl object-contain"
        />

        <p className="mt-2 text-[#d4af37] tracking-[0.5em] uppercase text-base md:text-xl z-10 font-bold bg-white/70 px-8 py-3 rounded-full backdrop-blur-md shadow-sm">
          Repostería con intención
        </p>

        <div className="flex items-center gap-10 mt-5 z-10">
          <a href="https://drive.google.com/file/d/1tJjf7eTc-TE7ZiTH3TmuxR7pTQe76Zu2/view" target="_blank" rel="noreferrer" className="transform hover:scale-110 transition-all duration-300" aria-label="Ver Menú Crocante" title="Ver Menú">
            <img src="/globo-batidor-dorado.PNG" alt="Icono Globo Batidor Dorado" className="w-14 h-14 object-contain" style={{ transform: 'rotate(-5deg)' }} />
          </a>

          <div className="h-10 w-[1px] bg-[#d4af37]/50"></div>

          <a href="https://www.instagram.com/crocante_reposteria?igsh=dm9ib3d0ZmkzdnZn" target="_blank" rel="noreferrer" className="text-[#d4af37] transform hover:scale-110 hover:text-[#ff69b4] transition-all duration-300" aria-label="Visitar Instagram de Crocante" title="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>

        {/* INDICADOR DE SCROLL FUNCIONAL */}
        <div 
          onClick={() => document.getElementById('descubre').scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-80 hover:opacity-100 animate-bounce z-10 cursor-pointer transition-opacity duration-300"
          title="Descubrir menú"
        >
          <p className="text-[10px] md:text-xs tracking-[0.4em] text-[#c5a028] uppercase font-bold mb-1">Descubre</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c5a028" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </header>

      {/* SECCIÓN FRASE DEL ALMA */}
      <section id="descubre" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <p className="text-2xl md:text-3xl font-serif text-[#a67c00] italic leading-relaxed">
          "Una experiencia visual y sensorial desde el alma,<br className="hidden md:block" /> donde la repostería se encuentra con la belleza del ser."
        </p>
      </section>

      {/* SECCIÓN EDICIÓN ESPECIAL 10 DE MAYO */}
      <section className="pb-24 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-xl border border-gray-200 shadow-xl shadow-black/5 flex flex-col-reverse md:flex-row-reverse gap-8 md:gap-12 items-center group">
          <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
            <p className="text-[11px] sm:text-sm tracking-[0.15em] sm:tracking-[0.3em] text-[#c5a028] uppercase font-bold whitespace-nowrap">
              — Edición Especial 10 de Mayo —
            </p>
            <div className="space-y-1 md:space-y-2">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#a67c00] tracking-tight">MAMÁ,</h3>
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#d4af37] italic">hoy te entendí</h4>
            </div>
            <p className="text-xl sm:text-2xl font-light text-[#d4af37] italic">Amor en capas</p>
            <p className="text-gray-700 font-light text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              Pastel de queso mascarpone, frutos rojos y litchie
            </p>
            <p className="text-[#c5a028] text-[11px] sm:text-xs md:text-sm italic leading-normal md:leading-loose mb-6 md:mb-10 border-t border-[#d4af37]/20 pt-4 md:pt-6">
              Pureza infinita que vuelve a su origen. <br/>
              Un abrazo de dulzura para mamá. <br/>
              El regalo más noble para su alma.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Edici%C3%B3n%2010%20de%20Mayo%20(Amor%20en%20capas)." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full md:w-auto inline-block bg-[#d4af37] text-white px-6 py-3.5 md:px-10 md:py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-500 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold"
            >
              Consultar Disponibilidad
            </a>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center relative overflow-hidden rounded-lg shadow-md aspect-square">
             <img src="/pastel10demayo.jpeg" alt="Pastel Amor en Capas" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* SECCIÓN NUEVOS PRODUCTOS MAPADOS DINÁMICAMENTE */}
      <section className="pb-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
          
          {pasteles.map((pastel, index) => (
            <div key={index} className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 md:p-10 rounded-xl border border-gray-200 shadow-xl shadow-black/5 flex flex-col items-center text-center group">
              <div className="w-full aspect-square overflow-hidden rounded-lg mb-3 sm:mb-4 md:mb-8 relative">
                <img 
                  src={pastel.imagen} 
                  alt={`Pastel ${pastel.titulo}`} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h2 className="text-[9px] sm:text-[11px] md:text-sm tracking-[0.15em] md:tracking-[0.3em] text-[#c5a028] uppercase font-bold mb-1.5 md:mb-3">
                {pastel.categoria}
              </h2>
              <h3 className="text-lg sm:text-xl md:text-4xl font-serif text-[#a67c00] leading-tight mb-1.5 md:mb-3">
                {pastel.titulo}
              </h3>
              <p className="text-[#d4af37] italic text-[11px] sm:text-xs md:text-lg mb-2 md:mb-6">
                {pastel.slogan}
              </p>
              <p className="text-gray-600 font-light text-[10px] sm:text-[11px] md:text-base leading-snug md:leading-relaxed mb-3 md:mb-6 w-full">
                {pastel.descripcion}
              </p>
              <p className="text-[#c5a028] text-[9px] sm:text-[10px] md:text-sm italic leading-normal md:leading-loose mb-4 md:mb-10 border-t border-[#d4af37]/20 pt-3 md:pt-6 w-full">
                {pastel.frases[0]} <br/>
                {pastel.frases[1]} <br/>
                {pastel.frases[2]}
              </p>
              <a 
                href={`https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20${encodeURIComponent(pastel.waName)}.`} 
                target="_blank"
                rel="noreferrer"
                className="mt-auto w-full bg-[#d4af37] text-white px-2 py-2.5 md:px-6 md:py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-500 text-[9px] sm:text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase font-bold"
              >
                Consultar <span className="hidden xl:inline">Disponibilidad</span>
              </a>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}

export default App;