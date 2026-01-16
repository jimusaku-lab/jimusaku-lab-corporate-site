import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { COMPANY_INFO_JP, COMPANY_INFO_EN, UI_TEXT } from '../constants';
import { useLanguage } from './LanguageContext';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const companyInfo = language === 'ja' ? COMPANY_INFO_JP : COMPANY_INFO_EN;
  const t = UI_TEXT[language];
  const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string;

  type FormState = {
    name: string;
    email: string;
    message: string;
  };

  type SubmitStatus = "idle" | "sending" | "success" | "error";

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("[contact] submit start");
    if (status === "sending") {
      console.error("[contact] early return reason =", "status is already sending");
      return;
    }

    const endpoint = CONTACT_ENDPOINT;
    console.log("[contact] endpoint", endpoint);

    setStatus("sending");
    setErrorMessage("");

    if (!endpoint) {
      setStatus("error");
      setErrorMessage("送信先URLが未設定です");
      console.error("[contact] early return reason =", "contact endpoint is missing");
      return;
    }

    const bodyParams = new URLSearchParams({
      name: form.name,
      email: form.email,
      message: form.message,
      source: "jimusaku-lab.com",
      page: "contact",
      receivedAt: new Date().toISOString()
    });

    let nextStatus: SubmitStatus = "error";

    try {
      console.log("[contact] before fetch");
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        body: bodyParams
      });
      console.log("[contact] after fetch", response.status);

      if (!response.ok) {
        const responseText = await response.text();
        throw new Error(`HTTP ${response.status} ${response.statusText}\n${responseText}`);
      }

      nextStatus = "success";
      setForm({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "送信に失敗しました";
      setErrorMessage(message);
      nextStatus = "error";
    } finally {
      setStatus(nextStatus);
    }
  };

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

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-bold tracking-widest text-brand-400 uppercase">{t.contact.nameLabel}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-700 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 outline-none transition-all"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-bold tracking-widest text-brand-400 uppercase">{t.contact.emailLabelForm}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-700 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 outline-none transition-all"
                  placeholder="email@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-bold tracking-widest text-brand-400 uppercase">{t.contact.msgLabel}</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5} 
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-700 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 outline-none transition-all resize-none"
                  placeholder={t.contact.msgPlaceholder}
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === "sending"}
                className="w-full bg-gradient-to-r from-brand-600 to-brand-500 text-white font-heading font-bold tracking-widest py-5 rounded-xl hover:to-brand-400 transition-all shadow-[0_0_20px_rgba(246,61,104,0.4)] hover:shadow-[0_0_30px_rgba(246,61,104,0.6)] transform hover:-translate-y-1 flex items-center justify-center gap-3 mt-4 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={18} /> {status === "sending" ? "Sending..." : t.contact.submit}
              </button>
              {status === "success" && (
                <p className="text-sm text-emerald-400">Sent</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400 whitespace-pre-line">Failed{errorMessage ? `\n${errorMessage}` : ""}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
