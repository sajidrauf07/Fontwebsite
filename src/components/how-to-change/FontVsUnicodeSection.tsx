import React from 'react';
import { BookOpen, FileCode, CheckCircle, AlertTriangle } from 'lucide-react';

export default function FontVsUnicodeSection() {
  return (
    <section className="seo-card-section mb-12" id="comparativa-fuentes">
      <div className="seo-icon-badge">
        <BookOpen size={20} />
      </div>
      <h2>¿Cambiar la fuente es lo mismo que cambiar las letras?</h2>

      <p className="mb-4">
        Existe una diferencia fundamental entre cambiar la tipografía (fuente) en un procesador de textos como Word y cambiar las letras mediante caracteres <strong>Unicode</strong> online:
      </p>

      <div className="steps-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        <div className="step-card">
          <div className="step-icon-wrapper" style={{ color: '#F59E0B' }}>
            <FileCode size={20} />
          </div>
          <h3>Fuentes de Diseño (.TTF / .OTF)</h3>
          <p>
            Cambian la apariencia visual localmente pero no modifican el código del carácter. Requieren instalar archivos en tu ordenador y <strong>no se pueden copiar y pegar</strong> a Instagram o WhatsApp.
          </p>
        </div>

        <div className="step-card">
          <div className="step-icon-wrapper" style={{ color: '#A5B4FC' }}>
            <CheckCircle size={20} />
          </div>
          <h3>Caracteres Especiales Unicode</h3>
          <p>
            Son símbolos universales codificados independientemente. No requieren descargas ni instalaciones y <strong>se pueden copiar y pegar en cualquier app</strong> compatible.
          </p>
        </div>
      </div>

      <div className="seo-card-section mt-6" style={{ background: 'rgba(15, 23, 42, 0.9)', border: '1px dashed rgba(148, 163, 184, 0.3)' }}>
        <div className="flex items-center gap-2 mb-1" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F59E0B', fontWeight: 600 }}>
          <AlertTriangle size={16} />
          <span>Nota de compatibilidad</span>
        </div>
        <p className="text-xs text-slate-400" style={{ fontSize: '0.85rem', color: 'var(--text-dim)', margin: 0 }}>
          La apariencia exacta de los símbolos Unicode puede variar ligeramente dependiendo del modelo de tu smartphone (iOS o Android) y de la tipografía del sistema receptor.
        </p>
      </div>
    </section>
  );
}
