import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, Image as ImageIcon, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-background.jpg';
import troutImage from '@/assets/trout-fishing.jpg';
import restaurantImage from '@/assets/restaurant.jpg';
import farmImage from '@/assets/mini-farm.jpg';
import eventImage from '@/assets/dia-pescador-event.jpg';
import ownerImage from '@/assets/owner-javier.jpg';

const galleryItems = [
  { type: 'image', src: heroImage, caption: 'Vista aérea de la piscigranja' },
  { type: 'video', thumbnail: eventImage, videoId: 'dQw4w9WgXcQ', caption: 'Día del Pescador 2024' },
  { type: 'image', src: troutImage, caption: 'Trucha arcoíris fresca' },
  { type: 'image', src: restaurantImage, caption: 'Deliciosa trucha a la parrilla' },
  { type: 'video', thumbnail: troutImage, videoId: 'dQw4w9WgXcQ', caption: 'Técnicas de pesca deportiva' },
  { type: 'image', src: farmImage, caption: 'Mini-granja con animales' },
  { type: 'image', src: eventImage, caption: 'Festival del pescador' },
  { type: 'image', src: ownerImage, caption: 'Nuestro fundador Javier' },
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
                className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                  index === 0 ? 'col-span-2 row-span-2' : ''
                }`}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.type === 'image' ? item.src : item.thumbnail}
                  alt={item.caption}
                  className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Video play button */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                )}

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-foreground font-heading font-semibold text-sm">
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
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              🎯 Tour Virtual 360°
            </h3>
            <p className="text-muted-foreground mb-6">
              Explora nuestra piscigranja desde cualquier lugar del mundo con nuestro tour virtual inmersivo.
            </p>
            <Button variant="water" size="lg">
              Iniciar Tour Virtual
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
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
            className="fixed inset-0 bg-white/90 z-50 flex items-center justify-center shadow-elevated"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-card flex items-center justify-center text-foreground hover:text-primary transition-colors z-10"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card flex items-center justify-center text-foreground hover:text-primary transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card flex items-center justify-center text-foreground hover:text-primary transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-5xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {filteredItems[selectedIndex].type === 'image' ? (
                <img
                  src={filteredItems[selectedIndex].src}
                  alt={filteredItems[selectedIndex].caption}
                  className="max-w-full max-h-[80vh] object-contain rounded-xl"
                />
              ) : (
                <div className="aspect-video w-full max-w-4xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${filteredItems[selectedIndex].videoId}?autoplay=1`}
                    title={filteredItems[selectedIndex].caption}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl"
                  />
                </div>
              )}
              <p className="text-center text-foreground font-heading font-semibold mt-4">
                {filteredItems[selectedIndex].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
