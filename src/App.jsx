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

        {/* INDICADOR DE SCROLL (ELEGANTE Y MINIMALISTA) */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-80 animate-bounce z-10 pointer-events-none">
          <p className="text-[9px] tracking-[0.4em] text-[#c5a028] uppercase font-bold mb-1">
            Descubre
          </p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c5a028" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

      </header>

      {/* SECCIÓN FRASE DEL ALMA */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <p className="text-2xl md:text-3xl font-serif text-[#a67c00] italic leading-relaxed">
          "Una experiencia visual y sensorial desde el alma,<br className="hidden md:block" /> donde la repostería se encuentra con la belleza del ser."
        </p>
      </section>

      {/* SECCIÓN EDICIÓN ESPECIAL 10 DE MAYO */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm p-12 rounded-xl border border-gray-200 shadow-xl shadow-black/5 flex flex-col-reverse md:flex-row-reverse gap-12 items-center group">
          
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.3em] text-[#c5a028] uppercase font-bold whitespace-nowrap">
              — Edición Especial 10 de Mayo —
            </p>
            
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-serif text-[#a67c00] tracking-tight">
                MAMÁ,
              </h3>
              <h4 className="text-3xl md:text-4xl font-serif text-[#d4af37] italic">
                hoy te entendí
              </h4>
            </div>

            <p className="text-2xl font-light text-[#d4af37] italic">
              Amor en capas
            </p>
            
            <p className="text-gray-700 font-light text-lg leading-relaxed mb-6">
              Pastel de queso mascarpone, frutos rojos y litchie
            </p>
            
            <p className="text-[#c5a028] text-xs italic leading-loose mb-10 border-t border-[#d4af37]/20 pt-6 px-4">
              Pureza infinita que vuelve a su origen. <br/>
              Un abrazo de dulzura para mamá. <br/>
              El regalo más noble para su alma.
            </p>
            
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Edici%C3%B3n%2010%20de%20Mayo%20(Amor%20en%20capas)." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full md:w-auto inline-block bg-[#d4af37] text-white px-10 py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-500 text-xs tracking-[0.2em] uppercase font-bold"
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

      {/* SECCIÓN NUEVOS PRODUCTOS (LOS 9 PASTELES) */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* TARJETA PRODUCTO: AVELLANÍSIMO */}
          <div className="bg-white/95 backdrop-blur-sm p-10 rounded-xl border border-gray-200 shadow-xl shadow-black/5 flex flex-col items-center text-center group">
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-8 relative">
              <img 
                src="/avellanisimo-crocante.jpeg" 
                alt="Pastel Avellanísimo" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h2 className="text-xs tracking-[0.3em] text-[#c5a028] uppercase font-bold mb-3">
              Clásicos y Cremosos
            </h2>
            <h3 className="text-4xl font-serif text-[#a67c00] mb-3">
              Avellanísimo
            </h3>
            <p className="text-[#d4af37] italic text-lg mb-6">
              Intensidad que abraza los sentidos
            </p>
            <p className="text-gray-600 font-light text-sm leading-relaxed mb-6 px-4">
              Cheesecake estilo NY con crema de avellanas tostadas, dulce de leche y tropiezos de avellana.
            </p>
            <p className="text-[#c5a028] text-xs italic leading-loose mb-10 border-t border-[#d4af37]/20 pt-6 px-4">
              Alma neoyorquina. <br/>
              Mano mexicana. <br/>
              Gozo hecho postre.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Avellan%C3%ADsimo." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-6 py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-500 text-xs tracking-[0.2em] uppercase font-bold"
            >
              Consultar Disponibilidad
            </a>
          </div>
          
          {/* TARJETA PRODUCTO: YUCATÁN */}
          <div className="bg-white/95 backdrop-blur-sm p-10 rounded-xl border border-gray-200 shadow-xl shadow-black/5 flex flex-col items-center text-center group">
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-8 relative">
              <img 
                src="/yucatan-crocante.jpeg" 
                alt="Pastel Yucatán" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h2 className="text-xs tracking-[0.3em] text-[#c5a028] uppercase font-bold mb-3">
              Tropical y Auténtico
            </h2>
            <h3 className="text-4xl font-serif text-[#a67c00] mb-3">
              Yucatán
            </h3>
            <p className="text-[#d4af37] italic text-lg mb-6">
              Caribe que acaricia el alma
            </p>
            <p className="text-gray-600 font-light text-sm leading-relaxed mb-6 px-4">
              Bizcocho de coco y ron, humectado con un toque del Caribe, coronado con láminas cálidas de piña y coco dorado.
            </p>
            <p className="text-[#c5a028] text-xs italic leading-loose mb-10 border-t border-[#d4af37]/20 pt-6 px-4">
              Dulzura mística nacida bajo el sol maya. <br/>
              Un susurro de coco, ron y selva. <br/>
              Tesoro dorado escondido en el paladar.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Yucat%C3%A1n." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-6 py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-500 text-xs tracking-[0.2em] uppercase font-bold"
            >
              Consultar Disponibilidad
            </a>
          </div>

          {/* TARJETA PRODUCTO: ORO Y MIEL */}
          <div className="bg-white/95 backdrop-blur-sm p-10 rounded-xl border border-gray-200 shadow-xl shadow-black/5 flex flex-col items-center text-center group">
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-8 relative">
              <img 
                src="/oro-y-miel-crocante.jpeg" 
                alt="Pastel Oro y Miel" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h2 className="text-xs tracking-[0.3em] text-[#c5a028] uppercase font-bold mb-3">
              Sutiles y Cítricos
            </h2>
            <h3 className="text-4xl font-serif text-[#a67c00] mb-3">
              Oro y Miel
            </h3>
            <p className="text-[#d4af37] italic text-lg mb-6">
              Delicadeza que ilumina el alma
            </p>
            <p className="text-gray-600 font-light text-sm leading-relaxed mb-6 px-4">
              Bizcocho de naranja suave con romero fresco, decorado con rodajas naturales y polvo dorado.
            </p>
            <p className="text-[#c5a028] text-xs italic leading-loose mb-10 border-t border-[#d4af37]/20 pt-6 px-4">
              Luz en forma de pastel. <br/>
              Oro comestible. <br/>
              Un ritual de dulzura y conexión.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Oro%20y%20Miel." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-6 py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-500 text-xs tracking-[0.2em] uppercase font-bold"
            >
              Consultar Disponibilidad
            </a>
          </div>

          {/* TARJETA PRODUCTO: ZADQUIEL */}
          <div className="bg-white/95 backdrop-blur-sm p-10 rounded-xl border border-gray-200 shadow-xl shadow-black/5 flex flex-col items-center text-center group">
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-8 relative">
              <img 
                src="/zadquiel-crocante.jpeg" 
                alt="Pastel Zadquiel" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h2 className="text-xs tracking-[0.3em] text-[#c5a028] uppercase font-bold mb-3">
              Sutiles y Cítricos
            </h2>
            <h3 className="text-4xl font-serif text-[#a67c00] mb-3">
              Zadquiel
            </h3>
            <p className="text-[#d4af37] italic text-lg mb-6">
              Delicadeza que ilumina el alma
            </p>
            <p className="text-gray-600 font-light text-sm leading-relaxed mb-6 px-4">
              Bizcocho de plátano con betún de queso crema, decorado con plátano fresco, arándanos y hoja dorada.
            </p>
            <p className="text-[#c5a028] text-xs italic leading-loose mb-10 border-t border-[#d4af37]/20 pt-6 px-4">
              Armonía celestial en un bocado. <br/>
              Paz manifiesta. <br/>
              Ser reflejo de la divinidad.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Zadquiel." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-6 py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-500 text-xs tracking-[0.2em] uppercase font-bold"
            >
              Consultar Disponibilidad
            </a>
          </div>

          {/* TARJETA PRODUCTO: ANILLO CACAO */}
          <div className="bg-white/95 backdrop-blur-sm p-10 rounded-xl border border-gray-200 shadow-xl shadow-black/5 flex flex-col items-center text-center group">
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-8 relative">
              <img 
                src="/anillo-cacao-crocante.jpeg" 
                alt="Pastel Anillo Cacao" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h2 className="text-xs tracking-[0.3em] text-[#c5a028] uppercase font-bold mb-3">
              Chocolate Oscuro
            </h2>
            <h3 className="text-4xl font-serif text-[#a67c00] mb-3">
              Anillo Cacao
            </h3>
            <p className="text-[#d4af37] italic text-lg mb-6">
              Sabiduría en cada reflejo
            </p>
            <p className="text-gray-600 font-light text-sm leading-relaxed mb-6 px-4">
              Pastel de chocolate cubierto con ganache y coronado con frambuesas y toque de oro.
            </p>
            <p className="text-[#c5a028] text-xs italic leading-loose mb-10 border-t border-[#d4af37]/20 pt-6 px-4">
              Perfección en el detalle. <br/>
              Un anillo de satisfacción. <br/>
              Manjar para el corazón.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Anillo%20Cacao." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-6 py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-500 text-xs tracking-[0.2em] uppercase font-bold"
            >
              Consultar Disponibilidad
            </a>
          </div>

          {/* TARJETA PRODUCTO: AMOR DE DOS */}
          <div className="bg-white/95 backdrop-blur-sm p-10 rounded-xl border border-gray-200 shadow-xl shadow-black/5 flex flex-col items-center text-center group">
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-8 relative">
              <img 
                src="/amor-de-dos-crocante.jpeg" 
                alt="Pastel Amor de Dos" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h2 className="text-xs tracking-[0.3em] text-[#c5a028] uppercase font-bold mb-3">
              Frutas y Dualidades
            </h2>
            <h3 className="text-4xl font-serif text-[#a67c00] mb-3">
              Amor de Dos
            </h3>
            <p className="text-[#d4af37] italic text-lg mb-6">
              Delicadeza que toca el corazón
            </p>
            <p className="text-gray-600 font-light text-sm leading-relaxed mb-6 px-4">
              Bizcocho de vainilla y queso que funde la dulce compañía del dulce de leche con el toque ácido de frambuesas.
            </p>
            <p className="text-[#c5a028] text-xs italic leading-loose mb-10 border-t border-[#d4af37]/20 pt-6 px-4">
              Dualidad comestible. <br/>
              Acompañamiento para compartir. <br/>
              Unión perfecta de sabores.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Amor%20de%20Dos." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-6 py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-500 text-xs tracking-[0.2em] uppercase font-bold"
            >
              Consultar Disponibilidad
            </a>
          </div>

          {/* TARJETA PRODUCTO: HAPPY CORAZONCITO */}
          <div className="bg-white/95 backdrop-blur-sm p-10 rounded-xl border border-gray-200 shadow-xl shadow-black/5 flex flex-col items-center text-center group">
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-8 relative">
              <img 
                src="/hapy-corazoncito-crocante.jpeg" 
                alt="Pastel Happy Corazoncito" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h2 className="text-xs tracking-[0.3em] text-[#c5a028] uppercase font-bold mb-3">
              Frutas y Dualidades
            </h2>
            <h3 className="text-4xl font-serif text-[#a67c00] mb-3">
              Happy Corazoncito
            </h3>
            <p className="text-[#d4af37] italic text-lg mb-6">
              Un deleite colmado de alegría
            </p>
            <p className="text-gray-600 font-light text-sm leading-relaxed mb-6 px-4">
              Bizcocho de vainilla que late como ese día especial en que naciste. Su cobertura de crema de queso, dulces corazones y frambuesas frescas colmadas de compota, evocan puro gozo vital.
            </p>
            <p className="text-[#c5a028] text-xs italic leading-loose mb-10 border-t border-[#d4af37]/20 pt-6 px-4">
              Latidos de pura alegría. <br/>
              Celebración hecha pastel. <br/>
              Gozo vital en cada rebanada.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Happy%20Corazoncito." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-6 py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-500 text-xs tracking-[0.2em] uppercase font-bold"
            >
              Consultar Disponibilidad
            </a>
          </div>

          {/* TARJETA PRODUCTO: AMORCITO MÍO */}
          <div className="bg-white/95 backdrop-blur-sm p-10 rounded-xl border border-gray-200 shadow-xl shadow-black/5 flex flex-col items-center text-center group">
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-8 relative">
              <img 
                src="/amorcito-mio-crocante.jpeg" 
                alt="Pastel Amorcito Mío" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h2 className="text-xs tracking-[0.3em] text-[#c5a028] uppercase font-bold mb-3">
              Sutiles y Cítricos
            </h2>
            <h3 className="text-4xl font-serif text-[#a67c00] mb-3">
              Amorcito Mío
            </h3>
            <p className="text-[#d4af37] italic text-lg mb-6">
              Delicadeza que ilumina el alma
            </p>
            <p className="text-gray-600 font-light text-sm leading-relaxed mb-6 px-4">
              Pastel de queso cubierto con rodajas de fresas frescas y crema de fresa.
            </p>
            <p className="text-[#c5a028] text-xs italic leading-loose mb-10 border-t border-[#d4af37]/20 pt-6 px-4">
              Un abrazo en forma de postre. <br/>
              Dulce invitación para abrir el corazón. <br/>
              Pasión y frescura en perfecta armonía.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Amorcito%20M%C3%ADo." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-6 py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-500 text-xs tracking-[0.2em] uppercase font-bold"
            >
              Consultar Disponibilidad
            </a>
          </div>

          {/* TARJETA PRODUCTO: TENTACIÓN */}
          <div className="bg-white/95 backdrop-blur-sm p-10 rounded-xl border border-gray-200 shadow-xl shadow-black/5 flex flex-col items-center text-center group">
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-8 relative">
              <img 
                src="/tentación-crocante.jpeg" 
                alt="Pastel Tentación" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h2 className="text-xs tracking-[0.3em] text-[#c5a028] uppercase font-bold mb-3">
              Frutas y Dualidades
            </h2>
            <h3 className="text-4xl font-serif text-[#a67c00] mb-3">
              Tentación
            </h3>
            <p className="text-[#d4af37] italic text-lg mb-6">
              El equilibrio perfecto entre lo sutil y lo irresistible
            </p>
            <p className="text-gray-600 font-light text-sm leading-relaxed mb-6 px-4">
              Rosca de zanahoria con nuez y chocolate blanco. Coronada con crema de queso y fresas frescas.
            </p>
            <p className="text-[#c5a028] text-xs italic leading-loose mb-10 border-t border-[#d4af37]/20 pt-6 px-4">
              La dualidad del azúcar. <br/>
              La promesa del fruto. <br/>
              Una tentación divina que llega al alma.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Tentaci%C3%B3n." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-6 py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-500 text-xs tracking-[0.2em] uppercase font-bold"
            >
              Consultar Disponibilidad
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}

export default App;