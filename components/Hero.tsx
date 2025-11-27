import React from 'react';
import { ArrowRight, MessageSquare, Lock, ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { UI_TEXT } from '../constants';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TEXT[language];

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      
      {/* --- 3D Isometric Animation Layer --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-950 select-none pointer-events-none">
        <style>{`
          .iso-perspective {
            perspective: 1200px;
            transform-style: preserve-3d;
          }
          .iso-plane {
            transform: rotateX(60deg) rotateZ(45deg) scale(1.2);
            transform-style: preserve-3d;
          }
          .grid-pattern {
            background-image: 
              linear-gradient(to right, rgba(51, 65, 85, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(51, 65, 85, 0.3) 1px, transparent 1px);
            background-size: 60px 60px;
          }
          /* Data Packets Animation */
          @keyframes travel-x {
            0% { transform: translateX(-100%) scale(0); opacity: 0; }
            20% { opacity: 1; transform: translateX(0%) scale(1); }
            80% { opacity: 1; transform: translateX(100%) scale(1); }
            100% { transform: translateX(200%) scale(0); opacity: 0; }
          }
          @keyframes travel-y {
            0% { transform: translateY(-100%) scale(0); opacity: 0; }
            20% { opacity: 1; transform: translateY(0%) scale(1); }
            80% { opacity: 1; transform: translateY(100%) scale(1); }
            100% { transform: translateY(200%) scale(0); opacity: 0; }
          }
          @keyframes pulse-node {
            0%, 100% { box-shadow: 0 0 20px rgba(246, 61, 104, 0.2); background-color: rgba(15, 23, 42, 0.9); }
            50% { box-shadow: 0 0 40px rgba(246, 61, 104, 0.6); background-color: rgba(30, 41, 59, 0.9); }
          }
          
          .packet-h {
            position: absolute;
            height: 2px;
            width: 80px;
            background: linear-gradient(90deg, transparent, #f63d68, #fff, transparent);
            box-shadow: 0 0 10px #f63d68;
            animation: travel-x 3s infinite linear;
          }
          .packet-v {
            position: absolute;
            width: 2px;
            height: 80px;
            background: linear-gradient(180deg, transparent, #f63d68, #fff, transparent);
            box-shadow: 0 0 10px #f63d68;
            animation: travel-y 4s infinite linear;
          }
          .floating-node {
             transform: translateZ(20px);
             animation: pulse-node 4s infinite ease-in-out;
          }
        `}</style>

        <div className="absolute inset-0 flex items-center justify-center iso-perspective">
           <div className="relative w-[150vw] h-[150vw] iso-plane bg-slate-950/20">
              {/* Infinite Grid Floor */}
              <div className="absolute inset-0 grid-pattern [mask-image:radial-gradient(circle_at_center,black_20%,transparent_70%)]"></div>
              
              {/* Central Intelligence Node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-brand-500/50 rounded-xl floating-node flex items-center justify-center z-10">
                 <div className="w-20 h-20 bg-brand-500/10 rounded-full blur-md border border-brand-400/30"></div>
                 <div className="absolute inset-0 border border-brand-500/20 rounded-xl animate-[spin_10s_linear_infinite]"></div>
              </div>

              {/* Satellite Nodes (Representing Tasks) */}
              {/* Top Left */}
              <div className="absolute top-[35%] left-[35%] w-16 h-16 border border-slate-700 bg-slate-900/80 rounded-lg shadow-lg transform translate-z-10 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
              {/* Bottom Right */}
              <div className="absolute bottom-[35%] right-[35%] w-16 h-16 border border-slate-700 bg-slate-900/80 rounded-lg shadow-lg transform translate-z-10 flex items-center justify-center">
                 <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              {/* Top Right */}
              <div className="absolute top-[35%] right-[35%] w-12 h-12 border border-slate-700 bg-slate-900/80 rounded-lg shadow-lg transform translate-z-10"></div>

              {/* Data Flows (Connecting Lines) */}
              {/* Flow to Center */}
              <div className="absolute top-[38%] left-[38%] w-[12%] h-[1px] bg-slate-800/50">
                 <div className="packet-h w-full" style={{animationDuration: '2s'}}></div>
              </div>
              <div className="absolute bottom-[38%] right-[38%] w-[12%] h-[1px] bg-slate-800/50">
                 <div className="packet-h w-full" style={{animationDuration: '2.5s', animationDirection: 'reverse'}}></div>
              </div>
              <div className="absolute top-[38%] left-1/2 h-[12%] w-[1px] bg-slate-800/50">
                 <div className="packet-v h-full" style={{animationDuration: '3s'}}></div>
              </div>
           </div>
        </div>
        
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(transparent_20%,#020617_90%)] z-0"></div>
      </div>

      {/* --- Foreground Content --- */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Confidence Badge */}
        <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-slate-900/80 border border-brand-500/30 backdrop-blur-xl mb-10 animate-fade-in-up shadow-[0_0_30px_rgba(246,61,104,0.15)]">
          <Lock size={18} className="text-brand-400" />
          <span className="text-base text-white font-medium tracking-widest">
            {t.hero.badge} <span className="text-brand-400 font-bold text-xl font-heading mx-1">{t.hero.badgeValue}</span> {t.hero.badgeSuffix}
          </span>
        </div>

        {/* Main Headline - Simplified */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-heading font-bold tracking-wider mb-8 text-white drop-shadow-2xl leading-none">
          <span className="block text-2xl sm:text-3xl font-light tracking-[0.3em] text-slate-400 mb-4">
            {t.hero.subtitle}
          </span>
          {t.hero.title}
        </h1>

        {/* Subcopy - Minimized */}
        <p className="mt-6 text-xl text-slate-300 mb-12 font-light tracking-wide max-w-2xl mx-auto whitespace-pre-line">
          {t.hero.desc}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <a 
            href="#contact" 
            className="px-10 py-5 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 text-white font-heading font-bold tracking-widest text-base hover:to-brand-400 transition-all shadow-[0_0_30px_rgba(246,61,104,0.3)] hover:shadow-[0_0_50px_rgba(246,61,104,0.5)] transform hover:-translate-y-1 border border-white/10 flex items-center justify-center gap-3 group"
          >
            {t.hero.btnMain}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="px-10 py-5 rounded-full bg-slate-900/60 backdrop-blur-md text-white font-heading font-bold tracking-widest text-base hover:bg-slate-800 transition-all shadow-lg border border-slate-700 hover:border-brand-500/50 flex items-center justify-center gap-3 group"
          >
            <MessageSquare size={20} className="text-slate-400 group-hover:text-brand-400 transition-colors" />
            {t.hero.btnSub}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500 z-10">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};