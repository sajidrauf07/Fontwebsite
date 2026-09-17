import React from 'react';
import Link from 'next/link';
import { Type, Feather, Instagram, Gamepad2, ArrowRight } from 'lucide-react';

export const APPROVED_SILO_LINKS = [
  {
    title: 'Conversor de Letras',
    href: '/conversor-de-letras/',
    desc: 'Transforma texto normal en estilos variados para copiar y pegar en cualquier red social.',
    icon: Type,
    badge: 'Herramienta'
  },
  {
    title: 'Letras Cursivas',
    href: '/letras-cursivas/',
    desc: 'Fuentes cursivas elegantes, caligráficas y finas para perfiles y mensajes especiales.',
    icon: Feather,
    badge: 'Cursivas'
  },
  {
    title: 'Letras para Instagram',
    href: '/letras-para-instagram/',
    desc: 'Diseña tu biografía, nombres llamativos y descripciones con caracteres especiales y símbolos.',
    icon: Instagram,
    badge: 'Instagram'
  },
  {
    title: 'Nombres para Free Fire',
    href: '/nombres-para-free-fire/',
    desc: 'Generador de nicks insanos, nombres para clanes y símbolos épicos para videojuegos.',
    icon: Gamepad2,
    badge: 'Juegos'
  }
];

interface RelatedLinksProps {
  title?: string;
  subtitle?: string;
}

export const RelatedLinks: React.FC<RelatedLinksProps> = ({
  title = 'Herramientas y Secciones Relacionadas',
  subtitle = 'Explora nuestras colecciones especializadas para encontrar el formato exacto que buscas.'
}) => {
  return (
    <div className="article-related-links-wrapper">
      <div className="related-links-header">
        <h3 className="related-links-title">{title}</h3>
        <p className="related-links-subtitle">{subtitle}</p>
      </div>

      <div className="related-links-grid">
        {APPROVED_SILO_LINKS.map((item) => {
          const IconComp = item.icon;
          return (
            <Link key={item.href} href={item.href} className="related-link-card group">
              <div className="related-card-top">
                <div className="related-card-icon-wrapper">
                  <IconComp size={20} className="related-card-icon" aria-hidden="true" />
                </div>
                <span className="related-card-badge">{item.badge}</span>
              </div>
              <h4 className="related-card-title">
                <span>{item.title}</span>
                <ArrowRight size={16} className="related-card-arrow" aria-hidden="true" />
              </h4>
              <p className="related-card-desc">{item.desc}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
