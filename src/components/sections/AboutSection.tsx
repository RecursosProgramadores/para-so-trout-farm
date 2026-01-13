import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award } from 'lucide-react';
import ownerImage from '@/assets/owner-javier.jpg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const values = [
  { icon: Heart, title: 'Pasión', description: 'Amamos lo que hacemos y lo transmitimos en cada experiencia.' },
  { icon: Award, title: 'Calidad', description: 'Truchas frescas criadas con los más altos estándares.' },
];

export const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent blur-2xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-secondary/10 to-transparent blur-2xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-4">
            Nuestra Historia
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6">
            Conoce <span className="text-primary">El Paraíso</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Owner Image & Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={ownerImage}
                  alt="Javier - Fundador de Piscigranja El Paraíso"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6">
                  <h3 className="font-heading font-bold text-xl text-foreground">Javier</h3>
                  <p className="text-muted-foreground text-sm">Fundador & Apasionado por la Acuicultura</p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-glow p-5"
                >
                  <value.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-heading font-bold text-foreground mb-1">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                "Desde niño soñé con tener mi propia piscigranja, inspirado por la experiencia de mi padre 
                en la acuicultura; ya que él viene trabajando más de 32 años en un criadero de truchas del 
                gobierno regional de Cajamarca. Hoy ése sueño <span className="text-primary font-semibold">¡es una realidad!</span>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Hace 10 años, tomé la decisión de crear mi emprendimiento llamado Piscigranja de Truchas 'El Paraíso'. 
                Este proyecto nació con el objetivo de producir y comercializar trucha arcoíris, una especie 
                reconocida por su calidad y sabor. Además, incorporamos la pesca deportiva como una actividad 
                recreativa para nuestros visitantes, promoviendo el <span className="text-secondary font-semibold">turismo vivencial</span> y 
                el contacto directo con la naturaleza."
              </p>
            </div>

            {/* Mission & Vision Accordion */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="mision" className="border-border">
                <AccordionTrigger className="text-foreground hover:text-primary font-heading font-bold text-lg">
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-primary" />
                    Nuestra Misión
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Proveer a nuestros clientes de un lugar seguro, para pasar el día en compañía de su familia 
                  y/o amigos. Fomentando el sano esparcimiento en un lugar eco turístico que cuenta con un 
                  ecosistema manejado cuidadosamente y fomentar el deporte de la pesca deportiva como medio 
                  para la sana diversión y entretenimiento.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="vision" className="border-border">
                <AccordionTrigger className="text-foreground hover:text-primary font-heading font-bold text-lg">
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-secondary" />
                    Nuestra Visión
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Piscigranja 'EL PARAISO' será reconocido como el único lugar a nivel nacional con diferentes 
                  unidades de negocios, que les permitirá a nuestros clientes disfrutar nuevas experiencias 
                  brindándote un toque de emociones y sensaciones dejando así nuestra huella en cada persona 
                  que nos visita. Convirtiéndolas en vivencias inolvidables en un ambiente rodeado de naturaleza, 
                  protegiendo y conservando la fauna y su flora.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
