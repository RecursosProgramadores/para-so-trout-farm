import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import New Assets from galeria folder
import g1 from '@/assets/galeria/galeria.jpg';
import g2 from '@/assets/galeria/galeria2.jpg';
import g3 from '@/assets/galeria/galeria3.jpg';
import g4 from '@/assets/galeria/galeria4.jpg';
import g5 from '@/assets/galeria/galeria5.jpg';
import g6 from '@/assets/galeria/galeria6.jpg';
import g7 from '@/assets/galeria/galeria7.jpg';
import g8 from '@/assets/galeria/galeria8.jpg';
import g9 from '@/assets/galeria/galeria9.jpg';
import g10 from '@/assets/galeria/galeria10.jpg';
import g11 from '@/assets/galeria/galeria11.jpg';
import g12 from '@/assets/galeria/galeria12.jpg';
import g13 from '@/assets/galeria/galeria13.jpg';
import g14 from '@/assets/galeria/galeria14.jpg';
import g15 from '@/assets/galeria/galeria15.jpg';
import g16 from '@/assets/galeria/galeria16.jpg';

interface GalleryItem {
  type: 'image';
  src: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  { type: 'image', src: g1, caption: 'Piscigranja El Paraíso - Vista Panorámica' },
  { type: 'image', src: g2, caption: 'Nuestros estanques de crianza' },
  { type: 'image', src: g3, caption: 'Experiencia de pesca deportiva' },
  { type: 'image', src: g4, caption: 'Entorno natural y aire puro' },
  { type: 'image', src: g5, caption: 'Alimentación de nuestras truchas' },
  { type: 'image', src: g6, caption: 'Momentos inolvidables en familia' },
  { type: 'image', src: g7, caption: 'Pesca exitosa del día' },
  { type: 'image', src: g8, caption: 'Nuestras truchas de alta calidad' },
  { type: 'image', src: g9, caption: 'Paisajes relajantes' },
  { type: 'image', src: g10, caption: 'Diversión para los más pequeños' },
  { type: 'image', src: g11, caption: 'Gastronomía fresca' },
  { type: 'image', src: g12, caption: 'Atención personalizada' },
  { type: 'image', src: g13, caption: 'Instalaciones de primer nivel' },
  { type: 'image', src: g14, caption: 'Naturaleza en cada rincón' },
  { type: 'image', src: g15, caption: 'Tranquilidad y paz' },
  { type: 'image', src: g16, caption: 'Ven y conócenos' },
];

export const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isTourOpen, setIsTourOpen] = useState(false);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryItems.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="galeria" className="py-24 bg-background relative overflow-hidden scroll-mt-28">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-radial from-secondary/10 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-4">
            Galería Multimedia
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6">
            Nuestra <span className="text-secondary">Galería de Fotos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className={`relative group cursor-pointer overflow-hidden rounded-xl ${index % 7 === 0 ? 'col-span-2 row-span-2' : ''
                  }`}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover aspect-square md:aspect-auto md:min-h-[250px] group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-heading font-black text-sm drop-shadow-md">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 360 Virtual Tour CTA - Optimized Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative group max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>

            <div className="relative glass-dark bg-black/60 backdrop-blur-2xl border-white/20 rounded-[2.5rem] p-10 md:p-16 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-secondary/30 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center gap-6">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg transform rotate-12"
                >
                  <Play className="w-10 h-10 text-white fill-current" />
                </motion.div>

                <h3 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                  🎯 Tour Virtual <span className="text-primary">360°</span>
                </h3>

                <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl leading-relaxed drop-shadow-md">
                  Sumérgete en una experiencia única y explora nuestra piscigranja desde cualquier lugar del mundo con nuestro tour virtual inmersivo de alta definición.
                </p>

                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => setIsTourOpen(true)}
                  className="mt-4 px-12 py-8 text-xl rounded-2xl animate-pulse-glow"
                >
                  Iniciar Tour Virtual
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tour Virtual Modal */}
      <AnimatePresence>
        {isTourOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4 md:p-10"
            onClick={() => setIsTourOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsTourOpen(false)}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-red-500/80 hover:bg-red-500 text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 z-[110] border-2 border-white/30 backdrop-blur-sm"
                title="Cerrar Tour"
              >
                <X className="w-7 h-7" />
              </button>

              <iframe
                src="https://player.vimeo.com/video/1158552847?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                className="absolute inset-0 w-full h-full"
                title="Tour Virtual Piscigranja"
              />
            </motion.div>

            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-[110] text-center w-full px-4 pointer-events-none">
              <h3 className="text-2xl md:text-4xl font-heading font-black text-white drop-shadow-2xl">
                Tour Virtual Inmersivo 360°
              </h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 md:p-10"
            onClick={closeLightbox}
          >
            <button
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all z-10 backdrop-blur-md border border-white/20"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all z-10 backdrop-blur-md border border-white/20"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative group/box max-w-full">
                <img
                  src={galleryItems[selectedIndex].src}
                  alt={galleryItems[selectedIndex].caption}
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                />

                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 z-[60] border-2 border-white/30"
                  title="Cerrar"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              <p className="text-center text-white font-heading font-black text-xl mt-6 drop-shadow-md bg-black/40 px-6 py-2 rounded-full backdrop-blur-md border border-white/10">
                {galleryItems[selectedIndex].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
