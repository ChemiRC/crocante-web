import React from 'react';

function App() {
  return (
    <div 
      className="min-h-screen font-sans selection:bg-[#d4af37] selection:text-white bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.60), rgba(255, 255, 255, 0.85)), url('https://images.unsplash.com/photo-1595856461942-70b5ce98e9ab?q=80&w=2071&auto=format&fit=crop')` }}
    >
      
      {/* SECCIÓN PRINCIPAL (HERO) */}
      <header className="flex flex-col items-center justify-center h-screen relative text-center px-4">
        
        {/* LOGO DORADO */}
        <img 
          src="/logo-crocante-dorado.PNG" 
          alt="Crocante Logo Dorado" 
          className="w-80 md:w-[45rem] z-10 drop-shadow-xl object-contain"
        />

        {/* ESLOGAN */}
        <p className="mt-2 text-[#d4af37] tracking-[0.5em] uppercase text-base md:text-xl z-10 font-bold bg-white/70 px-8 py-3 rounded-full backdrop-blur-md shadow-sm">
          Repostería con intención
        </p>

        {/* CONTENEDOR DE ENLACES */}
        <div className="flex items-center gap-10 mt-5 z-10">
          
          {/* BOTÓN DEL MENÚ EN PDF */}
          <a 
            href="https://drive.google.com/file/d/1tJjf7eTc-TE7ZiTH3TmuxR7pTQe76Zu2/view" 
            target="_blank" 
            rel="noreferrer"
            className="transform hover:scale-110 transition-all duration-300"
            aria-label="Ver Menú Crocante"
            title="Ver Menú"
          >
            <img 
              src="/globo-batidor-dorado.PNG" 
              alt="Icono Globo Batidor Dorado" 
              className="w-14 h-14 object-contain" 
              style={{ transform: 'rotate(-5deg)' }} 
            />
          </a>

          {/* Divisor vertical */}
          <div className="h-10 w-[1px] bg-[#d4af37]/50"></div>

          {/* BOTÓN DE INSTAGRAM */}
          <a 
            href="https://www.instagram.com/crocante_reposteria?igsh=dm9ib3d0ZmkzdnZn" 
            target="_blank" 
            rel="noreferrer"
            className="text-[#d4af37] transform hover:scale-110 hover:text-[#ff69b4] transition-all duration-300"
            aria-label="Visitar Instagram de Crocante"
            title="Instagram"
          >
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
          <p className="text-[10px] md:text-xs tracking-[0.4em] text-[#c5a028] uppercase font-bold mb-1">
            Descubre
          </p>
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
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#a67c00] tracking-tight">
                MAMÁ,
              </h3>
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#d4af37] italic">
                hoy te entendí
              </h4>
            </div>

            <p className="text-xl sm:text-2xl font-light text-[#d4af37] italic">
              Amor en capas
            </p>
            
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
             <img 
                src="/pastel10demayo.jpeg" 
                alt="Pastel Amor en Capas" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
             />
          </div>

        </div>
      </section>

      {/* SECCIÓN NUEVOS PRODUCTOS */}
      <section className="pb-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10">

          {/* TARJETA PRODUCTO: AVELLANÍSIMO */}
          <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 md:p-10 rounded-xl border border-gray-200 shadow-xl shadow-black/5 flex flex-col items-center text-center group">
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-3 sm:mb-4 md:mb-8 relative">
              <img 
                src="/avellanisimo-crocante.jpeg" 
                alt="Pastel Avellanísimo" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h2 className="text-[9px] sm:text-[11px] md:text-sm tracking-[0.15em] md:tracking-[0.3em] text-[#c5a028] uppercase font-bold mb-1.5 md:mb-3">
              Clásicos y Cremosos
            </h2>
            <h3 className="text-lg sm:text-xl md:text-4xl font-serif text-[#a67c00] leading-tight mb-1.5 md:mb-3">
              Avellanísimo
            </h3>
            <p className="text-[#d4af37] italic text-[11px] sm:text-xs md:text-lg mb-2 md:mb-6">
              Intensidad que abraza
            </p>
            <p className="text-gray-600 font-light text-[10px] sm:text-[11px] md:text-base leading-snug md:leading-relaxed mb-3 md:mb-6 w-full">
              Cheesecake estilo NY con crema de avellanas tostadas, dulce de leche y tropiezos de avellana.
            </p>
            <p className="text-[#c5a028] text-[9px] sm:text-[10px] md:text-sm italic leading-normal md:leading-loose mb-4 md:mb-10 border-t border-[#d4af37]/20 pt-3 md:pt-6 w-full">
              Alma neoyorquina. <br/>
              Mano mexicana. <br/>
              Gozo hecho postre.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Avellan%C3%ADsimo." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-2 py-2.5 md:px-6 md:py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-500 text-[9px] sm:text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase font-bold"
            >
              Consultar <span className="hidden xl:inline">Disponibilidad</span>
            </a>
          </div>
          
          {/* TARJETA PRODUCTO: YUCATÁN */}
          <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 md:p-10 rounded-xl border border-gray-200 shadow-xl shadow-black/5 flex flex-col items-center text-center group">
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-3 sm:mb-4 md:mb-8 relative">
              <img 
                src="/yucatan-crocante.jpeg" 
                alt="Pastel Yucatán" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h2 className="text-[9px] sm:text-[11px] md:text-sm tracking-[0.15em] md:tracking-[0.3em] text-[#c5a028] uppercase font-bold mb-1.5 md:mb-3">
              Tropical y Auténtico
            </h2>
            <h3 className="text-lg sm:text-xl md:text-4xl font-serif text-[#a67c00] leading-tight mb-1.5 md:mb-3">
              Yucatán
            </h3>
            <p className="text-[#d4af37] italic text-[11px] sm:text-xs md:text-lg mb-2 md:mb-6">
              Caribe que acaricia
            </p>
            <p className="text-gray-600 font-light text-[10px] sm:text-[11px] md:text-base leading-snug md:leading-relaxed mb-3 md:mb-6 w-full">
              Bizcocho de coco y ron, humectado con un toque del Caribe, coronado con láminas de piña y coco.
            </p>
            <p className="text-[#c5a028] text-[9px] sm:text-[10px] md:text-sm italic leading-normal md:leading-loose mb-4 md:mb-10 border-t border-[#d4af37]/20 pt-3 md:pt-6 w-full">
              Dulzura bajo el sol maya. <br/>
              Un susurro de ron y selva. <br/>
              Tesoro en el paladar.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Yucat%C3%A1n." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-2 py-2.5 md:px-6 md:py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-500 text-[9px] sm:text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase font-bold"
            >
              Consultar <span className="hidden xl:inline">Disponibilidad</span>
            </a>
          </div>

          {/* TARJETA PRODUCTO: ORO Y MIEL */}
          <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 md:p-10 rounded-xl border border-gray-200 shadow-xl shadow-black/5 flex flex-col items-center text-center group">
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-3 sm:mb-4 md:mb-8 relative">
              <img 
                src="/oro-y-miel-crocante.jpeg" 
                alt="Pastel Oro y Miel" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h2 className="text-[9px] sm:text-[11px] md:text-sm tracking-[0.15em] md:tracking-[0.3em] text-[#c5a028] uppercase font-bold mb-1.5 md:mb-3">
              Sutiles y Cítricos
            </h2>
            <h3 className="text-lg sm:text-xl md:text-4xl font-serif text-[#a67c00] leading-tight mb-1.5 md:mb-3">
              Oro y Miel
            </h3>
            <p className="text-[#d4af37] italic text-[11px] sm:text-xs md:text-lg mb-2 md:mb-6">
              Delicadeza que ilumina
            </p>
            <p className="text-gray-600 font-light text-[10px] sm:text-[11px] md:text-base leading-snug md:leading-relaxed mb-3 md:mb-6 w-full">
              Bizcocho de naranja suave con romero fresco, decorado con rodajas naturales y polvo dorado.
            </p>
            <p className="text-[#c5a028] text-[9px] sm:text-[10px] md:text-sm italic leading-normal md:leading-loose mb-4 md:mb-10 border-t border-[#d4af37]/20 pt-3 md:pt-6 w-full">
              Luz en forma de pastel. <br/>
              Oro comestible. <br/>
              Un ritual de conexión.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Oro%20y%20Miel." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-2 py-2.5 md:px-6 md:py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-500 text-[9px] sm:text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase font-bold"
            >
              Consultar <span className="hidden xl:inline">Disponibilidad</span>
            </a>
          </div>

          {/* TARJETA PRODUCTO: ZADQUIEL */}
          <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 md:p-10 rounded-xl border border-gray-200 shadow-xl shadow-black/5 flex flex-col items-center text-center group">
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-3 sm:mb-4 md:mb-8 relative">
              <img 
                src="/zadquiel-crocante.jpeg" 
                alt="Pastel Zadquiel" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h2 className="text-[9px] sm:text-[11px] md:text-sm tracking-[0.15em] md:tracking-[0.3em] text-[#c5a028] uppercase font-bold mb-1.5 md:mb-3">
              Sutiles y Cítricos
            </h2>
            <h3 className="text-lg sm:text-xl md:text-4xl font-serif text-[#a67c00] leading-tight mb-1.5 md:mb-3">
              Zadquiel
            </h3>
            <p className="text-[#d4af37] italic text-[11px] sm:text-xs md:text-lg mb-2 md:mb-6">
              Delicadeza que ilumina
            </p>
            <p className="text-gray-600 font-light text-[10px] sm:text-[11px] md:text-base leading-snug md:leading-relaxed mb-3 md:mb-6 w-full">
              Bizcocho de plátano con betún de queso crema, decorado con plátano fresco y hoja dorada.
            </p>
            <p className="text-[#c5a028] text-[9px] sm:text-[10px] md:text-sm italic leading-normal md:leading-loose mb-4 md:mb-10 border-t border-[#d4af37]/20 pt-3 md:pt-6 w-full">
              Armonía celestial. <br/>
              Paz manifiesta. <br/>
              Reflejo de la divinidad.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Zadquiel." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-2 py-2.5 md:px-6 md:py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-500 text-[9px] sm:text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase font-bold"
            >
              Consultar <span className="hidden xl:inline">Disponibilidad</span>
            </a>
          </div>

          {/* TARJETA PRODUCTO: ANILLO CACAO */}
          <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 md:p-10 rounded-xl border border-gray-200 shadow-xl shadow-black/5 flex flex-col items-center text-center group">
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-3 sm:mb-4 md:mb-8 relative">
              <img 
                src="/anillo-cacao-crocante.jpeg" 
                alt="Pastel Anillo Cacao" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h2 className="text-[9px] sm:text-[11px] md:text-sm tracking-[0.15em] md:tracking-[0.3em] text-[#c5a028] uppercase font-bold mb-1.5 md:mb-3">
              Chocolate Oscuro
            </h2>
            <h3 className="text-lg sm:text-xl md:text-4xl font-serif text-[#a67c00] leading-tight mb-1.5 md:mb-3">
              Anillo Cacao
            </h3>
            <p className="text-[#d4af37] italic text-[11px] sm:text-xs md:text-lg mb-2 md:mb-6">
              Sabiduría en reflejos
            </p>
            <p className="text-gray-600 font-light text-[10px] sm:text-[11px] md:text-base leading-snug md:leading-relaxed mb-3 md:mb-6 w-full">
              Pastel de chocolate cubierto con ganache y coronado con frambuesas y toque de oro.
            </p>
            <p className="text-[#c5a028] text-[9px] sm:text-[10px] md:text-sm italic leading-normal md:leading-loose mb-4 md:mb-10 border-t border-[#d4af37]/20 pt-3 md:pt-6 w-full">
              Perfección en el detalle. <br/>
              Anillo de satisfacción. <br/>
              Manjar para el corazón.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Anillo%20Cacao." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-2 py-2.5 md:px-6 md:py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-500 text-[9px] sm:text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase font-bold"
            >
              Consultar <span className="hidden xl:inline">Disponibilidad</span>
            </a>
          </div>

          {/* TARJETA PRODUCTO: AMOR DE DOS */}
          <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 md:p-10 rounded-xl border border-gray-200 shadow-xl shadow-black/5 flex flex-col items-center text-center group">
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-3 sm:mb-4 md:mb-8 relative">
              <img 
                src="/amor-de-dos-crocante.jpeg" 
                alt="Pastel Amor de Dos" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h2 className="text-[9px] sm:text-[11px] md:text-sm tracking-[0.15em] md:tracking-[0.3em] text-[#c5a028] uppercase font-bold mb-1.5 md:mb-3">
              Frutas y Dualidades
            </h2>
            <h3 className="text-lg sm:text-xl md:text-4xl font-serif text-[#a67c00] leading-tight mb-1.5 md:mb-3">
              Amor de Dos
            </h3>
            <p className="text-[#d4af37] italic text-[11px] sm:text-xs md:text-lg mb-2 md:mb-6">
              Delicadeza que toca
            </p>
            <p className="text-gray-600 font-light text-[10px] sm:text-[11px] md:text-base leading-snug md:leading-relaxed mb-3 md:mb-6 w-full">
              Bizcocho de vainilla y queso que funde la dulce compañía con el toque ácido de frambuesas.
            </p>
            <p className="text-[#c5a028] text-[9px] sm:text-[10px] md:text-sm italic leading-normal md:leading-loose mb-4 md:mb-10 border-t border-[#d4af37]/20 pt-3 md:pt-6 w-full">
              Dualidad comestible. <br/>
              Dulce para compartir. <br/>
              Unión perfecta.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Amor%20de%20Dos." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-2 py-2.5 md:px-6 md:py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-500 text-[9px] sm:text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase font-bold"
            >
              Consultar <span className="hidden xl:inline">Disponibilidad</span>
            </a>
          </div>

          {/* TARJETA PRODUCTO: HAPPY CORAZONCITO */}
          <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 md:p-10 rounded-xl border border-gray-200 shadow-xl shadow-black/5 flex flex-col items-center text-center group">
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-3 sm:mb-4 md:mb-8 relative">
              <img 
                src="/hapy-corazoncito-crocante.jpeg" 
                alt="Pastel Happy Corazoncito" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h2 className="text-[9px] sm:text-[11px] md:text-sm tracking-[0.15em] md:tracking-[0.3em] text-[#c5a028] uppercase font-bold mb-1.5 md:mb-3">
              Frutas y Dualidades
            </h2>
            <h3 className="text-lg sm:text-xl md:text-4xl font-serif text-[#a67c00] leading-tight mb-1.5 md:mb-3">
              Corazoncito
            </h3>
            <p className="text-[#d4af37] italic text-[11px] sm:text-xs md:text-lg mb-2 md:mb-6">
              Deleite de alegría
            </p>
            <p className="text-gray-600 font-light text-[10px] sm:text-[11px] md:text-base leading-snug md:leading-relaxed mb-3 md:mb-6 w-full">
              Bizcocho de vainilla que late. Su cobertura de crema de queso y frambuesas evocan gozo vital.
            </p>
            <p className="text-[#c5a028] text-[9px] sm:text-[10px] md:text-sm italic leading-normal md:leading-loose mb-4 md:mb-10 border-t border-[#d4af37]/20 pt-3 md:pt-6 w-full">
              Latidos de alegría. <br/>
              Celebración pastel. <br/>
              Gozo en rebanada.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Happy%20Corazoncito." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-2 py-2.5 md:px-6 md:py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-500 text-[9px] sm:text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase font-bold"
            >
              Consultar <span className="hidden xl:inline">Disponibilidad</span>
            </a>
          </div>

          {/* TARJETA PRODUCTO: AMORCITO MÍO */}
          <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 md:p-10 rounded-xl border border-gray-200 shadow-xl shadow-black/5 flex flex-col items-center text-center group">
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-3 sm:mb-4 md:mb-8 relative">
              <img 
                src="/amorcito-mio-crocante.jpeg" 
                alt="Pastel Amorcito Mío" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h2 className="text-[9px] sm:text-[11px] md:text-sm tracking-[0.15em] md:tracking-[0.3em] text-[#c5a028] uppercase font-bold mb-1.5 md:mb-3">
              Sutiles y Cítricos
            </h2>
            <h3 className="text-lg sm:text-xl md:text-4xl font-serif text-[#a67c00] leading-tight mb-1.5 md:mb-3">
              Amorcito Mío
            </h3>
            <p className="text-[#d4af37] italic text-[11px] sm:text-xs md:text-lg mb-2 md:mb-6">
              Delicadeza que ilumina
            </p>
            <p className="text-gray-600 font-light text-[10px] sm:text-[11px] md:text-base leading-snug md:leading-relaxed mb-3 md:mb-6 w-full">
              Pastel de queso cubierto con rodajas de fresas frescas y crema de fresa.
            </p>
            <p className="text-[#c5a028] text-[9px] sm:text-[10px] md:text-sm italic leading-normal md:leading-loose mb-4 md:mb-10 border-t border-[#d4af37]/20 pt-3 md:pt-6 w-full">
              Abrazo de postre. <br/>
              Invitación dulce. <br/>
              Pasión y frescura.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Amorcito%20M%C3%ADo." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-2 py-2.5 md:px-6 md:py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-500 text-[9px] sm:text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase font-bold"
            >
              Consultar <span className="hidden xl:inline">Disponibilidad</span>
            </a>
          </div>

          {/* TARJETA PRODUCTO: TENTACIÓN */}
          <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 md:p-10 rounded-xl border border-gray-200 shadow-xl shadow-black/5 flex flex-col items-center text-center group">
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-3 sm:mb-4 md:mb-8 relative">
              <img 
                src="/tentación-crocante.jpeg" 
                alt="Pastel Tentación" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h2 className="text-[9px] sm:text-[11px] md:text-sm tracking-[0.15em] md:tracking-[0.3em] text-[#c5a028] uppercase font-bold mb-1.5 md:mb-3">
              Frutas y Dualidades
            </h2>
            <h3 className="text-lg sm:text-xl md:text-4xl font-serif text-[#a67c00] leading-tight mb-1.5 md:mb-3">
              Tentación
            </h3>
            <p className="text-[#d4af37] italic text-[11px] sm:text-xs md:text-lg mb-2 md:mb-6">
              El equilibrio perfecto
            </p>
            <p className="text-gray-600 font-light text-[10px] sm:text-[11px] md:text-base leading-snug md:leading-relaxed mb-3 md:mb-6 w-full">
              Rosca de zanahoria con nuez y chocolate blanco. Coronada con crema de queso y fresas.
            </p>
            <p className="text-[#c5a028] text-[9px] sm:text-[10px] md:text-sm italic leading-normal md:leading-loose mb-4 md:mb-10 border-t border-[#d4af37]/20 pt-3 md:pt-6 w-full">
              Dualidad del azúcar. <br/>
              Promesa del fruto. <br/>
              Tentación divina.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Tentaci%C3%B3n." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-2 py-2.5 md:px-6 md:py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-500 text-[9px] sm:text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase font-bold"
            >
              Consultar <span className="hidden xl:inline">Disponibilidad</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}

export default App;