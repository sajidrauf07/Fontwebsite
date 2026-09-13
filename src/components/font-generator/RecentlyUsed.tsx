'use client';

import React from 'react';
import { History, Copy, Check } from 'lucide-react';

interface RecentStyleItem {
  id: string;
  name: string;
  text: string;
  timestamp: number;
}

interface RecentlyUsedProps {
  recentItems: RecentStyleItem[];
  onClearRecent: () => void;
}

export const RecentlyUsed: React.FC<RecentlyUsedProps> = ({
  recentItems,
  onClearRecent
}) => {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  if (recentItems.length === 0) return null;

  const handleCopyRecent = async (item: RecentStyleItem) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(item.text);
      }
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="recently-used-box">
      <div className="recent-header">
        <div className="recent-title">
          <History size={16} />
          <span>Recientemente Copiados</span>
        </div>
        <button onClick={onClearRecent} className="clear-recent-btn" type="button">
          Borrar historial
        </button>
      </div>

      <div className="recent-items-grid">
        {recentItems.slice(0, 8).map((item) => (
          <button
            key={`${item.id}-${item.timestamp}`}
            onClick={() => handleCopyRecent(item)}
            className="recent-chip"
            title={`Copiar: ${item.name}`}
            type="button"
          >
            <span className="recent-name">{item.name}:</span>
            <span className="recent-preview">{item.text}</span>
            {copiedId === item.id ? <Check size={14} className="recent-check" /> : <Copy size={14} />}
          </button>
        ))}
      </div>
    </div>
  );
};
