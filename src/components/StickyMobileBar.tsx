import React from 'react';
import { Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO, getWhatsAppUrl } from '../data/gymData';

interface StickyMobileBarProps {
  onOpenEnquiry: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenEnquiry }) => {
  return (
    <>
      {/* Fixed Bottom Dock for Mobile Screens (< 768px) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#09090b]/95 backdrop-blur-lg border-t border-neutral-800 p-2.5 px-3 flex items-center justify-between gap-2 shadow-[0_-10px_25px_rgba(0,0,0,0.8)]">
        {/* Call Now */}
        <a
          href={`tel:${BRAND_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white font-display text-sm font-bold tracking-wider uppercase active:scale-95 transition-transform"
          aria-label="Call Solid Health Gym"
        >
          <Phone className="w-4 h-4 text-red-500" />
          <span>CALL</span>
        </a>

        {/* Start Journey */}
        <button
          onClick={onOpenEnquiry}
          className="flex-[1.4] flex items-center justify-center gap-1 py-3 rounded-xl bg-red-600 text-white font-display text-sm font-bold tracking-wider uppercase shadow-lg shadow-red-600/30 active:scale-95 transition-transform"
        >
          <span>JOIN NOW</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>

        {/* WhatsApp */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-emerald-600 text-white font-display text-sm font-bold tracking-wider uppercase active:scale-95 transition-transform shadow-md shadow-emerald-600/30"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WHATSAPP</span>
        </a>
      </div>

      {/* Floating WhatsApp Quick Button for Desktop / Large Screens */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#121215] hover:bg-neutral-900 border border-emerald-500/50 text-white shadow-2xl shadow-emerald-950/50 transition-all duration-300 hover:scale-105 active:scale-95"
          title="Chat on WhatsApp"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-600/50">
            <MessageCircle className="w-4 h-4" />
          </div>
          <div className="text-left font-sans">
            <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider leading-none">
              Online Now
            </div>
            <div className="text-xs font-bold text-white tracking-wide leading-tight">
              Chat on WhatsApp
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
