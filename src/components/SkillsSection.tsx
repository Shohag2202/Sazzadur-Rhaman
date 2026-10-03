import React from 'react';
import { SkillGroup, Language } from '../types/portfolio';
import { translations } from '../data/translations';

interface SkillsSectionProps {
  skills: SkillGroup[];
  lang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, lang }) => {
  const t = translations[lang];

  return (
    <section id="skills" className="py-20 border-t border-white/10 bg-transparent text-white relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            {t.skillsKicker}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mt-1 mb-3">
            {t.skillsTitle}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            {t.skillsSubtitle}
          </p>
        </div>

        {/* 3 Clean Minimal Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((group, idx) => {
            const groupName = lang === 'bn' && group.nameBn ? group.nameBn : group.name;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-950 border border-white/10 flex flex-col justify-between hover:border-white/25 transition-all"
              >
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-xs font-mono font-bold text-neutral-400">0{idx + 1}.</span>
                    <h3 className="text-sm font-bold text-white font-display">
                      {groupName}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-900 border border-white/10 text-neutral-200 hover:text-white hover:border-white/30 transition-colors"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
