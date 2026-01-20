import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const navItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#experiencias', label: 'Experiencias' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-border'
        : 'bg-white py-4 shadow-sm'
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#inicio"
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#inicio');
          }}
        >
          <img
            src={logo}
            alt="Piscigranja El Paraíso"
            className="h-12 w-auto object-contain drop-shadow-sm group-hover:drop-shadow-md transition-all"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className={`relative font-heading font-bold transition-colors hover:text-primary py-1 ${isScrolled ? 'text-foreground/90' : 'text-foreground'
                }`}
              whileHover={{ y: -2 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">

          <Button
            variant="hero"
            size="sm"
            className="hidden md:flex"
            asChild
          >
            <a
              href="https://wa.me/51929003722?text=Hola!%20Me%20gustaría%20solicitar%20una%20reserva%20en%20Piscigranja%20El%20Paraíso."
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservar
            </a>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden transition-colors text-foreground hover:bg-black/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white mt-2 mx-4 rounded-xl overflow-hidden shadow-2xl border border-border"
          >
            <div className="p-6 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="font-heading font-semibold text-lg text-foreground hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
              <Button
                variant="hero"
                size="lg"
                className="mt-4 w-full"
                asChild
              >
                <a
                  href="https://wa.me/51929003722?text=Hola!%20Me%20gustaría%20solicitar%20una%20reserva%20en%20Piscigranja%20El%20Paraíso."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reserva Ahora
                </a>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
