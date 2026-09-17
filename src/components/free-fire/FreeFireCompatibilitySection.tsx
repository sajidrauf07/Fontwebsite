'use client';

import React from 'react';
import { Shield, AlertTriangle, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export default function FreeFireCompatibilitySection() {
  return (
    <div className="mt-8 pt-6 border-t border-slate-800/80">
      <div className="article-category-pill">
        <Shield size={14} aria-hidden="true" />
        <span>Compatibilidad y Reglas de Garena</span>
      </div>
      
      <h3 className="article-h3" style={{ marginTop: '0.5rem' }}>
        ¿Funcionan todos estos nombres en Free Fire?
      </h3>
      
      <p className="article-paragraph">
        Información importante sobre la compatibilidad de caracteres alfanuméricos y símbolos Unicode en el juego:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="p-5 rounded-xl bg-slate-900/80 border border-amber-500/20 shadow-sm hover:border-amber-500/40 transition-colors">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-3">
            <Sparkles size={16} />
          </div>
          <h4 className="font-bold text-white text-sm mb-2 flex items-center gap-1.5">
            1. Caracteres Unicode Permitidos
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Free Fire admite una amplia variedad de símbolos gráficos Unicode (coronas 亗, corchetes 『』, estrellas ★ y caracteres Kanji 么).
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-900/80 border border-indigo-500/20 shadow-sm hover:border-indigo-500/40 transition-colors">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-3">
            <CheckCircle2 size={16} />
          </div>
          <h4 className="font-bold text-white text-sm mb-2 flex items-center gap-1.5">
            2. Límite de Longitud
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Free Fire impone un límite máximo de caracteres para el nick del perfil (habitualmente 12 caracteres). Recomendamos probar apodos de longitud moderada.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-900/80 border border-emerald-500/20 shadow-sm hover:border-emerald-500/40 transition-colors">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-3">
            <AlertCircle size={16} />
          </div>
          <h4 className="font-bold text-white text-sm mb-2 flex items-center gap-1.5">
            3. Verificación en Vivo
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Dado que las normas de nombres pueden actualizarse en nuevas versiones, te aconsejamos copiar el apodo elegido y probar la vista previa antes de confirmar el cambio.
          </p>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 flex items-start gap-3 mt-4">
        <AlertTriangle size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs">
          <span className="font-semibold text-amber-300 block">Aviso legal sobre marcas registradas</span>
          <p className="text-slate-400 leading-relaxed m-0">
            Este generador es una herramienta independiente desarrollada por Letras Bonitas. No tenemos afiliación, patrocinio ni relación oficial con Free Fire ni Garena. Todas las marcas pertenecen a sus respectivos propietarios.
          </p>
        </div>
      </div>
    </div>
  );
}

