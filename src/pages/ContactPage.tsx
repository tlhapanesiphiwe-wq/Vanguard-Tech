import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, FAQS, PACKAGES } from '../data/company';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Map,
  ExternalLink,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (packageId?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    serviceInterest: 'growth-engine',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showMapEmbed, setShowMapEmbed] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const pkg = PACKAGES.find((p) => p.id === formData.serviceInterest)?.name || 'Digital Solutions';
    const text = `Hello Mpumelelo Mabaso (Vanguard Tech),\n\nI am contacting you from the website:\n• Name: ${formData.name}\n• Business: ${formData.businessName || 'Not specified'}\n• Phone: ${formData.phone}\n• Email: ${formData.email}\n• Interest: ${pkg}\n• Message: ${formData.message || 'I would like to discuss a project.'}`;
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div id="vanguard-contact-page" className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 text-[#4C6E8E] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Direct Communication</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[#18365B] tracking-tight">
            Connect With Vanguard Tech Pty.(Ltd)
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Ready to elevate your digital footprint? Call or message CEO Mpumelelo Mabaso directly, or submit your project details below for an expedited response.
          </p>
        </div>
      </section>

      {/* Main Content: Info Cards & Interactive Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Contact Details & Google Maps */}
            <div className="lg:col-span-5 space-y-6">
              {/* Executive Contact Card */}
              <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-5">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4C6E8E] block">
                    Chief Executive Officer
                  </span>
                  <h2 className="text-2xl font-display font-bold text-[#18365B] mt-0.5">
                    Mpumelelo Mabaso
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Direct Client Acquisition & Commercial Strategy
                  </p>
                </div>

                <div className="space-y-3.5 text-xs text-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-white border border-slate-200 flex items-center justify-center text-[#18365B] shrink-0">
                      <Phone className="w-4 h-4 text-[#4C6E8E]" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Direct Line / Calls:</span>
                      <a
                        href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                        className="font-mono text-sm font-bold text-[#18365B] hover:text-[#4C6E8E]"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">WhatsApp Direct:</span>
                      <a
                        href={COMPANY_INFO.whatsappDirectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm font-bold text-emerald-700 hover:text-emerald-800"
                      >
                        {COMPANY_INFO.phone} (1-Tap Chat)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-white border border-slate-200 flex items-center justify-center text-[#18365B] shrink-0">
                      <Mail className="w-4 h-4 text-[#4C6E8E]" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Inquiries & RFPs:</span>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="font-mono text-xs font-semibold text-[#18365B] hover:text-[#4C6E8E]"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-white border border-slate-200 flex items-center justify-center text-[#18365B] shrink-0">
                      <Clock className="w-4 h-4 text-[#4C6E8E]" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Operating Hours:</span>
                      <span className="font-medium text-slate-800">
                        {COMPANY_INFO.officeHours}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-white border border-slate-200 flex items-center justify-center text-[#18365B] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-[#4C6E8E]" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Registered Location:</span>
                      <span className="font-medium text-slate-800 block">
                        {COMPANY_INFO.location}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        National coverage across South Africa & remote global delivery
                      </span>
                    </div>
                  </div>
                </div>

                {/* Statutory Registration Pill */}
                <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>CIPC Registration:</span>
                  <span className="font-mono font-bold text-slate-800">{COMPANY_INFO.registrationNumber}</span>
                </div>
              </div>

              {/* Google Maps Embed Preview */}
              <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-100 shadow-xs">
                <div className="p-3 bg-white border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                    <Map className="w-4 h-4 text-[#4C6E8E]" />
                    <span>Johannesburg & Gauteng Business Hub</span>
                  </div>
                  <button
                    onClick={() => setShowMapEmbed(!showMapEmbed)}
                    className="text-xs text-[#4C6E8E] hover:underline font-medium"
                  >
                    {showMapEmbed ? 'Hide Map' : 'Show Map'}
                  </button>
                </div>

                {showMapEmbed && (
                  <div className="relative w-full h-56 bg-slate-200">
                    <iframe
                      title="Vanguard Tech Pty.(Ltd) South Africa Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.73887019315!2d27.971032890666993!3d-26.17150459345094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1710760000000!5m2!1sen!2sza"
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: High-Converting Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                {!submitted ? (
                  <div>
                    <div className="mb-6">
                      <h2 className="text-2xl font-display font-bold text-[#18365B]">
                        Send Us a Direct Message
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        Fill in your project details. We will assess your requirements and respond within 2 to 4 business hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Lerato Khumalo"
                            className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#18365B]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Business / Trading Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.businessName}
                            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                            placeholder="e.g. Khumalo Retail Group"
                            className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#18365B]"
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
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g. 072 987 6543"
                            className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#18365B]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="e.g. lerato@khumalogroup.co.za"
                            className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#18365B]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Service Package or Capability Interest
                        </label>
                        <select
                          value={formData.serviceInterest}
                          onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#18365B] bg-white"
                        >
                          <option value="starter-launch">Basic Tier: Starter Launch (R4,500 – R5,500 once-off)</option>
                          <option value="growth-engine">Standard Tier: Growth Engine (R6,000 – R9,500 once-off)</option>
                          <option value="complete-vanguard">Premium Tier: Complete Vanguard (R12,000 – R20,000+)</option>
                          <option value="custom-ecommerce">Custom E-Commerce (PayFast / Yoco / Courier sync)</option>
                          <option value="ai-automation">AI Automation Workflows & WhatsApp Triage</option>
                          <option value="sla-maintenance">Monthly Website Maintenance & Retainer Support</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Your Message / Objectives *
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us what you'd like to achieve, target launch timeline, or current website challenges..."
                          className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#18365B] resize-none"
                        />
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                        <button
                          type="submit"
                          id="contact-page-submit-button"
                          className="w-full sm:flex-1 py-3 px-6 rounded-md bg-[#18365B] hover:bg-[#224775] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                        >
                          <Send className="w-4 h-4" />
                          <span>Transmit Message</span>
                        </button>

                        <a
                          href={getWhatsAppMessage()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto py-3 px-4 rounded-md border border-emerald-500/50 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4 text-emerald-600" />
                          <span>WhatsApp Immediately</span>
                        </a>
                      </div>

                      <div className="text-[11px] text-slate-400 text-center pt-2">
                        <span>Protected by POPIA. We respect your confidentiality.</span>
                      </div>
                    </form>
                  </div>
                ) : (
                  /* Thank You State */
                  <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-display font-bold text-[#18365B]">
                        Message Successfully Sent
                      </h3>
                      <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                        Thank you for reaching out, <span className="font-semibold text-slate-900">{formData.name}</span>. CEO <span className="font-semibold text-slate-900">Mpumelelo Mabaso</span> has received your inquiry for <span className="font-semibold text-slate-900">{formData.businessName || 'your business'}</span>.
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={getWhatsAppMessage()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto py-2.5 px-5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send Copy on WhatsApp</span>
                      </a>

                      <button
                        onClick={() => setSubmitted(false)}
                        className="w-full sm:w-auto py-2.5 px-4 rounded-md border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Frequently Asked Questions Accordion */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-[#18365B]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Common questions regarding pricing, local payment setups, timelines, and maintenance.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-lg border border-slate-200 bg-white overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#18365B] hover:bg-slate-50"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
