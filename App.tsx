import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
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
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;