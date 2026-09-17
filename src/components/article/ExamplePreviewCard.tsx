import React from 'react';
import { CopyButton } from './CopyButton';

interface ExamplePreviewCardProps {
  title?: string;
  label?: string;
  sampleText?: string;
  text?: string;
  tag?: string;
  tags?: string[];
  description?: string;
  copyable?: boolean;
}

export const ExamplePreviewCard: React.FC<ExamplePreviewCardProps> = ({
  title,
  label,
  sampleText,
  text,
  tag,
  tags,
  description,
  copyable = true
}) => {
  const displayTitle = label || title || '';
  const displayText = text || sampleText || '';
  const displayTag = tag || (tags && tags.length > 0 ? tags[0] : undefined);

  return (
    <div className="article-example-card">
      <div className="example-card-header">
        <span className="example-card-title">{displayTitle}</span>
        {displayTag && <span className="example-card-tag">{displayTag}</span>}
      </div>

      <div className="example-card-body">
        <p className="example-unicode-text font-unicode">{displayText}</p>
        {copyable && <CopyButton textToCopy={displayText} size="md" />}
      </div>

      {description && <p className="example-card-desc">{description}</p>}
    </div>
  );
};
