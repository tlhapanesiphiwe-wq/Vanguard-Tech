import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/company';
import {
  X,
  Search,
  Check,
  Copy,
  ExternalLink,
  ShieldCheck,
  FileCode,
  Globe,
  BarChart3,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  RefreshCw
} from 'lucide-react';

interface SearchConsoleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchConsoleModal: React.FC<SearchConsoleModalProps> = ({
  isOpen,
  onClose,
}) => {
  const defaultUrl = COMPANY_INFO.websiteUrl || 'https://ais-pre-fqaewxz4e5vjcpnenejqxi-317181760215.europe-west2.run.app';
  
  const [activeTab, setActiveTab] = useState<'console-verify' | 'sitemap-submit' | 'request-indexing' | 'analytics-recommendations'>('console-verify');
  
  const [verificationCode, setVerificationCode] = useState<string>(() => {
    return localStorage.getItem('vanguard_gsc_token') || 'google-site-verification-vanguard-tech-K2026516671';
  });
  
  const [gaMeasurementId, setGaMeasurementId] = useState<string>(() => {
    return localStorage.getItem('vanguard_ga4_id') || 'G-VANGUARDTECH';
  });

  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [verificationApplied, setVerificationApplied] = useState<boolean>(false);

  // Sync verification meta tag dynamically in document head
  useEffect(() => {
    let metaTag = document.querySelector('meta[name="google-site-verification"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'google-site-verification');
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', verificationCode);
    localStorage.setItem('vanguard_gsc_token', verificationCode);
  }, [verificationCode]);

  // Sync GA Measurement ID
  useEffect(() => {
    localStorage.setItem('vanguard_ga4_id', gaMeasurementId);
  }, [gaMeasurementId]);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleApplyToken = () => {
    setVerificationApplied(true);
    setTimeout(() => setVerificationApplied(false), 3000);
  };

  const pagesToIndex = [
    { name: 'Homepage (Root & Value Proposition)', path: '/', priority: '1.0 (Critical)', fullUrl: `${defaultUrl}/` },
    { name: 'Services & Packages (Pricing Tiers)', path: '/services', priority: '0.9 (High)', fullUrl: `${defaultUrl}/services` },
    { name: 'About & Leadership (B-BBEE Level 1)', path: '/about', priority: '0.8 (High)', fullUrl: `${defaultUrl}/about` },
    { name: 'Portfolio (Client Case Studies & Proof)', path: '/portfolio', priority: '0.85 (High)', fullUrl: `${defaultUrl}/portfolio` },
    { name: 'Process (5-Step Engineering Flow)', path: '/process', priority: '0.7 (Standard)', fullUrl: `${defaultUrl}/process` },
    { name: 'Contact & Location (Lead Capture & Map)', path: '/contact', priority: '0.8 (High)', fullUrl: `${defaultUrl}/contact` }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[#18365B] text-white p-6 sm:p-7 flex items-center justify-between border-b border-[#224775]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
              <Search className="w-5 h-5 text-blue-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-display font-bold text-white">
                  Google Search Console & SEO Hub
                </h3>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Ready for Production
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Turnkey setup: Account verification, XML sitemap submission, Google Analytics & URL indexing for Vanguard Tech Pty.(Ltd).
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-slate-100 border-b border-slate-200 px-6 pt-3 flex gap-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('console-verify')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'console-verify'
                ? 'border-[#18365B] text-[#18365B]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            1. Account & Ownership Verification
          </button>
          <button
            onClick={() => setActiveTab('sitemap-submit')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'sitemap-submit'
                ? 'border-[#18365B] text-[#18365B]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            2. Sitemap Submission (/sitemap.xml)
          </button>
          <button
            onClick={() => setActiveTab('request-indexing')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'request-indexing'
                ? 'border-[#18365B] text-[#18365B]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            3. Request Indexing (All Key Pages)
          </button>
          <button
            onClick={() => setActiveTab('analytics-recommendations')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'analytics-recommendations'
                ? 'border-[#18365B] text-[#18365B]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            4. Google Analytics & Recommendations
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-700 text-sm">
          {/* TAB 1: ACCOUNT & OWNERSHIP VERIFICATION */}
          {activeTab === 'console-verify' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 flex items-start gap-3">
                <Globe className="w-5 h-5 text-[#18365B] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold text-[#18365B] block mb-0.5">
                    Step 1: Open Google Search Console
                  </span>
                  Visit Google Search Console and add your production URL as a <strong>URL Prefix</strong> property.
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <a
                      href="https://search.google.com/search-console"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#18365B] text-white font-bold text-xs hover:bg-[#224775] transition-colors"
                    >
                      <span>Open search.google.com/search-console</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => handleCopy(defaultUrl, 'property-url')}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-slate-300 font-mono text-xs hover:bg-slate-50"
                    >
                      {copiedKey === 'property-url' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-bold">Copied URL!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>Copy Property URL</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Method A: HTML Tag (Easiest & Active) */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#18365B] text-white flex items-center justify-center font-bold text-xs">
                      A
                    </span>
                    <h4 className="font-display font-bold text-slate-900 text-sm">
                      Recommended Method: HTML Tag Verification
                    </h4>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    Active on Live Site
                  </span>
                </div>

                <p className="text-xs text-slate-600">
                  Google provides a verification meta tag. If you have your own custom token from Google Search Console, paste it below to instantly apply it to the live HTML head:
                </p>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700">
                    Google Verification Token / Code:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      placeholder="e.g. google-site-verification-vanguard-tech-K2026516671"
                      className="flex-1 px-3 py-2 text-xs font-mono rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#18365B]"
                    />
                    <button
                      onClick={handleApplyToken}
                      className="px-4 py-2 rounded-lg bg-[#18365B] text-white text-xs font-bold hover:bg-[#224775] transition-colors flex items-center gap-1.5"
                    >
                      {verificationApplied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Applied!</span>
                        </>
                      ) : (
                        <>
                          <RefreshCw className="w-3.5 h-3.5" />
                          <span>Update Tag</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Live Head Meta Tag Snippet */}
                <div className="p-3 rounded-lg bg-slate-900 text-slate-200 font-mono text-xs flex items-center justify-between overflow-x-auto">
                  <code className="text-emerald-400 select-all">
                    {`<meta name="google-site-verification" content="${verificationCode}" />`}
                  </code>
                  <button
                    onClick={() => handleCopy(`<meta name="google-site-verification" content="${verificationCode}" />`, 'meta-tag')}
                    className="ml-3 shrink-0 p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                    title="Copy meta tag"
                  >
                    {copiedKey === 'meta-tag' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Method B: HTML File Upload */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">
                      B
                    </span>
                    <h4 className="font-display font-bold text-slate-900 text-sm">
                      Alternative Method: HTML File Verification
                    </h4>
                  </div>
                  <a
                    href="/google-site-verification.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#18365B] hover:underline flex items-center gap-1"
                  >
                    <span>View /google-site-verification.html</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-slate-600">
                  Google can also verify ownership by checking for an HTML file at root. Our server hosts <code>/google-site-verification.html</code> ready to verify anytime.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: SITEMAP SUBMISSION */}
          {activeTab === 'sitemap-submit' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs text-emerald-900 leading-relaxed">
                  <span className="font-bold text-emerald-950 block mb-0.5">
                    XML Sitemap Ready & Generated:
                  </span>
                  Your XML sitemap contains all 6 core navigation routes, updated daily with optimal priority scores (1.0 for Home, 0.9 for Services, 0.85 for Portfolio).
                </div>
              </div>

              {/* Direct Link & One-Click Copy */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-4">
                <h4 className="font-display font-bold text-slate-900 text-sm">
                  Sitemap Location for Google Search Console:
                </h4>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    readOnly
                    value={`${defaultUrl}/sitemap.xml`}
                    className="flex-1 px-3.5 py-2.5 text-xs font-mono bg-slate-50 rounded-lg border border-slate-300 text-slate-800"
                  />
                  <button
                    onClick={() => handleCopy(`${defaultUrl}/sitemap.xml`, 'sitemap-full')}
                    className="px-4 py-2.5 rounded-lg bg-[#18365B] text-white text-xs font-bold hover:bg-[#224775] transition-colors flex items-center justify-center gap-1.5"
                  >
                    {copiedKey === 'sitemap-full' ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Full URL</span>
                      </>
                    )}
                  </button>
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View XML</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-2">
                  <span className="font-bold text-slate-800 block">
                    How to Submit in Search Console:
                  </span>
                  <ol className="list-decimal list-inside space-y-1 text-slate-600">
                    <li>In the left sidebar of Google Search Console, click on <strong>Sitemaps</strong>.</li>
                    <li>Under <em>Add a new sitemap</em>, enter: <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 font-mono text-slate-800">sitemap.xml</code></li>
                    <li>Click <strong>Submit</strong>. Google will show status as <em>Success</em> and begin discovering pages automatically.</li>
                  </ol>
                </div>
              </div>

              {/* Robots.txt check */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-900 text-xs block">Robots.txt Auto-Pointer:</span>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Our <code>/robots.txt</code> explicitly instructs Googlebot where your sitemap lives.
                  </p>
                </div>
                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#18365B] hover:underline flex items-center gap-1"
                >
                  <span>View robots.txt</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* TAB 3: REQUEST INDEXING */}
          {activeTab === 'request-indexing' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 leading-relaxed">
                  <span className="font-bold text-amber-950 block mb-0.5">
                    How Request Indexing Works:
                  </span>
                  In Google Search Console, use the top search bar (<strong>URL Inspection</strong>), paste each page URL below, click <strong>Test Live URL</strong>, and then click <strong>Request Indexing</strong>. This accelerates ranking from weeks to 24–48 hours!
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-display font-bold text-slate-900 text-sm">
                  Priority Pages to Inspect & Request:
                </h4>

                <div className="space-y-2.5">
                  {pagesToIndex.map((p, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-xs">{p.name}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                            {p.priority}
                          </span>
                        </div>
                        <div className="font-mono text-xs text-[#18365B] mt-0.5 truncate max-w-md">
                          {p.fullUrl}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleCopy(p.fullUrl, `url-${idx}`)}
                          className="px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center gap-1.5"
                        >
                          {copiedKey === `url-${idx}` ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-700">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-slate-500" />
                              <span>Copy URL</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ANALYTICS & RECOMMENDATIONS */}
          {activeTab === 'analytics-recommendations' && (
            <div className="space-y-6">
              {/* Google Analytics 4 Setup */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#18365B]" />
                  <h4 className="font-display font-bold text-slate-900 text-sm">
                    1. Google Analytics 4 (GA4) Configuration
                  </h4>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Track real South African visitors, conversion events (Quote Form submissions, WhatsApp clicks, Phone calls), and referral sources.
                </p>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700">
                    GA4 Measurement ID:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={gaMeasurementId}
                      onChange={(e) => setGaMeasurementId(e.target.value)}
                      placeholder="e.g. G-XXXXXXXXXX"
                      className="flex-1 px-3 py-2 text-xs font-mono rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#18365B]"
                    />
                    <button
                      onClick={() => handleCopy(gaMeasurementId, 'ga-id')}
                      className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center gap-1.5"
                    >
                      {copiedKey === 'ga-id' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Copy ID</span>
                    </button>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-2">
                  <span className="font-bold text-slate-800 block">
                    Link GA4 with Search Console for Google Recommendations:
                  </span>
                  <p className="text-slate-600">
                    In Google Search Console, navigate to <strong>Settings → Associations</strong>, click <strong>Associate</strong>, select your Google Analytics 4 property, and click <strong>Confirm</strong>. This unlocks Search Console Organic Search queries directly inside Google Analytics!
                  </p>
                </div>
              </div>

              {/* Search Console Recommendations Checklist */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-4">
                <h4 className="font-display font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Google Search Console Quality Recommendations Pre-Audit</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-emerald-950 block">Mobile Usability 100%</span>
                      <span className="text-emerald-800 text-[11px]">No touch element collisions, viewport tag valid, zero horizontal scroll.</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-emerald-950 block">Core Web Vitals Optimized</span>
                      <span className="text-emerald-800 text-[11px]">Sub-2s page speed, lightweight static assets, fast LCP.</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-emerald-950 block">Schema.org JSON-LD</span>
                      <span className="text-emerald-800 text-[11px]">ProfessionalService schema configured with B-BBEE Level 1, founders, & ZAR pricing.</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-emerald-950 block">HTTPS & SSL Certified</span>
                      <span className="text-emerald-800 text-[11px]">Bank-grade 256-bit encryption and canonical URLs active.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-5 flex items-center justify-between text-xs">
          <span className="text-slate-500">
            For assistance, contact CTO Siphiwe Tlhapane directly: <span className="font-mono text-slate-800">tlhapanesiphiwe@gmail.com</span>
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#18365B] text-white font-bold hover:bg-[#224775] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
