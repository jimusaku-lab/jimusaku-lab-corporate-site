import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES_JP, SERVICES_EN, CASE_STUDIES_JP, CASE_STUDIES_EN, UI_TEXT } from '../constants';
import { CheckCircle2, ArrowLeft, MessageSquare } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  
  const services = language === 'ja' ? SERVICES_JP : SERVICES_EN;
  const caseStudies = language === 'ja' ? CASE_STUDIES_JP : CASE_STUDIES_EN;
  const t = UI_TEXT[language];

  const service = services.find(s => s.id === id);
  
  // Filter related case studies
  const relatedCases = caseStudies.filter(c => c.serviceIds.includes(id || ''));

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
        <h1 className="text-2xl font-heading font-bold mb-4">Service Not Found</h1>
        <Link to="/" className="text-brand-400 hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen pt-20">
      {/* Hero Section for Service Detail with Brighter 3D Animation */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950 border-b border-slate-800">
        
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
                linear-gradient(to right, rgba(148, 163, 184, 0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(148, 163, 184, 0.15) 1px, transparent 1px);
              background-size: 60px 60px;
            }
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
            .packet-h {
              position: absolute;
              height: 3px;
              width: 100px;
              background: linear-gradient(90deg, transparent, #f63d68, #fff, transparent);
              box-shadow: 0 0 20px #f63d68;
              animation: travel-x 3s infinite linear;
            }
            .packet-v {
              position: absolute;
              width: 3px;
              height: 100px;
              background: linear-gradient(180deg, transparent, #f63d68, #fff, transparent);
              box-shadow: 0 0 20px #f63d68;
              animation: travel-y 4s infinite linear;
            }
          `}</style>

          {/* Increased opacity and removed dark overlays for better visibility */}
          <div className="absolute inset-0 flex items-center justify-center iso-perspective">
             <div className="relative w-[150vw] h-[150vw] iso-plane bg-slate-900/20">
                {/* Grid Floor */}
                <div className="absolute inset-0 grid-pattern [mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)]"></div>
                
                {/* Central Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-brand-500/50 rounded-xl flex items-center justify-center z-10 shadow-[0_0_30px_rgba(246,61,104,0.2)]">
                   <div className="w-16 h-16 bg-brand-500/10 rounded-full blur-md"></div>
                </div>

                {/* Brighter Data Flows */}
                <div className="absolute top-[38%] left-[38%] w-[12%] h-[1px] bg-slate-700/30">
                   <div className="packet-h w-full" style={{animationDuration: '2.5s'}}></div>
                </div>
                <div className="absolute bottom-[38%] right-[38%] w-[12%] h-[1px] bg-slate-700/30">
                   <div className="packet-h w-full" style={{animationDuration: '3s', animationDirection: 'reverse'}}></div>
                </div>
             </div>
          </div>
          
          {/* Lighter Vignette Only */}
          <div className="absolute inset-0 bg-[radial-gradient(transparent_40%,#020617_100%)] z-0"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Link to="/#services" className="inline-flex items-center text-slate-400 hover:text-brand-400 mb-8 transition-colors text-sm tracking-wide font-medium">
            <ArrowLeft size={16} className="mr-2" /> {t.detail.back}
          </Link>
          <div className="flex items-center gap-6 mb-8 animate-fade-in-up">
            <div className="p-4 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-brand-500/30 shadow-[0_0_30px_rgba(246,61,104,0.3)]">
              <service.icon size={40} className="text-brand-400" />
            </div>
            <h2 className="text-brand-400 font-english font-bold tracking-[0.2em] uppercase text-xs bg-slate-950/80 px-4 py-2 rounded-full border border-slate-800">
              {t.detail.serviceDetail}
            </h2>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-widest leading-tight mb-8 text-white drop-shadow-2xl animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-light max-w-3xl leading-loose tracking-wide animate-fade-in-up drop-shadow-md" style={{animationDelay: '0.2s'}}>
            {service.description}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-24">
            
            {/* Features */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white tracking-widest mb-10 flex items-center gap-4">
                <span className="w-2 h-8 bg-brand-500 rounded-full shadow-[0_0_15px_#f63d68]"></span>
                {t.detail.features}
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex items-center gap-5 hover:border-brand-500/30 transition-colors shadow-sm hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                    <div className="w-8 h-8 rounded-full bg-brand-900/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="text-brand-500" size={18} />
                    </div>
                    <p className="text-slate-200 text-lg font-medium leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Process Flow */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-white tracking-widest mb-10 flex items-center gap-4">
                <span className="w-2 h-8 bg-brand-500 rounded-full shadow-[0_0_15px_#f63d68]"></span>
                {t.detail.flow}
              </h3>
              <div className="space-y-4 md:space-y-0">
                {service.process.map((proc, idx) => (
                  <div key={idx} className="relative pl-4 md:pl-0">
                    {/* Dotted Line connector for mobile */}
                    {idx !== service.process.length - 1 && (
                      <div className="absolute left-[27px] top-16 bottom-[-16px] w-0.5 border-l-2 border-dashed border-slate-800 md:hidden"></div>
                    )}
                    
                    <div className="flex flex-col md:flex-row gap-8 items-start bg-slate-900/30 p-8 rounded-2xl border border-slate-800/50 hover:bg-slate-900/50 transition-colors">
                      <div className="shrink-0 flex flex-col items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-slate-950 text-brand-400 rounded-2xl font-english font-bold text-xl border border-slate-800 shadow-lg relative z-10">
                        {proc.step}
                      </div>
                      <div>
                        <h4 className="text-xl font-heading font-bold text-white mb-3">{proc.title}</h4>
                        <p className="text-slate-400 text-base leading-relaxed font-light">{proc.desc}</p>
                      </div>
                    </div>
                    
                    {/* Arrow connector for desktop */}
                    {idx !== service.process.length - 1 && (
                      <div className="hidden md:flex justify-center py-2">
                        <div className="h-6 w-px border-l-2 border-dashed border-slate-800"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Related Case Studies */}
            {relatedCases.length > 0 && (
              <section>
                <h3 className="text-2xl font-heading font-bold text-white tracking-widest mb-10 flex items-center gap-4">
                  <span className="w-2 h-8 bg-brand-500 rounded-full shadow-[0_0_15px_#f63d68]"></span>
                  {t.detail.related}
                </h3>
                <div className="grid grid-cols-1 gap-8">
                  {relatedCases.map((study, idx) => (
                    <div key={idx} className="group bg-slate-900 rounded-2xl p-1 overflow-hidden hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all">
                       <div className="bg-slate-950 rounded-xl p-8 border border-slate-800 h-full relative z-10">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-slate-900 text-brand-300 text-xs font-bold rounded-full tracking-wide border border-slate-700">
                              {study.industry}
                            </span>
                          </div>
                          <h4 className="text-xl font-heading font-bold text-white mb-6 group-hover:text-brand-200 transition-colors">{study.title}</h4>
                          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                            <div className="md:w-1/3 rounded-xl overflow-hidden h-48">
                              <img src={study.image} alt={study.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="md:w-2/3 flex flex-col justify-center">
                              <div className="mb-4">
                                <p className="text-xs font-bold text-slate-500 uppercase mb-1">{t.cases.before}</p>
                                <p className="text-sm text-slate-400 leading-relaxed">{study.problem}</p>
                              </div>
                              <div className="p-4 bg-brand-900/10 rounded-xl border border-brand-500/20">
                                <p className="text-xs font-bold text-brand-400 uppercase mb-1">{t.cases.after}</p>
                                <p className="text-sm text-white font-medium leading-relaxed">
                                  {study.solution}
                                </p>
                              </div>
                            </div>
                          </div>
                       </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-purple-500"></div>
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl group-hover:bg-brand-500/20 transition-colors"></div>
                
                <h4 className="font-heading font-bold text-white mb-4 text-lg relative z-10">{t.detail.consultBoxTitle}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 relative z-10">
                  {service.title}{t.detail.consultBoxDesc}
                </p>
                <Link 
                  to="/#contact" 
                  className="block w-full bg-brand-600 text-white text-center py-4 rounded-xl font-heading font-bold tracking-widest hover:bg-brand-500 transition-all shadow-[0_0_20px_rgba(246,61,104,0.4)] hover:-translate-y-1 relative z-10"
                >
                  {t.detail.consultBtn}
                </Link>
              </div>

              <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 shadow-lg text-white backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-slate-800 rounded-lg text-brand-400">
                    <MessageSquare size={24} />
                  </div>
                  <h4 className="font-heading font-bold text-lg">{t.detail.ventTitle}</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-0 whitespace-pre-line">
                  {t.detail.ventDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};