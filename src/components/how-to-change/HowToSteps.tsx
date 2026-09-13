import React from 'react';
import { Type, Sparkles, Copy, CheckCircle2 } from 'lucide-react';

export default function HowToSteps() {
  const steps = [
    {
      num: 1,
      title: 'Escribe tu texto',
      desc: 'Introduce tu palabra, nombre, frase o biografía en la casilla del conversor.',
      icon: Type
    },
    {
      num: 2,
      title: 'Elige un estilo',
      desc: 'Selecciona entre estilos cursivos, elegantes, negritas, aesthetic o decorados.',
      icon: Sparkles
    },
    {
      num: 3,
      title: 'Copia el resultado',
      desc: 'Pulsa el botón «Copiar» para guardar el texto formateado en tu portapapeles.',
      icon: Copy
    },
    {
      num: 4,
      title: 'Pega tu texto',
      desc: 'Pégalo libremente en tu perfil de Instagram, chat de WhatsApp o publicación.',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="seo-card-section mb-12">
      <div className="seo-icon-badge">
        <Sparkles size={20} />
      </div>
      <h2>¿Cómo cambiar las letras paso a paso?</h2>
      <p>
        Cambiar la apariencia de tu texto online no requiere instalar programas ni registrarse. Sigue estos sencillos pasos:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl relative hover:border-violet-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-full bg-violet-600/20 text-violet-400 font-bold text-sm flex items-center justify-center border border-violet-500/30">
                    {step.num}
                  </span>
                  <Icon className="text-slate-400 w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-100 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
