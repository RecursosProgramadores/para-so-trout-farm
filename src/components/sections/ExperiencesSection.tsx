import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fish, UtensilsCrossed, TreePine, Trophy, Truck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import eventImage from '@/assets/dia-pescador-event.jpg';
import troutFishingImage from '@/assets/trout-fishing.jpg';
import restaurantImage from '@/assets/restaurant.jpg';
import miniFarmImage from '@/assets/mini-farm.jpg';
import ownerJavierImage from '@/assets/owner-javier.jpg';

const experiences = [
  {
    id: 'pesca',
    icon: Fish,
    title: 'Pesca de Truchas',
    subtitle: '¡Gratis actualmente!',
    description: 'Pesca tu propia trucha y prepárala en nuestro restaurante campestre. Una experiencia única para toda la familia.',
    image: troutFishingImage,
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
    image: restaurantImage,
    features: ['Trucha a la parrilla', 'Ceviche de trucha', 'Para llevar disponible'],
    whatsappMessage: '¡Hola! Quisiera reservar una mesa en su Restaurante Campestre.'
  },
  {
    id: 'granja',
    icon: TreePine,
    title: 'Paseo por la Granja',
    subtitle: 'Tour gratuito',
    description: 'Tour gratuito por nuestras instalaciones, incluyendo nuestra mini-granja con cuyes, gallinas, pavos reales, gansos, patos y más.',
    image: miniFarmImage,
    features: ['Mini-granja interactiva', 'Importación de huevos de USA', 'Experiencia educativa'],
    whatsappMessage: '¡Hola! Me interesa realizar un Paseo por la Granja.'
  },
  {
    id: 'deportiva',
    icon: Trophy,
    title: 'Pesca Deportiva',
    subtitle: 'Eventos anuales',
    description: 'Eventos anuales con trofeos, dinero en efectivo y diplomas. No te pierdas el especial del 29 de Junio.',
    image: [troutFishingImage, eventImage],
    features: ['Competencias oficiales', 'Premios increíbles', 'Día del Pescador'],
    whatsappMessage: '¡Hola! Quisiera más información y reservar para los Eventos de Pesca Deportiva (especialmente el del 29 de Junio).'
  },
  {
    id: 'envios',
    icon: Truck,
    title: 'Ventas y Envíos',
    subtitle: 'Solo en Cajamarca',
    description: 'Truchas frescas disponibles para compra. Envíos locales en toda la región de Cajamarca.',
    image: ownerJavierImage,
    features: ['Trucha fresca', 'Envío mismo día', 'Precios competitivos'],
    whatsappMessage: '¡Hola! Quisiera hacer un pedido de truchas frescas para envío en Cajamarca.'
  },
];

const quizQuestions = [
  {
    question: '¿Qué buscas para hoy?',
    options: [
      { text: 'Aventura en familia', result: 'pesca' },
      { text: 'Cena romántica', result: 'restaurante' },
      { text: 'Paseo tranquilo', result: 'granja' },
      { text: 'Competencia de pesca', result: 'deportiva' },
    ],
  },
];

export const ExperiencesSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizResult, setQuizResult] = useState<string | null>(null);

  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuizAnswer = (result: string) => {
    setQuizResult(result);
    setShowQuiz(false);
    setSelectedExperience(result);
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-4">
            ¿Qué te espera?
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6">
            Vive la <span className="text-primary">Experiencia</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8" />
          
          {/* Quiz CTA */}
          <motion.button
            onClick={() => setShowQuiz(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-accent text-secondary-foreground px-6 py-3 rounded-full font-heading font-bold shadow-lg hover:shadow-xl transition-shadow"
          >
            <Sparkles className="w-5 h-5" />
            Descubre tu aventura ideal
          </motion.button>
        </motion.div>

        {/* Quiz Modal */}
        <AnimatePresence>
          {showQuiz && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowQuiz(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-card border border-border rounded-2xl p-8 max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
                  {quizQuestions[0].question}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {quizQuestions[0].options.map((option) => (
                    <motion.button
                      key={option.text}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleQuizAnswer(option.result)}
                      className="bg-muted hover:bg-primary/20 border border-border hover:border-primary text-foreground p-4 rounded-xl font-heading font-semibold transition-all"
                    >
                      {option.text}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Experiences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`card-glow group cursor-pointer ${
                selectedExperience === exp.id || quizResult === exp.id
                  ? 'ring-2 ring-primary'
                  : ''
              } ${exp.highlight ? 'md:col-span-2 lg:col-span-1' : ''}`}
              onClick={() => setSelectedExperience(exp.id)}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden flex">
                {Array.isArray(exp.image) ? (
                  exp.image.map((img, i) => (
                    <div key={i} className="flex-1 h-full overflow-hidden border-r border-white/10 last:border-0 relative">
                      <img
                        src={img}
                        alt={`${exp.title} ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                  ))
                ) : (
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center shadow-lg z-10">
                  <exp.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Highlight Badge */}
                {exp.highlight && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-heading font-bold shadow-md z-10">
                    ¡Popular!
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-heading font-black text-foreground group-hover:text-primary transition-colors tracking-tight">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-primary font-heading font-bold uppercase tracking-wider">{exp.subtitle}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {exp.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all font-heading font-bold rounded-xl"
                >
                  <a 
                    href={`https://wa.me/51929003722?text=${encodeURIComponent(exp.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Reservar
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
