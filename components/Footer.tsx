
import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext.tsx';
import { translations } from '../translations.ts';

const Footer: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <footer className="bg-green text-ivory py-8 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-sans text-2xl font-bold mb-2">Elisabetta & Ivan</p>
        <p className="text-sm">{t.footerDate}</p>
        <p className="text-xs mt-4 opacity-70">{t.footerMadeWithLove}</p>
      </div>
    </footer>
  );
};

export default Footer;