import React from 'react';
import { COMPANY_INFO_JP, COMPANY_INFO_EN, NAV_ITEMS_JP, NAV_ITEMS_EN, UI_TEXT } from '../constants';
import { useLanguage } from './LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const companyInfo = language === 'ja' ? COMPANY_INFO_JP : COMPANY_INFO_EN;
  const navItems = language === 'ja' ? NAV_ITEMS_JP : NAV_ITEMS_EN;
  const t = UI_TEXT[language];

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-xl font-heading font-medium tracking-widest text-white">{companyInfo.name}</h2>
            <p className="text-xs text-brand-400 mt-1 font-english tracking-widest">{companyInfo.englishName}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-sm font-light tracking-wide">
             {navItems.filter(item => item.path !== '#contact').map((item) => (
               <a key={item.label} href={item.path === '/' ? item.hash : item.path + item.hash} className="hover:text-white transition-colors">
                 {item.label}
               </a>
             ))}
             <a href="#contact" className="hover:text-white transition-colors">{t.contact.label}</a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs font-light text-slate-600">
          <p className="font-english tracking-wider">&copy; {new Date().getFullYear()} {companyInfo.englishName} {t.footer.rights}</p>
          <p className="mt-2 md:mt-0 tracking-wide">{companyInfo.address}</p>
        </div>
      </div>
    </footer>
  );
};