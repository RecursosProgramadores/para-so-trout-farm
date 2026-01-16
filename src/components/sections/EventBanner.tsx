import { motion } from 'framer-motion';
import { Calendar, Trophy, Fish, Gift, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';


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
    <section id="evento" className="relative py-24 overflow-hidden bg-muted/30">
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                variant="hero"
                size="xl"
                onClick={scrollToContact}
                className="w-full sm:w-auto"
              >
                Inscríbete Ahora
              </Button>
              <Button
                variant="outline"
                size="xl"
                asChild
                className="w-full sm:w-auto border-primary/50 text-foreground hover:bg-primary/10"
              >
                <a 
                  href="https://drive.google.com/file/d/1ZoAgmK7nqNQXRSolo-IY8dff0zS7NLcE/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Ver Tríptico del Evento
                </a>
              </Button>
            </div>
          </motion.div>

          {/* New Video Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col items-center justify-center w-full"
          >
            <div className="relative group w-full max-w-[640px]">
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Video Container */}
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl aspect-video bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/80V6p-OiKkw?autoplay=1&mute=1&loop=1&playlist=80V6p-OiKkw&controls=1&rel=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Info Badges Below Video */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="glass-dark border-primary/20 p-4 rounded-2xl shadow-xl flex items-center justify-center gap-4 group/item hover:bg-black/60 transition-colors">
                  <div className="text-4xl font-heading font-black text-primary">800+</div>
                  <div className="text-sm font-heading text-white font-bold uppercase tracking-wider leading-tight">
                    Truchas<br />liberadas
                  </div>
                </div>

                <div className="glass border-primary/30 p-4 rounded-2xl shadow-lg flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Fish className="w-5 h-5 text-primary animate-bounce-slow" />
                  </div>
                  <span className="text-base font-heading font-bold text-foreground">
                    ¡Participa y gana!
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
