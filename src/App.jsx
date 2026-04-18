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
          className="w-80 md:w-[45rem] z-10 drop-shadow-2xl object-contain"
        />
 
        {/* ESLOGAN */}
        <p className="mt-4 text-[#d4af37] tracking-[0.6em] uppercase text-sm md:text-lg z-10 font-bold bg-white/75 px-10 py-3.5 rounded-full backdrop-blur-md shadow-sm border border-[#d4af37]/15">
          Repostería con intención
        </p>
 
        {/* CONTENEDOR DE ENLACES */}
        <div className="flex items-center gap-12 mt-8 z-10">
          
          {/* BOTÓN DEL MENÚ EN PDF */}
          <a 
            href="https://drive.google.com/file/d/1tJjf7eTc-TE7ZiTH3TmuxR7pTQe76Zu2/view" 
            target="_blank" 
            rel="noreferrer"
            className="transform hover:scale-110 transition-all duration-500 opacity-90 hover:opacity-100"
            aria-label="Ver Menú Crocante"
            title="Ver Menú"
          >
            <img 
              src="/globo-batidor-dorado.PNG" 
              alt="Icono Globo Batidor Dorado" 
              className="w-14 h-14 object-contain drop-shadow-md" 
              style={{ transform: 'rotate(-5deg)' }} 
            />
          </a>
 
          {/* Divisor vertical */}
          <div className="h-10 w-px bg-[#d4af37]/40"></div>
 
          {/* BOTÓN DE INSTAGRAM */}
          <a 
            href="https://www.instagram.com/crocante_reposteria?igsh=dm9ib3d0ZmkzdnZn" 
            target="_blank" 
            rel="noreferrer"
            className="text-[#d4af37] transform hover:scale-110 hover:text-[#ff69b4] transition-all duration-500 opacity-90 hover:opacity-100"
            aria-label="Visitar Instagram de Crocante"
            title="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </header>
 
      {/* SECCIÓN FRASE DEL ALMA */}
      <section className="py-28 px-8 max-w-3xl mx-auto text-center">
        <div className="relative">
          {/* Línea decorativa superior */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-16 bg-[#d4af37]/40"></div>
            <div className="w-1 h-1 rounded-full bg-[#d4af37]/60"></div>
            <div className="h-px w-16 bg-[#d4af37]/40"></div>
          </div>
          <p className="text-2xl md:text-[1.75rem] font-serif text-[#a67c00] italic leading-[1.85] tracking-wide">
            "Una experiencia visual y sensorial desde el alma,<br className="hidden md:block" /> donde la repostería se encuentra con la belleza del ser."
          </p>
          {/* Línea decorativa inferior */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <div className="h-px w-16 bg-[#d4af37]/40"></div>
            <div className="w-1 h-1 rounded-full bg-[#d4af37]/60"></div>
            <div className="h-px w-16 bg-[#d4af37]/40"></div>
          </div>
        </div>
      </section>
 
      {/* SECCIÓN EDICIÓN ESPECIAL 10 DE MAYO */}
      <section className="pb-32 px-6 max-w-6xl mx-auto">
        <div className="bg-white/97 backdrop-blur-sm p-10 md:p-14 rounded-2xl border border-[#d4af37]/15 shadow-[0_8px_50px_rgba(212,175,55,0.10)] flex flex-col-reverse md:flex-row-reverse gap-10 md:gap-16 items-center group transition-shadow duration-700 hover:shadow-[0_12px_60px_rgba(212,175,55,0.16)]">
          
          <div className="flex-1 space-y-5 text-center md:text-left">
            <p className="text-[0.65rem] tracking-[0.4em] text-[#c5a028] uppercase font-bold">
              — Edición Especial 10 de Mayo —
            </p>
            
            <div className="space-y-1">
              <h3 className="text-5xl md:text-6xl font-serif text-[#a67c00] tracking-tight leading-none">
                MAMÁ,
              </h3>
              <h4 className="text-3xl md:text-4xl font-serif text-[#d4af37] italic leading-snug">
                hoy te entendí
              </h4>
            </div>
 
            <p className="text-xl font-light text-[#d4af37] italic tracking-wide">
              Amor en capas
            </p>
            
            <p className="text-gray-600 font-light text-base leading-relaxed">
              Pastel de queso mascarpone, frutos rojos y litchie
            </p>
            
            <div className="border-t border-[#d4af37]/20 pt-5 px-4 md:px-0">
              <p className="text-[#c5a028] text-[0.7rem] italic leading-[2.2] tracking-wider">
                Pureza infinita que vuelve a su origen. <br/>
                Un abrazo de dulzura para mamá. <br/>
                El regalo más noble para su alma.
              </p>
            </div>
            
            <div className="pt-2">
              <a 
                href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Edici%C3%B3n%2010%20de%20Mayo%20(Amor%20en%20capas)." 
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-[#d4af37] text-white px-10 py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-700 text-[0.65rem] tracking-[0.3em] uppercase font-bold hover:tracking-[0.35em] hover:px-12 w-full md:w-auto text-center"
              >
                Consultar Disponibilidad
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-[46%] flex items-center justify-center relative overflow-hidden rounded-xl shadow-md aspect-[4/3] md:aspect-square">
            <img 
              src="/pastel10demayo.jpeg" 
              alt="Pastel Amor en Capas" 
              className="w-full h-full object-cover transform group-hover:scale-[1.04] transition-transform duration-700"
            />
            {/* Overlay sutil dorado en hover */}
            <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/5 transition-colors duration-700 rounded-xl"></div>
          </div>
 
        </div>
      </section>
 
      {/* SECCIÓN NUEVOS PRODUCTOS (LOS 7 PASTELES) */}
      <section className="pb-32 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
 
          {/* TARJETA: AVELLANÍSIMO */}
          <div className="bg-white/97 backdrop-blur-sm p-10 md:p-12 rounded-2xl border border-[#d4af37]/15 shadow-[0_8px_40px_rgba(212,175,55,0.08)] flex flex-col items-center text-center group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(212,175,55,0.14)]">
            <div className="w-full aspect-square overflow-hidden rounded-xl mb-9 relative">
              <img 
                src="/avellanisimo-crocante.jpeg" 
                alt="Pastel Avellanísimo" 
                className="w-full h-full object-cover transform group-hover:scale-[1.06] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/5 transition-colors duration-700 rounded-xl"></div>
            </div>
            <p className="text-[0.65rem] tracking-[0.4em] text-[#c5a028] uppercase font-bold mb-3">
              Clásicos y Cremosos
            </p>
            <h3 className="text-4xl font-serif text-[#a67c00] mb-3 leading-tight">
              Avellanísimo
            </h3>
            <p className="text-[#d4af37] italic text-base mb-5 tracking-wide">
              Intensidad que abraza los sentidos
            </p>
            <p className="text-gray-500 font-light text-sm leading-loose mb-5 px-3 max-w-xs">
              Cheesecake estilo NY con crema de avellanas tostadas, dulce de leche y tropiezos de avellana.
            </p>
            <div className="w-10 h-px bg-[#d4af37]/40 mb-5"></div>
            <p className="text-[#c5a028] text-[0.7rem] italic leading-[2.2] tracking-wider mb-10 px-4">
              Alma neoyorquina. <br/>
              Mano mexicana. <br/>
              Gozo hecho postre.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Avellan%C3%ADsimo." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-6 py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-700 text-[0.65rem] tracking-[0.3em] hover:tracking-[0.35em] uppercase font-bold"
            >
              Consultar Disponibilidad
            </a>
          </div>
          
          {/* TARJETA: YUCATÁN */}
          <div className="bg-white/97 backdrop-blur-sm p-10 md:p-12 rounded-2xl border border-[#d4af37]/15 shadow-[0_8px_40px_rgba(212,175,55,0.08)] flex flex-col items-center text-center group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(212,175,55,0.14)]">
            <div className="w-full aspect-square overflow-hidden rounded-xl mb-9 relative">
              <img 
                src="/yucatan-crocante.jpeg" 
                alt="Pastel Yucatán" 
                className="w-full h-full object-cover transform group-hover:scale-[1.06] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/5 transition-colors duration-700 rounded-xl"></div>
            </div>
            <p className="text-[0.65rem] tracking-[0.4em] text-[#c5a028] uppercase font-bold mb-3">
              Tropical y Auténtico
            </p>
            <h3 className="text-4xl font-serif text-[#a67c00] mb-3 leading-tight">
              Yucatán
            </h3>
            <p className="text-[#d4af37] italic text-base mb-5 tracking-wide">
              Caribe que acaricia el alma
            </p>
            <p className="text-gray-500 font-light text-sm leading-loose mb-5 px-3 max-w-xs">
              Bizcocho de coco y ron, humectado con un toque del Caribe, coronado con láminas cálidas de piña y coco dorado.
            </p>
            <div className="w-10 h-px bg-[#d4af37]/40 mb-5"></div>
            <p className="text-[#c5a028] text-[0.7rem] italic leading-[2.2] tracking-wider mb-10 px-4">
              Dulzura mística nacida bajo el sol maya. <br/>
              Un susurro de coco, ron y selva. <br/>
              Tesoro dorado escondido en el paladar.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Yucat%C3%A1n." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-6 py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-700 text-[0.65rem] tracking-[0.3em] hover:tracking-[0.35em] uppercase font-bold"
            >
              Consultar Disponibilidad
            </a>
          </div>
 
          {/* TARJETA: ORO Y MIEL */}
          <div className="bg-white/97 backdrop-blur-sm p-10 md:p-12 rounded-2xl border border-[#d4af37]/15 shadow-[0_8px_40px_rgba(212,175,55,0.08)] flex flex-col items-center text-center group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(212,175,55,0.14)]">
            <div className="w-full aspect-square overflow-hidden rounded-xl mb-9 relative">
              <img 
                src="/oro-y-miel-crocante.jpeg" 
                alt="Pastel Oro y Miel" 
                className="w-full h-full object-cover transform group-hover:scale-[1.06] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/5 transition-colors duration-700 rounded-xl"></div>
            </div>
            <p className="text-[0.65rem] tracking-[0.4em] text-[#c5a028] uppercase font-bold mb-3">
              Sutiles y Cítricos
            </p>
            <h3 className="text-4xl font-serif text-[#a67c00] mb-3 leading-tight">
              Oro y Miel
            </h3>
            <p className="text-[#d4af37] italic text-base mb-5 tracking-wide">
              Delicadeza que ilumina el alma
            </p>
            <p className="text-gray-500 font-light text-sm leading-loose mb-5 px-3 max-w-xs">
              Bizcocho de naranja suave con romero fresco, decorado con rodajas naturales y polvo dorado.
            </p>
            <div className="w-10 h-px bg-[#d4af37]/40 mb-5"></div>
            <p className="text-[#c5a028] text-[0.7rem] italic leading-[2.2] tracking-wider mb-10 px-4">
              Luz en forma de pastel. <br/>
              Oro comestible. <br/>
              Un ritual de dulzura y conexión.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Oro%20y%20Miel." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-6 py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-700 text-[0.65rem] tracking-[0.3em] hover:tracking-[0.35em] uppercase font-bold"
            >
              Consultar Disponibilidad
            </a>
          </div>
 
          {/* TARJETA: ZADQUIEL */}
          <div className="bg-white/97 backdrop-blur-sm p-10 md:p-12 rounded-2xl border border-[#d4af37]/15 shadow-[0_8px_40px_rgba(212,175,55,0.08)] flex flex-col items-center text-center group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(212,175,55,0.14)]">
            <div className="w-full aspect-square overflow-hidden rounded-xl mb-9 relative">
              <img 
                src="/zadquiel-crocante.jpeg" 
                alt="Pastel Zadquiel" 
                className="w-full h-full object-cover transform group-hover:scale-[1.06] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/5 transition-colors duration-700 rounded-xl"></div>
            </div>
            <p className="text-[0.65rem] tracking-[0.4em] text-[#c5a028] uppercase font-bold mb-3">
              Sutiles y Cítricos
            </p>
            <h3 className="text-4xl font-serif text-[#a67c00] mb-3 leading-tight">
              Zadquiel
            </h3>
            <p className="text-[#d4af37] italic text-base mb-5 tracking-wide">
              Delicadeza que ilumina el alma
            </p>
            <p className="text-gray-500 font-light text-sm leading-loose mb-5 px-3 max-w-xs">
              Bizcocho de plátano con betún de queso crema, decorado con plátano fresco, arándanos y hoja dorada.
            </p>
            <div className="w-10 h-px bg-[#d4af37]/40 mb-5"></div>
            <p className="text-[#c5a028] text-[0.7rem] italic leading-[2.2] tracking-wider mb-10 px-4">
              Armonía celestial en un bocado. <br/>
              Paz manifiesta. <br/>
              Ser reflejo de la divinidad.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Zadquiel." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-6 py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-700 text-[0.65rem] tracking-[0.3em] hover:tracking-[0.35em] uppercase font-bold"
            >
              Consultar Disponibilidad
            </a>
          </div>
 
          {/* TARJETA: ANILLO CACAO */}
          <div className="bg-white/97 backdrop-blur-sm p-10 md:p-12 rounded-2xl border border-[#d4af37]/15 shadow-[0_8px_40px_rgba(212,175,55,0.08)] flex flex-col items-center text-center group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(212,175,55,0.14)]">
            <div className="w-full aspect-square overflow-hidden rounded-xl mb-9 relative">
              <img 
                src="/anillo-cacao-crocante.jpeg" 
                alt="Pastel Anillo Cacao" 
                className="w-full h-full object-cover transform group-hover:scale-[1.06] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/5 transition-colors duration-700 rounded-xl"></div>
            </div>
            <p className="text-[0.65rem] tracking-[0.4em] text-[#c5a028] uppercase font-bold mb-3">
              Chocolate Oscuro
            </p>
            <h3 className="text-4xl font-serif text-[#a67c00] mb-3 leading-tight">
              Anillo Cacao
            </h3>
            <p className="text-[#d4af37] italic text-base mb-5 tracking-wide">
              Sabiduría en cada reflejo
            </p>
            <p className="text-gray-500 font-light text-sm leading-loose mb-5 px-3 max-w-xs">
              Pastel de chocolate cubierto con ganache y coronado con frambuesas y toque de oro.
            </p>
            <div className="w-10 h-px bg-[#d4af37]/40 mb-5"></div>
            <p className="text-[#c5a028] text-[0.7rem] italic leading-[2.2] tracking-wider mb-10 px-4">
              Perfección en el detalle. <br/>
              Un anillo de satisfacción. <br/>
              Manjar para el corazón.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Anillo%20Cacao." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-6 py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-700 text-[0.65rem] tracking-[0.3em] hover:tracking-[0.35em] uppercase font-bold"
            >
              Consultar Disponibilidad
            </a>
          </div>
 
          {/* TARJETA: AMOR DE DOS */}
          <div className="bg-white/97 backdrop-blur-sm p-10 md:p-12 rounded-2xl border border-[#d4af37]/15 shadow-[0_8px_40px_rgba(212,175,55,0.08)] flex flex-col items-center text-center group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(212,175,55,0.14)]">
            <div className="w-full aspect-square overflow-hidden rounded-xl mb-9 relative">
              <img 
                src="/amor-de-dos-crocante.jpeg" 
                alt="Pastel Amor de Dos" 
                className="w-full h-full object-cover transform group-hover:scale-[1.06] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/5 transition-colors duration-700 rounded-xl"></div>
            </div>
            <p className="text-[0.65rem] tracking-[0.4em] text-[#c5a028] uppercase font-bold mb-3">
              Frutas y Dualidades
            </p>
            <h3 className="text-4xl font-serif text-[#a67c00] mb-3 leading-tight">
              Amor de Dos
            </h3>
            <p className="text-[#d4af37] italic text-base mb-5 tracking-wide">
              Delicadeza que toca el corazón
            </p>
            <p className="text-gray-500 font-light text-sm leading-loose mb-5 px-3 max-w-xs">
              Bizcocho de vainilla y queso que funde la dulce compañía del dulce de leche con el toque ácido de frambuesas.
            </p>
            <div className="w-10 h-px bg-[#d4af37]/40 mb-5"></div>
            <p className="text-[#c5a028] text-[0.7rem] italic leading-[2.2] tracking-wider mb-10 px-4">
              Dualidad comestible. <br/>
              Acompañamiento para compartir. <br/>
              Unión perfecta de sabores.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Amor%20de%20Dos." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-6 py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-700 text-[0.65rem] tracking-[0.3em] hover:tracking-[0.35em] uppercase font-bold"
            >
              Consultar Disponibilidad
            </a>
          </div>
 
          {/* TARJETA: HAPPY CORAZONCITO */}
          <div className="bg-white/97 backdrop-blur-sm p-10 md:p-12 rounded-2xl border border-[#d4af37]/15 shadow-[0_8px_40px_rgba(212,175,55,0.08)] flex flex-col items-center text-center group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(212,175,55,0.14)]">
            <div className="w-full aspect-square overflow-hidden rounded-xl mb-9 relative">
              <img 
                src="/hapy-corazoncito-crocante.jpeg" 
                alt="Pastel Happy Corazoncito" 
                className="w-full h-full object-cover transform group-hover:scale-[1.06] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/5 transition-colors duration-700 rounded-xl"></div>
            </div>
            <p className="text-[0.65rem] tracking-[0.4em] text-[#c5a028] uppercase font-bold mb-3">
              Frutas y Dualidades
            </p>
            <h3 className="text-4xl font-serif text-[#a67c00] mb-3 leading-tight">
              Happy Corazoncito
            </h3>
            <p className="text-[#d4af37] italic text-base mb-5 tracking-wide">
              Un deleite colmado de alegría
            </p>
            <p className="text-gray-500 font-light text-sm leading-loose mb-5 px-3 max-w-xs">
              Bizcocho de vainilla que late como ese día especial en que naciste. Su cobertura de crema de queso, dulces corazones y frambuesas frescas colmadas de compota, evocan puro gozo vital.
            </p>
            <div className="w-10 h-px bg-[#d4af37]/40 mb-5"></div>
            <p className="text-[#c5a028] text-[0.7rem] italic leading-[2.2] tracking-wider mb-10 px-4">
              Latidos de pura alegría. <br/>
              Celebración hecha pastel. <br/>
              Gozo vital en cada rebanada.
            </p>
            <a 
              href="https://wa.me/523325482404?text=Hola,%20me%20gustar%C3%ADa%20consultar%20la%20disponibilidad%20del%20pastel%20Happy%20Corazoncito." 
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full bg-[#d4af37] text-white px-6 py-4 rounded-none hover:bg-[#ff69b4] transition-all duration-700 text-[0.65rem] tracking-[0.3em] hover:tracking-[0.35em] uppercase font-bold"
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