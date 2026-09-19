import React from 'react';
import { ArrowRight, MessageCircle, Star, MapPin, CheckCircle2 } from 'lucide-react';
import { SolidLogo } from './SolidLogo';
import { BRAND_INFO, getWhatsAppUrl } from '../data/gymData';

interface HeroSectionProps {
  onOpenEnquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-black"
    >
      {/* Background Cinematic Image with High-Contrast Gradient Overlays */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=85&w=2000&auto=format&fit=crop"
          alt="Solid Health and Fitness Porur Gym Floor"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-[1.15]"
          fetchPriority="high"
        />
        {/* Radial Red Ambient Light Glow (Left and Center) */}
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-red-600/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-red-700/15 rounded-full blur-[160px] pointer-events-none" />

        {/* Cinematic Vignette & Bottom Blends */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-black/75" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Prominent Logo Presentation */}
        <div className="mb-6 sm:mb-8 transform hover:scale-105 transition-transform duration-300">
          <div className="inline-flex p-3 sm:p-4 rounded-2xl bg-black/60 border border-neutral-800/80 backdrop-blur-md shadow-2xl shadow-red-950/40">
            <SolidLogo size="xl" showSubtitle={true} />
          </div>
        </div>

        {/* Trust Indicator Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-red-500/40 text-neutral-200 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 backdrop-blur-md glow-red-subtle">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="w-1 h-1 rounded-full bg-red-500" />
          <span className="text-white font-medium">{BRAND_INFO.trustBadge}</span>
          <span className="hidden sm:inline text-neutral-400">• Porur, Chennai</span>
        </div>

        {/* Primary Headline */}
        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.95] mb-6 drop-shadow-lg max-w-4xl">
          BUILD YOUR <span className="text-red-500 underline decoration-red-600/40 underline-offset-8">STRONGEST</span> SELF.
        </h1>

        {/* Subheadline */}
        <p className="font-sans text-base sm:text-xl md:text-2xl text-neutral-300 max-w-2xl font-normal leading-relaxed mb-8 sm:mb-10 text-balance">
          Personalized training, expert guidance and a complete fitness experience in Porur.
        </p>

        {/* Call To Action Buttons */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 mb-12">
          {/* Start Your Fitness Journey */}
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-display text-lg sm:text-xl font-bold tracking-wider uppercase transition-all shadow-xl shadow-red-600/35 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2.5 group"
          >
            <span>START YOUR FITNESS JOURNEY</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* WhatsApp Us */}
          <a
            href={getWhatsAppUrl('Hi Solid Health & Fitness Porur! I would like to know about gym membership and schedule a visit.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-white font-display text-lg sm:text-xl font-bold tracking-wider uppercase border border-neutral-700 hover:border-emerald-500/50 transition-all flex items-center justify-center gap-2.5 backdrop-blur-md hover:scale-[1.02] active:scale-95 text-emerald-400 hover:text-emerald-300"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span className="text-white">WHATSAPP US</span>
          </a>
        </div>

        {/* Trust Quick Features Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-4 border-t border-neutral-800/80 w-full max-w-4xl text-left">
          <div className="flex items-center gap-2 text-neutral-300 text-xs sm:text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
            <span>1,440+ Community</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-300 text-xs sm:text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
            <span>1-on-1 Personal Coaching</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-300 text-xs sm:text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
            <span>Advanced Heavy Strength Deck</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-300 text-xs sm:text-sm font-medium">
            <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
            <span>Prime Porur Location</span>
          </div>
        </div>
      </div>
    </section>
  );
};
