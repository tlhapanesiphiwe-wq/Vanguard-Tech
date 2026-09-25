import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { VanguardLogo } from './VanguardLogo';
import { COMPANY_INFO } from '../data/company';
import { Phone, Menu, X, ArrowRight, MessageCircle } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (packageId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services & Packages' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100'
          : 'bg-white py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <VanguardLogo
          onClick={() => handleNavClick('home')}
          size="md"
          className="cursor-pointer"
        />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-2 rounded-md text-sm font-semibold transition-colors duration-150 ${
                  isActive
                    ? 'text-[#18365B] bg-slate-100/90 font-bold'
                    : 'text-slate-600 hover:text-[#18365B] hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Direct Contact */}
        <div className="hidden md:flex items-center gap-4">
          {/* Quick Call Direct */}
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
            id="navbar-phone-button"
            className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-2 rounded-md transition-colors"
            title="Call CEO Mpumelelo Mabaso"
          >
            <Phone className="w-3.5 h-3.5 text-[#4C6E8E]" />
            <span>{COMPANY_INFO.phone}</span>
          </a>

          {/* Primary CTA */}
          <button
            id="navbar-quote-cta"
            onClick={() => onOpenQuoteModal()}
            className="inline-flex items-center gap-2 bg-[#18365B] hover:bg-[#224775] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-md shadow-sm transition-all hover:shadow hover:translate-y-[-1px] cursor-pointer"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            id="navbar-mobile-quote-cta"
            onClick={() => onOpenQuoteModal()}
            className="text-xs bg-[#18365B] text-white px-2.5 py-1.5 rounded font-semibold sm:hidden"
          >
            Quote
          </button>
          <button
            id="mobile-menu-toggle-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-md hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-md text-base font-semibold ${
                  currentPage === link.id
                    ? 'bg-slate-100 text-[#18365B] font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md border border-slate-300 text-sm font-semibold text-slate-800 bg-slate-50"
            >
              <Phone className="w-4 h-4 text-[#4C6E8E]" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>

            <a
              href={COMPANY_INFO.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md border border-emerald-500/30 text-sm font-semibold text-emerald-800 bg-emerald-50"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Vanguard Tech</span>
            </a>

            <button
              id="mobile-menu-request-quote-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-md bg-[#18365B] text-white text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
