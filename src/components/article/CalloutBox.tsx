import React from 'react';
import { Lightbulb, Info, AlertTriangle } from 'lucide-react';

export type CalloutType = 'tip' | 'info' | 'warning';

interface CalloutBoxProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

export const CalloutBox: React.FC<CalloutBoxProps> = ({
  type = 'info',
  title,
  children
}) => {
  const config = {
    tip: {
      defaultTitle: 'Consejo Práctico',
      icon: Lightbulb,
      className: 'callout-tip'
    },
    info: {
      defaultTitle: 'Nota Informativa',
      icon: Info,
      className: 'callout-info'
    },
    warning: {
      defaultTitle: 'Importante',
      icon: AlertTriangle,
      className: 'callout-warning'
    }
  }[type];

  const IconComponent = config.icon;
  const headerTitle = title || config.defaultTitle;

  return (
    <aside className={`article-callout-box ${config.className}`} role="note">
      <div className="callout-header">
        <IconComponent size={18} className="callout-icon" aria-hidden="true" />
        <span className="callout-title">{headerTitle}</span>
      </div>
      <div className="callout-content">{children}</div>
    </aside>
  );
};

export const TipBox: React.FC<{ title?: string; children: React.ReactNode }> = ({
  title,
  children
}) => <CalloutBox type="tip" title={title}>{children}</CalloutBox>;

export const InfoBox: React.FC<{ title?: string; children: React.ReactNode }> = ({
  title,
  children
}) => <CalloutBox type="info" title={title}>{children}</CalloutBox>;

export const WarningBox: React.FC<{ title?: string; children: React.ReactNode }> = ({
  title,
  children
}) => <CalloutBox type="warning" title={title}>{children}</CalloutBox>;
