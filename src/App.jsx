import { useState, useMemo } from "react";
import HeaderHero from "./components/HeaderHero";
import CategoriesGrid from "./components/CategoriesGrid";
import HowItWorks from "./components/HowItWorks";
import FooterGov from "./components/FooterGov";

const dict = {
  en: {
    langName: "English",
    appName: "ShramSathi",
    tagline: "Connecting Bharat’s Skills with Jobs",
    findTrusted: "Find trusted workers near you.",
    registerWorker: "Register as Worker",
    findWorkers: "Find Workers",
    nav: {
      home: "Home",
      find: "Find Worker",
      categories: "Categories",
      how: "How It Works",
      help: "Help",
    },
    stats: {
      workers: "Workers Registered",
      jobs: "Jobs Completed",
      districts: "Districts Covered",
    },
    categoriesTitle: "Popular Categories",
    howTitle: "How It Works",
    how: {
      step1Title: "List Skill",
      step1Desc: "Create your profile with skills, pricing, and service area.",
      step2Title: "Get Alerts",
      step2Desc: "Receive job requests on phone, OTP and WhatsApp.",
      step3Title: "Earn & Grow",
      step3Desc: "Complete jobs, get ratings, and withdraw earnings.",
    },
    trustTitle: "Trusted with government-inspired standards",
    footer: {
      helpline: "Helpline",
      privacy: "Privacy",
      terms: "Terms",
      accessibility: "Accessibility",
      grievance: "Grievance/Help",
      rti: "RTI",
      about: "About",
      contact: "Contact",
      languages: "Languages",
      disclaimer: "Inspired by Indian government design patterns. No official affiliation.",
      rights: "All rights reserved.",
    },
  },
  hi: {
    langName: "हिंदी",
    appName: "श्र्मसाथी",
    tagline: "भारत के कौशल को रोजगार से जोड़ें",
    findTrusted: "अपने आस-पास भरोसेमंद कारीगर ढूँढें।",
    registerWorker: "कौशल पंजीकरण करें",
    findWorkers: "कारीगर खोजें",
    nav: {
      home: "होम",
      find: "कारीगर खोजें",
      categories: "श्रेणियाँ",
      how: "कैसे काम करता है",
      help: "सहायता",
    },
    stats: {
      workers: "पंजीकृत कारीगर",
      jobs: "संपन्न कार्य",
      districts: "जिले कवर",
    },
    categoriesTitle: "लोकप्रिय श्रेणियाँ",
    howTitle: "कैसे काम करता है",
    how: {
      step1Title: "कौशल सूचीबद्ध करें",
      step1Desc: "अपने कौशल, कीमत और सेवा क्षेत्र जोड़ें।",
      step2Title: "अलर्ट पाएँ",
      step2Desc: "फ़ोन, ओटीपी और व्हाट्सऐप पर जॉब रिक्वेस्ट लें।",
      step3Title: "कमाएँ और बढ़ें",
      step3Desc: "काम पूरा करें, रेटिंग पाएँ और कमाई निकालें।",
    },
    trustTitle: "सरकारी प्रेरित मानकों के साथ भरोसेमंद",
    footer: {
      helpline: "हेल्पलाइन",
      privacy: "गोपनीयता",
      terms: "नियम",
      accessibility: "सुलभता",
      grievance: "शिकायत/सहायता",
      rti: "सूचना का अधिकार",
      about: "परिचय",
      contact: "संपर्क",
      languages: "भाषाएँ",
      disclaimer: "भारतीय सरकारी डिज़ाइन पैटर्न से प्रेरित। कोई आधिकारिक संबद्धता नहीं।",
      rights: "सर्वाधिकार सुरक्षित।",
    },
  },
};

export default function App() {
  const [lang, setLang] = useState(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("lang");
    if (stored === "hi" || stored === "en") return stored;
    return "en";
  });

  const t = useMemo(() => dict[lang], [lang]);

  const switchLang = () => {
    const next = lang === "en" ? "hi" : "en";
    setLang(next);
    if (typeof window !== "undefined") localStorage.setItem("lang", next);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#374151]">
      <HeaderHero t={t} lang={lang} onToggleLang={switchLang} />
      <main id="main" className="flex-1">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-[#0D47A1]">{t.categoriesTitle}</h2>
          <CategoriesGrid t={t} lang={lang} />
        </section>
        <section className="bg-[#ECEFF1]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-[#0D47A1]">{t.howTitle}</h2>
            <HowItWorks t={t} />
          </div>
        </section>
      </main>
      <FooterGov t={t} lang={lang} onToggleLang={switchLang} />
    </div>
  );
}
