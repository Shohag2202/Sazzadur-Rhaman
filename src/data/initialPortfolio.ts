import { PortfolioData } from '../types/portfolio';

import heroPortrait from '../assets/images/portfolio_hero_portrait_1791045755202.jpg';
import projectSaas from '../assets/images/project_saas_platform_1791045770220.jpg';
import projectAi from '../assets/images/project_ai_agent_1791045782248.jpg';
import projectMobile from '../assets/images/project_mobile_app_1791045793361.jpg';

export const initialPortfolioData: PortfolioData = {
  fullName: 'Shohag Rahman',
  fullNameBn: 'সোহাগ রহমান',
  role: 'Creative Technologist & Full-Stack Engineer',
  roleBn: 'ক্রিয়েটিভ টেকনোলজিস্ট ও ফুল-স্ট্যাক সফটওয়্যার ইঞ্জিনিয়ার',
  tagline: 'Crafting vibrant, high-performance web experiences with modern architecture.',
  taglineBn: 'আধুনিক আর্কিটেকচার ও উচ্চ পারফরম্যান্সে তৈরি নির্ভরযোগ্য ওয়েব প্ল্যাটফর্ম।',
  shortBio: 'Specializing in React, TypeScript, and distributed cloud services. Focused on minimalist aesthetics, delightful interactions, and speed.',
  shortBioBn: 'রিঅ্যাক্ট, টাইপস্ক্রিপ্ট ও ডিস্ট্রিবিউটেড ক্লাউড ব্যাকএন্ডে দক্ষ। মিনিমাল ডিজাইন ও দ্রুতগতির অ্যাপ্লিকেশন নির্মাণে আগ্রহী।',
  location: 'Remote · Worldwide',
  locationBn: 'রিমোট · বিশ্বব্যাপী',
  available: true,
  avatarImage: heroPortrait,
  socials: {
    email: 'shohagrahman669@gmail.com',
    github: 'https://github.com/shohagrahman',
    linkedin: 'https://linkedin.com/in/shohag-rahman',
    twitter: 'https://twitter.com/shohagrahman',
  },
  stats: [
    { 
      label: 'Experience', 
      labelBn: 'কাজের অভিজ্ঞতা', 
      value: '5+ Years' 
    },
    { 
      label: 'Production Apps', 
      labelBn: 'সফল প্রজেক্ট', 
      value: '30+ Shipped' 
    },
    { 
      label: 'Performance SLA', 
      labelBn: 'সিস্টেম আপটাইম', 
      value: '99.98%' 
    },
  ],
  skills: [
    {
      name: 'Frontend & UI',
      nameBn: 'ফ্রন্টএন্ড ও ইউআই',
      items: [
        { name: 'TypeScript' },
        { name: 'React 19' },
        { name: 'Next.js' },
        { name: 'Tailwind CSS' },
        { name: 'Motion' },
      ],
    },
    {
      name: 'Backend & Cloud',
      nameBn: 'ব্যাকএন্ড ও ক্লাউড',
      items: [
        { name: 'Node.js' },
        { name: 'Go / Golang' },
        { name: 'PostgreSQL' },
        { name: 'Redis' },
        { name: 'Docker' },
      ],
    },
    {
      name: 'AI & Innovation',
      nameBn: 'এআই ও অটোমেশন',
      items: [
        { name: 'Gemini API' },
        { name: 'Vector RAG' },
        { name: 'Agents & Tools' },
      ],
    },
  ],
  projects: [
    {
      id: 'apexflow',
      title: 'ApexFlow',
      titleBn: 'অ্যাপেক্সফ্লো',
      tagline: 'Real-time telemetry & workflow visualizer',
      taglineBn: 'রিয়েল-টাইম ক্লাউড টেলিমেট্রি ও ওয়ার্কফ্লো ড্যাশবোর্ড',
      category: 'SaaS Platform',
      categoryBn: 'স্যাস প্ল্যাটফর্ম',
      year: '2026',
      image: projectSaas,
      accentColor: 'from-blue-500 via-indigo-500 to-purple-600',
      techStack: ['TypeScript', 'React', 'Tailwind', 'PostgreSQL'],
      summary: 'High-throughput operational intelligence dashboard handling 2.4M telemetry events daily with sub-100ms queries.',
      summaryBn: 'প্রতিদিন ২৪ লক্ষেরও বেশি ইভেন্ট প্রসেস করার মতো দ্রুত ও নির্ভরযোগ্য ড্যাশবোর্ড।',
      demoUrl: 'https://apexflow-demo.example.com',
      githubUrl: 'https://github.com/shohagrahman/apexflow',
    },
    {
      id: 'synapse',
      title: 'SynapseAgent',
      titleBn: 'সিন্যাপস এজেন্ট',
      tagline: 'Autonomous AI orchestration engine',
      taglineBn: 'স্বয়ংক্রিয় এআই এজেন্ট অর্কেস্ট্রেশন ইঞ্জিন',
      category: 'AI System',
      categoryBn: 'এআই সিস্টেম',
      year: '2026',
      image: projectAi,
      accentColor: 'from-emerald-400 via-teal-500 to-cyan-500',
      techStack: ['Python', 'Gemini API', 'FastAPI', 'Redis'],
      summary: 'Multi-step reasoning agent with deterministic tool execution and strict schema contracts.',
      summaryBn: 'টুল এক্সিকিউশন ও নিখুঁত স্কিমা ভ্যালিডেশন সমৃদ্ধ আধুনিক এআই এজেন্ট প্ল্যাটফর্ম।',
      demoUrl: 'https://synapseagent.example.com',
      githubUrl: 'https://github.com/shohagrahman/synapse',
    },
    {
      id: 'kora',
      title: 'Kora Ledger',
      titleBn: 'কোরা লেজার',
      tagline: 'Minimalist wealth & capital app',
      taglineBn: 'মিনিমালিস্ট পার্সোনাল ফিনান্স ও কারেন্সি লেজার',
      category: 'Mobile / Web',
      categoryBn: 'মোবাইল / ওয়েব',
      year: '2025',
      image: projectMobile,
      accentColor: 'from-orange-500 via-rose-500 to-pink-600',
      techStack: ['React', 'TypeScript', 'Tailwind', 'SQLite'],
      summary: 'Zero-latency personal wealth tracker with instant offline vault and multi-currency exchange rates.',
      summaryBn: 'অফলাইন-ফার্স্ট প্রযুক্তিতে তৈরি ব্যক্তিগত অর্থ ব্যবস্থাপনা ও মাল্টি-কারেন্সি ট্র্যাকার।',
      demoUrl: 'https://kora-ledger.example.com',
      githubUrl: 'https://github.com/shohagrahman/kora',
    },
  ],
};
