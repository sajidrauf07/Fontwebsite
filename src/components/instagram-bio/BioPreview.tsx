import React from 'react';
import { User } from 'lucide-react';

interface BioPreviewProps {
  styledText: string;
}

export default function BioPreview({ styledText }: BioPreviewProps) {
  return (
    <div className="cp-panel" style={{ marginTop: '1.5rem', background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 27, 75, 0.8))', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#A5B4FC', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        <User size={16} />
        <span>Vista previa de tu perfil</span>
      </div>

      <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(45deg, #F59E0B, #EC4899, #8B5CF6)', padding: '2px', flexShrink: 0 }}>
          <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#0F172A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8' }}>
            <User size={28} />
          </div>
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem' }}>
            <div>
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#F8FAFC', display: 'block' }}>tu_perfil</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Perfil de ejemplo</span>
            </div>
          </div>

          <div style={{ fontSize: '0.95rem', color: '#F1F5F9', whiteSpace: 'pre-line', lineHeight: '1.5', fontFamily: 'inherit' }}>
            {styledText || 'Escribe tu texto arriba para ver la vista previa de tu bio...'}
          </div>
        </div>
      </div>
    </div>
  );
}
