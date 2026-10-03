import React from 'react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { Project, Language } from '../types/portfolio';
import { translations } from '../data/translations';

interface ProjectsProps {
  projects: Project[];
  lang: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, lang }) => {
  const t = translations[lang];

  return (
    <section id="work" className="py-20 border-t border-white/10 bg-transparent text-white relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              {t.portfolioKicker}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mt-1">
              {t.portfolioTitle}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-sm">
            {t.portfolioSubtitle}
          </p>
        </div>

        {/* Minimal Black Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => {
            const title = lang === 'bn' && project.titleBn ? project.titleBn : project.title;
            const category = lang === 'bn' && project.categoryBn ? project.categoryBn : project.category;
            const summary = lang === 'bn' && project.summaryBn ? project.summaryBn : project.summary;

            return (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-neutral-950 border border-white/15 overflow-hidden hover:border-white/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Colorful Accent Line */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${project.accentColor || 'from-cyan-400 via-indigo-500 to-pink-500'}`} />

                {/* Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-white/10">
                  <img
                    src={project.image}
                    alt={title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 saturate-120 contrast-105"
                  />
                  
                  {/* Category Chip */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white">
                    {category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-white font-display mb-2 group-hover:text-neutral-300 transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs text-neutral-400 mb-5 line-clamp-2 leading-relaxed">
                      {summary}
                    </p>
                  </div>

                  {/* Tech stack and links */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-neutral-300 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-3 border-t border-white/10 text-xs">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 font-semibold text-white hover:text-neutral-300 transition-colors"
                        >
                          <span>{t.demoBtn}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
                        >
                          <Github className="w-3 h-3" />
                          <span>{t.codeBtn}</span>
                        </a>
                      )}
                    </div>
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
