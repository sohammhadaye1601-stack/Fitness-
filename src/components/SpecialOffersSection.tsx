import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { getWhatsAppUrl, BRAND_INFO } from '../data/gymData';

interface SpecialOffersSectionProps {
  onOpenEnquiry: () => void;
}

export const SpecialOffersSection: React.FC<SpecialOffersSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#09090b] via-red-950/40 to-[#0a0a0c] border-y border-red-900/40">
      {/* Background Red Flare / Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Sub-badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/50 text-red-300 text-xs font-bold tracking-widest uppercase mb-6 font-sans">
          <Sparkles className="w-3.5 h-3.5 text-red-400" />
          <span>JOIN PORUR'S PREMIER FITNESS COMMUNITY</span>
        </div>

        {/* Big Heading */}
        <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[0.95] uppercase mb-6 drop-shadow-md">
          READY TO START?
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-neutral-200 text-lg sm:text-2xl max-w-2xl mx-auto font-normal leading-relaxed mb-10 text-balance">
          Your first step towards a stronger, healthier you starts here.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          {/* GET MEMBERSHIP DETAILS */}
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-display text-lg sm:text-xl font-bold tracking-wider uppercase transition-all shadow-xl shadow-red-600/40 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2.5 group"
          >
            <span>GET MEMBERSHIP DETAILS</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* WHATSAPP NOW */}
          <a
            href={getWhatsAppUrl('Hi Solid Health & Fitness Porur! I would like to receive the current membership plans and schedule a trial tour.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-white font-display text-lg sm:text-xl font-bold tracking-wider uppercase border border-neutral-700 hover:border-emerald-500/60 transition-all flex items-center justify-center gap-2.5 backdrop-blur-md hover:scale-[1.02] active:scale-95 text-emerald-400"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span className="text-white">WHATSAPP NOW</span>
          </a>
        </div>

        {/* No Fake Pricing Transparency Notice */}
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800 text-xs sm:text-sm text-neutral-400 font-sans">
          <div className="flex items-center gap-2 text-neutral-300">
            <ShieldCheck className="w-4 h-4 text-red-500 flex-shrink-0" />
            <span>Honest &amp; Tailored Memberships</span>
          </div>
          <span className="hidden sm:inline text-neutral-700">•</span>
          <span>Flexible 1, 3, 6 &amp; 12-Month Options</span>
          <span className="hidden sm:inline text-neutral-700">•</span>
          <span>Zero Obligation Gym Tour &amp; Biometric Scan</span>
        </div>
      </div>
    </section>
  );
};
