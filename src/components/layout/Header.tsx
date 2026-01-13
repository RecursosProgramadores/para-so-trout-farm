import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Fish, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background/95 border-b border-border shadow-sm ${
        isScrolled 
          ? 'glass py-3 shadow-lg' 
          : 'bg-transparent py-5'
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
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Fish className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-50 blur-lg group-hover:opacity-80 transition-opacity" />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-heading font-bold text-lg leading-tight text-foreground">
              El Paraíso
            </h1>
            <p className="text-xs text-muted-foreground">Piscigranja de Truchas</p>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="relative font-heading font-medium text-foreground/80 hover:text-primary transition-colors link-underline py-1"
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
          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="hidden sm:flex items-center gap-2 text-foreground/70 hover:text-foreground"
          >
            <Globe className="w-4 h-4" />
            <span className="text-xs font-heading uppercase">{language}</span>
          </Button>

          {/* CTA Button */}
          <Button
            variant="hero"
            size="sm"
            className="hidden md:flex"
            onClick={() => scrollToSection('#contacto')}
          >
            Reservar
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground"
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
            className="lg:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
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
                onClick={() => scrollToSection('#contacto')}
              >
                Reserva Ahora
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
