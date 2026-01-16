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
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay - Subtler to let image shine, but dark enough at top for header readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />
      
      {/* Animated fish silhouettes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          className="absolute top-1/4 -left-20"
          animate={{ x: ['0%', '120vw'], y: [0, 20, -10, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          <Fish className="w-16 h-16 text-secondary" />
        </motion.div>
        <motion.div
          className="absolute top-2/3 -left-20"
          animate={{ x: ['0%', '120vw'], y: [0, -15, 10, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear', delay: 5 }}
        >
          <Fish className="w-12 h-12 text-primary" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-32 pb-20 md:pt-40 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge removed per user request */}
 
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-10 leading-[1.1] drop-shadow-2xl"
          >
            <span className="text-white">Bienvenido a</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent filter drop-shadow-sm">
              Piscigranja El Paraíso
            </span>
          </motion.h1>
 
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-12 max-w-3xl mx-auto"
          >
            <p className="inline-block text-base sm:text-lg md:text-xl text-white font-body leading-relaxed drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] font-medium bg-black/20 backdrop-blur-[4px] px-5 py-4 sm:px-8 sm:py-5 rounded-2xl border border-white/10">
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
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20"
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection('#contacto')}
              className="animate-pulse-glow w-full sm:w-auto"
            >
              Reserva tu Experiencia
            </Button>
            <Button
              variant="secondary"
              size="xl"
              onClick={() => scrollToSection('#experiencias')}
              className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white font-bold w-full sm:w-auto"
            >
              Ver Experiencias
            </Button>
          </motion.div>
 
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl p-6 flex flex-col items-center border-2 border-primary/20 hover:scale-105 transition-transform duration-300"
              >
                <stat.icon className="w-7 h-7 text-primary mb-3" />
                <span className="text-2xl md:text-3xl font-heading font-black text-primary mb-1">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-xs font-heading font-bold text-muted-foreground uppercase tracking-widest text-center leading-tight">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

          {/* Scroll Indicator removed per user request */}
    </section>
  );
};
