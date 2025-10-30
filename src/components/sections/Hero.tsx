import React from "react";
import { ArrowDown, MapPin, TrendingUp, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * HeroPremium — seção hero com estética mais "premium"
 * - Tipografia com serifa e frase contínua
 * - Barra de métricas em glass com divisores
 * - CTA primário com glow suave + secundário discreto
 * - Framer Motion para animações e respeito a prefers-reduced-motion
 * - Props para imagem de fundo e handler do CTA
 */

type HeroProps = {
  bgImage?: string;
  onCTAClick?: () => void;
};

const DEFAULT_BG =
  "images/carousel/01.jpg";

const HeroPremium: React.FC<HeroProps> = ({ bgImage = DEFAULT_BG, onCTAClick }) => {
  const prefersReduced = useReducedMotion();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const stats = [
    { icon: Users, number: "180+", label: "Famílias na 1ª Fase" },
    { icon: TrendingUp, number: "57%", label: "Valorização recorde" },
    { icon: MapPin, number: "360m²", label: "Lotes a partir de" },
  ];

  return (
    <section
      id="hero"
      className="relative isolate min-h-[90vh] flex items-center justify-center overflow-hidden bg-verde-pdf bg-emerald-950 text-white"
    >
      {/* Background layer */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(10,37,30,.76), rgba(10,37,30,.9)), url('${bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Depth highlight */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 20%, rgba(255,255,255,.18) 0%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-7xl px-6 md:px-10 text-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-dourado/30 bg-dourado/10 px-5 py-2.5 text-sm uppercase tracking-wider text-dourado shadow-sm">
          <span>O sucesso continua</span>
        </div>

        {/* Headline */}
        <h1 className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
          <span className="block">Seu Refúgio Exclusivo na</span>
          <span className="block">Natureza de Lagoa Santa</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg lg:text-xl text-white/90">
          Após valorização recorde de <span className="font-semibold text-dourado">57%</span> na 1ª Fase,
          o Retiro das Águas abre novas oportunidades para você conquistar o seu lugar com segurança,
          sofisticação e alto potencial de valorização.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => (onCTAClick ? onCTAClick() : scrollTo("contato"))}
            className="inline-flex items-center justify-center rounded-2xl bg-lime-400 px-9 py-4 font-semibold text-emerald-900 ring-1 ring-black/10 shadow-[0_12px_30px_rgba(163,230,53,.35)] transition hover:shadow-[0_16px_42px_rgba(163,230,53,.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Garanta sua unidade
          </button>
          <button
            onClick={() => scrollTo("beneficios")}
            className="inline-flex items-center justify-center rounded-2xl px-8 py-4 font-medium ring-1 ring-white/20 hover:bg-white/10"
          >
            Ver benefícios
          </button>
        </div>

        {/* Stats Bar (glass) */}
        <div className="mx-auto mt-16 max-w-5xl rounded-2xl bg-white/5 p-4 backdrop-blur-md ring-1 ring-white/10">
          <ul className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {stats.map((s, i) => (
              <li key={i} className="flex items-center justify-center gap-3 px-6 py-5">
                <s.icon className="h-6 w-6 shrink-0 text-dourado" />
                <div className="text-left">
                  <div className="text-2xl font-bold leading-none">{s.number}</div>
                  <div className="mt-1 text-sm text-white/80">{s.label}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("beneficios")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full p-2 text-white/80 hover:text-white focus:outline-none"
        aria-label="Rolar para baixo"
        initial={{ opacity: 0, y: 6 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: prefersReduced
            ? { duration: 0.6 }
            : { delay: 1.2, repeat: Infinity, repeatDelay: 1.5, repeatType: "reverse", duration: 0.9 },
        }}
      >
        <ArrowDown className="h-8 w-8" />
      </motion.button>

      {/* Decorative bottom wave */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 w-full text-white"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0,64 C240,130 720,10 1440,88 L1440,120 L0,120 Z" />
      </svg>
    </section>
  );
};

export default HeroPremium;


