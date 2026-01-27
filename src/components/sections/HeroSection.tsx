import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Fish, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const stats = [
  { icon: Star, value: '15+', label: 'Años de experiencia' },
  { icon: Fish, value: '800+', label: 'Truchas en eventos' },
  { icon: MapPin, value: 'Cajamarca', label: 'La Mora, Perú' },
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20 z-[2]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="max-w-4xl text-left">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-6 leading-[1.1] drop-shadow-2xl">
              <span className="text-white">Bienvenido a</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent filter drop-shadow-sm">
                Piscigranja El Paraíso
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-10 max-w-2xl"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-white font-body leading-relaxed drop-shadow-lg font-medium border-l-4 border-primary pl-6 py-2">
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
            className="flex flex-col sm:flex-row items-start gap-5 mb-16"
          >
            <Button
              variant="hero"
              size="xl"
              asChild
              className="animate-pulse-glow w-full sm:w-auto px-10"
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
              size="xl"
              onClick={() => scrollToSection('#experiencias')}
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold w-full sm:w-auto px-10 shadow-lg"
            >
              Ver Experiencias
            </Button>
          </motion.div>

          {/* Stats - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl p-5 flex flex-col items-start border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl md:text-2xl font-heading font-black text-white mb-1">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-xs font-heading font-bold text-gray-300 uppercase tracking-widest leading-tight">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
