import React from 'react';
import { ShieldCheck, Languages } from 'lucide-react';
import { PortfolioData, Language } from '../types/portfolio';
import { translations } from '../data/translations';

interface NavbarProps {
  data: PortfolioData;
  onOpenAdmin: () => void;
  lang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ data, onOpenAdmin, lang, onToggleLang }) => {
  const t = translations[lang];
  const displayName = lang === 'bn' && data.fullNameBn ? data.fullNameBn : data.fullName;

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-black/80 border-b border-white/10 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Name */}
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="w-2.5 h-2.5 rounded-full bg-white group-hover:scale-125 transition-transform" />
          <span className="font-bold text-sm sm:text-base tracking-tight text-white font-display">
            {displayName}
          </span>
        </a>

        {/* Minimal Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
          <a href="#work" className="hover:text-white transition-colors">{t.navWork}</a>
          <a href="#skills" className="hover:text-white transition-colors">{t.navSkills}</a>
          <a href="#contact" className="hover:text-white transition-colors">{t.navContact}</a>
        </nav>

        {/* Right Actions: Language Switcher & Admin Access */}
        <div className="flex items-center gap-3">
          
          {/* Bangla / English Language Switcher */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-white/15 text-xs text-neutral-200 transition-all cursor-pointer font-medium"
            title={lang === 'en' ? 'Switch to Bangla (বাংলা)' : 'Switch to English'}
          >
            <Languages className="w-3.5 h-3.5 text-neutral-400" />
            <span>{t.switchLanguage}</span>
          </button>

          {/* Admin Panel Gate */}
          <button
            onClick={onOpenAdmin}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-black bg-white hover:bg-neutral-200 rounded-full transition-colors cursor-pointer"
            title="Admin Login & Control Panel"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.adminPanel}</span>
            <span className="sm:hidden">Admin</span>
          </button>
        </div>

      </div>
    </header>
  );
};
