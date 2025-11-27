import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS_JP, NAV_ITEMS_EN, COMPANY_INFO_JP, COMPANY_INFO_EN, UI_TEXT } from '../constants';
import { useLanguage } from './LanguageContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { language, setLanguage } = useLanguage();

  const t = UI_TEXT[language];
  const navItems = language === 'ja' ? NAV_ITEMS_JP : NAV_ITEMS_EN;
  const companyInfo = language === 'ja' ? COMPANY_INFO_JP : COMPANY_INFO_EN;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Modern Glassmorphism Header Style for Dark Theme
  const headerBgClass = isScrolled
    ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
    : 'bg-transparent py-4';

  const textClass = 'text-slate-100';

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${headerBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-4 group">
            {/* Logo Image: Displaying attached logo.png directly without CSS filters */}
            <img 
              src="/logo.png" 
              alt="Jimusaku Lab Logo" 
              className="h-12 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
            
            <span className={`text-xl sm:text-2xl font-heading font-bold tracking-widest ${textClass} group-hover:text-brand-400 transition-colors drop-shadow-lg`}>
              {companyInfo.name}
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.filter(item => item.path !== '#contact').map((item) => (
            <a
              key={item.label}
              href={isHome ? item.hash : item.path + item.hash}
              className={`text-sm font-medium tracking-wider transition-all hover:text-brand-400 relative group ${textClass}`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all group-hover:w-full shadow-[0_0_8px_#f63d68]"></span>
            </a>
          ))}
          
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-900/50 border border-white/10 rounded-lg p-1">
            <button 
              onClick={() => setLanguage('ja')}
              className={`px-2 py-1 text-[10px] font-bold rounded transition-all ${language === 'ja' ? 'text-slate-950 bg-brand-400 shadow-[0_0_10px_#fd7193]' : 'text-slate-400 hover:text-white'}`}
            >
              JP
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 text-[10px] font-bold rounded transition-all ${language === 'en' ? 'text-slate-950 bg-brand-400 shadow-[0_0_10px_#fd7193]' : 'text-slate-400 hover:text-white'}`}
            >
              EN
            </button>
          </div>

          {/* CTA Button in Header */}
          <a 
            href={isHome ? "#contact" : "/#contact"}
            className="px-6 py-2.5 rounded-full text-sm font-heading font-bold tracking-wider transition-all shadow-[0_0_15px_rgba(246,61,104,0.4)] hover:shadow-[0_0_25px_rgba(246,61,104,0.6)] transform hover:-translate-y-0.5 flex items-center gap-2 bg-gradient-to-r from-brand-600 to-brand-500 text-white border border-white/10"
          >
            <Mail size={16} />
            {t.header.cta}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X />
          ) : (
            <Menu />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-t border-white/10 animate-fade-in shadow-2xl h-screen">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={isHome ? item.hash : item.path + item.hash}
                className="px-8 py-5 text-lg text-slate-200 hover:bg-white/5 hover:text-brand-400 font-medium tracking-wide border-l-4 border-transparent hover:border-brand-500 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {/* Mobile Language Switch */}
             <div className="px-8 py-5 flex items-center gap-4 border-t border-white/5 mt-4">
                <span className="text-slate-400 text-sm">{t.header.langLabel}</span>
                <div className="flex items-center bg-slate-900 border border-white/10 rounded-lg p-1">
                  <button 
                    onClick={() => setLanguage('ja')}
                    className={`px-4 py-2 text-xs font-bold rounded transition-colors ${language === 'ja' ? 'text-slate-950 bg-brand-400' : 'text-slate-400'}`}
                  >
                    日本語
                  </button>
                  <button 
                    onClick={() => setLanguage('en')}
                    className={`px-4 py-2 text-xs font-bold rounded transition-colors ${language === 'en' ? 'text-slate-950 bg-brand-400' : 'text-slate-400'}`}
                  >
                    English
                  </button>
                </div>
             </div>
          </div>
        </div>
      )}
    </header>
  );
};