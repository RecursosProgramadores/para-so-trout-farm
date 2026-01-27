import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fish, UtensilsCrossed, TreePine, Trophy, Truck, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EventBanner } from './EventBanner';

// Import New Assets
// Pesca de Truchas
import pesca1 from '@/assets/PescadeTruchas/pesca1.jpg';
import pesca2 from '@/assets/PescadeTruchas/pesca2.jpg';
import pesca3 from '@/assets/PescadeTruchas/pesca3.jpg';

// Restaurante Campestre
import restaurante1 from '@/assets/RestauranteCampestre/restaurante1.jpg';
import restaurante2 from '@/assets/RestauranteCampestre/restaurante2.jpg';
import restaurante3 from '@/assets/RestauranteCampestre/restaurante3.jpg';
import restaurante4 from '@/assets/RestauranteCampestre/restaurante4.jpg';
import carta1 from '@/assets/RestauranteCampestre/Carta1.jpeg';
import carta2 from '@/assets/RestauranteCampestre/Carta2.jpeg';

// Paseo por la Granja
import granja1 from '@/assets/PaseoporlaGranja/granja4.jpg';
import granja2 from '@/assets/PaseoporlaGranja/granja2.jpg';
import granja3 from '@/assets/PaseoporlaGranja/granja3.jpg';
import granja4 from '@/assets/PaseoporlaGranja/granja1.jpg';

// Pesca Deportiva
import deportivo1 from '@/assets/PescaDeportiva/deportivo1.jpg';
import deportivo2 from '@/assets/PescaDeportiva/deportivo2.jpg';
import deportivo3 from '@/assets/PescaDeportiva/deportivo3.jpg';
import deportivo4 from '@/assets/PescaDeportiva/deportivo4.jpg';

// Ventas y Envíos
import venta1 from '@/assets/VentasyEnvíos/venta1.jpg';
import ventas from '@/assets/VentasyEnvíos/ventas.png';
import ventas2 from '@/assets/VentasyEnvíos/ventas2.jpg';

// Paseo por las Truchas (Alimentación)
import alimentacion1 from '@/assets/paseoTruchas/alimentacion.jpg';
import alimentacion2 from '@/assets/paseoTruchas/alimentacion1.jpg';
import alimentacion3 from '@/assets/paseoTruchas/alimentacion2.jpg';
import alimentacion4 from '@/assets/paseoTruchas/alimetacion3.jpg';
import alimentacion5 from '@/assets/paseoTruchas/alimentacion4.jpg';
import alimentacion6 from '@/assets/paseoTruchas/alimetacion5.jpg';
import alimentacion7 from '@/assets/paseoTruchas/alimentacion7.jpg';

const experiences = [
  {
    id: 'pesca',
    icon: Fish,
    title: 'Pesca de Truchas',
    subtitle: '¡Popular! ¡Gratis actualmente!',
    description: 'Pesca tu propia trucha y prepárala en nuestro restaurante campestre. Una experiencia única para toda la familia.',
    image: pesca1,
    galleryImages: [pesca1, pesca2, pesca3],
    highlight: true,
    features: ['Cañas de pesca incluidas', 'Asesoría para principiantes', 'Preparación al instante'],
    whatsappMessage: '¡Hola! Me gustaría reservar una experiencia de Pesca de Truchas en El Paraíso.'
  },
  {
    id: 'restaurante',
    icon: UtensilsCrossed,
    title: 'Restaurante Campestre',
    subtitle: '90% disfrutan en sitio',
    description: 'Sabores frescos y auténticos. El 90% de nuestros clientes disfrutan platos de trucha preparados en nuestras instalaciones.',
    image: restaurante1,
    galleryImages: [restaurante1, restaurante2, restaurante3, restaurante4],
    menuImages: [carta1, carta2],
    features: ['Trucha Frita', 'Ceviche de Trucha', 'Chicharon de Trucha'],
    whatsappMessage: '¡Hola! Quisiera reservar una mesa en su Restaurante Campestre.'
  },
  {
    id: 'granja',
    icon: TreePine,
    title: 'Paseo por la Granja',
    subtitle: 'Tour gratuito',
    description: 'Tour gratuito por nuestras instalaciones, incluyendo nuestra mini-granja con cuyes, gallinas, pavos reales, gansos, patos y más.',
    image: granja1,
    galleryImages: [granja1, granja2, granja3, granja4],
    features: ['Mini-granja interactiva', 'Experiencia educativa'],
    whatsappMessage: '¡Hola! Me interesa realizar un Paseo por la Granja.'
  },
  {
    id: 'paseo-truchas',
    icon: Sparkles,
    title: 'Paseo por las Truchas',
    subtitle: 'Alimentación Interactiva',
    description: 'Una experiencia educativa donde podrás observar de cerca el ciclo de vida de nuestras truchas y participar activamente en su alimentación.',
    image: alimentacion1,
    galleryImages: [alimentacion1, alimentacion2, alimentacion3, alimentacion4, alimentacion5, alimentacion6, alimentacion7],
    features: ['Alimentación de truchas', 'Observación guiada', 'Actividad educativa', 'Diversión garantizada'],
    whatsappMessage: '¡Hola! Me gustaría información sobre el Paseo por las Truchas y la alimentación interactiva.'
  },
  {
    id: 'deportiva',
    icon: Trophy,
    title: 'Pesca Deportiva',
    subtitle: 'Dia del Pescador',
    description: 'Dia del Pescador con trofeos, dinero en efectivo y diplomas. No te pierdas el especial del 29 de Junio.',
    image: deportivo1,
    galleryImages: [deportivo1, deportivo2, deportivo3, deportivo4],
    features: ['Competencias oficiales', 'Premios increíbles', 'Día del Pescador'],
    whatsappMessage: '¡Hola! Quisiera más información y reservar para los Eventos de Pesca Deportiva (especialmente el del 29 de Junio).'
  },
  {
    id: 'envios',
    icon: Truck,
    title: 'Ventas y Envíos',
    subtitle: 'Solo en Cajamarca',
    description: 'Truchas frescas disponibles para compra. Envíos locales en toda la región de Cajamarca.',
    image: ventas,
    galleryImages: [ventas, venta1, ventas2],
    features: ['Trucha fresca', 'Envío mismo día', 'Precios competitivos'],
    whatsappMessage: '¡Hola! Quisiera hacer un pedido de truchas frescas para envío en Cajamarca.'
  },
];


export const ExperiencesSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);

  const [galleryState, setGalleryState] = useState<{ open: boolean; images: string[]; title: string; currentIndex: number }>({
    open: false,
    images: [],
    title: '',
    currentIndex: 0
  });


  const openGallery = (images: string[], title: string) => {
    setGalleryState({ open: true, images, title, currentIndex: 0 });
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setGalleryState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setGalleryState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  return (
    <section id="experiencias" className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Refined & Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block text-primary font-heading font-bold text-xs md:text-sm tracking-[0.3em] uppercase mb-4">
            Explora el Paraíso
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-foreground mb-6 leading-tight">
            Nuestros <span className="text-primary">Servicios</span> Exclusivos
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 md:w-20 h-1 bg-primary/30 rounded-full" />
            <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-primary" />
            <div className="w-12 md:w-20 h-1 bg-primary/30 rounded-full" />
          </div>
        </motion.div>


        {/* Gallery Modal */}
        <AnimatePresence>
          {galleryState.open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center cursor-pointer"
              onClick={() => setGalleryState({ ...galleryState, open: false })}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="w-full h-full relative flex flex-col items-center justify-center p-4 md:p-8 cursor-default"
                onClick={(e) => e.stopPropagation()}
              >

                {/* Title */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 z-40 text-center w-full px-4 pointer-events-none">
                  <h3 className="text-xl md:text-3xl font-heading font-black text-white/90 tracking-tight drop-shadow-2xl">
                    {galleryState.title}
                  </h3>
                </div>

                <div className="relative w-full max-w-7xl h-full flex flex-col items-center justify-center pt-20 pb-20 pointer-events-none">
                  {/* Navigation Arrows */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage(e);
                    }}
                    className="absolute left-0 lg:left-8 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-30 backdrop-blur-md shadow-2xl pointer-events-auto"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage(e);
                    }}
                    className="absolute right-0 lg:right-8 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-30 backdrop-blur-md shadow-2xl pointer-events-auto"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>

                  {/* Main Image Display */}
                  <div className="w-full h-full flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={galleryState.currentIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="relative w-full h-full flex items-center justify-center cursor-pointer pointer-events-auto"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage(e);
                        }}
                      >
                        {/* Wrapper for image-specific positioning */}
                        <div className="relative group/box max-w-full max-h-[70vh]">
                          <img
                            src={galleryState.images[galleryState.currentIndex]}
                            alt={`${galleryState.title} ${galleryState.currentIndex + 1}`}
                            className="max-w-full max-h-[70vh] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] rounded-2xl border border-white/10"
                          />

                          {/* Close Button - Locked strictly to the image area */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setGalleryState({ ...galleryState, open: false });
                            }}
                            className="absolute top-3 right-3 md:top-5 md:right-5 w-11 h-11 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-xl transition-all hover:scale-110 active:scale-95 z-[60] border-2 border-white/30"
                            title="Cerrar Galería"
                          >
                            <X className="w-6 h-6" />
                          </button>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Image Counter & Thumbnail Indicators Wrapper */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 w-full z-40 pointer-events-auto">
                    <div className="bg-white/10 text-white px-6 py-2 rounded-full text-sm font-black backdrop-blur-md shadow-lg border border-white/10">
                      {galleryState.currentIndex + 1} / {galleryState.images.length}
                    </div>

                    <div className="flex justify-center gap-2">
                      {galleryState.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            setGalleryState(prev => ({ ...prev, currentIndex: i }));
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${i === galleryState.currentIndex
                            ? 'bg-primary w-8'
                            : 'bg-white/20 hover:bg-white/40'
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unified Experiences List - Handles Mobile (Vertical) and Desktop (Side-by-Side) */}
        <div className="space-y-16 md:space-y-32 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              id={exp.id}
              className="scroll-mt-32"
            >
              {/* Mobile View Card - Visible only on small screens */}
              <div className="md:hidden">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative h-[280px] w-full">
                    <img
                      src={Array.isArray(exp.image) ? exp.image[0] : exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent h-20" />

                    {/* Floating Badges */}
                    <div className="absolute top-5 left-5 w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg border border-white/20">
                      <exp.icon className="w-5 h-5 text-white" />
                    </div>

                    {exp.highlight && (
                      <div className="absolute top-5 right-5 bg-secondary text-white px-3 py-1.5 rounded-full text-[10px] font-black shadow-lg border border-white/20">
                        ¡Popular!
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-7 space-y-4">
                    <div className="space-y-1">
                      <span className="text-secondary font-heading font-black text-[10px] uppercase tracking-[0.2em]">{exp.subtitle}</span>
                      <h3 className="text-2xl font-heading font-black text-foreground leading-tight">
                        {exp.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex gap-4 pt-2">
                      <Button
                        variant="outline"
                        size="lg"
                        className="flex-1 rounded-2xl font-black text-xs h-12 border-primary/40 text-primary hover:bg-primary/5 transition-all active:scale-95"
                        onClick={() => openGallery(exp.galleryImages, exp.title)}
                      >
                        Galería
                      </Button>
                      <Button
                        size="lg"
                        asChild
                        className="flex-1 rounded-2xl font-black text-xs h-12 shadow-lg shadow-primary/20 transition-all active:scale-95"
                      >
                        <a
                          href={`https://wa.me/51929003722?text=${encodeURIComponent(exp.whatsappMessage)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Reservar
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Desktop View Content - Visible only on large screens */}
              <div className="hidden md:block">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className={`flex flex-col md:flex-row gap-10 lg:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  {/* Image Container */}
                  <div className="w-full md:w-1/2 group">
                    <div className={`relative h-[300px] md:h-[450px] rounded-[3.5rem] overflow-hidden bg-card/50 backdrop-blur-sm border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-[1.02] ${selectedExperience === exp.id
                      ? 'ring-4 ring-primary/30 border-primary'
                      : ''
                      }`}
                      onClick={() => setSelectedExperience(exp.id)}
                    >
                      {Array.isArray(exp.image) ? (
                        <div className="flex h-full">
                          {exp.image.map((img, i) => (
                            <div key={i} className="flex-1 h-full overflow-hidden border-r border-white/10 last:border-0 relative">
                              <img
                                src={img}
                                alt={`${exp.title} ${i + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                              />
                              <div className="absolute inset-0 bg-black/20" />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <img
                          src={exp.image}
                          alt={exp.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      {/* Icon Badge */}
                      <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-primary/95 flex items-center justify-center shadow-2xl z-10 backdrop-blur-sm transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                        <exp.icon className="w-8 h-8 text-primary-foreground" />
                      </div>

                      {/* Highlight Badge */}
                      {exp.highlight && (
                        <div className="absolute top-8 right-8 bg-gradient-to-r from-secondary to-accent text-secondary-foreground px-6 py-2.5 rounded-full text-sm font-heading font-black shadow-xl z-10 animate-pulse">
                          ¡Popular!
                        </div>
                      )}

                      {/* Image Overlays for visual depth */}
                      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3.5rem]" />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="w-full md:w-1/2 space-y-6 lg:space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-1 bg-primary rounded-full" />
                        <span className="text-secondary font-heading font-black text-sm uppercase tracking-[0.3em]">{exp.subtitle}</span>
                      </div>
                      <h3 className="text-4xl lg:text-5xl font-heading font-black text-foreground tracking-tight leading-[1.1]">
                        {exp.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed font-medium max-w-xl">
                      {exp.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 pt-4">
                      {exp.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-4 group/feature">
                          <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.6)] flex-shrink-0 group-hover/feature:scale-125 transition-transform" />
                          <span className="text-lg text-foreground/90 font-bold">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-8">
                      <Button
                        variant="outline"
                        size="lg"
                        className="rounded-2xl font-heading font-black text-base px-10 h-14 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all active:scale-95 shadow-md bg-primary/5"
                        onClick={(e) => {
                          e.stopPropagation();
                          openGallery(exp.galleryImages, exp.title);
                        }}
                      >
                        Ver Galería
                      </Button>

                      {exp.id === 'restaurante' && exp.menuImages && (
                        <Button
                          variant="secondary"
                          size="lg"
                          className="rounded-2xl font-heading font-black text-base px-10 h-14 transition-all active:scale-95 bg-secondary/10 hover:bg-secondary/20 text-secondary border-2 border-secondary/20 shadow-lg"
                          onClick={(e) => {
                            e.stopPropagation();
                            openGallery(exp.menuImages, "Nuestra Carta");
                          }}
                        >
                          Ver Carta
                        </Button>
                      )}

                      <Button
                        size="lg"
                        asChild
                        className="rounded-2xl font-heading font-black text-base px-10 h-14 shadow-xl hover:shadow-primary/30 transition-all active:scale-95"
                      >
                        <a
                          href={`https://wa.me/51929003722?text=${encodeURIComponent(exp.whatsappMessage)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Reservar Ahora
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Event Banner Integration - At the end as requested */}
        <div className="mt-32 pt-20 border-t border-border/40">
          <EventBanner />
        </div>
      </div>
    </section>
  );
};
