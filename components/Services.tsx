import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES_JP, SERVICES_EN, UI_TEXT } from '../constants';
import { useLanguage } from './LanguageContext';

export const Services: React.FC = () => {
  const { language } = useLanguage();
  const services = language === 'ja' ? SERVICES_JP : SERVICES_EN;
  const t = UI_TEXT[language];

  return (
    <section id="services" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* --- 3D Isometric Animation Background --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-950 select-none pointer-events-none">
        <style>{`
          .iso-perspective-services {
            perspective: 1000px;
            transform-style: preserve-3d;
          }
          .iso-plane-services {
            transform: rotateX(60deg) rotateZ(30deg) scale(1.5);
            transform-style: preserve-3d;
          }
          .grid-pattern-services {
            background-image: 
              linear-gradient(to right, rgba(100, 116, 139, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(100, 116, 139, 0.15) 1px, transparent 1px);
            background-size: 80px 80px;
          }
          @keyframes flow-h {
            0% { transform: translateX(-100%); opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
          }
          .packet-flow {
            position: absolute;
            height: 2px;
            width: 150px;
            background: linear-gradient(90deg, transparent, #f63d68, #fff, transparent);
            box-shadow: 0 0 15px #f63d68;
            animation: flow-h 5s infinite linear;
          }
        `}</style>

        <div className="absolute inset-0 flex items-center justify-center iso-perspective-services">
           <div className="relative w-[150vw] h-[150vw] iso-plane-services bg-slate-900/10">
              <div className="absolute inset-0 grid-pattern-services [mask-image:radial-gradient(circle_at_center,black_50%,transparent_90%)]"></div>
              
              {/* Sparse, bright data flows appropriate for background */}
              <div className="absolute top-[30%] left-[10%] w-[30%] h-[1px] bg-slate-800/30">
                 <div className="packet-flow w-full" style={{animationDuration: '4s'}}></div>
              </div>
              <div className="absolute top-[60%] left-[20%] w-[40%] h-[1px] bg-slate-800/30">
                 <div className="packet-flow w-full" style={{animationDuration: '6s', animationDelay: '1s'}}></div>
              </div>
              <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[1px] bg-slate-800/30">
                 <div className="packet-flow w-full" style={{animationDuration: '5s', animationDirection: 'reverse'}}></div>
              </div>
           </div>
        </div>
        {/* Very light vignette to not obscure animation */}
        <div className="absolute inset-0 bg-[radial-gradient(transparent_30%,#020617_95%)] z-0"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-brand-400 font-english font-bold tracking-[0.3em] uppercase text-xs mb-6 flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-brand-500"></span>
            {t.services.label}
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-brand-500"></span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold tracking-widest text-white mb-8 drop-shadow-lg">
            {t.services.title}
          </h3>
          <p className="mt-4 text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-loose bg-slate-950/50 backdrop-blur-sm p-4 rounded-xl whitespace-pre-line">
            {t.services.desc}
          </p>
        </div>

        {/* Adjusted grid to max 2 columns for 4 items to ensure balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={`/services/${service.id}`}
              className="group relative bg-slate-900/80 backdrop-blur-md rounded-2xl p-1 overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-slate-800 hover:border-brand-500/50"
            >
              {/* Glowing Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 rounded-2xl pointer-events-none"></div>

              <div className="relative bg-slate-950/80 h-full rounded-xl p-8 flex flex-col z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-brand-400 group-hover:text-white group-hover:bg-brand-500 group-hover:scale-110 transition-all duration-300 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] mb-8">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                
                <h4 className="text-xl font-heading font-bold tracking-wide text-white mb-4 group-hover:text-brand-100 transition-colors">{service.title}</h4>
                <p className="text-slate-400 text-sm leading-7 font-light mb-8 flex-grow group-hover:text-slate-300">
                  {service.description}
                </p>

                <div className="flex items-center text-brand-400 text-xs font-bold tracking-widest uppercase group-hover:translate-x-2 transition-transform">
                  {t.services.moreDetails} <ArrowRight size={14} className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[100px] bg-brand-500/10 blur-[80px] pointer-events-none"></div>
          <a 
            href="#contact"
            className="relative inline-flex items-center gap-3 px-12 py-5 rounded-full bg-slate-900 text-white font-heading font-bold tracking-widest text-sm hover:bg-slate-800 transition-all shadow-lg transform hover:-translate-y-1 border border-slate-700 hover:border-brand-500/50 overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-3">
               <Mail size={18} className="text-brand-500 group-hover:text-brand-400" />
               {t.services.cta}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </div>
      </div>
    </section>
  );
};