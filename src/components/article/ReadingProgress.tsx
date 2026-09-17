'use client';

import React, { useEffect, useState } from 'react';

export const ReadingProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const article = document.querySelector('.article-prose-container');
      if (!article) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight > 0) {
          setProgress(Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)));
        }
        ticking = false;
        return;
      }

      const rect = article.getBoundingClientRect();
      const articleTop = rect.top + window.scrollY;
      const articleHeight = rect.height;
      const windowHeight = window.innerHeight;
      const scrollPos = window.scrollY;

      const start = articleTop - windowHeight * 0.2;
      const end = articleTop + articleHeight - windowHeight * 0.8;
      const distance = end - start;

      if (distance <= 0) {
        setProgress(0);
      } else {
        const current = scrollPos - start;
        const pct = Math.min(100, Math.max(0, (current / distance) * 100));
        setProgress(pct);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="reading-progress-bar-track"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progreso de lectura"
    >
      <div
        className="reading-progress-bar-fill"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
