import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
              POLÍTICA DE PRIVACIDAD
            </h1>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p>
                La presente Política de Privacidad describe cómo <strong>Piscigranja de Truchas "El Paraíso"</strong> recopila, utiliza y protege la información personal de los usuarios que visitan y utilizan nuestro sitio web.
              </p>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  1. Responsable del Tratamiento de Datos
                </h2>
                <p>
                  El responsable del tratamiento de sus datos personales es <strong>Piscigranja de Truchas "El Paraíso"</strong>, con domicilio en La Mora, Cajamarca, Perú. Para cualquier consulta relacionada con la privacidad, puede contactarnos a través del correo electrónico: <strong>javioq@hotmail.com</strong>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  2. Datos que Recopilamos
                </h2>
                <p>
                  A través de nuestro sitio web, podemos recopilar los siguientes datos personales cuando el usuario los proporciona voluntariamente mediante nuestros formularios de contacto o comunicación directa:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nombre completo.</li>
                  <li>Número de teléfono.</li>
                  <li>Dirección de correo electrónico.</li>
                  <li>Información adicional proporcionada en los mensajes de consulta.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  3. Finalidad del Tratamiento
                </h2>
                <p>Los datos recopilados serán utilizados exclusivamente para las siguientes finalidades:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Gestionar y responder a sus consultas, solicitudes de información o reservas.</li>
                  <li>Coordinar pedidos de truchas o servicios de pesca deportiva y gastronomía.</li>
                  <li>Enviar información relevante sobre nuestros eventos y promociones, siempre que usted lo haya autorizado previamente.</li>
                  <li>Mejorar la experiencia del usuario en nuestro sitio web.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  4. Base Legal para el Tratamiento
                </h2>
                <p>
                  La base legal para el tratamiento de su información es el consentimiento que usted nos otorga al enviarnos sus datos a través de los canales habilitados en el sitio web y para la ejecución de medidas precontractuales o contractuales relacionadas con nuestros servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  5. Tiempo de Conservación de los Datos
                </h2>
                <p>
                  Mantendremos sus datos personales únicamente durante el tiempo necesario para cumplir con las finalidades descritas o hasta que usted solicite su supresión, salvo que exista una obligación legal de conservarlos por un periodo superior.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  6. Derechos del Usuario
                </h2>
                <p>Usted tiene derecho a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acceder a sus datos personales en nuestro poder.</li>
                  <li>Rectificar información inexacta o incompleta.</li>
                  <li>Solicitar la supresión de sus datos cuando ya no sean necesarios.</li>
                  <li>Oponerse al tratamiento de sus datos para fines específicos.</li>
                  <li>Retirar su consentimiento en cualquier momento.</li>
                </ul>
                <p className="mt-4">
                  Para ejercer estos derechos, puede enviar una solicitud por escrito a <strong>javioq@hotmail.com</strong>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  7. Seguridad de los Datos
                </h2>
                <p>
                  Nos comprometemos a proteger sus datos personales mediante la implementación de medidas de seguridad técnicas y organizativas adecuadas para evitar su alteración, pérdida, acceso o tratamiento no autorizado.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  8. Enlaces a Terceros
                </h2>
                <p>
                  Nuestro sitio web puede incluir enlaces a redes sociales (YouTube, Facebook, Instagram) u otros sitios controlados por terceros. No somos responsables de las políticas de privacidad de dichos sitios, por lo que recomendamos revisar sus términos de forma independiente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  9. Cambios en la Política de Privacidad
                </h2>
                <p>
                  Nos reservamos el derecho de modificar esta política en cualquier momento para adaptarla a cambios legislativos o novedades en la estructura de nuestros servicios. Cualquier cambio será publicado oportunamente en este sitio web.
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

export default PrivacyPolicy;
