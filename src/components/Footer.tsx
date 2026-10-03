import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PortfolioData, Language } from '../types/portfolio';
import { translations } from '../data/translations';

interface FooterProps {
  data: PortfolioData;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ data, lang }) => {
  const t = translations[lang];
  const displayName = lang === 'bn' && data.fullNameBn ? data.fullNameBn : data.fullName;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-white/10 bg-transparent text-neutral-500 text-xs relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="text-neutral-300 font-medium">{displayName}</span>
          <span>© {new Date().getFullYear()}</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <span>{t.topBtn}</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
