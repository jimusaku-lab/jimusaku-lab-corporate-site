import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { CompanyProfile } from './components/CompanyProfile';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServiceDetail } from './components/ServiceDetail';
import { ScrollToTop } from './components/ScrollToTop';

// Landing Page Component containing all sections
const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <CompanyProfile />
      <Contact />
    </>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <ScrollToTop />
      <Header />
      <main>
      <main>
        <Routes>
          {/* トップページ（ホーム） */}
          <Route path="/" element={<LandingPage />} />

          {/* 各セクション付きのパスもすべて LandingPage を表示 */}
          <Route path="/hero" element={<LandingPage />} />
          <Route path="/services" element={<LandingPage />} />
          <Route path="/cases" element={<LandingPage />} />
          <Route path="/company" element={<LandingPage />} />
          <Route path="/contact" element={<LandingPage />} />

          {/* サービス詳細ページ（/services/backoffice など） */}
          <Route path="/services/:id" element={<ServiceDetail />} />

          {/* それ以外のパスは全部ホームへフォールバック */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </main>
      </main>
      <Footer />
    </div>
  );
};

export default App;