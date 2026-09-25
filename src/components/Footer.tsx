import React from 'react';
import { PageId } from '../types';
import { VanguardLogo } from './VanguardLogo';
import { COMPANY_INFO, PACKAGES } from '../data/company';
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (packageId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="vanguard-footer" className="bg-[#0F223D] text-slate-300 pt-16 pb-12 border-t border-[#18365B]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tier: Brand, Mission & Key Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <VanguardLogo lightText size="lg" onClick={() => handleNav('home')} />
            
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              Vanguard Tech Pty.(Ltd) delivers professional, scalable, and modern web, e-commerce, and AI automation solutions engineered for South African businesses.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-800/80 border border-slate-700/80 text-xs font-mono text-slate-200">
              <span className="text-[#94A3B8]">CIPC Reg:</span>
              <span className="font-semibold text-white">{COMPANY_INFO.registrationNumber}</span>
            </div>

            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-bold">Official Motto</p>
              <p className="text-lg font-display font-semibold text-white tracking-wide">
                “{COMPANY_INFO.tagline}”
              </p>
            </div>
          </div>

          {/* Col 3: Core Packages */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
              Solutions & Pricing
            </h4>
            <ul className="space-y-2.5 text-sm">
              {PACKAGES.map((pkg) => (
                <li key={pkg.id}>
                  <button
                    onClick={() => {
                      handleNav('services');
                    }}
                    className="text-left group hover:text-white transition-colors"
                  >
                    <div className="font-medium text-slate-200 group-hover:text-blue-300 flex items-center gap-1">
                      <span>{pkg.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      {pkg.onceOffPrice}
                    </div>
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button
                  onClick={() => onOpenQuoteModal('custom')}
                  className="text-xs font-semibold text-blue-300 hover:text-blue-200 flex items-center gap-1"
                >
                  <span>Custom Engineering & AI</span>
                  <span>→</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors"
                >
                  Services & Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors"
                >
                  About & Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('portfolio')}
                  className="hover:text-white transition-colors"
                >
                  Portfolio & Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('process')}
                  className="hover:text-white transition-colors"
                >
                  Our 5-Step Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct South Africa Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-xs text-slate-400 block">Executive Contact</span>
                <span className="font-semibold text-white block">Mpumelelo Mabaso (CEO)</span>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 text-blue-300 hover:text-blue-200 font-mono text-sm mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </div>

              <div>
                <span className="text-xs text-slate-400 block">Technical Architecture</span>
                <span className="font-semibold text-white block">Siphiwe Tlhapane (CTO)</span>
                <span className="text-xs text-slate-400">Engineering & Delivery</span>
              </div>

              <div className="pt-1 flex items-start gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Johannesburg, Gauteng, South Africa (National Coverage)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Guarantees & Legal Statement */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>CIPC Registered Company (K2026516671)</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Transparent ZAR Pricing Guaranteed</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full Code & Asset Ownership</span>
            </span>
          </div>

          <div className="text-center md:text-right text-slate-400">
            <p>© {currentYear} {COMPANY_INFO.legalName}. All rights reserved.</p>
            <p className="text-[11px] text-slate-400 pt-0.5">
              Built Beyond Limits for South African Businesses.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
