import React from 'react';

interface StepItemProps {
  number?: string | number;
  stepNumber?: string | number;
  label?: string;
  badge?: string;
  title: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
  exampleSnippet?: React.ReactNode;
  isLast?: boolean;
}

export const StepItem: React.FC<StepItemProps> = ({
  number,
  stepNumber,
  label,
  badge,
  title,
  description,
  children,
  exampleSnippet,
  isLast = false
}) => {
  const displayNum = String(stepNumber ?? number ?? '1');
  const displayLabel = badge || label || `PASO ${displayNum}`;
  const displayDesc = description ?? children;

  return (
    <div className={`step-timeline-item ${isLast ? 'is-last' : ''}`}>
      <div className="step-timeline-marker">
        <div className="step-number-badge">
          <span className="step-num">{displayNum}</span>
        </div>
        {!isLast && <div className="step-connector-line" aria-hidden="true" />}
      </div>

      <div className="step-content-body">
        <div className="step-label-pill">{displayLabel}</div>
        <h3 className="step-title">{title}</h3>
        {displayDesc && <div className="step-desc">{displayDesc}</div>}
        {exampleSnippet && <div className="step-example-wrapper">{exampleSnippet}</div>}
      </div>
    </div>
  );
};

interface StepGuideProps {
  children: React.ReactNode;
  className?: string;
}

export const StepGuide: React.FC<StepGuideProps> = ({ children, className = '' }) => {
  return (
    <div className={`article-step-guide-timeline ${className}`}>
      {children}
    </div>
  );
};
