import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Clock, Fish } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  { icon: MapPin, label: 'Ubicación', value: 'Cajamarca - La Mora, Perú' },
  { icon: Mail, label: 'Email', value: 'javioq@hotmail.com', href: 'mailto:javioq@hotmail.com' },
  { icon: Phone, label: 'Teléfono', value: '+51 XXX XXX XXX' },
  { icon: Clock, label: 'Horario', value: 'Lun - Dom: 8:00 AM - 6:00 PM' },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-primary/10 to-transparent blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-4">
            ¿Listo para la aventura?
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6">
            <span className="text-primary">Contáctanos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-background rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <Fish className="w-6 h-6 text-primary" />
                Envíanos un mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-heading font-medium text-foreground mb-2">
                      Nombre completo
                    </label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      className="bg-muted border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-heading font-medium text-foreground mb-2">
                      Teléfono
                    </label>
                    <Input
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+51 XXX XXX XXX"
                      className="bg-muted border-border"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-heading font-medium text-foreground mb-2">
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="bg-muted border-border"
                  />
                </div>
                
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-heading font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu visita, pedido de truchas o reserva..."
                    rows={5}
                    required
                    className="bg-muted border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Map & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Google Maps Embed */}
            <div className="relative rounded-2xl overflow-hidden h-72 border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124919.41661942513!2d-78.59375899999999!3d-7.163638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b25afe8d2c8bbb%3A0x50c7ab44c1d60cf7!2sCajamarca%2C%20Peru!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Piscigranja El Paraíso"
              />
              <div className="absolute inset-0 pointer-events-none border-4 border-primary/20 rounded-2xl" />
            </div>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background rounded-xl p-5 border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground font-heading uppercase tracking-wider">
                        {info.label}
                      </span>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          className="block text-foreground font-heading font-semibold hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-heading font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick CTA */}
            <div className="glass rounded-xl p-6 text-center">
              <p className="text-foreground font-heading font-semibold mb-2">
                ¿Prefieres llamarnos?
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                Estamos disponibles de Lunes a Domingo
              </p>
              <Button variant="water" size="lg" className="w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
