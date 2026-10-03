import React, { useState } from 'react';
import { 
  X, Check, User, BarChart3, FolderGit2, Wrench, Mail, KeyRound, 
  Database, Plus, Trash2, ArrowUp, ArrowDown, Eye, Save, RotateCcw, 
  Download, Upload, ShieldCheck, LogOut 
} from 'lucide-react';
import { PortfolioData, Project, Language } from '../../types/portfolio';
import { initialPortfolioData } from '../../data/initialPortfolio';
import heroPortrait from '../../assets/images/portfolio_hero_portrait_1791045755202.jpg';
import projectSaas from '../../assets/images/project_saas_platform_1791045770220.jpg';
import projectAi from '../../assets/images/project_ai_agent_1791045782248.jpg';
import projectMobile from '../../assets/images/project_mobile_app_1791045793361.jpg';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
  data: PortfolioData;
  onUpdateData: (newData: PortfolioData) => void;
  onDownloadResume: () => void;
  currentPassword: string;
  onUpdatePassword: (newPass: string) => void;
  lang: Language;
}

type AdminSection = 'profile' | 'stats' | 'projects' | 'skills' | 'contact' | 'security' | 'backup';

export const AdminPanel: React.FC<AdminPanelProps> = ({
  isOpen,
  onClose,
  onLogout,
  data,
  onUpdateData,
  onDownloadResume,
  currentPassword,
  onUpdatePassword,
  lang,
}) => {
  const [activeSection, setActiveSection] = useState<AdminSection>('profile');
  const [saveStatus, setSaveStatus] = useState<string | null>(null);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);

  // Security password fields
  const [newPassInput, setNewPassInput] = useState('');
  const [confirmPassInput, setConfirmPassInput] = useState('');
  const [passError, setPassError] = useState('');
  const [passSuccess, setPassSuccess] = useState('');

  if (!isOpen) return null;

  const presetImages = [
    { label: 'Studio Portrait', url: heroPortrait },
    { label: 'SaaS Platform', url: projectSaas },
    { label: 'AI Agent Node', url: projectAi },
    { label: 'Mobile Ledger', url: projectMobile },
  ];

  const showSaveNotice = (msg: string) => {
    setSaveStatus(msg);
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const handleSaveToBrowser = () => {
    localStorage.setItem('shohag_portfolio_minimal_black', JSON.stringify(data));
    showSaveNotice('Saved to browser storage!');
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all values to the default Shohag Rahman portfolio?')) {
      onUpdateData(initialPortfolioData);
      localStorage.removeItem('shohag_portfolio_minimal_black');
      showSaveNotice('Reset to default profile.');
    }
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data, null, 2));
    const a = document.createElement('a');
    a.href = dataStr;
    a.download = `${data.fullName.toLowerCase().replace(/\s+/g, '_')}_portfolio_backup.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    showSaveNotice('Backup JSON exported.');
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.fullName && parsed.projects) {
          onUpdateData(parsed);
          showSaveNotice('Portfolio imported successfully!');
        } else {
          alert('Invalid portfolio structure.');
        }
      } catch (err) {
        alert('Could not parse JSON file.');
      }
    };
    reader.readAsText(file);
  };

  const updateProfile = (field: keyof PortfolioData, value: any) => {
    onUpdateData({ ...data, [field]: value });
  };

  const updateSocials = (field: keyof PortfolioData['socials'], value: string) => {
    onUpdateData({
      ...data,
      socials: { ...data.socials, [field]: value },
    });
  };

  const updateStat = (index: number, field: string, value: string) => {
    const updated = [...data.stats];
    updated[index] = { ...updated[index], [field]: value };
    onUpdateData({ ...data, stats: updated });
  };

  const addStat = () => {
    onUpdateData({
      ...data,
      stats: [
        ...data.stats,
        { label: 'New Metric', labelBn: 'নতুন মেট্রিক', value: '100%' },
      ],
    });
  };

  const removeStat = (index: number) => {
    if (data.stats.length <= 1) return;
    onUpdateData({
      ...data,
      stats: data.stats.filter((_, i) => i !== index),
    });
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    onUpdateData({
      ...data,
      projects: data.projects.map((p) => (p.id === id ? { ...p, ...updates } : p)),
    });
  };

  const addProject = () => {
    const newId = `project-${Date.now()}`;
    const newProj: Project = {
      id: newId,
      title: 'New Project Title',
      titleBn: 'নতুন প্রজেক্ট',
      tagline: 'Modern application or platform',
      taglineBn: 'আধুনিক প্ল্যাটফর্ম ও অ্যাপ্লিকেশন',
      category: 'Web Application',
      categoryBn: 'ওয়েব অ্যাপ্লিকেশন',
      year: `${new Date().getFullYear()}`,
      image: projectSaas,
      techStack: ['TypeScript', 'React', 'Tailwind'],
      summary: 'Concise one-sentence description of the project impact and capabilities.',
      summaryBn: 'প্রজেক্টের মূল বৈশিষ্ট্য ও কার্যকারিতার সংক্ষিপ্ত বিবরণ।',
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    };
    onUpdateData({ ...data, projects: [newProj, ...data.projects] });
    setEditingProjectId(newId);
  };

  const removeProject = (id: string) => {
    if (data.projects.length <= 1) {
      alert('You must have at least one project.');
      return;
    }
    onUpdateData({ ...data, projects: data.projects.filter((p) => p.id !== id) });
    if (editingProjectId === id) setEditingProjectId(null);
  };

  const moveProject = (index: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= data.projects.length) return;
    const items = [...data.projects];
    const [moved] = items.splice(index, 1);
    items.splice(newIndex, 0, moved);
    onUpdateData({ ...data, projects: items });
  };

  const updateCategoryName = (catIndex: number, newName: string, isBn: boolean) => {
    const skillsCopy = [...data.skills];
    if (isBn) {
      skillsCopy[catIndex] = { ...skillsCopy[catIndex], nameBn: newName };
    } else {
      skillsCopy[catIndex] = { ...skillsCopy[catIndex], name: newName };
    }
    onUpdateData({ ...data, skills: skillsCopy });
  };

  const addSkillItem = (catIndex: number) => {
    const skillsCopy = [...data.skills];
    skillsCopy[catIndex].items.push({
      name: 'New Skill',
    });
    onUpdateData({ ...data, skills: skillsCopy });
  };

  const updateSkillItem = (catIndex: number, itemIndex: number, name: string) => {
    const skillsCopy = [...data.skills];
    skillsCopy[catIndex].items[itemIndex] = {
      ...skillsCopy[catIndex].items[itemIndex],
      name,
    };
    onUpdateData({ ...data, skills: skillsCopy });
  };

  const removeSkillItem = (catIndex: number, itemIndex: number) => {
    const skillsCopy = [...data.skills];
    skillsCopy[catIndex].items = skillsCopy[catIndex].items.filter((_, i) => i !== itemIndex);
    onUpdateData({ ...data, skills: skillsCopy });
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    setPassError('');
    setPassSuccess('');

    if (newPassInput.length < 4) {
      setPassError('Password must be at least 4 characters.');
      return;
    }
    if (newPassInput !== confirmPassInput) {
      setPassError('Passwords do not match.');
      return;
    }

    onUpdatePassword(newPassInput);
    setNewPassInput('');
    setConfirmPassInput('');
    setPassSuccess('Admin password updated successfully!');
  };

  const navigationItems = [
    { id: 'profile' as AdminSection, label: 'Profile (EN/বাং)', icon: User },
    { id: 'stats' as AdminSection, label: 'Stats & Numbers', icon: BarChart3 },
    { id: 'projects' as AdminSection, label: 'Projects Manager', icon: FolderGit2, badge: data.projects.length },
    { id: 'skills' as AdminSection, label: 'Skills & Stack', icon: Wrench },
    { id: 'contact' as AdminSection, label: 'Socials & Contact', icon: Mail },
    { id: 'security' as AdminSection, label: 'Security & Access', icon: KeyRound },
    { id: 'backup' as AdminSection, label: 'Sync & Backup', icon: Database },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
      {/* Dimmed Backdrop */}
      <div 
        className="fixed inset-0 bg-black/95 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Main Admin Window - Minimalist Black */}
      <div className="relative w-full max-w-6xl h-[92vh] bg-black border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 text-neutral-200">
        
        {/* Top Navbar */}
        <div className="px-6 py-4 border-b border-white/10 bg-neutral-950 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white font-display flex items-center gap-2">
                <span>Admin Control Panel</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
                  Authorized Session
                </span>
              </h2>
              <p className="text-[11px] text-neutral-400">
                Logged in as <span className="text-white font-mono">{data.socials.email}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {saveStatus && (
              <span className="text-xs text-emerald-400 font-mono animate-fade-in flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                <span>{saveStatus}</span>
              </span>
            )}

            <button
              onClick={handleSaveToBrowser}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-white/15 text-xs text-white font-medium transition-all cursor-pointer"
              title="Save to local browser storage"
            >
              <Save className="w-3.5 h-3.5 text-neutral-300" />
              <span className="hidden sm:inline">Save</span>
            </button>

            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-black hover:bg-neutral-200 font-semibold text-xs transition-all cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Live Website</span>
            </button>

            <button
              onClick={onLogout}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 text-xs transition-colors cursor-pointer"
              title="Logout and lock admin panel"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Lock</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Workspace: Sidebar + Content */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Left Sidebar */}
          <aside className="w-48 sm:w-56 border-r border-white/10 bg-neutral-950 p-3 sm:p-4 flex flex-col justify-between shrink-0 overflow-y-auto">
            <div className="space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 px-3 py-1">
                Sections
              </div>
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white text-black font-semibold'
                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-neutral-500'}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge !== undefined && (
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                        isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-neutral-300'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/10 space-y-1.5">
              <button
                onClick={onDownloadResume}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] text-neutral-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV (.md)</span>
              </button>

              <button
                onClick={handleResetDefaults}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] text-rose-400/80 hover:text-rose-300 hover:bg-rose-500/10 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Factory</span>
              </button>
            </div>
          </aside>

          {/* Right Main Body */}
          <main className="flex-1 overflow-y-auto p-6 sm:p-8 bg-neutral-950">
            
            {/* PROFILE SECTION */}
            {activeSection === 'profile' && (
              <div className="max-w-3xl space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Profile & Identity (Bilingual)</h3>
                  <p className="text-xs text-neutral-400">Configure your information in both English and Bangla.</p>
                </div>

                {/* Names */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">Full Name (English)</label>
                    <input
                      type="text"
                      value={data.fullName}
                      onChange={(e) => updateProfile('fullName', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:outline-none focus:border-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">পুরো নাম (বাংলা)</label>
                    <input
                      type="text"
                      value={data.fullNameBn || ''}
                      onChange={(e) => updateProfile('fullNameBn', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:outline-none focus:border-white"
                      placeholder="সোহাগ রহমান"
                    />
                  </div>
                </div>

                {/* Roles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">Role / Headline (English)</label>
                    <input
                      type="text"
                      value={data.role}
                      onChange={(e) => updateProfile('role', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:outline-none focus:border-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">পদবী / শিরোনাম (বাংলা)</label>
                    <input
                      type="text"
                      value={data.roleBn || ''}
                      onChange={(e) => updateProfile('roleBn', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:outline-none focus:border-white"
                      placeholder="ক্রিয়েটিভ টেকনোলজিস্ট ও সফটওয়্যার ইঞ্জিনিয়ার"
                    />
                  </div>
                </div>

                {/* Taglines */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">Tagline (English)</label>
                    <input
                      type="text"
                      value={data.tagline}
                      onChange={(e) => updateProfile('tagline', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:outline-none focus:border-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">ট্যাগলাইন (বাংলা)</label>
                    <input
                      type="text"
                      value={data.taglineBn || ''}
                      onChange={(e) => updateProfile('taglineBn', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:outline-none focus:border-white"
                    />
                  </div>
                </div>

                {/* Locations */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">Location (EN)</label>
                    <input
                      type="text"
                      value={data.location}
                      onChange={(e) => updateProfile('location', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:outline-none focus:border-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">অবস্থান (বাংলা)</label>
                    <input
                      type="text"
                      value={data.locationBn || ''}
                      onChange={(e) => updateProfile('locationBn', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:outline-none focus:border-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">Availability</label>
                    <div className="flex items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => updateProfile('available', !data.available)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                          data.available ? 'bg-emerald-500' : 'bg-neutral-800'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            data.available ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                      <span className="text-xs text-neutral-300">
                        {data.available ? 'Available' : 'Unavailable'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Avatar Portrait */}
                <div className="pt-4 border-t border-white/10">
                  <label className="block text-xs font-mono text-neutral-400 mb-2">Avatar Portrait</label>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    {presetImages.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => updateProfile('avatarImage', img.url)}
                        className={`group relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                          data.avatarImage === img.url ? 'border-white scale-105' : 'border-white/10 opacity-70 hover:opacity-100'
                        }`}
                        title={img.label}
                      >
                        <img src={img.url} alt={img.label} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-neutral-500 mb-1">Or Custom Image URL</label>
                    <input
                      type="text"
                      value={data.avatarImage || ''}
                      onChange={(e) => updateProfile('avatarImage', e.target.value)}
                      placeholder="https://..."
                      className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:outline-none focus:border-white"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STATS SECTION */}
            {activeSection === 'stats' && (
              <div className="max-w-3xl space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">Key Stats & Metrics</h3>
                    <p className="text-xs text-neutral-400">Numerical highlights displayed in the hero section.</p>
                  </div>
                  <button
                    onClick={addStat}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-all cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Metric</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {data.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-neutral-900 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1 w-full">
                        <div>
                          <label className="block text-[10px] font-mono text-neutral-500 mb-1">Value (e.g. 5+ Years)</label>
                          <input
                            type="text"
                            value={stat.value}
                            onChange={(e) => updateStat(idx, 'value', e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg bg-black border border-white/15 text-white text-xs font-bold"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono text-neutral-500 mb-1">Label (English)</label>
                          <input
                            type="text"
                            value={stat.label}
                            onChange={(e) => updateStat(idx, 'label', e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg bg-black border border-white/15 text-neutral-300 text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono text-neutral-500 mb-1">লেবেল (বাংলা)</label>
                          <input
                            type="text"
                            value={stat.labelBn || ''}
                            onChange={(e) => updateStat(idx, 'labelBn', e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg bg-black border border-white/15 text-neutral-300 text-xs"
                          />
                        </div>
                      </div>

                      {data.stats.length > 1 && (
                        <button
                          onClick={() => removeStat(idx)}
                          className="p-2 rounded-lg text-neutral-500 hover:text-rose-400 transition-colors cursor-pointer shrink-0"
                          title="Delete metric"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PROJECTS SECTION */}
            {activeSection === 'projects' && (
              <div className="max-w-4xl space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">Projects & Case Studies</h3>
                    <p className="text-xs text-neutral-400">Add, edit, rearrange, or delete showcased projects.</p>
                  </div>
                  <button
                    onClick={addProject}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-all cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Project</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {data.projects.map((proj, idx) => {
                    const isEditing = editingProjectId === proj.id;
                    return (
                      <div
                        key={proj.id}
                        className="rounded-2xl bg-neutral-900 border border-white/10 overflow-hidden"
                      >
                        {/* Summary Header */}
                        <div className="p-4 flex items-center justify-between gap-4 bg-neutral-900">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl overflow-hidden bg-black shrink-0 border border-white/10">
                              <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-sm font-bold text-white font-display">{proj.title}</h4>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-neutral-300">
                                  {proj.category}
                                </span>
                              </div>
                              <p className="text-xs text-neutral-400 line-clamp-1">{proj.tagline}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => moveProject(idx, 'up')}
                              disabled={idx === 0}
                              className="p-1.5 rounded-lg text-neutral-400 hover:text-white disabled:opacity-20 cursor-pointer"
                              title="Move up"
                            >
                              <ArrowUp className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => moveProject(idx, 'down')}
                              disabled={idx === data.projects.length - 1}
                              className="p-1.5 rounded-lg text-neutral-400 hover:text-white disabled:opacity-20 cursor-pointer"
                              title="Move down"
                            >
                              <ArrowDown className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={() => setEditingProjectId(isEditing ? null : proj.id)}
                              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors cursor-pointer"
                            >
                              {isEditing ? 'Close' : 'Edit'}
                            </button>

                            <button
                              onClick={() => removeProject(proj.id)}
                              className="p-2 rounded-lg text-neutral-500 hover:text-rose-400 transition-colors cursor-pointer"
                              title="Delete project"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Inline Edit Form */}
                        {isEditing && (
                          <div className="p-6 border-t border-white/10 bg-black/50 space-y-4 text-xs">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div>
                                <label className="block text-[11px] font-mono text-neutral-400 mb-1">Title (EN)</label>
                                <input
                                  type="text"
                                  value={proj.title}
                                  onChange={(e) => updateProject(proj.id, { title: e.target.value })}
                                  className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white"
                                />
                              </div>

                              <div>
                                <label className="block text-[11px] font-mono text-neutral-400 mb-1">শিরোনাম (বাংলা)</label>
                                <input
                                  type="text"
                                  value={proj.titleBn || ''}
                                  onChange={(e) => updateProject(proj.id, { titleBn: e.target.value })}
                                  className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white"
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              <div>
                                <label className="block text-[11px] font-mono text-neutral-400 mb-1">Category (EN)</label>
                                <input
                                  type="text"
                                  value={proj.category}
                                  onChange={(e) => updateProject(proj.id, { category: e.target.value })}
                                  className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white"
                                />
                              </div>

                              <div>
                                <label className="block text-[11px] font-mono text-neutral-400 mb-1">ক্যাটেগরি (বাংলা)</label>
                                <input
                                  type="text"
                                  value={proj.categoryBn || ''}
                                  onChange={(e) => updateProject(proj.id, { categoryBn: e.target.value })}
                                  className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white"
                                />
                              </div>

                              <div>
                                <label className="block text-[11px] font-mono text-neutral-400 mb-1">Year</label>
                                <input
                                  type="text"
                                  value={proj.year}
                                  onChange={(e) => updateProject(proj.id, { year: e.target.value })}
                                  className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white"
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div>
                                <label className="block text-[11px] font-mono text-neutral-400 mb-1">Tagline (EN)</label>
                                <input
                                  type="text"
                                  value={proj.tagline}
                                  onChange={(e) => updateProject(proj.id, { tagline: e.target.value })}
                                  className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white"
                                />
                              </div>

                              <div>
                                <label className="block text-[11px] font-mono text-neutral-400 mb-1">ট্যাগলাইন (বাংলা)</label>
                                <input
                                  type="text"
                                  value={proj.taglineBn || ''}
                                  onChange={(e) => updateProject(proj.id, { taglineBn: e.target.value })}
                                  className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white"
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div>
                                <label className="block text-[11px] font-mono text-neutral-400 mb-1">Summary (EN)</label>
                                <textarea
                                  rows={2}
                                  value={proj.summary}
                                  onChange={(e) => updateProject(proj.id, { summary: e.target.value })}
                                  className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white resize-none"
                                />
                              </div>

                              <div>
                                <label className="block text-[11px] font-mono text-neutral-400 mb-1">বিবরণ (বাংলা)</label>
                                <textarea
                                  rows={2}
                                  value={proj.summaryBn || ''}
                                  onChange={(e) => updateProject(proj.id, { summaryBn: e.target.value })}
                                  className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white resize-none"
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div>
                                <label className="block text-[11px] font-mono text-neutral-400 mb-1">Demo URL</label>
                                <input
                                  type="text"
                                  value={proj.demoUrl || ''}
                                  onChange={(e) => updateProject(proj.id, { demoUrl: e.target.value })}
                                  placeholder="https://..."
                                  className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white"
                                />
                              </div>

                              <div>
                                <label className="block text-[11px] font-mono text-neutral-400 mb-1">GitHub Repo</label>
                                <input
                                  type="text"
                                  value={proj.githubUrl || ''}
                                  onChange={(e) => updateProject(proj.id, { githubUrl: e.target.value })}
                                  placeholder="https://github.com/..."
                                  className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                                Tech Stack (Comma separated)
                              </label>
                              <input
                                type="text"
                                value={proj.techStack.join(', ')}
                                onChange={(e) =>
                                  updateProject(proj.id, {
                                    techStack: e.target.value.split(',').map((t) => t.trim()).filter(Boolean),
                                  })
                                }
                                className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* SKILLS SECTION */}
            {activeSection === 'skills' && (
              <div className="max-w-3xl space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Technical Skills & Categories</h3>
                  <p className="text-xs text-neutral-400">Add or modify technology badges and groups.</p>
                </div>

                <div className="space-y-6">
                  {data.skills.map((group, catIdx) => (
                    <div key={catIdx} className="p-5 rounded-2xl bg-neutral-900 border border-white/10 space-y-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="grid grid-cols-2 gap-2 flex-1">
                          <input
                            type="text"
                            value={group.name}
                            onChange={(e) => updateCategoryName(catIdx, e.target.value, false)}
                            className="px-2.5 py-1 rounded-lg bg-black border border-white/10 text-white font-bold text-xs"
                            placeholder="Category (EN)"
                          />
                          <input
                            type="text"
                            value={group.nameBn || ''}
                            onChange={(e) => updateCategoryName(catIdx, e.target.value, true)}
                            className="px-2.5 py-1 rounded-lg bg-black border border-white/10 text-white font-bold text-xs"
                            placeholder="ক্যাটেগরি (বাংলা)"
                          />
                        </div>

                        <button
                          onClick={() => addSkillItem(catIdx)}
                          className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] text-white transition-colors cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                          <span>Add Tool</span>
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="flex items-center gap-1.5 pl-2.5 pr-1 py-1 rounded-lg bg-black border border-white/15 text-xs text-neutral-200"
                          >
                            <input
                              type="text"
                              value={item.name}
                              onChange={(e) => updateSkillItem(catIdx, itemIdx, e.target.value)}
                              className="bg-transparent border-none text-white focus:outline-none text-xs w-24"
                            />
                            <button
                              onClick={() => removeSkillItem(catIdx, itemIdx)}
                              className="p-1 rounded text-neutral-500 hover:text-rose-400 transition-colors cursor-pointer"
                              title="Delete skill"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CONTACT SECTION */}
            {activeSection === 'contact' && (
              <div className="max-w-2xl space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Socials & Contact Channels</h3>
                  <p className="text-xs text-neutral-400">Direct destinations for email inquiries and online networks.</p>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block font-mono text-neutral-400 mb-1">Primary Email Address</label>
                    <input
                      type="email"
                      value={data.socials.email}
                      onChange={(e) => updateSocials('email', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-white"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-neutral-400 mb-1">GitHub Profile URL</label>
                    <input
                      type="text"
                      value={data.socials.github}
                      onChange={(e) => updateSocials('github', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-white"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-neutral-400 mb-1">LinkedIn Profile URL</label>
                    <input
                      type="text"
                      value={data.socials.linkedin}
                      onChange={(e) => updateSocials('linkedin', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-white"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-neutral-400 mb-1">Twitter / X Profile URL</label>
                    <input
                      type="text"
                      value={data.socials.twitter || ''}
                      onChange={(e) => updateSocials('twitter', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-white"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* SECURITY & ACCESS SECTION */}
            {activeSection === 'security' && (
              <div className="max-w-xl space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Admin Security & Password</h3>
                  <p className="text-xs text-neutral-400">
                    Ensure only you can access this admin panel. Change your password anytime.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-900 border border-white/10">
                  <div className="text-xs text-neutral-400 mb-4 pb-4 border-b border-white/10">
                    <div>Authorized Account: <span className="font-mono text-white">{data.socials.email}</span></div>
                    <div className="text-[11px] text-neutral-500 mt-0.5">Only this verified email can log in.</div>
                  </div>

                  <form onSubmit={handlePasswordChange} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-mono text-neutral-400 mb-1">New Password / Passcode</label>
                      <input
                        type="password"
                        required
                        value={newPassInput}
                        onChange={(e) => setNewPassInput(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/15 text-white font-mono focus:outline-none focus:border-white"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-neutral-400 mb-1">Confirm New Password</label>
                      <input
                        type="password"
                        required
                        value={confirmPassInput}
                        onChange={(e) => setConfirmPassInput(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/15 text-white font-mono focus:outline-none focus:border-white"
                      />
                    </div>

                    {passError && (
                      <div className="text-xs text-rose-400 font-mono">
                        ✗ {passError}
                      </div>
                    )}

                    {passSuccess && (
                      <div className="text-xs text-emerald-400 font-mono">
                        ✓ {passSuccess}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors cursor-pointer"
                    >
                      Update Password
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* SYNC & BACKUP SECTION */}
            {activeSection === 'backup' && (
              <div className="max-w-2xl space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Data Management & Backup</h3>
                  <p className="text-xs text-neutral-400">Export full JSON backups, restore configurations, or download your resume.</p>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-900 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">Export Full Configuration</h4>
                      <p className="text-xs text-neutral-400">Download a complete .json file of your portfolio data.</p>
                    </div>
                    <button
                      onClick={handleExportJSON}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Export JSON</span>
                    </button>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">Import Configuration</h4>
                      <p className="text-xs text-neutral-400">Load previously exported portfolio data.</p>
                    </div>
                    <label className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer">
                      <Upload className="w-4 h-4" />
                      <span>Upload JSON</span>
                      <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
                    </label>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-rose-300">Reset to Factory Default</h4>
                      <p className="text-xs text-neutral-400">Restores the original Shohag Rahman portfolio layout.</p>
                    </div>
                    <button
                      onClick={handleResetDefaults}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/30 text-xs font-semibold text-rose-300 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Reset</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

          </main>
        </div>

      </div>
    </div>
  );
};
