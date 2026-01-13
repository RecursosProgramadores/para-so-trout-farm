import { motion } from 'framer-motion';
import { Calendar, Trophy, Fish, Gift, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import eventImage from '@/assets/dia-pescador-event.jpg';

const prizes = [
  { icon: Trophy, text: 'Trofeos' },
  { icon: Award, text: 'Diplomas' },
  { icon: Gift, text: 'Dinero en efectivo' },
  { icon: Fish, text: 'Artículos de pesca' },
];

export const EventBanner = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="evento" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${eventImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Event Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-heading font-bold text-primary">29 de Junio</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6">
              <span className="text-foreground">Día del</span>
              <br />
              <span className="shimmer">Pescador</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              ¡No te pierdas nuestro evento anual más esperado! Celebramos el Día del Pescador 
              con la <span className="text-primary font-semibold">suelta de 800 truchas</span> al río, 
              competencias de pesca deportiva y premios increíbles.
            </p>

            {/* Prizes Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {prizes.map((prize, index) => (
                <motion.div
                  key={prize.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <prize.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-heading font-semibold text-foreground">{prize.text}</span>
                </motion.div>
              ))}
            </div>

            <Button
              variant="hero"
              size="xl"
              onClick={scrollToContact}
              className="w-full sm:w-auto"
            >
              Inscríbete Ahora
            </Button>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="relative glass rounded-3xl p-8 text-center">
                <Fish className="w-24 h-24 text-primary mx-auto mb-4 animate-float" />
                <div className="text-6xl font-heading font-black text-foreground mb-2">800+</div>
                <div className="text-lg font-heading text-muted-foreground">Truchas liberadas</div>
                <div className="mt-4 text-sm text-primary font-heading font-semibold">
                  ¡Participa y gana!
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
