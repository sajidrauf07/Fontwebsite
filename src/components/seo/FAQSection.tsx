'use client';

import React, { useState } from 'react';
import { ChevronRight, HelpCircle } from 'lucide-react';

export interface FAQItem {
  question?: string;
  answer?: string;
  q?: string;
  a?: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: '¿Qué son las letras bonitas?',
    answer:
      'Son estilos de texto creados, en muchos casos, mediante caracteres especiales de Unicode. Permiten transformar texto normal en diferentes apariencias que pueden copiarse y pegarse fácilmente.'
  },
  {
    question: '¿Las letras bonitas son fuentes?',
    answer:
      'No necesariamente. Muchos generadores utilizan caracteres Unicode (como símbolos matemáticos y alfabetos especiales) en lugar de archivos de fuentes tradicionales (.ttf o .otf).'
  },
  {
    question: '¿Puedo copiar letras bonitas?',
    answer:
      'Sí. Una de las principales funciones de estos generadores es permitirte copiar directamente el resultado al portapapeles con un solo clic.'
  },
  {
    question: '¿Puedo utilizar letras bonitas en Instagram?',
    answer:
      'Sí, puedes probar diferentes estilos en las áreas de Instagram que acepten esos caracteres, como biografías, nombres de usuario, leyendas y comentarios. La compatibilidad puede variar según el estilo.'
  },
  {
    question: '¿Funcionan en WhatsApp?',
    answer:
      'Muchos estilos pueden copiarse y pegarse en WhatsApp para mensajes, estados y nombres de perfil. Si uno no aparece correctamente, prueba otro más sencillo.'
  },
  {
    question: '¿Funcionan en Free Fire?',
    answer:
      'Algunos estilos pueden funcionar, pero los videojuegos tienen sus propias restricciones de caracteres y límites de longitud. Comprueba siempre el resultado en el juego antes de decidirte por un nick definitivo.'
  },
  {
    question: '¿Por qué aparecen cuadros en lugar de algunas letras?',
    answer:
      'Puede ocurrir cuando el dispositivo o aplicación no tiene soporte adecuado para un carácter determinado de Unicode. Probar otro estilo menos complejo suele solucionar el problema.'
  },
  {
    question: '¿Puedo usar letras bonitas con ñ y acentos?',
    answer:
      'Depende del estilo. Algunos conjuntos Unicode ofrecen mejores opciones para caracteres del español que otros. En Letras Bonitas preservamos los acentos y la ñ en aquellos estilos donde no existen sustitutos directos.'
  },
  {
    question: '¿Necesito descargar una aplicación?',
    answer:
      'No necesariamente. Puedes utilizar el generador de Letras Bonitas directamente desde cualquier navegador web en tu smartphone, computadora o tablet sin instalar nada.'
  },
  {
    question: '¿Puedo utilizar letras bonitas en mi celular?',
    answer:
      'Sí. De hecho, el proceso de copiar y pegar resulta especialmente práctico desde dispositivos móviles (iOS y Android).'
  }
];

export interface FAQSectionProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
  badgeText?: string;
  colorTheme?: 'default' | 'amber' | 'cyan' | 'purple' | 'emerald';
  id?: string;
  renderSchema?: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  items = FAQ_DATA,
  title = 'Preguntas Frecuentes sobre Letras Bonitas',
  subtitle = 'Todo lo que necesitas saber sobre el uso de tipografías elegantes, compatibilidad y caracteres Unicode.',
  badgeText = 'Dudas resueltas',
  colorTheme = 'default',
  id = 'preguntas-frecuentes',
  renderSchema = false
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const themeClass = colorTheme === 'default' ? '' : colorTheme;

  const normalizedItems = items.map((item) => ({
    question: item.question || item.q || '',
    answer: item.answer || item.a || ''
  }));

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: normalizedItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
    <section className="faq-v2-wrapper" id={id}>
      {/* FAQ Structured Data for Google SEO */}
      {renderSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className={`faq-v2-accent-bar ${themeClass}`.trim()} />

      <div className="faq-v2-header">
        <div className={`faq-v2-badge ${themeClass}`.trim()}>
          <HelpCircle size={16} />
          <span>{badgeText}</span>
        </div>
        <h2 className="faq-v2-title">{title}</h2>
        {subtitle && <p className="faq-v2-subtitle">{subtitle}</p>}
      </div>

      <div className="faq-v2-list">
        {normalizedItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`faq-v2-card ${themeClass}${isOpen ? ' open' : ''}`.trim()}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-v2-question"
                aria-expanded={isOpen}
                type="button"
              >
                <span className="faq-v2-arrow">
                  <ChevronRight size={18} />
                </span>
                <span className="faq-v2-question-text">
                  {item.question}
                </span>
              </button>
              {isOpen && (
                <div className="faq-v2-answer">
                  <p className="faq-v2-answer-text">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
