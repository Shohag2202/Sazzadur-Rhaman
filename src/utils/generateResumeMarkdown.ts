import { PortfolioData } from '../types/portfolio';

export const downloadResumeMarkdown = (data: PortfolioData) => {
  const content = `# ${data.fullName}
**${data.role}**
${data.location} | Email: ${data.socials.email} | GitHub: ${data.socials.github} | LinkedIn: ${data.socials.linkedin}

---

## About
${data.tagline}
${data.shortBio}

---

## Core Metrics
${data.stats.map(s => `- **${s.label}**: ${s.value}`).join('\n')}

---

## Skills
${data.skills.map(g => `- **${g.name}**: ${g.items.map(i => i.name).join(', ')}`).join('\n')}

---

## Selected Projects

${data.projects.map(p => `### ${p.title} (${p.year}) — ${p.category}
${p.tagline}
${p.summary}
- **Stack**: ${p.techStack.join(', ')}
${p.demoUrl ? `- **Live**: ${p.demoUrl}` : ''}
${p.githubUrl ? `- **Code**: ${p.githubUrl}` : ''}
`).join('\n')}

---
*Generated from ${data.fullName}'s Minimalist Colorful Portfolio*
`;

  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${data.fullName.toLowerCase().replace(/\s+/g, '_')}_resume.md`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
};
