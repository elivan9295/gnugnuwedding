
import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext.tsx';
import { translations } from '../translations.ts';
import { MenuIcon, CloseIcon } from './icons.tsx';

const navItems = [
    { href: '#story', key: 'navStory' },
    { href: '#details', key: 'navDetails' },
    { href: '#dress-code', key: 'navDressCode' },
    { href: '#travel', key: 'navTravel' },
    { href: '#photos', key: 'navPhotos' },
    { href: '#gifts', key: 'navGifts' },
    { href: '#rsvp', key: 'navRsvp' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinkClasses = (scrolled: boolean) => 
    `font-semibold tracking-wider uppercase text-sm transition-colors ${scrolled ? 'text-green hover:text-orange' : 'text-ivory hover:text-terracotta'}`;

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-ivory/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className={`font-sans text-2xl font-bold transition-colors ${isScrolled ? 'text-orange' : 'text-white'}`}>
            E & I
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map(item => (
                <li key={item.key}><a href={item.href} className={navLinkClasses(isScrolled)}>{t[item.key as keyof typeof t]}</a></li>
              ))}
            </ul>
            <div className="flex items-center space-x-2 text-sm">
              <button 
                onClick={() => setLanguage('en')} 
                className={`font-semibold transition-colors ${language === 'en' ? (isScrolled ? 'text-orange' : 'text-white') : (isScrolled ? 'text-green/60 hover:text-orange' : 'text-ivory/60 hover:text-white')}`}>
                  EN
              </button>
              <span className={isScrolled ? 'text-green/50' : 'text-ivory/50'}>/</span>
              <button 
                onClick={() => setLanguage('it')} 
                className={`font-semibold transition-colors ${language === 'it' ? (isScrolled ? 'text-orange' : 'text-white') : (isScrolled ? 'text-green/60 hover:text-orange' : 'text-ivory/60 hover:text-white')}`}>
                  IT
              </button>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} className={`transition-colors ${isScrolled ? 'text-green' : 'text-ivory'}`} aria-label="Open menu">
              <MenuIcon className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 bg-ivory transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMenuOpen(false)} className="text-green" aria-label="Close menu">
            <CloseIcon className="w-8 h-8"/>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full -mt-16">
          <ul className="flex flex-col space-y-8 text-center">
            {navItems.map(item => (
              <li key={item.key}>
                <a href={item.href} onClick={handleMobileLinkClick} className="font-sans text-3xl text-green hover:text-orange transition-colors">
                  {t[item.key as keyof typeof t]}
                </a>
              </li>
            ))}
          </ul>
          <div className="absolute bottom-10 flex items-center space-x-4 text-lg">
              <button 
                onClick={() => setLanguage('en')} 
                className={`font-semibold transition-colors ${language === 'en' ? 'text-orange' : 'text-green/60 hover:text-orange'}`}>
                  EN
              </button>
              <span className='text-green/50'>/</span>
              <button 
                onClick={() => setLanguage('it')} 
                className={`font-semibold transition-colors ${language === 'it' ? 'text-orange' : 'text-green/60 hover:text-orange'}`}>
                  IT
              </button>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;