import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Clock, Fish } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  { icon: MapPin, label: 'Ubicación', value: 'Cajamarca - Caserio La Perla _ Namora' },
  { icon: Mail, label: 'Email', value: 'javioq@hotmail.com', href: 'mailto:javioq@hotmail.com' },
  { icon: Phone, label: 'Teléfono', value: '+51 929 003 722', href: 'tel:+51929003722' },
  { icon: Clock, label: 'Horario', value: 'Lun - Dom: 10:00 AM - 4:00 PM' },
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

    // Construct WhatsApp message
    const message = `*Nueva Consulta desde la Web - El Paraíso*%0A%0A` +
      `*Nombre:* ${formData.nombre}%0A` +
      `*Teléfono:* ${formData.telefono}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Mensaje:* ${formData.mensaje}`;

    const whatsappUrl = `https://wa.me/51929003722?text=${message}`;

    // Simulate short delay for UX
    await new Promise(resolve => setTimeout(resolve, 800));

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');

    toast({
      title: "¡Redirigiendo a WhatsApp!",
      description: "Se ha generado tu mensaje para contacto directo.",
    });

    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-24 bg-card relative overflow-hidden scroll-mt-28">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-primary/10 to-transparent blur-3xl opacity-50" />

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
            <div className="glass border-primary/20 rounded-2xl p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute -inset-24 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors duration-700" />

              <h3 className="relative text-2xl font-heading font-black text-foreground mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Fish className="w-6 h-6 text-primary" />
                </div>
                Envíanos un mensaje
              </h3>

              <form onSubmit={handleSubmit} className="relative space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="block text-sm font-heading font-bold text-foreground/80 ml-1">
                      Nombre completo
                    </label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Juan Lopez"
                      required
                      className="glass-input border-primary/20 focus:border-primary transition-all rounded-xl py-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="block text-sm font-heading font-bold text-foreground/80 ml-1">
                      Teléfono
                    </label>
                    <Input
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+51 XXX XXX XXX"
                      className="glass-input border-primary/20 focus:border-primary transition-all rounded-xl py-6"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-heading font-bold text-foreground/80 ml-1">
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juanlopez@email.com"
                    required
                    className="glass-input border-primary/20 focus:border-primary transition-all rounded-xl py-6"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="mensaje" className="block text-sm font-heading font-bold text-foreground/80 ml-1">
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
                    className="glass-input border-primary/20 focus:border-primary transition-all rounded-xl min-h-[150px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full shadow-lg hover:shadow-primary/20 transition-all font-black"
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
            <div className="relative rounded-2xl overflow-hidden h-72 border-4 border-white shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.39847530115026!2d-78.318467!3d-7.1979151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b2476111d880ef%3A0x23c4b49af7429ebb!2sEL%20PARAISO!5e0!3m2!1ses!2spe!4v1768923550537!5m2!1ses!2spe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Piscigranja El Paraíso"
              />
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
                  className="glass rounded-2xl p-5 border border-primary/10 hover:border-primary/40 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-[10px] text-primary font-heading font-black uppercase tracking-widest">
                        {info.label}
                      </span>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="block text-foreground font-heading font-bold text-sm sm:text-base hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-heading font-bold text-sm sm:text-base">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};
