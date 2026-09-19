import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { SolidLogo } from './SolidLogo';
import { BRAND_INFO, getWhatsAppUrl } from '../data/gymData';

interface NavbarProps {
  onOpenEnquiry: (prefillProgram?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PROGRAMS', href: '#programs' },
    { label: 'RESULTS', href: '#results' },
    { label: 'FITNESS TIPS', href: '#tips' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090b]/95 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
          aria-label="Solid Health & Fitness Porur Homepage"
        >
          <SolidLogo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1.5 text-xs xl:text-sm font-semibold tracking-wider text-neutral-300 hover:text-white hover:bg-neutral-900/60 rounded-md transition-colors font-display"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action CTAs */}
        <div className="hidden sm:flex items-center gap-2.5 xl:gap-3">
          {/* Quick Call */}
          <a
            href={`tel:${BRAND_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 text-xs font-semibold tracking-wider transition-colors"
            title="Call Solid Gym Porur"
          >
            <Phone className="w-3.5 h-3.5 text-red-500" />
            <span className="hidden xl:inline">{BRAND_INFO.phone}</span>
            <span className="xl:hidden">Call</span>
          </a>

          {/* Quick WhatsApp */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-400 border border-emerald-800/40 text-xs font-semibold tracking-wider transition-colors"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden xl:inline">WhatsApp</span>
          </a>

          {/* Primary CTA */}
          <button
            onClick={() => onOpenEnquiry()}
            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-red-600/30 active:scale-95 font-display"
          >
            <span>JOIN NOW</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/40"
            aria-label="WhatsApp Us"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09090b]/98 backdrop-blur-xl border-b border-neutral-800 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 text-base font-bold tracking-wider text-neutral-200 hover:text-red-400 hover:bg-neutral-900 rounded-lg transition-colors font-display"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-neutral-800/80 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-red-600 text-white font-bold tracking-wider text-sm font-display shadow-lg shadow-red-600/30"
            >
              <span>START YOUR FITNESS JOURNEY</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${BRAND_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 text-xs font-semibold"
              >
                <Phone className="w-4 h-4 text-red-500" />
                <span>Call Gym</span>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
