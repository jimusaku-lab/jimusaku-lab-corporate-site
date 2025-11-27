import React from 'react';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { COMPANY_INFO_JP, COMPANY_INFO_EN, UI_TEXT } from '../constants';
import { useLanguage } from './LanguageContext';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const companyInfo = language === 'ja' ? COMPANY_INFO_JP : COMPANY_INFO_EN;
  const t = UI_TEXT[language];

  return (
    <section id="contact" className="py-32 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-brand-900/10 via-slate-950 to-slate-950"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-brand-400 font-english font-bold tracking-[0.3em] uppercase text-xs mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-brand-500"></span> {t.contact.label}
            </h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold tracking-widest mb-8 drop-shadow-lg">
              {t.contact.title}
            </h3>
            <p className="text-slate-300 text-base md:text-lg font-light leading-loose mb-12 whitespace-pre-line">
              {t.contact.desc}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-brand-500/30 transition-colors">
                <div className="p-4 bg-slate-950 rounded-full text-brand-500 shadow-inner">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold tracking-widest text-sm text-slate-400 mb-1">{t.contact.addrLabel}</h4>
                  <p className="text-white font-medium tracking-wide">{companyInfo.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-brand-500/30 transition-colors">
                <div className="p-4 bg-slate-950 rounded-full text-brand-500 shadow-inner">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold tracking-widest text-sm text-slate-400 mb-1">{t.contact.emailLabel}</h4>
                  <p className="text-white font-english tracking-wide">{companyInfo.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 md:p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative">
            <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-brand-500 rounded-tr-3xl opacity-50"></div>
            
            <h4 className="text-xl font-heading font-bold text-white mb-8 flex items-center gap-2">
               <MessageSquare size={24} className="text-brand-400" />
               {t.contact.formTitle}
            </h4>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-bold tracking-widest text-brand-400 uppercase">{t.contact.nameLabel}</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-700 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 outline-none transition-all"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-bold tracking-widest text-brand-400 uppercase">{t.contact.emailLabelForm}</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-700 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 outline-none transition-all"
                  placeholder="email@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-bold tracking-widest text-brand-400 uppercase">{t.contact.msgLabel}</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-700 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 outline-none transition-all resize-none"
                  placeholder={t.contact.msgPlaceholder}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-brand-600 to-brand-500 text-white font-heading font-bold tracking-widest py-5 rounded-xl hover:to-brand-400 transition-all shadow-[0_0_20px_rgba(246,61,104,0.4)] hover:shadow-[0_0_30px_rgba(246,61,104,0.6)] transform hover:-translate-y-1 flex items-center justify-center gap-3 mt-4"
              >
                <Send size={18} /> {t.contact.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};