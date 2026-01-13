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
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/30" />
      
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
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-8"
          >
            <Fish className="w-4 h-4 text-primary" />
            <span className="text-sm font-heading font-medium text-foreground">Turismo Vivencial en Cajamarca</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-6 leading-tight"
          >
            <span className="text-foreground">Bienvenido a</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              Piscigranja El Paraíso
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto font-body leading-relaxed"
          >
            Donde la <span className="text-primary font-semibold">naturaleza</span> y la{' '}
            <span className="text-secondary font-semibold">aventura</span> se encuentran. 
            Pesca deportiva, gastronomía fresca y experiencias inolvidables.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection('#contacto')}
              className="animate-pulse-glow"
            >
              Reserva tu Experiencia
            </Button>
            <Button
              variant="outlineDark"
              size="xl"
              onClick={() => scrollToSection('#experiencias')}
            >
              Ver Experiencias
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="glass rounded-xl p-4 flex flex-col items-center"
              >
                <stat.icon className="w-6 h-6 text-primary mb-2" />
                <span className="text-2xl font-heading font-bold text-foreground">{stat.value}</span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection('#evento')}
        >
          <span className="text-xs text-foreground/60 font-heading">Descubre más</span>
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};
