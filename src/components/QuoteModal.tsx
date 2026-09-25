import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, PACKAGES } from '../data/company';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackageId?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialPackageId,
}) => {
  const [selectedPackage, setSelectedPackage] = useState<string>(initialPackageId || 'growth-engine');
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [budgetRange, setBudgetRange] = useState('R6,000 – R9,500');
  const [timeline, setTimeline] = useState('Within 2 to 4 weeks');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialPackageId) {
      setSelectedPackage(initialPackageId);
      if (initialPackageId === 'starter-launch') setBudgetRange('R4,500 – R5,500');
      else if (initialPackageId === 'growth-engine') setBudgetRange('R6,000 – R9,500');
      else if (initialPackageId === 'complete-vanguard') setBudgetRange('R12,000 – R20,000+');
      else setBudgetRange('Custom Budget');
    }
  }, [initialPackageId, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getWhatsAppSummaryLink = () => {
    const pkgObj = PACKAGES.find((p) => p.id === selectedPackage);
    const pkgName = pkgObj ? pkgObj.name : 'Custom Digital Solution';
    const text = `Hello Vanguard Tech Pty.(Ltd) (Mpumelelo Mabaso / Vanguard Tech),\n\nI would like to request a quote for my business:\n\n• Name: ${name}\n• Business: ${businessName || 'Not specified'}\n• Phone: ${phone}\n• Email: ${email}\n• Selected Package: ${pkgName}\n• Budget Range: ${budgetRange}\n• Desired Timeline: ${timeline}\n• Brief Notes: ${notes || 'Ready to discuss on call'}\n\nPlease let me know when we can connect!`;
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      id="quote-request-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-quote-modal-btn"
          className="absolute top-5 right-5 p-2 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 text-[#4C6E8E] text-xs font-bold uppercase tracking-wider mb-2">
                <span>Vanguard Tech Pty.(Ltd)</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-[#18365B]">
                Request a Free Quote & Consultation
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Tell us about your business. We will prepare a transparent, fixed-price proposal tailored to your commercial goals.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Package Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Choose Preferred Solution Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {PACKAGES.map((pkg) => (
                    <button
                      type="button"
                      key={pkg.id}
                      onClick={() => {
                        setSelectedPackage(pkg.id);
                        if (pkg.id === 'starter-launch') setBudgetRange('R4,500 – R5,500');
                        if (pkg.id === 'growth-engine') setBudgetRange('R6,000 – R9,500');
                        if (pkg.id === 'complete-vanguard') setBudgetRange('R12,000 – R20,000+');
                      }}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        selectedPackage === pkg.id
                          ? 'border-[#18365B] bg-slate-50 ring-1 ring-[#18365B]'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-xs font-bold text-[#18365B]">{pkg.name}</div>
                      <div className="text-xs font-mono font-semibold text-[#4C6E8E] mt-0.5">
                        {pkg.onceOffPrice}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                        {pkg.tier} Tier
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal & Business Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sipho Nkosi"
                    className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#18365B] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Business / Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Apex Logistics (Pty) Ltd"
                    className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#18365B] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 082 123 4567"
                    className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#18365B] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. sipho@apexlogistics.co.za"
                    className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#18365B] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Target Budget Range (ZAR)
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#18365B] focus:border-transparent bg-white"
                  >
                    <option value="R4,500 – R5,500 (Starter Launch)">R4,500 – R5,500 (Starter Launch)</option>
                    <option value="R6,000 – R9,500 (Growth Engine)">R6,000 – R9,500 (Growth Engine)</option>
                    <option value="R12,000 – R20,000+ (Complete Vanguard)">R12,000 – R20,000+ (Complete Vanguard)</option>
                    <option value="R25,000+ (Enterprise / Custom Platform)">R25,000+ (Enterprise / Custom Platform)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Desired Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#18365B] focus:border-transparent bg-white"
                  >
                    <option value="Immediate / Urgent (Next 7-10 days)">Immediate / Urgent (Next 7-10 days)</option>
                    <option value="Within 2 to 4 weeks">Within 2 to 4 weeks</option>
                    <option value="Within 1 to 2 months">Within 1 to 2 months</option>
                    <option value="Just planning for upcoming quarter">Just planning for upcoming quarter</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Project Notes or Key Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. We need an e-commerce checkout with PayFast, or a 7-page company site with lead capture..."
                  className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#18365B] focus:border-transparent resize-none"
                />
              </div>

              {/* Security & Direct Line Notice */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Your information is protected under POPIA guidelines</span>
                </div>
                <span className="hidden sm:inline">Direct response within 2 business hours</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  id="submit-quote-form-button"
                  className="w-full sm:flex-1 py-3 px-5 rounded-md bg-[#18365B] hover:bg-[#224775] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>Submit Quote Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getWhatsAppSummaryLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-4 rounded-md border border-emerald-500/50 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Send via WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Confirmation View */
          <div className="py-6 text-center space-y-5 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold text-[#18365B]">
                Quote Request Received
              </h3>
              <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-slate-900">{name}</span>. CEO <span className="font-semibold text-slate-900">Mpumelelo Mabaso</span> and the Vanguard Tech team will review your requirements for <span className="font-semibold text-slate-900">{businessName || 'your business'}</span> and contact you shortly.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Solution:</span>
                <span className="font-semibold text-slate-800">
                  {PACKAGES.find((p) => p.id === selectedPackage)?.name || 'Custom Solution'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Budget Range:</span>
                <span className="font-semibold text-slate-800 font-mono">{budgetRange}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contact Number:</span>
                <span className="font-semibold text-slate-800">{phone}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getWhatsAppSummaryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-2.5 px-5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Jump to WhatsApp (Immediate Connect)</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto py-2.5 px-4 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#4C6E8E]" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="text-xs text-slate-500 hover:text-slate-800 underline underline-offset-4 pt-2"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
