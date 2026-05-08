import React, { useEffect } from 'react';

// === CONFIGURACIÓN Y DATOS ===
const WHATSAPP_CONFIG = {
  phone: "523325482404",
  baseUrl: "https://wa.me/"
};

const getWhatsAppLink = (message) =>
  `${WHATSAPP_CONFIG.baseUrl}${WHATSAPP_CONFIG.phone}?text=${encodeURIComponent(message)}`;

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
    titulo: "Happy Corazoncito",
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

// === DECORACIONES ===

// Sprig de romero — SVG minimalista, leitmotiv del sitio
const RosemarySprig = ({ className = '', flip = false }) => (
  <svg
    viewBox="0 0 80 240"
    className={className}
    aria-hidden="true"
    style={flip ? { transform: 'scaleX(-1)' } : undefined}
  >
    <g fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M40 4 C 38 60, 42 140, 40 236" opacity="0.85" />
      {Array.from({ length: 16 }).map((_, i) => {
        const y = 18 + i * 13;
        const len = 16 - (i % 3);
        const lift = (i % 2 === 0) ? 4 : 6;
        return (
          <g key={i} opacity={0.55 + (i % 3) * 0.15}>
            <path d={`M40 ${y} Q ${40 - len * 0.55} ${y - lift}, ${40 - len} ${y - lift * 1.4}`} />
            <path d={`M40 ${y + 5} Q ${40 + len * 0.55} ${y + 5 - lift}, ${40 + len} ${y + 5 - lift * 1.4}`} />
          </g>
        );
      })}
    </g>
  </svg>
);

// Ornamento dorado central — separador de secciones
const Ornament = ({ className = '' }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
    <span className="block h-px w-16 md:w-28 bg-gradient-to-r from-transparent via-gold-300/50 to-gold-500" />
    <svg width="40" height="14" viewBox="0 0 40 14" className="text-gold-500">
      <g fill="none" stroke="currentColor" strokeWidth="0.8">
        <path d="M0 7 L 14 7" />
        <path d="M26 7 L 40 7" />
        <circle cx="20" cy="7" r="3.2" />
        <circle cx="20" cy="7" r="0.9" fill="currentColor" />
        <path d="M16 3 L 24 11" opacity="0.55" />
        <path d="M24 3 L 16 11" opacity="0.55" />
      </g>
    </svg>
    <span className="block h-px w-16 md:w-28 bg-gradient-to-l from-transparent via-gold-300/50 to-gold-500" />
  </div>
);

// === COMPONENTE PRINCIPAL ===
function App() {
  // Reveal-on-scroll con IntersectionObserver
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-ink selection:bg-gold-400 selection:text-white">

      {/* ╔══════════ HERO ══════════╗ */}
      <header className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-4 pt-12 pb-28">
        {/* Halo dorado de fondo — muy sutil */}
        <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] md:w-[1100px] md:h-[1100px] rounded-full"
               style={{ background: 'radial-gradient(circle, rgba(244, 228, 188, 0.18) 0%, rgba(212, 175, 55, 0.04) 40%, transparent 70%)' }} />
        </div>

        {/* Sprigs de romero flotantes */}
        <RosemarySprig className="absolute -left-2 top-8 md:left-10 md:top-16 w-20 md:w-32 text-sage opacity-30 animate-float pointer-events-none" />
        <RosemarySprig className="absolute -right-2 top-8 md:right-10 md:top-16 w-20 md:w-32 text-sage opacity-30 animate-float pointer-events-none" flip />

        <p className="reveal text-[10px] md:text-xs tracking-[0.55em] uppercase text-gold-600/85 font-semibold mb-6">
          ⸻ Repostería Artesanal · Zapopan ⸻
        </p>

        <img
          src="/logo-crocante-dorado.PNG"
          alt="Crocante"
          className="reveal w-72 md:w-[40rem] z-10 object-contain"
          style={{ filter: 'drop-shadow(0 22px 45px rgba(166, 124, 0, 0.22)) drop-shadow(0 0 1px rgba(212,175,55,0.25))' }}
          loading="eager"
        />

        <Ornament className="reveal mt-2 md:mt-1" />

        <p className="reveal mt-4 font-serif italic text-2xl md:text-4xl text-gold-700 tracking-wide">
          Repostería con intención
        </p>

        {/* Navegación de chips — touch-friendly */}
        <nav className="reveal mt-10 md:mt-12 w-full max-w-2xl">
          <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <li>
              <a
                href="https://drive.google.com/file/d/1tJjf7eTc-TE7ZiTH3TmuxR7pTQe76Zu2/view"
                target="_blank" rel="noreferrer"
                className="btn-pill group"
                aria-label="Ver Menú Crocante"
                title="Ver Menú"
              >
                <img
                  src="/globo-batidor-dorado.PNG"
                  alt=""
                  className="w-6 h-6 object-contain transition-transform duration-500 group-hover:rotate-12"
                />
                <span className="text-[11px] md:text-xs tracking-[0.28em] uppercase font-semibold text-gold-700">Menú</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/crocante_reposteria?igsh=dm9ib3d0ZmkzdnZn"
                target="_blank" rel="noreferrer"
                className="btn-pill group"
                aria-label="Visitar Instagram de Crocante"
                title="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"
                     className="text-gold-700 transition-transform duration-500 group-hover:scale-110">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
                </svg>
                <span className="text-[11px] md:text-xs tracking-[0.28em] uppercase font-semibold text-gold-700">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://take.cards/1RODM"
                target="_blank" rel="noreferrer"
                className="btn-pill"
              >
                <span className="text-[11px] md:text-xs tracking-[0.28em] uppercase font-semibold text-gold-700">Cashback</span>
              </a>
            </li>
            <li>
              <a
                href={getWhatsAppLink("Hola, me gustaría consultar las vacantes disponibles para trabajar en el equipo de Crocante.")}
                target="_blank" rel="noreferrer"
                className="btn-pill"
              >
                <span className="text-[11px] md:text-xs tracking-[0.28em] uppercase font-semibold text-gold-700">Trabaja con nosotros</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Indicador de scroll funcional — chevron clásico */}
        <div
          onClick={() => document.getElementById('descubre')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-80 hover:opacity-100 animate-bounce z-10 cursor-pointer transition-opacity duration-300"
          title="Descubrir menú"
        >
          <p className="text-[10px] md:text-xs tracking-[0.4em] text-[#c5a028] uppercase font-bold mb-1">Descubre</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c5a028" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </header>

      {/* ╔══════════ FRASE DEL ALMA ══════════╗ */}
      <section id="descubre" className="reveal py-20 md:py-28 px-6 max-w-4xl mx-auto text-center">
        <Ornament className="mb-10" />
        <p className="font-serif text-2xl md:text-4xl italic text-gold-700 leading-relaxed tracking-wide">
          “Una experiencia visual y sensorial desde el alma,<br className="hidden md:block" /> donde la repostería se encuentra con la belleza del ser.”
        </p>
        <p className="mt-8 text-[10px] md:text-xs tracking-[0.45em] uppercase text-gold-600/80 font-semibold">
          ⸻ Crocante ⸻
        </p>
      </section>

      {/* ╔══════════ EDICIÓN ESPECIAL 10 DE MAYO ══════════╗ */}
      <section className="px-4 md:px-6 max-w-6xl mx-auto pb-24">
        <article className="reveal panel-marble ornate-corners rounded-2xl p-6 sm:p-10 md:p-14 shadow-gold-soft flex flex-col-reverse md:flex-row-reverse gap-8 md:gap-14 items-center group">
          <div className="flex-1 space-y-5 text-center md:text-left">
            <p className="text-[10px] sm:text-xs tracking-[0.42em] text-gold-600 uppercase font-semibold">
              ⸻ Edición Especial 10 de Mayo ⸻
            </p>
            <div>
              <h3 className="font-serif text-5xl sm:text-6xl md:text-7xl text-gold-700 tracking-tight leading-none">
                MAMÁ,
              </h3>
              <h4 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-gold-gradient mt-2">
                hoy te entendí
              </h4>
            </div>
            <p className="font-serif italic text-xl md:text-2xl text-gold-500">Amor en capas</p>
            <p className="text-stone-700 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Pastel de queso mascarpone, frutos rojos y litchie.
            </p>
            <div className="flex items-center gap-3 my-6 justify-center md:justify-start" aria-hidden="true">
              <span className="block h-px w-12 bg-gold-300/70" />
              <RosemarySprig className="w-3 h-8 text-sage opacity-70" />
              <span className="block h-px w-12 bg-gold-300/70" />
            </div>
            <p className="text-gold-700/85 font-serif text-xs md:text-sm italic leading-loose max-w-md mx-auto md:mx-0">
              Pureza infinita que vuelve a su origen.<br />
              Un abrazo de dulzura para mamá.<br />
              El regalo más noble para su alma.
            </p>
            <a
              href={getWhatsAppLink("Hola, me gustaría consultar la disponibilidad del pastel Edición 10 de Mayo (Amor en capas).")}
              target="_blank" rel="noreferrer"
              className="btn-gold mt-6 min-h-12 px-8 py-4 text-[11px] md:text-xs"
            >
              Consultar Disponibilidad
            </a>
          </div>
          <div className="w-full md:w-1/2 image-frame aspect-square relative shadow-gold-soft rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-400/15 via-transparent to-gold-700/25 mix-blend-overlay z-10 pointer-events-none" />
            <img
              src="/pastel10demayo.jpeg"
              alt="Pastel Amor en Capas"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
              loading="lazy"
            />
          </div>
        </article>
      </section>

      {/* ╔══════════ ENCABEZADO CATÁLOGO ══════════╗ */}
      <section className="reveal text-center px-4 max-w-3xl mx-auto pb-12">
        <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-gold-600 font-semibold mb-4">
          La Galería
        </p>
        <h2 className="font-serif text-4xl md:text-6xl text-gold-700 leading-tight">
          Nuestra <span className="italic text-gold-gradient">colección</span>
        </h2>
        <Ornament className="mt-8" />
      </section>

      {/* ╔══════════ CATÁLOGO ══════════╗ */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto pb-24">
        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pasteles.map((pastel, index) => (
            <article
              key={index}
              className="group panel-marble rounded-2xl overflow-hidden shadow-card hover:shadow-gold-soft transition-all duration-700 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Imagen con overlay tipográfico */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={pastel.imagen}
                  alt={`Pastel ${pastel.titulo}`}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1400ms] ease-out"
                  loading="lazy"
                />
                {/* Velos para legibilidad y estética dorada */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400/15 via-transparent to-gold-700/25 mix-blend-overlay" />
                {/* Marco interior */}
                <div className="absolute inset-3 border border-white/20 rounded-xl pointer-events-none" />

                {/* Categoría */}
                <span className="absolute top-4 left-4 px-3 py-1.5 text-[9px] md:text-[10px] tracking-[0.28em] uppercase font-semibold text-gold-100 bg-ink/40 backdrop-blur-sm rounded-full border border-gold-300/30">
                  {pastel.categoria}
                </span>

                {/* Título y eslogan */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                  <h3 className="font-serif text-3xl md:text-4xl leading-none drop-shadow-md">
                    {pastel.titulo}
                  </h3>
                  <p className="mt-2 font-serif italic text-sm md:text-base text-gold-100/90">
                    {pastel.slogan}
                  </p>
                </div>
              </div>

              {/* Contenido descriptivo */}
              <div className="p-5 md:p-6 flex flex-col flex-1 text-center">
                <p className="text-stone-600 text-sm md:text-[15px] leading-relaxed mb-4">
                  {pastel.descripcion}
                </p>
                <div className="flex items-center gap-2 my-3 justify-center" aria-hidden="true">
                  <span className="block h-px w-10 bg-gold-300/60" />
                  <span className="block w-1 h-1 rounded-full bg-gold-500" />
                  <span className="block h-px w-10 bg-gold-300/60" />
                </div>
                <p className="text-gold-700/90 text-xs md:text-sm italic font-serif leading-loose mb-5">
                  {pastel.frases.map((f, i) => (
                    <React.Fragment key={i}>{f}<br /></React.Fragment>
                  ))}
                </p>
                <a
                  href={getWhatsAppLink(`Hola, me gustaría consultar la disponibilidad del pastel ${pastel.waName}.`)}
                  target="_blank" rel="noreferrer"
                  className="btn-gold mt-auto min-h-12 px-6 py-3.5 text-[10px] md:text-xs"
                >
                  Consultar Disponibilidad
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ╔══════════ ARTE EN PORCIONES ══════════╗ */}
      <section className="px-4 md:px-6 max-w-6xl mx-auto pb-32">
        <div className="reveal panel-marble ornate-corners rounded-2xl p-6 sm:p-10 md:p-16 shadow-gold-soft text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-70" />

          <RosemarySprig className="hidden sm:block absolute left-2 top-8 w-12 md:w-16 text-sage opacity-30 animate-sway" />
          <RosemarySprig className="hidden sm:block absolute right-2 top-8 w-12 md:w-16 text-sage opacity-30 animate-sway" flip />

          <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-gold-600 font-semibold mb-4">
            Arte en Porciones
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl italic text-gold-700 mb-6 leading-tight">
            Nuestras obras maestras,<br />en formato petite
          </h2>
          <p className="text-stone-700 font-light text-sm sm:text-base md:text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            Todos nuestros pasteles están disponibles en una delicada versión individual. Perfectos para un antojo sutil, un detalle elegante o para probar toda nuestra galería de sabores.
          </p>

          <div className="bg-white/85 backdrop-blur-sm rounded-2xl border border-gold-300/30 shadow-gold-soft p-5 sm:p-8 md:p-10 max-w-4xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10 items-center text-center md:text-left group">
            <div className="w-full md:w-1/2 image-frame aspect-square relative shadow-card rounded-xl">
              <img
                src="/4-artes-crocante.jpeg"
                alt="Caja 4 Artes"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1200ms]"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-3">
              <p className="text-[10px] md:text-xs tracking-[0.32em] uppercase text-gold-600 font-semibold">
                Caja Degustación
              </p>
              <h3 className="font-serif text-4xl sm:text-5xl text-gold-700">4 Artes</h3>
              <p className="font-serif italic text-gold-500 text-base md:text-lg">
                Tu galería personal de sabores
              </p>
              <p className="text-stone-600 font-light text-sm md:text-base leading-relaxed">
                Una caja cuidadosamente diseñada que incluye 4 de nuestros pasteles en versión "Arte en Porciones". Ideal para compartir, regalar o consentir tu paladar con múltiples experiencias en una sola presentación.
              </p>
              <a
                href={getWhatsAppLink("Hola, me gustaría consultar la disponibilidad de la Caja 4 Artes.")}
                target="_blank" rel="noreferrer"
                className="btn-gold mt-2 min-h-12 px-7 py-3.5 text-[10px] md:text-xs"
              >
                Consultar Caja 4 Artes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ╔══════════ FOOTER ══════════╗ */}
      <footer className="reveal border-t border-gold-300/30 py-12 px-4 text-center">
        <Ornament className="mb-6" />
        <p className="font-serif italic text-gold-700 text-lg md:text-xl">
          Crocante · Repostería con intención
        </p>
        <p className="text-[10px] tracking-[0.4em] uppercase text-gold-600/70 mt-3 font-semibold">
          Zapopan · Hecho con amor
        </p>
      </footer>
    </div>
  );
}

export default App;
