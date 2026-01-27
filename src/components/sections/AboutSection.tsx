import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award } from 'lucide-react';
import ownerImage from '@/assets/owner-javier.jpg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';

const values = [
  { icon: Heart, title: 'Pasión', description: 'Amamos lo que hacemos y lo transmitimos en cada experiencia.' },
  { icon: Award, title: 'Calidad', description: 'Truchas frescas criadas con los más altos estándares.' },
];

export const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-background relative overflow-hidden scroll-mt-28">
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Column 1: Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sticky top-24"
          >
            <div className="relative group">
              {/* Enhanced Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/50 to-secondary/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />

              <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl">
                <img
                  src={ownerImage}
                  alt="Javier - Fundador de Piscigranja El Paraíso"
                  className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Prominent Name Badge */}
                <div className="absolute bottom-6 left-6 right-6 glass-dark p-6 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                      <Heart className="w-6 h-6 fill-current" />
                    </div>
                    <div>
                      <h3 className="font-heading font-black text-3xl text-white tracking-tight drop-shadow-sm">
                        Javier
                      </h3>
                      <p className="text-white/90 font-heading font-bold text-sm uppercase tracking-[0.2em] drop-shadow-sm">
                        Fundador & Apasionado por la Acuicultura
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Story, Values, and Missions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Story Content */}
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-foreground font-medium leading-relaxed mb-6 italic border-l-4 border-primary pl-6">
                "Desde niño soñé con tener mi propia piscigranja, inspirado por la experiencia de mi padre
                en la acuicultura; ya que él viene trabajando más de 32 años en un criadero de truchas del
                gobierno regional de Cajamarca. Hoy ése sueño <span className="text-primary font-black">¡es una realidad!</span>"
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Hace 10 años, tomé la decisión de crear mi emprendimiento llamado Piscigranja de Truchas <span className="text-foreground font-bold">'El Paraíso'</span>.
                Este proyecto nació con el objetivo de producir y comercializar trucha arcoíris, una especie
                reconocida por su calidad y sabor. Además, incorporamos la pesca deportiva como una actividad
                recreativa para nuestros visitantes, promoviendo el <span className="text-secondary font-semibold underline decoration-primary/30">turismo vivencial</span> y
                el contacto directo con la naturaleza.
              </p>

              <div className="pt-4">
                <Button
                  variant="hero"
                  size="lg"
                  asChild
                  className="rounded-2xl font-heading font-black text-base px-8 h-14 shadow-xl hover:shadow-primary/30 transition-all active:scale-95 group/btn"
                >
                  <a
                    href="/TRIPTICOELPARAISO.pdf"
                    download="TRIPTICOELPARAISO.pdf"
                    className="flex items-center gap-3"
                  >
                    <Award className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                    Triptico Informativo
                  </a>
                </Button>
              </div>
            </div>

            {/* Values Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-heading font-black text-xl text-foreground mb-2 tracking-tight">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Mission & Vision Accordion */}
            <div className="pt-4">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="mision" className="border-none glass rounded-2xl px-4 overflow-hidden">
                  <AccordionTrigger className="text-foreground hover:text-primary font-heading font-black text-xl py-6 hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Target className="w-5 h-5 text-primary" />
                      </div>
                      Nuestra Misión
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                    Proveer a nuestros clientes de un lugar seguro, para pasar el día en compañía de su familia
                    y/o amigos. Fomentando el sano esparcimiento en un lugar eco turístico que cuenta con un
                    ecosistema manejado cuidadosamente y fomentar el deporte de la pesca deportiva como medio
                    para la sana diversión y entretenimiento.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="vision" className="border-none glass rounded-2xl px-4 overflow-hidden">
                  <AccordionTrigger className="text-foreground hover:text-secondary font-heading font-black text-xl py-6 hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Eye className="w-5 h-5 text-secondary" />
                      </div>
                      Nuestra Visión
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                    Piscigranja 'EL PARAISO' será reconocido como el único lugar a nivel nacional con diferentes
                    unidades de negocios, que les permitirá a nuestros clientes disfrutar nuevas experiencias
                    brindándote un toque de emociones y sensaciones dejando así nuestra huella en cada persona
                    que nos visita. Convirtiéndolas en vivencias inolvidables en un ambiente rodeado de naturaleza,
                    protegiendo y conservando la fauna y su flora.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
