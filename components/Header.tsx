// components/Header.tsx
// components/Header.tsx
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail } from 'lucide-react';
import logo from '../logo.png';   // ★ ここでロゴ画像を取り込む

import {
  NAV_ITEMS_JP,
  NAV_ITEMS_EN,
  COMPANY_INFO_JP,
  COMPANY_INFO_EN,
  UI_TEXT,
} from '../constants';
import { useLanguage } from './LanguageContext';

// ヘッダー右上の CTA ボタン（デスクトップ / モバイル共通）
const HeaderCta: React.FC<{ isHome: boolean }> = ({ isHome }) => {
  return (
    <a
      href={isHome ? '#contact' : '#contact'}
      className="ml-3 px-6 py-2.5 rounded-full text-sm font-heading font-bold tracking-wider transition-all shadow-[0_10px_25px_rgba(246,61,104,0.4)] hover:shadow-[0_15px_35px_rgba(246,61,104,0.6)] transform hover:-translate-y-0.5 flex items-center gap-2 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-500 text-white border border-white/10"
    >
      <Mail size={16} />
      <span className="whitespace-nowrap">
        無料でAI秘書に相談
      </span>
    </a>
  );
};

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  const navItems = language === 'ja' ? NAV_ITEMS_JP : NAV_ITEMS_EN;
  const companyInfo = language === 'ja' ? COMPANY_INFO_JP : COMPANY_INFO_EN;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // スクロール量によってヘッダー背景を変える
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 「ホームかどうか」（CTA ボタンの文言などに利用）
  const isHome = location.pathname === '/';

  const headerBgClass = isScrolled
    ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
    : 'bg-gradient-to-b from-slate-950/80 to-transparent';

  const textClass = 'text-slate-100';

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* ロゴ部分 */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src={import.meta.env.BASE_URL + 'logo.png'}
              alt="Jimusaku Lab Logo"
              className="h-12 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-xl sm:text-2xl font-heading font-bold tracking-widest text-brand-400 drop-shadow-lg">
              {companyInfo.name}
            </span>
          </Link>
        </div>

        {/* デスクトップ ナビ */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems
            .filter((item: any) => item.path !== '#contact')
            .map((item: any) => (
              <a
                key={item.label}
                href={`${import.meta.env.BASE_URL}${item.path}${item.hash ?? ''}`}
                className={`text-sm font-medium tracking-wider transition-all hover:text-brand-400 relative group ${textClass}`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all group-hover:w-full" />
              </a>
            ))}

          {/* 言語切替ボタン */}
          <div className="flex items-center bg-slate-900/50 border border-white/10 rounded-lg px-1">
            <button
              onClick={() => setLanguage('ja')}
              className={`px-2 py-1 text-[10px] font-bold rounded transition-all ${
                language === 'ja'
                  ? 'text-slate-950 bg-brand-400 shadow-[0_0_10px_#fd7193]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              JP
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 text-[10px] font-bold rounded transition-all ${
                language === 'en'
                  ? 'text-slate-950 bg-brand-400 shadow-[0_0_10px_#fd7193]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA ボタン */}
          <HeaderCta isHome={isHome} />
        </nav>

        {/* モバイル用メニューボタン */}
        <button
          className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* モバイル ナビ */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-t border-white/10 animate-fade-in shadow-2xl h-screen">
          <div className="flex flex-col py-4">
            {navItems.map((item: any) => (
              <a
                key={item.label}
                href={`${import.meta.env.BASE_URL}${item.path}${item.hash ?? ''}`}
                onClick={handleNavClick}
                className="px-8 py-3 text-lg text-slate-200 hover:bg-white/5 hover:text-brand-400 transition-all border-b border-white/5"
              >
                {item.label}
              </a>
            ))}

            <div className="px-8 pb-6 pt-4 flex items-center gap-4">
              <span className="text-slate-400 text-sm">Language</span>
              <button
                onClick={() => setLanguage('ja')}
                className={`px-3 py-1 text-xs rounded border ${
                  language === 'ja'
                    ? 'bg-brand-500 border-transparent text-white'
                    : 'border-slate-500 text-slate-300'
                }`}
              >
                JP
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs rounded border ${
                  language === 'en'
                    ? 'bg-brand-500 border-transparent text-white'
                    : 'border-slate-500 text-slate-300'
                }`}
              >
                EN
              </button>
            </div>

            <div className="px-8 pb-6">
              <HeaderCta isHome={isHome} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
