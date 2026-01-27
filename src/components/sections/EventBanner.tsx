import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Trophy, Fish, Gift, Award, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Prize Images
import imgTrofeo from '@/assets/trofeoparaiso.jpeg';
import imgDiploma from '@/assets/diploma.jpg';
import imgArticulo from '@/assets/articulopesca.jpeg';


const prizes = [
  { icon: Trophy, text: 'Trofeos', image: imgTrofeo },
  { icon: Award, text: 'Diplomas', image: imgDiploma },
  { icon: Gift, text: 'Dinero en efectivo', image: null },
  { icon: Fish, text: 'Artículos de pesca', image: imgArticulo },
];

export const EventBanner = () => {
  const [selectedPrize, setSelectedPrize] = useState<{ text: string, image: string } | null>(null);

  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="evento" className="relative py-12 overflow-hidden">
      <div className="relative z-10 w-full">
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
              <span className="text-foreground">Torneo de Pesca</span>
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
                  onClick={() => prize.image && setSelectedPrize({ text: prize.text, image: prize.image })}
                  className={`flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border shadow-sm transition-all ${prize.image ? 'cursor-pointer hover:bg-primary/5 hover:border-primary/50 group' : ''
                    }`}
                >
                  <div className={`w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center transition-transform ${prize.image ? 'group-hover:scale-110' : ''}`}>
                    <prize.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading font-semibold text-foreground">{prize.text}</span>
                    {prize.image && (
                      <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">Click para ver</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                variant="hero"
                size="xl"
                asChild
                className="w-full sm:w-auto font-black"
              >
                <a
                  href="https://wa.me/51929003722?text=Hola!%20Me%20gustaría%20inscribirme%20en%20el%20Evento%20del%20Día%20del%20Pescador."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inscríbete Ahora
                </a>
              </Button>
              <Button
                variant="outline"
                size="xl"
                asChild
                className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all active:scale-95 shadow-md bg-primary/5 font-heading font-black"
              >
                <a
                  href="src/assets/BASESPESCA2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bases del Concurso
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
                <div className="bg-black/80 backdrop-blur-md border border-primary/30 p-4 rounded-2xl shadow-xl flex items-center justify-center gap-4 group/item hover:bg-black/90 transition-colors">
                  <div className="text-4xl font-heading font-black text-primary">800+</div>
                  <div className="text-sm font-heading text-white font-black uppercase tracking-wider leading-tight">
                    Truchas<br />liberadas
                  </div>
                </div>

                <div className="glass border-primary/30 p-4 rounded-2xl shadow-lg flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Fish className="w-5 h-5 text-primary animate-bounce-slow" />
                  </div>
                  <span className="text-base font-heading font-bold text-foreground drop-shadow-sm">
                    ¡Participa y gana!
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Prize Image Modal */}
      <AnimatePresence>
        {selectedPrize && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedPrize(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative group/box max-w-full">
                <img
                  src={selectedPrize.image}
                  alt={selectedPrize.text}
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedPrize(null)}
                  className="absolute top-4 right-4 w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 z-[110] border-2 border-white/30"
                  title="Cerrar"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
