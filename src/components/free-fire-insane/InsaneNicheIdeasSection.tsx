import React from 'react';
import { Flame, Skull, Shield, Zap, Crown, Swords } from 'lucide-react';

export default function InsaneNicheIdeasSection() {
  return (
    <section className="seo-card-section mb-12" id="explorar-nombres">
      <div className="seo-icon-badge" style={{ color: '#F59E0B' }}>
        <Flame size={20} />
      </div>
      <h2>Ideas y Categorías de Nombres Insanos para Free Fire</h2>
      <p>
        Explora combinaciones temáticas según tu estilo de juego, rol en la escuadra o personalidad dentro del campo de batalla:
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginTop: '1.5rem'
        }}
      >
        {/* Nombres Insanos & Savage */}
        <div
          style={{
            background: 'var(--card-bg, #1e2029)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid rgba(245, 158, 11, 0.25)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#F59E0B' }}>
            <Flame size={18} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Nombres Savage e Insanos</h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
            Apodos potentes con símbolos agresivos como coronas, corchetes y kanjis para infundir respeto:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: '#E2E8F0', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <li>• 亗 𝕾𝕺𝖀𝕷 𝕽𝕰𝕬𝖅𝕰𝕽 亗</li>
            <li>• メ KRATOS メ</li>
            <li>• ⚡ VIPER ⚡</li>
            <li>• ☠️ SAVAGE ☠️</li>
          </ul>
        </div>

        {/* Nombres Dark & Místicos */}
        <div
          style={{
            background: 'var(--card-bg, #1e2029)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid rgba(129, 140, 248, 0.25)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#818CF8' }}>
            <Skull size={18} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Nombres Dark y Místicos</h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
            Fuentes góticas y sombrías ideales para jugadores con estilo sigiloso o francotirador:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: '#E2E8F0', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <li>• 𝕾𝖍𝖆𝖉𝖔𝖜 𝕶𝖎𝖑𝖑𝖊𝖗</li>
            <li>• 💀 SPECTRE 💀</li>
            <li>• ✦ VOID ✦</li>
            <li>• 𝕹𝖎𝖌𝖍𝖙𝖒𝖆𝖗𝖊</li>
          </ul>
        </div>

        {/* Nombres Boss & Pro */}
        <div
          style={{
            background: 'var(--card-bg, #1e2029)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid rgba(16, 185, 129, 0.25)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#10B981' }}>
            <Crown size={18} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Nombres Boss y Lideres</h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
            Combinaciones orientadas a capitanes de escuadra y líderes de clan:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: '#E2E8F0', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <li>• 👑 GODFATHER 👑</li>
            <li>• 亗 EMPEROR 亗</li>
            <li>• 『MAFIA』</li>
            <li>• ☬ PATRÓN ☬</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
