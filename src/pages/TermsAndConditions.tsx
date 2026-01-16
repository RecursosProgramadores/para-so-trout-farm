import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Volver
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-orange max-w-none bg-card p-8 md:p-12 rounded-3xl border border-border shadow-sm"
          >
            <h1 className="text-4xl font-heading font-black text-foreground mb-8 text-center">
              TÉRMINOS Y CONDICIONES DE USO
            </h1>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p>
                Bienvenido al sitio web de <strong>Piscigranja de Truchas "El Paraíso"</strong>. El acceso y uso de este sitio están sujetos a los términos y condiciones detallados a continuación. Al navegar por nuestra página, usted acepta cumplir con estos términos en su totalidad.
              </p>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  1. Generalidades
                </h2>
                <p>
                  Este sitio web tiene como objetivo informar sobre los servicios de acuicultura, pesca deportiva, gastronomía y turismo ofrecidos por <strong>Piscigranja de Truchas "El Paraíso"</strong>, ubicada en La Mora, Cajamarca, Perú.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  2. Servicios Ofrecidos
                </h2>
                <p>La información publicada en este sitio incluye, pero no se limita a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Descripción de tours por la piscigranja y mini-granja.</li>
                  <li>Servicios de pesca deportiva y venta de truchas.</li>
                  <li>Menú gastronómico y eventos especiales (como el Día del Pescador).</li>
                  <li>Funcionalidades interactivas como el Tour Virtual 360°.</li>
                </ul>
                <p className="mt-4">
                  Nos reservamos el derecho de modificar o suspender cualquier servicio o funcionalidad sin previo aviso.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  3. Uso del Sitio Web
                </h2>
                <p>
                  El usuario se compromete a hacer un uso lícito y adecuado del sitio web, evitando:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar información falsa en los formularios de contacto.</li>
                  <li>Realizar actividades que dañen la infraestructura tecnológica o el funcionamiento del sitio.</li>
                  <li>Utilizar el contenido del sitio para fines comerciales no autorizados.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  4. Propiedad Intelectual
                </h2>
                <p>
                  Todo el contenido visual, textual y multimedia (incluyendo logotipos, fotografías de las instalaciones, videos y el diseño del Tour Virtual) es propiedad exclusiva de <strong>Piscigranja de Truchas "El Paraíso"</strong> o cuenta con las licencias correspondientes. Queda prohibida su reproducción, distribución o modificación sin autorización previa y por escrito.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  5. Responsabilidad
                </h2>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <strong>Piscigranja de Truchas "El Paraíso"</strong> no garantiza la disponibilidad ininterrumpida del sitio web ni se hace responsable por errores técnicos ajenos a su control.
                  </li>
                  <li>
                    La información sobre eventos y precios es referencial y puede estar sujeta a cambios. Se recomienda confirmar los detalles directamente a través de nuestros canales de contacto oficiales.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  6. Enlaces a Terceros
                </h2>
                <p>
                  El sitio web puede contener enlaces a plataformas externas (como Google Maps para la ubicación o redes sociales). El usuario acepta que al hacer clic en estos enlaces, saldrá de nuestro sitio y estará sujeto a las condiciones de dichas plataformas de terceros.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  7. Jurisdicción y Ley Aplicable
                </h2>
                <p>
                  Estos términos se rigen por las leyes de la República del Perú. Cualquier controversia derivada del uso de este sitio web será sometida a la jurisdicción de los tribunales competentes de la ciudad de Cajamarca, Perú.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  8. Modificaciones
                </h2>
                <p>
                  Nos reservamos el derecho de actualizar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor tan pronto como sean publicadas en este sitio web.
                </p>
              </section>

              <div className="pt-8 border-t border-border mt-12 text-sm italic">
                <strong>Fecha de última actualización: Enero 2026</strong>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
