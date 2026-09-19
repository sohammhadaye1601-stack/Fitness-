import React from 'react';
import { Phone, MessageCircle, MapPin, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { SolidLogo } from './SolidLogo';
import { BRAND_INFO, getWhatsAppUrl } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-neutral-800/80 pt-16 pb-24 sm:pb-16 text-neutral-400 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-neutral-900">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-6">
            <SolidLogo size="lg" showSubtitle={true} />

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Porur's top-rated and largest gym &amp; wellness center. Empowering athletes, working professionals, and beginners with world-class strength facilities and personalized coaching.
            </p>

            {/* Motto */}
            <div className="font-display font-black text-2xl sm:text-3xl text-red-500 tracking-wider uppercase">
              "{BRAND_INFO.footerMotto}"
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:border-red-500/60 hover:bg-red-950/20 transition-colors"
                aria-label="Follow Solid Health & Fitness Porur on Instagram"
              >
                <Instagram className="w-5 h-5 text-red-500" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:border-red-500/60 hover:bg-red-950/20 transition-colors"
                aria-label="Solid Health & Fitness Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/60 hover:bg-emerald-950/20 transition-colors"
                aria-label="Solid Health & Fitness WhatsApp Chat"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-lg text-white uppercase tracking-wider">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-red-400 transition-colors">Home &amp; Hero</a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-400 transition-colors">Why Solid Health</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-red-400 transition-colors">Training Programs</a>
              </li>
              <li>
                <a href="#results" className="hover:text-red-400 transition-colors">Transformation Stories</a>
              </li>
              <li>
                <a href="#tips" className="hover:text-red-400 transition-colors">Fitness Tips &amp; Gym Insights</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-red-400 transition-colors">Gym Experience &amp; Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-400 transition-colors">Location &amp; Enquiry</a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-lg text-white uppercase tracking-wider">
              CONTACT &amp; LOCATION
            </h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300">
                  {BRAND_INFO.name}, {BRAND_INFO.city}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href={`tel:${BRAND_INFO.phoneRaw}`} className="text-neutral-300 hover:text-white transition-colors">
                  {BRAND_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: {BRAND_INFO.whatsapp}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {BRAND_INFO.instagramHandle} ({BRAND_INFO.instagramFollowers} Followers)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {BRAND_INFO.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>Gym &amp; Wellness Center in Porur, Chennai</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
