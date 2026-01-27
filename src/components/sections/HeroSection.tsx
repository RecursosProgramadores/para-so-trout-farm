import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Fish, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const stats = [
  { icon: Star, value: '15+', label: 'Años de experiencia' },
  { icon: Fish, value: '800+', label: 'Truchas en eventos' },
  { icon: MapPin, value: 'Cajamarca', label: 'Namora, Perú' },
];

export const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-[100vh] flex items-center overflow-hidden bg-white">
      {/* Background with Transition */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Static Background Image (Visible until video loads) */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isVideoLoaded ? 0 : 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[1]"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />

        <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center bg-white">
          <iframe
            src="https://player.vimeo.com/video/1158552847?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1&quality=1080p"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute min-w-full min-h-full w-[100vw] h-[100vh]"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(1.5)', // Increased scale for full coverage
              pointerEvents: 'none',
              objectFit: 'cover',
              width: '177.78vh', // 16:9 aspect ratio relative to height
              height: '56.25vw'  // 16:9 aspect ratio relative to width
            }}
            title="Piscigranja"
            onLoad={() => setIsVideoLoaded(true)}
          />
        </div>
      </div>

      {/* Optimized Overlay for Left-Aligned Text */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20 z-[2]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-4xl text-left">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-4 leading-[1.1] drop-shadow-2xl">
              <span className="text-white">Vive la experiencia natural</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8 max-w-2xl"
          >
            <p className="text-base sm:text-lg md:text-xl text-white font-body leading-relaxed drop-shadow-lg font-medium border-l-4 border-primary pl-5 py-1">
              Donde la <span className="text-primary font-black">naturaleza</span> y la{' '}
              <span className="text-secondary font-black">aventura</span> se encuentran.
              <br className="hidden sm:block" />
              Pesca deportiva, gastronomía fresca y experiencias inolvidables.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-12"
          >
            <Button
              variant="hero"
              size="lg"
              asChild
              className="animate-pulse-glow w-full sm:w-auto px-8"
            >
              <a
                href="https://wa.me/51929003722?text=Hola!%20Me%20gustaría%20solicitar%20una%20reserva%20en%20Piscigranja%20El%20Paraíso."
                target="_blank"
                rel="noopener noreferrer"
              >
                Reserva tu Experiencia
              </a>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('#experiencias')}
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold w-full sm:w-auto px-8 shadow-lg"
            >
              Ver Experiencias
            </Button>
          </motion.div>

          {/* Stats - Left Aligned & Refined */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-3 md:gap-4 max-w-4xl"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-md shadow-lg rounded-xl px-4 py-3 flex items-center gap-3 border border-white/10 hover:bg-white/10 transition-all duration-300 group min-w-fit"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <stat.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base md:text-lg font-heading font-black text-white leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-[9px] md:text-[10px] font-heading font-bold text-gray-300/80 uppercase tracking-widest leading-none">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
