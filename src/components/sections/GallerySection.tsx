import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, Image as ImageIcon, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ownerImage from '@/assets/owner-javier.jpg';

// Import New Assets
import pesca1 from '@/assets/PescadeTruchas/pesca1.jpg';
import pesca2 from '@/assets/PescadeTruchas/pesca2.jpg';
import pesca3 from '@/assets/PescadeTruchas/pesca3.jpg';

import restaurante1 from '@/assets/RestauranteCampestre/restaurante1.jpg';
import restaurante2 from '@/assets/RestauranteCampestre/restaurante2.jpg';
import restaurante3 from '@/assets/RestauranteCampestre/restaurante3.jpg';
import restaurante4 from '@/assets/RestauranteCampestre/restaurante4.jpg';

import granja1 from '@/assets/PaseoporlaGranja/granja4.jpg';
import granja2 from '@/assets/PaseoporlaGranja/granja2.jpg';
import granja3 from '@/assets/PaseoporlaGranja/granja3.jpg';
import granja4 from '@/assets/PaseoporlaGranja/granja1.jpg';

import deportivo1 from '@/assets/PescaDeportiva/deportivo1.jpg';
import deportivo2 from '@/assets/PescaDeportiva/deportivo2.jpg';
import deportivo3 from '@/assets/PescaDeportiva/deportivo3.jpg';
import deportivo4 from '@/assets/PescaDeportiva/deportivo4.jpg';

import venta1 from '@/assets/VentasyEnvíos/venta1.jpg';
import ventas from '@/assets/VentasyEnvíos/ventas.png';
import ventas2 from '@/assets/VentasyEnvíos/ventas2.jpg';

interface GalleryItem {
  type: 'image' | 'video';
  src?: string;
  thumbnail?: string;
  videoId?: string;
  category: 'pesca' | 'restaurante' | 'granja' | 'evento' | 'ventas';
  caption: string;
}

const galleryItems: GalleryItem[] = [
  { type: 'image', src: pesca1, category: 'pesca', caption: 'Emoción en la pesca de truchas' },
  { type: 'image', src: restaurante1, category: 'restaurante', caption: 'Nuestra trucha a la parrilla estrella' },
  { type: 'image', src: granja1, category: 'granja', caption: 'Interacción con nuestra mini-granja' },
  { type: 'image', src: deportivo1, category: 'evento', caption: 'Competencia oficial de pesca deportiva' },
  { type: 'image', src: pesca2, category: 'pesca', caption: 'Captura del día en El Paraíso' },
  { type: 'image', src: restaurante2, category: 'restaurante', caption: 'Ambiente acogedor en nuestro restaurante' },
  { type: 'image', src: granja2, category: 'granja', caption: 'Conociendo a los animales de la granja' },
  { type: 'image', src: deportivo2, category: 'evento', caption: 'Premiación y alegría' },
  { type: 'image', src: pesca3, category: 'pesca', caption: 'Técnicas de pesca para todos' },
  { type: 'image', src: restaurante3, category: 'restaurante', caption: 'Platos frescos preparados al instante' },
  { type: 'image', src: granja3, category: 'granja', caption: 'Diversión educativa para niños' },
  { type: 'image', src: deportivo3, category: 'evento', caption: 'Liberación de 800 truchas' },
  { type: 'image', src: restaurante4, category: 'restaurante', caption: 'Vistas increíbles desde tu mesa' },
  { type: 'image', src: granja4, category: 'granja', caption: 'Paseo interactivo gratuito' },
  { type: 'image', src: deportivo4, category: 'evento', caption: 'Trofeos del Día del Pescador' },
  { type: 'image', src: ventas, category: 'ventas', caption: 'Truchas frescas listas para envío' },
  { type: 'image', src: venta1, category: 'ventas', caption: 'Empaque de calidad para tu trucha' },
  { type: 'image', src: ventas2, category: 'ventas', caption: 'Distribución en todo Cajamarca' },
  { type: 'video', thumbnail: pesca1, videoId: '80V6p-OiKkw', category: 'evento', caption: 'Resumen del Día del Pescador' },
];

export const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.type === filter);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredItems.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="galeria" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-radial from-secondary/10 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-4">
            Galería Multimedia
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6">
            Fotos y <span className="text-secondary">Videos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8" />

          {/* Filter Buttons */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              Todos
            </Button>
            <Button
              variant={filter === 'image' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('image')}
              className="flex items-center gap-2"
            >
              <ImageIcon className="w-4 h-4" />
              Fotos
            </Button>
            <Button
              variant={filter === 'video' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('video')}
              className="flex items-center gap-2"
            >
              <Video className="w-4 h-4" />
              Videos
            </Button>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.caption}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className={`relative group cursor-pointer overflow-hidden rounded-xl ${index === 0 ? 'col-span-2 row-span-2' : ''
                  }`}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.type === 'image' ? item.src : item.thumbnail}
                  alt={item.caption}
                  className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Video play button */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                  </div>
                )}

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

        {/* 360 Virtual Tour CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto shadow-glow-blue">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              🎯 Tour Virtual 360°
            </h3>
            <p className="text-muted-foreground mb-6">
              Explora nuestra piscigranja desde cualquier lugar del mundo con nuestro tour virtual inmersivo.
            </p>
            <Button variant="water" size="lg">
              Iniciar Tour Virtual
            </Button>
            <p className="text-xs text-primary/70 mt-4 font-semibold">
              *Disponible próximamente
            </p>
          </div>
        </motion.div>
      </div>

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
            {/* Navigation */}
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

            {/* Content */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative group/box max-w-full">
                {filteredItems[selectedIndex].type === 'image' ? (
                  <img
                    src={filteredItems[selectedIndex].src}
                    alt={filteredItems[selectedIndex].caption}
                    className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                  />
                ) : (
                  <div className="aspect-video w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${filteredItems[selectedIndex].videoId}?autoplay=1`}
                      title={filteredItems[selectedIndex].caption}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}

                {/* Integrated Close Button on Image/Video */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 z-[60] border-2 border-white/30"
                  title="Cerrar"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              <p className="text-center text-white font-heading font-black text-xl mt-6 drop-shadow-md bg-black/40 px-6 py-2 rounded-full backdrop-blur-md border border-white/10">
                {filteredItems[selectedIndex].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
