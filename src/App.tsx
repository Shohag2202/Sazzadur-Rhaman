/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/initialPortfolio';
import { PortfolioData, Language } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminPanel } from './components/admin/AdminPanel';
import { AdminLoginModal } from './components/admin/AdminLoginModal';
import { AnimatedDoodles } from './components/AnimatedDoodles';
import { downloadResumeMarkdown } from './utils/generateResumeMarkdown';
import { ShieldCheck } from 'lucide-react';

export default function App() {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem('shohag_portfolio_minimal_black');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.fullName && parsed.projects) return parsed;
      }
    } catch (e) {
      // Fallback
    }
    return initialPortfolioData;
  });

  // Language state (English / Bangla)
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('shohag_portfolio_lang') as Language) || 'en';
  });

  // Admin security states
  const [adminPassword, setAdminPassword] = useState<string>(() => {
    return localStorage.getItem('shohag_admin_pass') || 'shohag2026';
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('shohag_admin_authed') === 'true';
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);

  // Sync title and save to localStorage
  useEffect(() => {
    const titleName = lang === 'bn' && data.fullNameBn ? data.fullNameBn : data.fullName;
    const titleRole = lang === 'bn' && data.roleBn ? data.roleBn : data.role;
    document.title = `${titleName} | ${titleRole}`;
    localStorage.setItem('shohag_portfolio_minimal_black', JSON.stringify(data));
  }, [data, lang]);

  const toggleLanguage = () => {
    const nextLang: Language = lang === 'en' ? 'bn' : 'en';
    setLang(nextLang);
    localStorage.setItem('shohag_portfolio_lang', nextLang);
  };

  const handleAdminRequest = () => {
    if (isAuthenticated) {
      setIsAdminPanelOpen(true);
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('shohag_admin_authed', 'true');
    setIsLoginModalOpen(false);
    setIsAdminPanelOpen(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('shohag_admin_authed');
    setIsAdminPanelOpen(false);
  };

  const handleUpdatePassword = (newPass: string) => {
    setAdminPassword(newPass);
    localStorage.setItem('shohag_admin_pass', newPass);
  };

  const handleDownloadResume = () => {
    downloadResumeMarkdown(data);
  };

  return (
    <div className="min-h-screen bg-black text-neutral-100 font-sans selection:bg-white selection:text-black relative overflow-x-hidden">
      {/* Background Floating Animated Doodles */}
      <AnimatedDoodles />

      {/* Minimal Top Navbar */}
      <Navbar 
        data={data}
        onOpenAdmin={handleAdminRequest}
        lang={lang}
        onToggleLang={toggleLanguage}
      />

      <main>
        {/* Minimal Black Hero Section */}
        <Hero 
          data={data}
          onOpenAdmin={handleAdminRequest}
          onDownloadResume={handleDownloadResume}
          lang={lang}
        />

        {/* Selected Works Grid */}
        <Projects 
          projects={data.projects} 
          lang={lang}
        />

        {/* Minimal Tech Stack */}
        <SkillsSection 
          skills={data.skills} 
          lang={lang}
        />

        {/* Minimal Black Contact Card */}
        <ContactSection 
          socials={data.socials}
          fullName={data.fullName}
          lang={lang}
        />
      </main>

      {/* Minimal Footer */}
      <Footer 
        data={data} 
        lang={lang}
      />

      {/* Admin Login Modal (Restricted Access) */}
      <AdminLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSuccess={handleLoginSuccess}
        adminEmail={data.socials.email}
        currentPassword={adminPassword}
        lang={lang}
      />

      {/* Admin Control Panel (Only opens when authenticated) */}
      <AdminPanel 
        isOpen={isAdminPanelOpen}
        onClose={() => setIsAdminPanelOpen(false)}
        onLogout={handleLogout}
        data={data}
        onUpdateData={(newData) => setData(newData)}
        onDownloadResume={handleDownloadResume}
        currentPassword={adminPassword}
        onUpdatePassword={handleUpdatePassword}
        lang={lang}
      />

      {/* Floating Admin Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleAdminRequest}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold shadow-2xl transition-all hover:scale-105 cursor-pointer border border-white/20"
          title="Admin Control Panel"
        >
          <ShieldCheck className="w-4 h-4 text-white" />
          <span>{lang === 'bn' ? 'অ্যাডমিন' : 'Admin Panel'}</span>
        </button>
      </div>
    </div>
  );
}
