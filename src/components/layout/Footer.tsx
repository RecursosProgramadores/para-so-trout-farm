import { motion } from 'framer-motion';
import { Youtube, Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoFooter from '@/assets/logofooter.png';
import libroReclamaciones from '@/assets/libroreclamaciones.jpeg';
import devLogo from '@/assets/logo.svg';

const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

const socialLinks = [
  { icon: Youtube, href: 'https://www.youtube.com/@javierordonezquiroz6312', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const devMessage = encodeURIComponent("Hola Fly, vengo de EL PARAISO Piscigranja , estoy interesado en crear mi página web profesional");

  return (
    <footer className="relative bg-[#f58220] text-white shadow-xl">
      {/* Decorative top bar removed */}

      
      <div className="container mx-auto px-4 pt-16 pb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <motion.div 
              className="flex items-center gap-3 relative -top-4 left-4"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={logoFooter} 
                alt="Piscigranja El Paraíso" 
                className="h-28 w-auto object-contain brightness-0 invert"
              />
            </motion.div>
            <p className="text-white/90 text-sm leading-relaxed font-medium">
              Más de 15 años brindando experiencias únicas de pesca deportiva y gastronomía de trucha en el corazón de Cajamarca.
            </p>
            
            {/* Libro de Reclamaciones */}
            <div className="pt-2">
              <a 
                href="https://forms.gle/YaXB1nhvNkimJGUT7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block group"
              >
                <img 
                  src={libroReclamaciones} 
                  alt="Libro de Reclamaciones Digital" 
                  className="h-20 w-auto rounded-lg shadow-lg group-hover:scale-105 transition-transform border-2 border-white/20"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 border-b border-white/20 pb-2 inline-block">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/80 hover:text-white hover:translate-x-1 transition-all inline-block text-sm font-semibold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 border-b border-white/20 pb-2 inline-block">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/90">
                <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span className="font-medium">Cajamarca - La Mora, Perú</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <a href="mailto:javioq@hotmail.com" className="hover:text-white transition-colors font-medium">
                  javioq@hotmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <span className="font-bold">+51 929 003 722</span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 border-b border-white/20 pb-2 inline-block">Síguenos</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all backdrop-blur-sm border border-white/20"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
              <p className="text-xs text-white/90 leading-tight">
                Suscríbete a nuestro canal para ver eventos y novedades exclusivas.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-white/20 flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-6">
            <p className="text-base text-white/90 text-center sm:text-left font-bold tracking-tight">
              © 2026 Piscigranja "El Paraíso" – Cajamarca, Perú. Pasión por la excelencia.
            </p>
            <div className="flex items-center gap-8 text-sm text-white/80 font-bold">
              <Link to="/politica-de-privacidad" className="hover:text-white transition-colors">Política de privacidad</Link>
              <Link to="/terminos-y-condiciones" className="hover:text-white transition-colors">Términos y condiciones</Link>
            </div>
          </div>
          
          {/* Simplified Developer Credits with Logo */}
          <a
            href={`https://wa.me/51949992147?text=${devMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-heading font-bold text-white/40 hover:text-white/70 transition-colors uppercase tracking-widest"
          >
            Desarrollado por
            <img src={devLogo} alt="Fly Logo" className="h-8 w-auto opacity-80 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </footer>
  );
};
