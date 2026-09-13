import React from 'react';
import { Sparkles, Heart, Star, Flame, Crown, Shield } from 'lucide-react';

export default function SymbolCollectionsSection() {
  return (
    <section className="seo-card-section mb-12">
      <div className="seo-icon-badge" style={{ color: '#F59E0B' }}>
        <Sparkles size={20} />
      </div>
      <h2>Colecciones Curadas de Símbolos para Free Fire</h2>
      <p>
        Explora las categorías de símbolos más buscadas para personalizar tus nicks de juego y perfiles sociales:
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginTop: '1.5rem'
        }}
      >
        {/* Símbolos Gaming & Pro */}
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
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Símbolos Gaming y Pro</h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
            Los elementos gráficos más populares en las partidas competitivas:
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', fontSize: '1.2rem', color: '#FFFFFF' }}>
            <span>亗</span> <span>『』</span> <span>么</span> <span>メ</span> <span>☬</span> <span>☠️</span> <span>⚡</span> <span>꧁꧂</span>
          </div>
        </div>

        {/* Símbolos Aesthetic & Bonitos */}
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
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Símbolos Aesthetic y Bonitos</h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
            Símbolos suaves con flores, corazones y destellos brillantes:
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', fontSize: '1.2rem', color: '#FFFFFF' }}>
            <span>🌸</span> <span>✨</span> <span>♡</span> <span>♥</span> <span>✦</span> <span>✧</span> <span>❣</span> <span>💕</span>
          </div>
        </div>

        {/* Símbolos para Clanes & Escuadras */}
        <div
          style={{
            background: 'var(--card-bg, #1e2029)',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid rgba(16, 185, 129, 0.25)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#10B981' }}>
            <Shield size={18} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Símbolos para Clanes y Escuadras</h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
            Insignias, coronas y escudos ideales para el lider de clan:
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', fontSize: '1.2rem', color: '#FFFFFF' }}>
            <span>👑</span> <span>⚔️</span> <span>🛡️</span> <span>✪</span> <span>★</span> <span>☣️</span> <span>✙</span> <span>✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}
