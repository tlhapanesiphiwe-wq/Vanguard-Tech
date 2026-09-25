import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface FloatingWhatsAppProps {
  defaultMessage?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  defaultMessage = 'Hello Vanguard Tech Pty.(Ltd), I am interested in discussing a website / e-commerce / AI project for my business.',
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [closedPill, setClosedPill] = useState(false);

  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodedMessage}`;

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
    >
      {/* Floating Prompt Pill */}
      {!closedPill && (
        <div
          className="bg-white text-slate-800 text-xs px-3.5 py-2.5 rounded-lg shadow-lg border border-slate-200/80 flex items-center gap-2.5 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300"
          role="alert"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <div className="flex-1">
            <p className="font-semibold text-slate-900 leading-tight">
              Chat on WhatsApp
            </p>
            <p className="text-[11px] text-slate-500">
              Direct line: {COMPANY_INFO.phone}
            </p>
          </div>
          <button
            onClick={() => setClosedPill(true)}
            className="text-slate-400 hover:text-slate-600 p-0.5 rounded"
            aria-label="Dismiss chat alert"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-button"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label={`Chat with Vanguard Tech on WhatsApp at ${COMPANY_INFO.phone}`}
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Hover Tooltip */}
        {showTooltip && (
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#18365B] text-white text-xs font-semibold px-3 py-1.5 rounded-md whitespace-nowrap shadow-md pointer-events-none">
            WhatsApp Us: {COMPANY_INFO.phone}
          </span>
        )}
      </a>
    </div>
  );
};
