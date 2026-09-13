import React from 'react';
import { Sparkles, Heart, Star, Flame, Crown, Shield } from 'lucide-react';

export default function NicknameNicheIdeasSection() {
  return (
    <section className="seo-card-section mb-12" id="explorar-apodos">
      <div className="seo-icon-badge" style={{ color: '#0EA5E9' }}>
        <Sparkles size={20} />
      </div>
      <h2>Ideas y Estilos de Apodos para Free Fire</h2>
      <p>
        Descubre sugerencias clasificadas por estilo visual para encontrar el nick perfecto que encaje con tu personalidad de juego:
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginTop: '1.5rem'
        }}
      >
        {/* Apodos Aesthetic & Bonitos */}
        <div
          style={{
            background: 'var(--card-bg, #1e2029)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid rgba(236, 72, 153, 0.25)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#EC4899' }}>
            <Heart size={18} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Apodos Bonitos y Aesthetic</h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
            Estilos suaves con flores de cerezo, corazones y destellos:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: '#E2E8F0', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <li>• 🌸 LUNA 🌸</li>
            <li>• ✨ SOFÍA ✨</li>
            <li>• ♡ VALERIA ♡</li>
            <li>• ·.★ ALEX ★.·</li>
          </ul>
        </div>

        {/* Apodos Originales & Pro */}
        <div
          style={{
            background: 'var(--card-bg, #1e2029)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid rgba(14, 165, 233, 0.25)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#0EA5E9' }}>
            <Flame size={18} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Apodos Originales y Pro</h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
            Nicks competitivos diseñados con coronas y corchetes gráficos:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: '#E2E8F0', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <li>• 亗 SHADOW 亗</li>
            <li>• 『NOVA』</li>
            <li>• ★彡BLAZE彡★</li>
            <li>• 么STORM么</li>
          </ul>
        </div>

        {/* Apodos Gaming & Elegantes */}
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
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Apodos Gaming y Elegantes</h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
            Transformaciones sofisticadas en letras cursivas y símbolos sutiles:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: '#E2E8F0', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <li>• ⚡TITAN⚡</li>
            <li>• 𝒱𝒶𝓁𝑒𝓇𝒾𝒶</li>
            <li>• ⚔️LEGEND⚔️</li>
            <li>• 𝕾𝖍𝖆𝖉𝖔𝖜</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
