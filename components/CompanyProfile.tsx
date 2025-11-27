import React from 'react';
import { COMPANY_INFO_JP, COMPANY_INFO_EN, UI_TEXT } from '../constants';
import { useLanguage } from './LanguageContext';

export const CompanyProfile: React.FC = () => {
  const { language } = useLanguage();
  const companyInfo = language === 'ja' ? COMPANY_INFO_JP : COMPANY_INFO_EN;
  const t = UI_TEXT[language];

  return (
    <section id="company" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-brand-400 font-english font-medium tracking-[0.3em] uppercase text-sm mb-4">{t.company.label}</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-medium tracking-widest text-white">{t.company.title}</h3>
          <div className="w-12 h-0.5 bg-brand-500 mx-auto mt-6 mb-6 shadow-[0_0_10px_#f63d68]"></div>
        </div>

        <div className="border-t border-slate-800">
          <dl className="divide-y divide-slate-800">
            <div className="grid grid-cols-1 sm:grid-cols-3 p-6 sm:px-8 transition-colors hover:bg-slate-900/50">
              <dt className="text-sm font-heading font-medium tracking-wide text-slate-500 sm:pt-1">{t.company.items.name}</dt>
              <dd className="mt-2 text-base text-slate-200 sm:mt-0 sm:col-span-2 font-medium tracking-wide">{companyInfo.name}</dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-6 sm:px-8 transition-colors hover:bg-slate-900/50">
              <dt className="text-sm font-heading font-medium tracking-wide text-slate-500 sm:pt-1">{t.company.items.englishName}</dt>
              <dd className="mt-2 text-base font-english tracking-wide text-slate-200 sm:mt-0 sm:col-span-2">{companyInfo.englishName}</dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-6 sm:px-8 transition-colors hover:bg-slate-900/50">
              <dt className="text-sm font-heading font-medium tracking-wide text-slate-500 sm:pt-1">{t.company.items.rep}</dt>
              <dd className="mt-2 text-base text-slate-200 sm:mt-0 sm:col-span-2 tracking-wide">{companyInfo.representative}</dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-6 sm:px-8 transition-colors hover:bg-slate-900/50">
              <dt className="text-sm font-heading font-medium tracking-wide text-slate-500 sm:pt-1">{t.company.items.est}</dt>
              <dd className="mt-2 text-base text-slate-200 sm:mt-0 sm:col-span-2 tracking-wide">{companyInfo.established}</dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-6 sm:px-8 transition-colors hover:bg-slate-900/50">
              <dt className="text-sm font-heading font-medium tracking-wide text-slate-500 sm:pt-1">{t.company.items.addr}</dt>
              <dd className="mt-2 text-base text-slate-200 sm:mt-0 sm:col-span-2 tracking-wide">{companyInfo.address}</dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-6 sm:px-8 transition-colors hover:bg-slate-900/50">
              <dt className="text-sm font-heading font-medium tracking-wide text-slate-500 sm:pt-1">{t.company.items.biz}</dt>
              <dd className="mt-2 text-base text-slate-200 sm:mt-0 sm:col-span-2">
                <ul className="list-none space-y-3 text-slate-400 text-sm font-light">
                  {companyInfo.businessItems.map((item, idx) => (
                    <li key={idx} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-brand-500 before:rounded-full">
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};