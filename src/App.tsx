import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId, CaseStudy } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteModal } from './components/QuoteModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProcessPage } from './pages/ProcessPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [initialPackageForModal, setInitialPackageForModal] = useState<string>('growth-engine');
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);

  const handleOpenQuoteModal = (packageId?: string) => {
    if (packageId) {
      setInitialPackageForModal(packageId);
    }
    setQuoteModalOpen(true);
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-slate-200 selection:text-slate-900">
      {/* Sticky Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Page Body with Smooth Transition */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onOpenQuoteModal={handleOpenQuoteModal}
                onSelectCaseStudy={(cs) => setActiveCaseStudy(cs)}
              />
            )}

            {currentPage === 'services' && (
              <ServicesPage
                onNavigate={handleNavigate}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            )}

            {currentPage === 'about' && (
              <AboutPage
                onNavigate={handleNavigate}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            )}

            {currentPage === 'portfolio' && (
              <PortfolioPage
                onNavigate={handleNavigate}
                onOpenQuoteModal={handleOpenQuoteModal}
                onSelectCaseStudy={(cs) => setActiveCaseStudy(cs)}
              />
            )}

            {currentPage === 'process' && (
              <ProcessPage
                onNavigate={handleNavigate}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            )}

            {currentPage === 'contact' && (
              <ContactPage
                onNavigate={handleNavigate}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Comprehensive Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Floating 1-Click WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Interactive Request Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialPackageId={initialPackageForModal}
      />

      {/* Detailed Case Study Inspection Modal */}
      <CaseStudyModal
        caseStudy={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onOpenQuoteModal={handleOpenQuoteModal}
      />
    </div>
  );
}
