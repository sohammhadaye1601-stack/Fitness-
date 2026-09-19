/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhySolidSection } from './components/WhySolidSection';
import { ProgramsSection } from './components/ProgramsSection';
import { StatsSection } from './components/StatsSection';
import { TransformationsSection } from './components/TransformationsSection';
import { GallerySection } from './components/GallerySection';
import { FitnessTipsSection } from './components/FitnessTipsSection';
import { SpecialOffersSection } from './components/SpecialOffersSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { EnquiryModal } from './components/EnquiryModal';

export default function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string>('');

  const handleOpenEnquiry = (programName?: string) => {
    if (programName) {
      setSelectedProgram(programName);
    }
    setIsEnquiryModalOpen(true);
  };

  const handleSelectProgramFromSection = (programName: string) => {
    setSelectedProgram(programName);
    // Smooth scroll to the on-page enquiry form or open modal for immediate action
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      setIsEnquiryModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-neutral-100 selection:bg-red-600 selection:text-white relative">
      {/* 1. Sticky Navigation Bar */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      <main>
        {/* 1. Hero Section */}
        <HeroSection onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 2. Why Solid Health & Fitness */}
        <WhySolidSection />

        {/* 3. Training Programs */}
        <ProgramsSection onSelectProgram={handleSelectProgramFromSection} />

        {/* 4. Why People Choose Us (Statistics) */}
        <StatsSection />

        {/* 5. Results / Clients Transformation Gallery */}
        <TransformationsSection onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 6. Gym Experience (Editorial Gallery) */}
        <GallerySection />

        {/* 7. Fitness Tips Section (Gym Tips Highlight) */}
        <FitnessTipsSection />

        {/* 8. Special Offers CTA */}
        <SpecialOffersSection onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 9. Location & Contact with Form & Google Maps */}
        <LocationContactSection prefilledProgram={selectedProgram} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Floating & Sticky Action Controls for Mobile and Desktop */}
      <StickyMobileBar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Interactive Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        prefillProgram={selectedProgram}
      />
    </div>
  );
}
