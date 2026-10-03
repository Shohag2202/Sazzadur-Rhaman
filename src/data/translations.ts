import { Language } from '../types/portfolio';

export interface UIStrings {
  navWork: string;
  navSkills: string;
  navContact: string;
  adminPanel: string;
  loginTitle: string;
  availableBadge: string;
  notAvailableBadge: string;
  greeting: string;
  exploreWork: string;
  copyEmail: string;
  copiedNotice: string;
  downloadCv: string;
  portfolioKicker: string;
  portfolioTitle: string;
  portfolioSubtitle: string;
  skillsKicker: string;
  skillsTitle: string;
  skillsSubtitle: string;
  contactKicker: string;
  contactTitle: string;
  contactSubtitle: string;
  yourEmail: string;
  messagePlaceholder: string;
  sendMessageBtn: string;
  mailClientNotice: string;
  demoBtn: string;
  codeBtn: string;
  topBtn: string;
  switchLanguage: string;
}

export const translations: Record<Language, UIStrings> = {
  en: {
    navWork: 'Work',
    navSkills: 'Skills',
    navContact: 'Contact',
    adminPanel: 'Admin Panel',
    loginTitle: 'Admin Login',
    availableBadge: 'Available for projects',
    notAvailableBadge: 'Currently engaged',
    greeting: "Hello, I'm",
    exploreWork: 'Explore Work',
    copyEmail: 'Copy Email',
    copiedNotice: 'Email Copied!',
    downloadCv: 'CV',
    portfolioKicker: 'Portfolio',
    portfolioTitle: 'Selected Works',
    portfolioSubtitle: 'Curated web products engineered for speed, clean interfaces, and robust systems.',
    skillsKicker: 'Capabilities',
    skillsTitle: 'Core Tech Stack',
    skillsSubtitle: 'A minimalist snapshot of modern tools used to build scalable digital products.',
    contactKicker: 'Get in Touch',
    contactTitle: "Let's build something iconic.",
    contactSubtitle: 'Have an upcoming project or looking to collaborate? Drop me a direct message.',
    yourEmail: 'Your email address',
    messagePlaceholder: 'Brief project details and goals...',
    sendMessageBtn: 'Send Direct Email',
    mailClientNotice: '✓ Opening mail client with details',
    demoBtn: 'Demo',
    codeBtn: 'Code',
    topBtn: 'Top',
    switchLanguage: 'বাংলা',
  },
  bn: {
    navWork: 'কাজ',
    navSkills: 'দক্ষতা',
    navContact: 'যোগাযোগ',
    adminPanel: 'অ্যাডমিন প্যানেল',
    loginTitle: 'অ্যাডমিন লগইন',
    availableBadge: 'কাজের জন্য উন্মুক্ত',
    notAvailableBadge: 'বর্তমানে ব্যস্ত',
    greeting: 'হ্যালো, আমি',
    exploreWork: 'প্রজেক্ট দেখুন',
    copyEmail: 'ইমেইল কপি',
    copiedNotice: 'কপি হয়েছে!',
    downloadCv: 'সিভি (CV)',
    portfolioKicker: 'পোর্টফোলিও',
    portfolioTitle: 'নির্বাচিত প্রজেক্টসমূহ',
    portfolioSubtitle: 'আধুনিক আর্কিটেকচার, দ্রুত পারফরম্যান্স ও মসৃণ ইন্টারফেসে নির্মিত ওয়েব অ্যাপ্লিকেশন।',
    skillsKicker: 'পারদর্শিতা',
    skillsTitle: 'দক্ষতা ও প্রযুক্তি',
    skillsSubtitle: 'স্কেলযোগ্য সফটওয়্যার তৈরিতে ব্যবহৃত আধুনিক প্রোগ্রামিং ল্যাঙ্গুয়েজ ও ফ্রেমওয়ার্ক।',
    contactKicker: 'যোগাযোগ করুন',
    contactTitle: 'একসাথে নতুন কিছু তৈরি করি।',
    contactSubtitle: 'নতুন কোনো প্রজেক্ট বা কাজের ব্যাপারে আলোচনা করতে সরাসরি বার্তা পাঠান।',
    yourEmail: 'আপনার ইমেইল ঠিকানা',
    messagePlaceholder: 'প্রজেক্টের বিবরণ ও প্রয়োজনীয়তা...',
    sendMessageBtn: 'সরাসরি বার্তা পাঠান',
    mailClientNotice: '✓ ইমেইল ক্লায়েন্ট চালু হচ্ছে...',
    demoBtn: 'ডেমো',
    codeBtn: 'কোড',
    topBtn: 'শীর্ষে',
    switchLanguage: 'English',
  },
};
