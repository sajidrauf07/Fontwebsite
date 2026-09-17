import React from 'react';
import { Sparkles, Type, Copy, CheckCircle2 } from 'lucide-react';
import { StepGuide, StepItem } from '@/components/article';

export default function HowToSteps() {
  return (
    <section className="seo-card-section mb-12">
      <div className="seo-icon-badge">
        <Sparkles size={20} />
      </div>
      <h2>¿Cómo cambiar las letras paso a paso?</h2>
      <p>
        Cambiar la apariencia de tu texto online no requiere instalar programas ni registrarse. Sigue estos sencillos pasos:
      </p>

      <div className="mt-6">
        <StepGuide>
          <StepItem
            stepNumber={1}
            title="Escribe o pega tu texto original"
            badge="Paso 1"
          >
            Introduce tu palabra, nombre, frase o biografía completa en la casilla del conversor superior.
          </StepItem>
          <StepItem
            stepNumber={2}
            title="Elige el estilo que mejor encaje"
            badge="Paso 2"
          >
            Explora la lista de resultados con fuentes cursivas, elegantes, negritas, aesthetic o decoradas en tiempo real.
          </StepItem>
          <StepItem
            stepNumber={3}
            title="Copia el resultado en un clic"
            badge="Paso 3"
          >
            Pulsa el botón «Copiar» para transferir de inmediato el texto estilizado a tu portapapeles.
          </StepItem>
          <StepItem
            stepNumber={4}
            title="Pega y presume en tus redes"
            badge="Paso 4"
            isLast={true}
          >
            Pégalo libremente en tu perfil de Instagram, estados de WhatsApp, tweets o nickname de videojuegos.
          </StepItem>
        </StepGuide>
      </div>
    </section>
  );
}
