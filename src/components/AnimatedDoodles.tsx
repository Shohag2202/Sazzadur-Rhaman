import React from 'react';

export const AnimatedDoodles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
      
      {/* ========================================================
          1. HERO SECTION DOODLES
      ======================================================== */}

      {/* Hero: Large Sparkle Star (Top Right) */}
      <div className="absolute top-16 right-[8%] sm:right-[15%] w-16 h-16 text-cyan-400/35 animate-float-1">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="w-full h-full">
          <path d="M50 5 Q50 50 95 50 Q50 50 50 95 Q50 50 5 50 Q50 50 50 5 Z" />
          <circle cx="50" cy="50" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Hero: Idea Lightbulb (Top Right-Mid) */}
      <div className="absolute top-44 right-[5%] sm:right-[22%] w-12 h-16 text-amber-400/35 animate-wiggle">
        <svg viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M15 30 C15 15 45 15 45 30 C45 38 38 42 38 50 L22 50 C22 42 15 38 15 30 Z" />
          <path d="M22 56 L38 56" />
          <path d="M26 62 L34 62" />
          <path d="M30 32 L30 45" />
          <line x1="8" y1="20" x2="3" y2="15" />
          <line x1="52" y1="20" x2="57" y2="15" />
          <line x1="30" y1="5" x2="30" y2="1" />
        </svg>
      </div>

      {/* Hero: Mini Sparkle (Top Center-Right) */}
      <div className="absolute top-32 right-[32%] w-8 h-8 text-pink-400/40 animate-pulse-subtle">
        <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-full h-full">
          <path d="M25 5 Q25 25 45 25 Q25 25 25 45 Q25 25 5 25 Q25 25 25 5 Z" />
        </svg>
      </div>

      {/* Hero: Hand-drawn Curly Bracket { (Top Left) */}
      <div className="absolute top-24 left-[3%] sm:left-[6%] w-12 h-24 text-white/20 animate-float-2">
        <svg viewBox="0 0 60 120" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="w-full h-full">
          <path d="M45 10 C25 10 20 25 20 40 C20 55 10 60 5 60 C10 60 20 65 20 80 C20 95 25 110 45 110" />
        </svg>
      </div>

      {/* Hero: Coffee Mug with Steaming Vapor (Hero Left-Mid) */}
      <div className="absolute top-52 left-[5%] sm:left-[14%] w-12 h-14 text-amber-300/30 animate-float-3 hidden sm:block">
        <svg viewBox="0 0 60 70" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M10 25 L45 25 L42 55 C42 60 38 64 30 64 L25 64 C17 64 13 60 13 55 Z" />
          <path d="M45 32 C52 32 55 36 55 42 C55 48 50 50 44 50" />
          {/* Steam lines */}
          <path d="M20 18 Q23 10 20 5" strokeDasharray="2 2" />
          <path d="M28 20 Q31 12 28 4" strokeDasharray="2 2" />
          <path d="M36 18 Q39 10 36 5" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* Hero: Whimsical Loop-de-loop Squiggle (Hero Mid-Right) */}
      <div className="absolute top-68 right-[4%] sm:right-[9%] w-32 h-18 text-fuchsia-400/30 animate-float-4">
        <svg viewBox="0 0 140 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-full h-full">
          <path d="M10 50 Q40 10 70 40 Q90 60 100 40 Q110 10 85 20 Q65 30 90 60 Q110 80 130 50" />
        </svg>
      </div>

      {/* Hero: Terminal Prompt >_ (Hero Bottom Right) */}
      <div className="absolute top-84 right-[12%] hidden lg:block w-28 h-12 text-emerald-400/35 font-mono text-xl animate-float-1">
        <div className="border border-emerald-400/30 rounded-lg p-2.5 bg-emerald-500/10 backdrop-blur-sm flex items-center gap-1.5 shadow-sm">
          <span className="font-bold text-sm text-emerald-300">&gt;_ shohag</span>
          <span className="animate-ping w-1.5 h-3.5 bg-emerald-400/80 inline-block ml-auto" />
        </div>
      </div>

      {/* Hero: Rotating Concentric Dashed Ring (Hero Lower Left) */}
      <div className="absolute top-[26rem] left-[4%] sm:left-[10%] w-24 h-24 text-white/20 animate-spin-slow">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="w-full h-full">
          <circle cx="50" cy="50" r="42" />
          <circle cx="50" cy="50" r="24" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* Hero: Lightning Bolt ⚡ (Hero Bottom Center) */}
      <div className="absolute top-[28rem] right-[30%] w-8 h-14 text-yellow-400/40 animate-bob">
        <svg viewBox="0 0 40 70" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <polygon points="22 2 4 36 20 36 12 68 36 28 20 28 32 2" fill="currentColor" fillOpacity="0.15" />
        </svg>
      </div>

      {/* Hero: Hand-drawn Heart ♡ (Hero Far Left) */}
      <div className="absolute top-[32rem] left-[1%] sm:left-[4%] w-8 h-8 text-rose-400/35 animate-float-2">
        <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M25 42 C10 32 3 22 8 13 C13 5 21 8 25 15 C29 8 37 5 42 13 C47 22 40 32 25 42 Z" />
        </svg>
      </div>


      {/* ========================================================
          2. PROJECTS SECTION DOODLES
      ======================================================== */}

      {/* Projects: Code Tag </ > (Top Left of Projects) */}
      <div className="absolute top-[46rem] left-[3%] sm:left-[6%] w-20 h-14 text-cyan-400/30 animate-float-2">
        <svg viewBox="0 0 100 70" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M30 15 L10 35 L30 55" />
          <path d="M60 10 L40 60" />
          <path d="M70 15 L90 35 L70 55" />
        </svg>
      </div>

      {/* Projects: Planet Saturn with Rings (Projects Top Right) */}
      <div className="absolute top-[48rem] right-[5%] sm:right-[10%] w-20 h-16 text-indigo-400/35 animate-float-1">
        <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full">
          <circle cx="50" cy="40" r="22" />
          <ellipse cx="50" cy="40" rx="45" ry="14" transform="rotate(-18 50 40)" strokeDasharray="4 2" />
          <circle cx="44" cy="32" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Projects: 3-layer Zigzag Spring (Projects Right Edge) */}
      <div className="absolute top-[58rem] right-[2%] sm:right-[6%] w-16 h-28 text-pink-400/30 animate-float-3">
        <svg viewBox="0 0 60 120" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M10 10 L50 25 L10 40 L50 55 L10 70 L50 85 L10 100" />
        </svg>
      </div>

      {/* Projects: Retro Pixel Arcade Ghost/Invader (Projects Mid Left) */}
      <div className="absolute top-[64rem] left-[2%] sm:left-[5%] w-12 h-14 text-purple-400/35 animate-wiggle hidden sm:block">
        <svg viewBox="0 0 50 60" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full">
          <path d="M10 25 C10 10 40 10 40 25 L40 48 L34 42 L28 48 L22 42 L16 48 L10 42 Z" />
          <circle cx="20" cy="24" r="3" fill="currentColor" />
          <circle cx="30" cy="24" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Projects: 8-Point Asterisk Star (Projects Mid Section) */}
      <div className="absolute top-[72rem] left-[10%] w-10 h-10 text-amber-400/35 animate-spin-slow">
        <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="w-full h-full">
          <line x1="30" y1="5" x2="30" y2="55" />
          <line x1="5" y1="30" x2="55" y2="30" />
          <line x1="12" y1="12" x2="48" y2="48" />
          <line x1="12" y1="48" x2="48" y2="12" />
        </svg>
      </div>

      {/* Projects: Wireframe 3D Cube (Projects Lower Left) */}
      <div className="absolute top-[82rem] left-[4%] sm:left-[8%] w-16 h-18 text-cyan-300/30 animate-float-4">
        <svg viewBox="0 0 80 90" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" className="w-full h-full">
          <path d="M40 10 L70 26 L40 42 L10 26 Z" />
          <path d="M10 26 L10 60 L40 76 L40 42" />
          <path d="M70 26 L70 60 L40 76" />
        </svg>
      </div>

      {/* Projects: Floating Dotted 3x3 Grid (Projects Lower Right) */}
      <div className="absolute top-[80rem] right-[8%] w-16 h-16 text-white/25 animate-pulse-subtle">
        <svg viewBox="0 0 60 60" fill="currentColor" className="w-full h-full">
          <circle cx="10" cy="10" r="2.5" />
          <circle cx="30" cy="10" r="2.5" />
          <circle cx="50" cy="10" r="2.5" />
          <circle cx="10" cy="30" r="2.5" />
          <circle cx="30" cy="30" r="2.5" />
          <circle cx="50" cy="30" r="2.5" />
          <circle cx="10" cy="50" r="2.5" />
          <circle cx="30" cy="50" r="2.5" />
          <circle cx="50" cy="50" r="2.5" />
        </svg>
      </div>

      {/* Projects: Code Comment Bubble // ship it (Projects Bottom Right) */}
      <div className="absolute top-[92rem] right-[14%] hidden md:block w-32 h-10 text-neutral-400/40 font-mono text-xs animate-float-1">
        <div className="border border-white/15 rounded-full px-3 py-1.5 bg-neutral-900/50 backdrop-blur-sm flex items-center gap-1.5">
          <span className="text-pink-400 font-bold">//</span>
          <span className="text-white/70">ship to prod</span>
        </div>
      </div>


      {/* ========================================================
          3. SKILLS SECTION DOODLES
      ======================================================== */}

      {/* Skills: Atomic Orbit Loop (Skills Left) */}
      <div className="absolute top-[102rem] left-[4%] sm:left-[7%] w-24 h-24 text-violet-400/35 animate-spin-slow">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full">
          <ellipse cx="50" cy="50" rx="45" ry="18" transform="rotate(30 50 50)" />
          <ellipse cx="50" cy="50" rx="45" ry="18" transform="rotate(-30 50 50)" />
          <circle cx="50" cy="50" r="4" fill="currentColor" />
        </svg>
      </div>

      {/* Skills: Curved Audio Waveform (Skills Top Mid-Left) */}
      <div className="absolute top-[108rem] left-[18%] w-24 h-10 text-emerald-400/30 animate-pulse-subtle hidden sm:block">
        <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="w-full h-full">
          <line x1="10" y1="20" x2="10" y2="20" />
          <line x1="22" y1="12" x2="22" y2="28" />
          <line x1="34" y1="5" x2="34" y2="35" />
          <line x1="46" y1="14" x2="46" y2="26" />
          <line x1="58" y1="2" x2="58" y2="38" />
          <line x1="70" y1="10" x2="70" y2="30" />
          <line x1="82" y1="16" x2="82" y2="24" />
          <line x1="94" y1="20" x2="94" y2="20" />
        </svg>
      </div>

      {/* Skills: Wavy Underline Double Ribbon (Skills Right) */}
      <div className="absolute top-[105rem] right-[5%] sm:right-[11%] w-36 h-14 text-teal-400/35 animate-float-1">
        <svg viewBox="0 0 140 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="w-full h-full">
          <path d="M5 15 Q20 5 35 15 T65 15 T95 15 T125 15" />
          <path d="M15 28 Q30 18 45 28 T75 28 T105 28 T135 28" />
        </svg>
      </div>

      {/* Skills: Binary Tag [ 0 1 ] (Skills Mid Right) */}
      <div className="absolute top-[115rem] right-[18%] hidden sm:block w-20 h-8 text-neutral-400/35 font-mono text-xs animate-float-3">
        <span className="px-2 py-1 rounded border border-white/10 bg-white/5">011010</span>
      </div>

      {/* Skills: Concentric Bullseye / Target (Skills Lower Center) */}
      <div className="absolute top-[120rem] left-[12%] w-14 h-14 text-rose-400/30 animate-spin-slow">
        <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full">
          <circle cx="30" cy="30" r="25" strokeDasharray="4 4" />
          <circle cx="30" cy="30" r="15" />
          <circle cx="30" cy="30" r="4" fill="currentColor" />
        </svg>
      </div>

      {/* Skills: Mini Diamond Burst (Skills Far Left) */}
      <div className="absolute top-[124rem] left-[4%] w-8 h-8 text-white/30 animate-float-2">
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
          <polygon points="20,2 38,20 20,38 2,20" />
        </svg>
      </div>


      {/* ========================================================
          4. CONTACT SECTION DOODLES
      ======================================================== */}

      {/* Contact: Rocket Ship Blasting Off 🚀 (Contact Far Left) */}
      <div className="absolute top-[132rem] left-[3%] sm:left-[8%] w-14 h-24 text-amber-400/35 animate-float-1">
        <svg viewBox="0 0 60 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M30 10 C20 30 18 55 18 65 L42 65 C42 55 40 30 30 10 Z" />
          <circle cx="30" cy="35" r="5" />
          {/* Wings */}
          <path d="M18 50 L5 65 L18 65" />
          <path d="M42 50 L55 65 L42 65" />
          {/* Flame plume */}
          <path d="M22 68 Q30 90 26 95" strokeDasharray="3 3" />
          <path d="M38 68 Q30 90 34 95" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* Contact: Curved Arrow pointing toward form (Contact Mid Left) */}
      <div className="absolute top-[138rem] left-[10%] sm:left-[15%] w-24 h-24 text-rose-400/40 animate-float-3">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M20 20 C20 60 50 75 75 70" strokeDasharray="5 5" />
          <path d="M65 60 L78 72 L62 82" />
        </svg>
      </div>

      {/* Contact: Cursor Pointer Click with Ripple (Contact Top Right) */}
      <div className="absolute top-[130rem] right-[8%] sm:right-[18%] w-16 h-16 text-cyan-400/35 animate-wiggle">
        <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M22 10 L22 35 L28 30 L36 45 L42 42 L34 27 L42 27 Z" fill="currentColor" fillOpacity="0.15" />
          {/* Ripple arcs */}
          <path d="M14 10 A12 12 0 0 1 24 2" />
          <path d="M10 14 A18 18 0 0 1 28 0" strokeDasharray="2 3" />
        </svg>
      </div>

      {/* Contact: Closing Curly Bracket } (Contact Right) */}
      <div className="absolute top-[142rem] right-[5%] sm:right-[9%] w-12 h-24 text-white/25 animate-float-1">
        <svg viewBox="0 0 60 120" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="w-full h-full">
          <path d="M15 10 C35 10 40 25 40 40 C40 55 50 60 55 60 C50 60 40 65 40 80 C40 95 35 110 15 110" />
        </svg>
      </div>

      {/* Contact: Little Paper Plane Doodle (Contact Far Right) */}
      <div className="absolute top-[136rem] right-[16%] w-16 h-16 text-pink-400/35 animate-float-2">
        <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M10 40 L70 15 L45 75 L35 48 Z" />
          <path d="M35 48 L70 15" />
          <path d="M15 55 Q20 68 8 72" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* Contact: Smiley Face (•‿•) (Contact Bottom Margin) */}
      <div className="absolute top-[148rem] left-[20%] w-12 h-12 text-yellow-300/35 animate-pulse-subtle">
        <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-full h-full">
          <circle cx="25" cy="25" r="20" />
          <circle cx="18" cy="20" r="2.5" fill="currentColor" />
          <circle cx="32" cy="20" r="2.5" fill="currentColor" />
          <path d="M18 30 Q25 38 32 30" />
        </svg>
      </div>

    </div>
  );
};
