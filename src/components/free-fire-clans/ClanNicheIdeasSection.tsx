import React from 'react';
import { Users, Shield, Flame, Crown, Swords, Award } from 'lucide-react';

export default function ClanNicheIdeasSection() {
  return (
    <section className="seo-card-section mb-12" id="explorar-clanes">
      <div className="seo-icon-badge" style={{ color: '#10B981' }}>
        <Users size={20} />
      </div>
      <h2>Categorías de Nombres para Clanes de Free Fire</h2>
      <p>
        Encuentra el nombre ideal para tu equipo según la identidad competitiva o estética de tu comunidad:
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginTop: '1.5rem'
        }}
      >
        {/* Nombres de Clan Pro y Competitivos */}
        <div
          style={{
            background: 'var(--card-bg, #1e2029)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid rgba(16, 185, 129, 0.25)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#10B981' }}>
            <Award size={18} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Clanes Pro y Competitivos</h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
            Nombres serios y respetados para torneos y clasificatorias:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: '#E2E8F0', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <li>• 亗 SHADOW KINGS 亗</li>
            <li>• 『NOVA SQUAD』</li>
            <li>• ★彡DARK WARRIORS彡★</li>
            <li>• 么APEX LEGENDS么</li>
          </ul>
        </div>

        {/* Clanes Insanos y Agresivos */}
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
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Clanes Insanos y Savage</h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
            Estilos agresivos y tipografías góticas para escuadras dominantes:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: '#E2E8F0', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <li>• 亗 𝕾𝕺𝖀𝕷 𝕽𝕰𝕬𝖅𝕰𝕽𝕾 亗</li>
            <li>• ☠️ SAVAGE CREW ☠️</li>
            <li>• メ VIPER ARMY メ</li>
            <li>• ⚡ VORTEX TEAM ⚡</li>
          </ul>
        </div>

        {/* Clanes Aesthetic y Elegantes */}
        <div
          style={{
            background: 'var(--card-bg, #1e2029)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid rgba(129, 140, 248, 0.25)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#818CF8' }}>
            <Crown size={18} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Clanes Aesthetic y Elegantes</h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
            Nombres limpios, visualmente pulidos y armónicos para comunidades:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: '#E2E8F0', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <li>• 🌸 LUNA SQUAD 🌸</li>
            <li>• ✨ AURA TEAM ✨</li>
            <li>• 👑 ROYAL EMPIRE 👑</li>
            <li>• 𝒱𝒶𝓁𝑒𝓇𝒾𝒶 𝒞𝓁𝒶𝓃</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
