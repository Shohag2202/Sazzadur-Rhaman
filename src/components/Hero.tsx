import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Download } from 'lucide-react';
import { PortfolioData, Language } from '../types/portfolio';
import { translations } from '../data/translations';

interface HeroProps {
  data: PortfolioData;
  onOpenAdmin: () => void;
  onDownloadResume: () => void;
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ data, onDownloadResume, lang }) => {
  const [copied, setCopied] = useState(false);
  const t = translations[lang];

  const displayName = lang === 'bn' && data.fullNameBn ? data.fullNameBn : data.fullName;
  const displayRole = lang === 'bn' && data.roleBn ? data.roleBn : data.role;
  const displayTagline = lang === 'bn' && data.taglineBn ? data.taglineBn : data.tagline;
  const displayLocation = lang === 'bn' && data.locationBn ? data.locationBn : data.location;

  const copyEmail = () => {
    navigator.clipboard.writeText(data.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-transparent text-white z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          
          {/* Minimal Availability Indicator */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-neutral-900 border border-white/10 text-xs font-mono text-neutral-300 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{data.available ? t.availableBadge : t.notAvailableBadge} · {displayLocation}</span>
          </div>

          {/* Display Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-display mb-4 leading-[1.08]">
            {t.greeting}{' '}
            <span className="text-neutral-100">
              {displayName}
            </span>
          </h1>

          {/* Role & Tagline */}
          <p className="text-lg sm:text-xl font-medium text-neutral-300 mb-3 max-w-xl">
            {displayRole}
          </p>

          <p className="text-sm sm:text-base text-neutral-400 mb-8 max-w-xl leading-relaxed">
            {displayTagline}
          </p>

          {/* Action Controls */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href="#work"
              className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 font-semibold text-xs tracking-wide transition-all inline-flex items-center gap-1.5"
            >
              <span>{t.exploreWork}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={copyEmail}
              className="px-4 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-850 border border-white/15 text-neutral-200 text-xs font-medium transition-all inline-flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
              <span>{copied ? t.copiedNotice : t.copyEmail}</span>
            </button>

            <button
              onClick={onDownloadResume}
              className="px-4 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-850 border border-white/15 text-neutral-300 text-xs font-medium transition-all inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-neutral-400" />
              <span>{t.downloadCv}</span>
            </button>
          </div>

          {/* 3 Minimal Numerical Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-md">
            {data.stats.map((stat, idx) => {
              const label = lang === 'bn' && stat.labelBn ? stat.labelBn : stat.label;
              return (
                <div key={idx}>
                  <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    {label}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
