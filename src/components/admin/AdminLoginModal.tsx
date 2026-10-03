import React, { useState } from 'react';
import { X, Lock, Eye, EyeOff, ShieldCheck, AlertCircle } from 'lucide-react';
import { Language } from '../../types/portfolio';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  adminEmail: string;
  currentPassword: string;
  lang: Language;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  adminEmail,
  currentPassword,
  lang,
}) => {
  const [emailInput, setEmailInput] = useState(adminEmail);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const trimmedEmail = emailInput.trim().toLowerCase();
    const targetEmail = adminEmail.trim().toLowerCase();

    if (trimmedEmail !== targetEmail) {
      setErrorMsg(
        lang === 'bn'
          ? 'শুধুমাত্র অনুমোদিত অ্যাডমিন ইমেইল প্রবেশাধিকার পাবে।'
          : 'Unauthorized email address. Only the owner can access.'
      );
      return;
    }

    if (passwordInput !== currentPassword) {
      setErrorMsg(
        lang === 'bn'
          ? 'ভুল পাসওয়ার্ড! সঠিক পাসওয়ার্ড দিন।'
          : 'Incorrect password. Access denied.'
      );
      return;
    }

    // Success
    setPasswordInput('');
    onSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md bg-neutral-950 border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
              <Lock className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                {lang === 'bn' ? 'অ্যাডমিন সিকিউরিটি লগইন' : 'Admin Security Access'}
              </h3>
              <p className="text-[11px] text-neutral-400">
                {lang === 'bn' ? 'শুধুমাত্র অনুমোদিত ব্যবহারকারী' : 'Restricted to portfolio owner'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-neutral-400 mb-1.5">
              {lang === 'bn' ? 'অ্যাডমিন ইমেইল' : 'Admin Email'}
            </label>
            <input
              type="email"
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-white transition-colors"
              placeholder="shohagrahman669@gmail.com"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-mono text-neutral-400">
                {lang === 'bn' ? 'পাসওয়ার্ড / পিন' : 'Password / PIN'}
              </label>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 pr-10 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-[10px] text-neutral-500 mt-1 font-mono">
              {lang === 'bn' ? 'ডিফল্ট পাসওয়ার্ড: shohag2026 (পরে পরিবর্তনযোগ্য)' : 'Default password: shohag2026 (changeable in panel)'}
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-950/60 border border-red-800/80 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-white text-black hover:bg-neutral-200 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{lang === 'bn' ? 'লগইন ও প্রবেশ করুন' : 'Authenticate & Open Panel'}</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
