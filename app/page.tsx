'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Trophy, 
  Zap, 
  MapPin, 
  Mail, 
  Phone, 
  Instagram, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Star,
  Plus,
  Minus,
  ExternalLink,
  Clock,
  Calendar
} from 'lucide-react';

// --- DATA CONFIGURATION (EASY TO CHANGE) ---

const SCHEDULE_DATA = [
  { time: "07:00 - 08:30", mon: "BJJ Fundamentos", tue: "Wrestling", wed: "BJJ Fundamentos", thu: "Wrestling", fri: "BJJ Fundamentos", sat: "Open Mat", sun: "Cerrado" },
  { time: "09:00 - 10:30", mon: "BJJ Avanzado", tue: "Judo", wed: "BJJ Avanzado", thu: "Judo", fri: "BJJ Avanzado", sat: "BJJ Mixto", sun: "Cerrado" },
  { time: "17:00 - 18:00", mon: "Focus Kids", tue: "Focus Kids", wed: "Focus Kids", thu: "Focus Kids", fri: "Focus Kids", sat: "Cerrado", sun: "Cerrado" },
  { time: "18:30 - 20:00", mon: "BJJ Fundamentos", tue: "Leglocks", wed: "BJJ Fundamentos", thu: "Leglocks", fri: "BJJ Fundamentos", sat: "Cerrado", sun: "Cerrado" },
  { time: "20:00 - 21:30", mon: "BJJ Avanzado", tue: "Wrestling", wed: "BJJ Avanzado", thu: "Wrestling", fri: "BJJ Avanzado", sat: "Cerrado", sun: "Cerrado" },
];

const getCellStyles = (text: string) => {
  if (!text || text === "Cerrado" || text === "-") return "flex flex-col items-center justify-center h-full opacity-10";
  
  const base = "flex flex-col gap-1.5 p-4 rounded-2xl border w-full h-full transition-all duration-500 hover:scale-[1.03] hover:shadow-xl cursor-default group relative overflow-hidden";
  
  if (text.includes("Fundamentos")) 
    return `${base} bg-gradient-to-br from-red-50 to-white border-red-100 text-red-700 shadow-sm`;
  
  if (text.includes("Avanzado")) 
    return `${base} bg-slate-50 border-slate-200 text-slate-800 shadow-sm`;
  
  if (text.includes("Judo")) 
    return `${base} bg-gradient-to-br from-amber-50 to-white border-amber-100 text-amber-700 shadow-sm`;
  
  if (text.includes("Wrestling")) 
    return `${base} bg-gradient-to-br from-orange-50 to-white border-orange-100 text-orange-700 shadow-sm`;
  
  if (text.includes("Leglocks")) 
    return `${base} bg-gradient-to-br from-purple-50 to-white border-purple-100 text-purple-700 shadow-sm`;
  
  if (text.includes("Kids")) 
    return `${base} bg-gradient-to-br from-green-50 to-white border-green-100 text-green-700 shadow-sm`;
  
  if (text.includes("Open Mat") || text.includes("Mixto")) 
    return `${base} bg-white border-zinc-200 text-zinc-800 shadow-sm`;
    
  return "text-zinc-600 text-xs";
};

const INSTRUCTORS_DATA = [
  { 
    name: "Johanan Carreño", 
    role: "Head Instructor", 
    rank: "Black Belt",
    specialty: "De la Riva & Pressure Passing",
    image: "/images/profesores/headcouch.jpeg"
  },
  { 
    name: "Daniel García", 
    role: "Kids Program Director", 
    rank: "Brown Belt",
    specialty: "Modern Jiu-Jitsu & Self Defense",
    image: "/images/profesores/fiestoso.png"
  },
  { 
    name: "Diego Felipe", 
    role: "Fundamentals Coach", 
    rank: "Brown Belt",
    specialty: "Fundamentos y Técnicas Básicas",
    image: "/images/profesores/Diego Felipe.png"
  },
  { 
    name: "Francisca Martinez", 
    role: "Women's Program", 
    rank: "Black Belt",
    specialty: "Guard Retention & Mobility",
    image: "/images/profesores/fran.png"
  },
  { 
    name: "Alan Magendzo", 
    role: "No-Gi Specialist", 
    rank: "Black Belt",
    specialty: "Leg Locks & Submission",
    image: "/images/profesores/alan.png"
  },
  { 
    name: "Christian Marin", 
    role: "BJJ Instructor", 
    rank: "Black Belt",
    specialty: "Profe Focus Independencia",
    image: "/images/profesores/Christian Marin.png"
  },
  { 
    name: "Andrés Canales", 
    role: "BJJ Instructor", 
    rank: "Black Belt",
    specialty: "Leglocks - Escuela Corso",
    image: "/images/profesores/Andrés Canales.png"
  },
  { 
    name: "Diego Lobos", 
    role: "BJJ Instructor", 
    rank: "Black Belt",
    specialty: "De la Riva Mortal Asesina",
    image: "/images/profesores/Diego Lobos.png"
  },
  { 
    name: "Federico Noguera", 
    role: "BJJ Instructor", 
    rank: "Black Belt",
    specialty: "Instructor Escuela Corso",
    image: "/images/profesores/Federico Noguera .png"
  },
  { 
    name: "Ivan Noguera", 
    role: "BJJ Instructor", 
    rank: "Black Belt",
    specialty: "Triángulo - Escuela Corso",
    image: "/images/profesores/Ivan Noguera.png"
  },
  { 
    name: "Pablo Leon", 
    role: "BJJ Instructor", 
    rank: "Black Belt",
    specialty: "Jiu-Jitsu Moderno - Profe Raion BJJ",
    image: "/images/profesores/Pablo Leon.jpeg"
  },
  { 
    name: "Esteban Pardo", 
    role: "BJJ Instructor", 
    rank: "Black Belt",
    specialty: "Fundamental - Profe Animal Grip",
    image: "/images/profesores/negrito.png"
  },
  { 
    name: "Sebastián Cadena", 
    role: "Submission Specialist", 
    rank: "Black Belt",
    specialty: "Especialista en Finalizaciones",
    image: "/images/profesores/profe4.png"
  },
  { 
    name: "Ricardo Cardoso", 
    role: "BJJ Instructor", 
    rank: "Black Belt",
    specialty: "Jiu-Jitsu Lifestyle",
    image: "/images/profesores/Ricardo Cardoso.png"
  }
];

const AFFILIATES_DATA = [
  { name: "Animal Grip", image: "/Logos/filiales/animalgrip.png", url: "https://www.instagram.com/animal_grip/", location: "Conchalí" },
  { name: "Corso BJJ", image: "/Logos/filiales/corsobjj.png", url: "https://corsobjj.cl/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnarV7GIqyKUz52zIGV8O60cem8Qym361lkJ_iRCX0-kana4csqb5uu4n9j68_aem_vNGWC1bxInArs-UNdiO6QQ", location: "Las Condes" },
  { name: "Entreno Jiu-Jitsu", image: "/Logos/filiales/entrenojiujitsu.png", url: "https://www.instagram.com/entrenojiujitsu/", location: "" },
  { name: "Focus Independencia", image: "/Logos/filiales/focusindependencia.png", url: "https://www.instagram.com/focus_independencia/", location: "Independencia" },
  { name: "Raion BJJ", image: "/Logos/filiales/raionbjj.png", url: "https://www.raionbjj.cl/", location: "Lo Barnechea" },
  { name: "Triada Jiu-Jitsu", image: "/Logos/filiales/triadajiujitsu.png", url: "https://triadajiujitsu.cl/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGngspdxDH-rBEafkoHHb7SfNLlV145FB0VplHZtvb598PQerdCKZJXth_Yy5Q_aem_D3VnlYxv5DYqYUnyDwBM0g", location: "Ñuñoa" },
  { name: "Olas Combat Jiujitsu", image: "/Logos/filiales/olascombat.png", url: "#", location: "" },
];

// --- END DATA CONFIGURATION ---

export default function LandingPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const [showSplash, setShowSplash] = React.useState(true);

  // Auto-hide splash after 8 seconds if not skipped
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const [heroImgIndex, setHeroImgIndex] = React.useState(0);
  const heroImages = [
    "/images/splash-poster.jpg",
    "/images/prof-roberto.jpg",
    "/images/prof-maria.jpg",
    "/images/prof-carlos.jpg",
    "/images/prof-elena.jpg"
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setHeroImgIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  } as const;

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  } as const;

  if (showSplash) {
    return (
      <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 opacity-40 grayscale">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover"
            poster="/images/splash-poster.jpg"
          >
            <source src="/videos/bjj-hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-32 h-32 mx-auto mb-8 transform rotate-3">
              <img src="/Logos/SixBlades.png" alt="Six Blades" className="w-full h-full object-contain filter-focus-red" />
            </div>
            <div className="h-32 md:h-48 w-auto mx-auto mb-8">
              <img src="/Logos/logo_focus.png" alt="Focus Academy" className="h-full w-auto mx-auto object-contain" />
            </div>
            <p className="text-zinc-500 font-bold uppercase tracking-[0.4em] text-xs mb-12">Preparando tu experiencia...</p>
            
            <button 
              onClick={() => setShowSplash(false)}
              className="bg-red-600 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl shadow-red-600/20"
            >
              Entrar al Tatami
            </button>
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-red-600 w-full origin-left animate-[progress_8s_linear_forwards]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white scroll-smooth overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-100/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-100/20 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-black/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 transform rotate-3 hover:rotate-0 transition-transform cursor-pointer">
                <img src="/Logos/SixBlades.png" alt="Six Blades" className="w-full h-full object-contain filter-focus-red" />
              </div>              <div className="h-16 md:h-20 w-auto ml-2">
                <img src="/Logos/logo_focus.png" alt="Focus Academy" className="h-full w-auto object-contain" />
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-10 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
              <a href="#hero" className="hover:text-black transition-colors text-black">Inicio</a>
              <a href="#profesores" className="hover:text-black transition-colors text-black">Profesores</a>
              <a href="#programas" className="hover:text-black transition-colors text-black">Programas</a>
              <a href="#horario" className="hover:text-black transition-colors text-black">Horarios</a>
              <a href="#filiales" className="hover:text-black transition-colors text-black">Filiales</a>
              <a href="https://wa.me/56945908324?text=Hola%20Focus%20Academy!%20Me%20gustar%C3%ADa%20agendar%20una%20clase%20de%20prueba%20gratis." target="_blank" className="bg-red-600 text-white hover:bg-red-700 shadow-red-600/20 shadow-lg px-6 py-3 rounded-xl transition-all font-black">
                Agenda Gratis
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                <Zap size={12} className="fill-red-600" />
                <span>Evoluciona tu Potencial</span>
              </div>
              <h1 className="text-6xl sm:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9] mb-8 uppercase italic text-black">
                Domina <br /> el <span className="text-black">Tatami</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 mb-12 max-w-lg leading-relaxed font-medium">
                La academia de Jiu-Jitsu más moderna de Chile. Un espacio diseñado para tu transformación física, mental y técnica.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="https://wa.me/56945908324?text=Hola%20Focus%20Academy!%20Me%20gustar%C3%ADa%20agendar%20una%20clase%20de%20prueba%20gratis." target="_blank" 
                  className="group relative inline-flex items-center justify-center bg-red-600 text-white px-10 py-5 rounded-xl font-black text-lg transition-all hover:bg-red-700 hover:shadow-[0_0_40px_rgba(239,68,68,0.2)] overflow-hidden shadow-lg shadow-red-600/10"
                >
                  <span className="relative z-10">Agenda Clase Gratis</span>
                  <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
                <a 
                  href="#programas" 
                  className="inline-flex items-center justify-center px-10 py-5 rounded-xl border-2 border-black/10 hover:bg-black/5 font-black text-lg transition-all text-black"
                >
                  Programas
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 to-transparent rounded-[2.5rem] transform rotate-3 border border-red-100" />
              <div className="absolute inset-0 bg-white rounded-[2.5rem] border border-black/5 overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={heroImgIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={heroImages[heroImgIndex]} 
                      alt="Focus Academy Action" 
                      className="w-full h-full object-cover grayscale brightness-90"
                    />
                  </motion.div>
                </AnimatePresence>
                
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-12">
                  <Trophy size={64} className="text-amber-500 mb-6 drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]" />
                  <div className="font-black text-4xl uppercase italic tracking-tighter leading-tight drop-shadow-sm text-black">
                    Foco & <br /> <span className="text-zinc-500">Disciplina</span>
                  </div>
                  
                  {/* Indicator Dots */}
                  <div className="absolute bottom-10 flex gap-2">
                    {heroImages.map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === heroImgIndex ? 'w-6 bg-black' : 'bg-black/20'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="profesores" className="py-32 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="inline-flex items-center gap-3 text-red-600 font-black uppercase tracking-[0.5em] text-[10px] bg-red-50 px-4 py-1.5 rounded-full border border-red-100 shadow-sm shadow-red-600/5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />Liderazgo</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mt-4 italic text-black">Nuestros Profesores</h2>
          </div>
          
          {/* Fixed Head Coach + Automatic Carousel for others */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 overflow-hidden py-10">
            {/* Fixed Head Coach */}
            <div className="w-[320px] shrink-0">
              <div className="text-center mb-6">
                <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] bg-red-50 px-4 py-1.5 rounded-full border border-red-100 shadow-sm shadow-red-600/5">Head Coach</span>
              </div>
              <InstructorCard {...INSTRUCTORS_DATA[0]} />
            </div>

            {/* Dynamic Carousel for the rest */}
            <div className="relative flex overflow-hidden w-full pt-10 group/carousel">
              <motion.div 
                drag="x"
                dragConstraints={{ left: -4000, right: 0 }}
                animate={{ x: [0, -4000] }}
                transition={{ 
                  ease: "linear", 
                  duration: 80, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="flex gap-10 whitespace-nowrap cursor-grab active:cursor-grabbing"
              >
                {INSTRUCTORS_DATA.slice(1).map((prof, idx) => (
                  <div key={idx} className="w-[320px] shrink-0 whitespace-normal">
                    <InstructorCard {...prof} />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programas" className="py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-3 text-red-600 font-black uppercase tracking-[0.5em] text-[10px] bg-red-50 px-4 py-1.5 rounded-full border border-red-100 shadow-sm shadow-red-600/5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />Entrenamiento</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mt-4 italic text-black">Nuestros Programas</h2>
            </div>
            <p className="text-zinc-600 text-lg lg:text-xl font-medium max-w-sm border-l-2 border-black/10 pl-8">
              Contamos con metodologías específicas para cada etapa de tu camino en el BJJ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ModernProgramCard 
              title="Adulto No-Gi"
              desc="Enfocado exclusivamente en la lucha sin kimono. Ideal para mejorar velocidad, transiciones y llaves de pierna."
              price="Especializado"
              features={["Técnica de Lucha Libre", "Submission Grappling", "Estrategia No-Gi"]}
            />
            <ModernProgramCard 
              title="Plan Full"
              desc="Acceso ilimitado a todas nuestras disciplinas y horarios. La experiencia Focus completa para tu evolución."
              price="Todos los Días"
              features={["BJJ Gi & No-Gi", "Wrestling & Judo", "Todas las Clases", "Open Mat Incluido"]}
              highlight
            />
            <ModernProgramCard 
              title="Focus Kids"
              desc="Desarrollo de disciplina, confianza y coordinación para los más pequeños a través del juego y la técnica."
              price="4 a 12 años"
              features={["Anti-bullying", "Valores & Respeto", "Motricidad Infantil"]}
            />
          </div>
        </div>
      </section>

      {/* Dynamic Schedule Section */}
      <section id="horario" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 text-red-600 font-black uppercase tracking-[0.5em] text-[10px] bg-red-50 px-4 py-1.5 rounded-full border border-red-100 shadow-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
              Planificación
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic text-black leading-tight">Horario Elite</h2>
            <p className="mt-8 text-zinc-500 font-medium max-w-xl mx-auto text-lg leading-relaxed">
              Una estructura técnica diseñada para cubrir todos los aspectos del combate moderno.
            </p>
          </div>

          <div className="bg-white rounded-[3rem] p-4 sm:p-8 md:p-12 border-2 border-zinc-200 shadow-[0_32px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden group/main">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover/main:bg-red-600/10 transition-colors duration-1000" />
            
            {/* Desktop View */}
            <div className="hidden xl:block">
              <div className="grid grid-cols-8 gap-4">
                {/* Header Row */}
                <div className="p-4 flex items-end justify-center">
                  <span className="text-[9px] font-black uppercase tracking-widest text-zinc-300">Bloque</span>
                </div>
                {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map((day) => (
                  <div key={day} className="p-5 bg-zinc-100 rounded-2xl shadow-sm flex items-center justify-center border border-black/[0.03] group hover:bg-black transition-colors duration-500">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-black group-hover:text-white italic">{day}</span>
                  </div>
                ))}

                {/* Schedule Rows */}
                {SCHEDULE_DATA.map((row: any, i) => (
                  <React.Fragment key={i}>
                    <div className="p-4 flex items-center justify-center bg-white rounded-2xl border border-black/5 shadow-sm">
                      <span className="text-[11px] font-black text-black italic leading-none">{row.time}</span>
                    </div>
                    {[row.mon, row.tue, row.wed, row.thu, row.fri, row.sat, row.sun].map((cell, j) => (
                      <div key={j} className="h-28">
                        <div className={getCellStyles(cell || "")}>
                          <span className="text-[10px] font-black leading-tight uppercase tracking-tight">
                            {cell && cell !== "Cerrado" ? cell : ""}
                          </span>
                          {cell && cell !== "Cerrado" && (
                            <div className="flex items-center gap-1.5 mt-auto text-current opacity-40 group-hover:opacity-100 transition-opacity">
                              <Clock size={10} />
                              <span className="text-[8px] font-bold uppercase tracking-widest">Presencial</span>
                            </div>
                          )}
                          {(!cell || cell === "Cerrado") && (
                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-200" />
                          )}
                        </div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Mobile View */}
            <div className="xl:hidden">
              <div className="flex overflow-x-auto pb-8 gap-3 no-scrollbar snap-x">
                {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map((day, idx) => (
                  <button 
                    key={day}
                    onClick={() => {
                      const el = document.getElementById(`day-card-${idx}`);
                      el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                    }}
                    className="flex-shrink-0 px-8 py-4 rounded-full bg-white border border-black/5 text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all shadow-sm"
                  >
                    {day}
                  </button>
                ))}
              </div>

              <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6">
                {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map((day, dayIdx) => {
                  const dayKey = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"][dayIdx];
                  return (
                    <div key={dayIdx} id={`day-card-${dayIdx}`} className="min-w-full snap-start">
                      <div className="bg-white rounded-[2.5rem] p-8 border border-black/5 shadow-xl">
                        <div className="flex items-center justify-between mb-10">
                          <h3 className="text-4xl font-black uppercase italic tracking-tighter text-black">{day}</h3>
                          <Calendar size={24} className="text-red-600 opacity-20" />
                        </div>
                        <div className="space-y-6">
                          {SCHEDULE_DATA.map((row: any, i) => {
                            const classText = row[dayKey];
                            return (
                              <div key={i} className="flex items-center gap-6">
                                <div className="w-20 text-[9px] font-black text-zinc-400 uppercase tracking-widest italic leading-none">
                                  {row.time}
                                </div>
                                <div className="flex-grow">
                                  <div className={getCellStyles(classText || "")}>
                                    <span className="text-xs font-black uppercase italic">
                                      {classText && classText !== "Cerrado" ? classText : "Cerrado"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 p-12 bg-zinc-100 rounded-[3rem] text-black overflow-hidden relative group shadow-xl border border-black/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              <h4 className="text-3xl font-black uppercase italic tracking-tighter mb-2 text-black group-hover:text-red-600 transition-colors">¿Necesitas un horario personalizado?</h4>
              <p className="text-zinc-500 text-base font-medium">Ofrecemos clases particulares y entrenamientos corporativos.</p>
            </div>
            <a 
              href="https://wa.me/56945908324?text=Hola%20Focus%20Academy!%20Me%20gustar%C3%ADa%20consultar%20por%20clases%20particulares." 
              target="_blank"
              className="relative z-10 bg-red-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-red-700 transition-all shadow-xl shadow-red-600/20"
            >
              Consultar WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Affiliates Carousel */}
      <section id="filiales" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <span className="inline-flex items-center gap-3 text-red-600 font-black uppercase tracking-[0.5em] text-[10px] bg-red-50 px-4 py-1.5 rounded-full border border-red-100 shadow-sm shadow-red-600/5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />Red Focus</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mt-4 italic text-black">Nuestras Filiales</h2>
          </div>
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            className="flex gap-12 whitespace-nowrap py-10"
          >
            {[...AFFILIATES_DATA, ...AFFILIATES_DATA].map((aff, i) => (
              <a 
                key={i} 
                href={aff.url}
                target="_blank"
                className="group flex flex-col items-center justify-center min-w-[280px] h-[280px] bg-white rounded-[3rem] border border-zinc-100 hover:border-red-600/20 transition-all duration-500 shadow-sm hover:shadow-2xl"
              >
                <div className="w-full h-40 flex items-center justify-center p-6">
                  <img 
                    src={aff.image} 
                    alt={aff.name} 
                    className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex flex-col items-center">
                  <span className="font-black uppercase text-xs tracking-[0.2em] text-zinc-900 group-hover:text-red-600 transition-colors">{aff.name}</span>
                  {aff.location && (
                    <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-zinc-400 italic">{aff.location}</span>
                  )}
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic text-black">Preguntas Frecuentes</h2>
          </div>
          <div className="space-y-4">
            <FaqItem 
              id={1}
              isOpen={openFaq === 1}
              toggle={() => setOpenFaq(openFaq === 1 ? null : 1)}
              question="¿Necesito experiencia previa?"
              answer="Para nada. Nuestras clases de Fundamentos están diseñadas específicamente para personas que nunca han pisado un tatami."
            />
            <FaqItem 
              id={2}
              isOpen={openFaq === 2}
              toggle={() => setOpenFaq(openFaq === 2 ? null : 2)}
              question="¿Qué equipo necesito para empezar?"
              answer="Para tu primera clase de prueba solo necesitas ropa deportiva cómoda. Si decides inscribirte, te guiaremos para adquirir tu primer Kimono (Gi)."
            />
            <FaqItem 
              id={3}
              isOpen={openFaq === 3}
              toggle={() => setOpenFaq(openFaq === 3 ? null : 3)}
              question="¿Es peligroso entrenar Jiu-Jitsu?"
              answer="En Focus Academy la seguridad es nuestra prioridad #1. Todas las sesiones son supervisadas por instructores certificados y seguimos un protocolo de sparring controlado."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-zinc-50 pt-32 pb-12 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-16 h-16 transform rotate-3">
                  <img src="/Logos/SixBlades.png" alt="Six Blades" className="w-full h-full object-contain filter-focus-red" />
                </div>
                <div className="h-28 w-auto ml-2">
                  <img src="/Logos/logo_focus.png" alt="Focus Academy" className="h-full w-auto object-contain" />
                </div>
              </div>
              <p className="text-zinc-500 text-xl font-medium mb-12 max-w-sm leading-relaxed">
                Formando guerreros dentro y fuera del tatami. Excelencia técnica y ambiente familiar en Chile.
              </p>
              <div className="flex gap-6">
                <SocialLink icon={<Instagram size={24} />} href="https://www.instagram.com/focusacademy.cl/" />
                <SocialLink icon={<Mail size={24} />} href="#" />
              </div>
            </div>
            <div className="md:col-span-3">
              <h4 className="font-black uppercase tracking-[0.2em] text-xs text-black mb-10">Contacto</h4>
              <ul className="space-y-6">
                <FooterContactItem icon={<MapPin size={20} className="text-red-600" />} text="Francisco Bilbao 2970, Providencia, Chile" />
                <FooterContactItem icon={<Phone size={20} className="text-red-600" />} text="+56 9 4590 8324" />
                <FooterContactItem icon={<Mail size={20} className="text-red-600" />} text="hola@focusacademy.cl" />
              </ul>
            </div>
            <div className="md:col-span-4">
              <h4 className="font-black uppercase tracking-[0.2em] text-xs text-black mb-10">Ubicación</h4>
              <div className="w-full h-64 bg-white rounded-3xl border border-black/5 overflow-hidden shadow-lg group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.575651241463!2d-70.5880549!3d-33.434306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf0847984b01%3A0x63a6ceedf529922a!2sAv.%20Francisco%20Bilbao%202970%2C%207510765%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1sen!2scl!4v1776543989865!5m2!1sen!2scl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-black/5 text-center">
            <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Focus Academy BJJ Chile // Crafted with Focus
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- COMPONENTS ---

function InstructorCard({ name, role, rank, specialty, image }: { name: string, role: string, rank: string, specialty: string, image: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, y: -10 }}
      className="relative group rounded-[2.5rem] overflow-hidden bg-black border border-white/5 shadow-lg transition-all"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
      </div>
      
      <div className="absolute bottom-0 p-6 w-full transform transition-transform group-hover:-translate-y-2 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-white text-[9px] font-black uppercase tracking-[0.2em] mb-4 border border-white/10 shadow-xl">
          <div className={`w-2 h-2 rounded-full ${
            rank.toLowerCase().includes('purple') ? 'bg-purple-600' : 
            rank.toLowerCase().includes('brown') ? 'bg-amber-900' : 
            'bg-red-600'
          }`} />
          {rank}
        </div>
        <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-1 text-white leading-tight">{name}</h4>
        <div className="text-white/60 font-bold text-[10px] uppercase tracking-wider mb-4">{role}</div>
        
        <div className="h-0 group-hover:h-12 transition-all duration-300 overflow-hidden opacity-0 group-hover:opacity-100 flex items-center justify-center">
          <p className="text-[9px] uppercase font-black tracking-widest text-red-600/80 italic">Especialidad: {specialty}</p>
        </div>
      </div>
    </motion.div>
  );
}

function ModernProgramCard({ title, desc, price, features, highlight = false }: { title: string, desc: string, price: string, features: string[], highlight?: boolean }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className={`relative p-12 rounded-[3rem] flex flex-col transition-all overflow-hidden ${highlight ? 'bg-zinc-900 text-white shadow-2xl shadow-black/20 z-10' : 'bg-white border border-black/5 shadow-sm'}`}
    >
      {highlight && (
        <div className="absolute top-6 right-6 bg-red-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
          Popular
        </div>
      )}
      <div className={`inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] mb-6 px-3 py-1 rounded-md border ${highlight ? 'bg-white/10 border-white/20 text-white' : 'bg-red-50 border-red-100 text-red-600 shadow-sm shadow-red-600/5'}`}>
        {!highlight && <span className="w-1 h-1 rounded-full bg-red-600" />}
        {price}
      </div>
      <h4 className="text-3xl font-black uppercase italic tracking-tighter mb-6">{title}</h4>
      <p className={`mb-10 font-medium ${highlight ? 'text-zinc-400' : 'text-zinc-600'}`}>{desc}</p>
      
      <ul className="space-y-5 mb-12 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-4 text-sm font-bold">
            <CheckCircle2 size={18} className={highlight ? 'text-white' : 'text-red-600'} />
            <span className={highlight ? 'text-zinc-300' : 'text-zinc-700'}>{f}</span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all ${highlight ? 'bg-red-600 text-white hover:bg-red-700 shadow-xl' : 'bg-black text-white hover:bg-zinc-800 border border-black/10'}`}>
        Ver Detalles
      </button>
    </motion.div>
  );
}

function FaqItem({ id, isOpen, toggle, question, answer }: { id: number, isOpen: boolean, toggle: () => void, question: string, answer: string }) {
  return (
    <div className={`border-b border-black/5 transition-all ${isOpen ? 'pb-8' : 'pb-4'}`}>
      <button 
        onClick={toggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-xl font-bold uppercase tracking-tight group-hover:text-red-600 transition-colors text-black">{question}</span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus size={24} className="text-red-600" /> : <Plus size={24} className="text-black" />}
        </div>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="text-zinc-500 font-medium leading-relaxed pr-12">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      className="w-16 h-16 rounded-2xl bg-white border border-black/5 flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-all hover:-rotate-6 shadow-sm"
    >
      {icon}
    </a>
  );
}

function FooterContactItem({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <li className="flex items-start gap-5 group">
      <div className="transition-transform group-hover:scale-110">{icon}</div>
      <span className="text-zinc-600 font-medium group-hover:text-black transition-colors">{text}</span>
    </li>
  );
}
