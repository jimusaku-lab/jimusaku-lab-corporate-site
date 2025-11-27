import React, { useRef } from 'react';
import { CASE_STUDIES_JP, CASE_STUDIES_EN, UI_TEXT } from '../constants';
import { CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const CaseStudies: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const caseStudies = language === 'ja' ? CASE_STUDIES_JP : CASE_STUDIES_EN;
  const t = UI_TEXT[language];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = window.innerWidth < 768 ? 320 : 640;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="cases" className="py-24 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* --- 3D Isometric Animation Background --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-950 select-none pointer-events-none">
        <style>{`
          .iso-perspective-cases {
            perspective: 1000px;
            transform-style: preserve-3d;
          }
          .iso-plane-cases {
            transform: rotateX(60deg) rotateZ(-30deg) scale(1.5);
            transform-style: preserve-3d;
          }
          /* Brighter grid lines */
          .grid-pattern-cases {
            background-image: 
              linear-gradient(to right, rgba(148, 163, 184, 0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(148, 163, 184, 0.25) 1px, transparent 1px);
            background-size: 80px 80px;
          }
          @keyframes flow-v {
            0% { transform: translateY(-100%); opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { transform: translateY(100%); opacity: 0; }
          }
          /* Brighter, thicker, more glowing packets */
          .packet-flow-v {
            position: absolute;
            width: 4px;
            height: 250px;
            background: linear-gradient(180deg, transparent, #f63d68, #ffffff, transparent);
            box-shadow: 0 0 30px #f63d68, 0 0 10px #f63d68;
            animation: flow-v 4s infinite linear;
          }
        `}</style>
        <div className="absolute inset-0 flex items-center justify-center iso-perspective-cases">
           <div className="relative w-[150vw] h-[150vw] iso-plane-cases bg-slate-900/20">
              {/* Grid Floor */}
              <div className="absolute inset-0 grid-pattern-cases [mask-image:radial-gradient(circle_at_center,black_60%,transparent_95%)]"></div>
              
              {/* More flow lines with different speeds and positions */}
              <div className="absolute top-0 left-[25%] w-[1px] h-[60%] bg-slate-700/20">
                 <div className="packet-flow-v h-full" style={{animationDuration: '3.5s'}}></div>
              </div>
              <div className="absolute top-[10%] left-[50%] w-[1px] h-[50%] bg-slate-700/20">
                 <div className="packet-flow-v h-full" style={{animationDuration: '4.5s', animationDelay: '1.5s'}}></div>
              </div>
              <div className="absolute bottom-0 right-[25%] w-[1px] h-[60%] bg-slate-700/20">
                 <div className="packet-flow-v h-full" style={{animationDuration: '5s', animationDelay: '0.5s'}}></div>
              </div>
           </div>
        </div>
        {/* Reduced vignette opacity for better visibility */}
        <div className="absolute inset-0 bg-[radial-gradient(transparent_30%,#020617_95%)] z-0"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl relative z-10">
            <h2 className="text-brand-400 font-english font-bold tracking-[0.3em] uppercase text-xs mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-brand-500"></span> {t.cases.label}
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold tracking-widest text-white mb-6 drop-shadow-md">
              {t.cases.title}
            </h3>
            <p className="text-base text-slate-300 font-light leading-loose bg-slate-950/60 backdrop-blur-sm p-2 rounded-lg inline-block whitespace-pre-line">
              {t.cases.desc}
            </p>
          </div>
          
          {/* Custom Navigation Buttons */}
          <div className="flex gap-4 relative z-10">
            <button 
              onClick={() => scroll('left')} 
              className="group p-4 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:bg-slate-800 hover:border-brand-500 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(246,61,104,0.3)] backdrop-blur-md"
              aria-label="Previous Case"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="group p-4 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:bg-slate-800 hover:border-brand-500 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(246,61,104,0.3)] backdrop-blur-md"
              aria-label="Next Case"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container (Carousel) */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 md:gap-10 pb-16 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory hide-scrollbar relative z-10"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {caseStudies.map((study, index) => (
          <div 
            key={index} 
            className="min-w-[85vw] md:min-w-[500px] max-w-[600px] snap-center group relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-brand-500/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col h-full"
          >
            {/* Image Area - Top Half (Visible) */}
            <div className="h-56 sm:h-64 w-full relative shrink-0 bg-slate-800">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10"></div>
              
              {/* Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-4 py-2 bg-slate-950/90 backdrop-blur-md text-brand-300 text-xs font-bold rounded-full tracking-wider border border-brand-500/30 shadow-lg">
                  {study.industry}
                </span>
              </div>
              
              <img 
                src={study.image} 
                alt={study.title} 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>

            {/* Content Area - Bottom Half */}
            <div className="p-6 md:p-8 flex-grow flex flex-col bg-slate-950/95 border-t border-white/5 overflow-hidden">
              <h4 className="text-lg md:text-xl font-heading font-bold text-white tracking-wide leading-snug mb-6 group-hover:text-brand-100 transition-colors break-words line-clamp-2">
                {study.title}
              </h4>
              
              <div className="space-y-6 mb-8 flex-grow">
                <div className="flex gap-4 items-start">
                  <span className="shrink-0 text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">{t.cases.problem}</span>
                  <p className="text-slate-400 text-sm leading-relaxed font-light line-clamp-3">{study.problem}</p>
                </div>
                <div className="flex gap-4 items-start relative">
                   <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-brand-500/30"></div>
                  <span className="shrink-0 text-xs font-bold text-brand-400 uppercase tracking-wider mt-1 pl-4">{t.cases.solution}</span>
                  <p className="text-slate-200 text-sm font-medium leading-relaxed shadow-[0_0_30px_rgba(246,61,104,0.1)] rounded-lg bg-brand-900/10 p-3 -mt-2 w-full border border-brand-500/20">
                    {study.solution}
                  </p>
                </div>
              </div>

              {/* Footer with Tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800 mt-auto">
                {study.tags.map((tag, idx) => (
                  <span key={idx} className="inline-flex items-center text-[10px] text-brand-200 bg-slate-900 px-3 py-1.5 rounded-full tracking-wide border border-slate-700 shadow-sm">
                    <CheckCircle2 size={10} className="mr-1.5 text-brand-500" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        {/* CTA Card at the end */}
        <div className="min-w-[85vw] md:min-w-[350px] snap-center flex items-center justify-center">
           <a href="#contact" className="group relative w-full max-w-sm aspect-[4/5] bg-gradient-to-br from-brand-900/20 to-slate-900 rounded-3xl border border-brand-500/30 flex flex-col items-center justify-center text-center p-8 hover:scale-105 transition-transform duration-500 cursor-pointer shadow-[0_0_50px_rgba(246,61,104,0.2)] backdrop-blur-md">
              <div className="w-20 h-20 bg-brand-600 rounded-full flex items-center justify-center text-white mb-6 shadow-[0_0_30px_rgba(246,61,104,0.6)] group-hover:animate-pulse">
                <ArrowRight size={32} />
              </div>
              <h4 className="text-2xl font-heading font-bold text-white mb-2">{t.cases.nextTitle}</h4>
              <p className="text-brand-200 text-sm">{t.cases.nextSub}</p>
           </a>
        </div>
      </div>
    </section>
  );
};