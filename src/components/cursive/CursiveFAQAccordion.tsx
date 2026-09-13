'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export const FAQ_ITEMS = [
  {
    q: '¿Qué son las letras cursivas?',
    a: 'Son letras con una apariencia inclinada, fluida o caligráfica. En herramientas online, el término también puede referirse a caracteres Unicode estilizados que puedes copiar y pegar.'
  },
  {
    q: '¿Cómo puedo copiar letras cursivas?',
    a: 'Escribe tu texto en el generador, selecciona el estilo que prefieras y pulsa Copiar. Después pega el resultado en la aplicación o plataforma que quieras utilizar.'
  },
  {
    q: '¿Las letras cursivas funcionan en Instagram?',
    a: 'Muchos caracteres Unicode estilizados pueden utilizarse en Instagram, pero la compatibilidad depende del carácter y del campo donde lo pegues. Siempre es recomendable comprobar el resultado.'
  },
  {
    q: '¿Necesito instalar una fuente?',
    a: 'No cuando utilizas un conversor basado en caracteres Unicode. El resultado se copia como texto estilizado, aunque su apariencia final depende de la plataforma y del dispositivo.'
  },
  {
    q: '¿Puedo usar letras cursivas en WhatsApp?',
    a: 'Puedes pegar determinados caracteres Unicode estilizados en WhatsApp. La forma en que se muestran puede depender del dispositivo y de la compatibilidad del carácter.'
  },
  {
    q: '¿Por qué algunas letras no aparecen correctamente?',
    a: 'No todos los caracteres tienen equivalentes estilizados en todos los conjuntos Unicode. Además, una aplicación puede no tener soporte visual para determinados caracteres.'
  },
  {
    q: '¿Puedo utilizar letras cursivas para mi nombre?',
    a: 'Sí. Los nombres cortos son uno de los usos más habituales. Prueba varios estilos y elige uno que sea atractivo pero fácil de reconocer.'
  },
  {
    q: '¿Puedo usar letras cursivas en Free Fire?',
    a: 'Depende de los caracteres y de las restricciones del campo de nombre del juego. Si un estilo no funciona, prueba una alternativa más sencilla.'
  },
  {
    q: '¿Las letras cursivas son iguales que una fuente?',
    a: 'No necesariamente. Una fuente es un recurso tipográfico. Un conversor Unicode puede producir caracteres diferentes que tienen una apariencia estilizada.'
  },
  {
    q: '¿Puedo mezclar letras normales y cursivas?',
    a: 'Sí. Combinar texto normal con una palabra o elemento cursivo puede crear un resultado más limpio y fácil de leer.'
  }
];

export const CursiveFAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-v2-list">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`faq-v2-card${isOpen ? ' open' : ''}`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="faq-v2-question"
              aria-expanded={isOpen}
              type="button"
            >
              <span className="faq-v2-arrow">
                <ChevronRight size={18} />
              </span>
              <span className="faq-v2-question-text">
                {item.q}
              </span>
            </button>
            {isOpen && (
              <div className="faq-v2-answer">
                <p className="faq-v2-answer-text">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
