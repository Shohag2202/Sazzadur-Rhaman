import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { SocialLinks, Language } from '../types/portfolio';
import { translations } from '../data/translations';

interface ContactSectionProps {
  socials: SocialLinks;
  fullName: string;
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ socials, fullName, lang }) => {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const t = translations[lang];

  const copyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !email.trim()) return;

    window.location.href = `mailto:${socials.email}?subject=Inquiry from ${encodeURIComponent(
      email
    )}&body=${encodeURIComponent(message)}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20 border-t border-white/10 bg-transparent text-white relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Minimal Black Card Container */}
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-neutral-950 border border-white/15">
          
          <div className="flex flex-col md:flex-row items-start justify-between gap-10">
            
            {/* Left Column: Direct Info */}
            <div className="flex-1">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                {t.contactKicker}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mt-1 mb-3">
                {t.contactTitle}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
                {t.contactSubtitle}
              </p>

              {/* Minimal Copy Email Pill */}
              <div className="inline-flex items-center gap-2 p-1.5 pl-3 rounded-full bg-neutral-900 border border-white/15 text-xs text-white mb-6">
                <span className="font-mono text-neutral-300">{socials.email}</span>
                <button
                  onClick={copyEmail}
                  className="px-2.5 py-1 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3 text-black" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? t.copiedNotice : t.copyEmail}</span>
                </button>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-3">
                {socials.github && (
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-white/10 transition-colors"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {socials.linkedin && (
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-white/10 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {socials.twitter && (
                  <a
                    href={socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-white/10 transition-colors"
                    title="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Quick Message Form */}
            <div className="w-full md:w-80">
              <form onSubmit={handleSend} className="space-y-3">
                <div>
                  <input
                    type="email"
                    required
                    placeholder={t.yourEmail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    rows={3}
                    required
                    placeholder={t.messagePlaceholder}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-white text-black hover:bg-neutral-200 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.sendMessageBtn}</span>
                </button>

                {sent && (
                  <div className="text-[11px] text-emerald-400 text-center font-mono">
                    {t.mailClientNotice}
                  </div>
                )}
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
