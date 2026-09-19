import React from 'react';
import { ArrowRight, CheckCircle2, Flame } from 'lucide-react';
import { PROGRAMS } from '../data/gymData';
import { Program } from '../types';

interface ProgramsSectionProps {
  onSelectProgram: (programName: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram }) => {
  return (
    <section id="programs" className="py-20 sm:py-28 bg-[#09090b] relative overflow-hidden">
      {/* Decorative Red Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-red-700/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-bold tracking-widest uppercase mb-4">
              <Flame className="w-3.5 h-3.5 text-red-500" />
              <span>TRANSFORM YOUR DISCIPLINE</span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none mb-4">
              TRAINING PROGRAMS.
            </h2>

            <p className="font-sans text-neutral-300 text-base sm:text-lg">
              Structured physical disciplines engineered to meet your specific body composition and strength objectives under verified coach guidance.
            </p>
          </div>

          <div className="flex items-center gap-2 text-neutral-400 text-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span>5 Specialized Disciplines in Porur</span>
          </div>
        </div>

        {/* Programs Grid: 3 + 2 balanced layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROGRAMS.map((program: Program, index: number) => {
            const isWideCard = index === 3 || index === 4;
            return (
              <div
                key={program.id}
                className={`group relative rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800/90 hover:border-red-600/60 transition-all duration-300 flex flex-col justify-between shadow-2xl hover:shadow-red-950/30 ${
                  isWideCard ? 'lg:col-span-1 xl:col-span-1' : ''
                }`}
              >
                {/* Top Image Container */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[0.75] contrast-[1.1]"
                    loading="lazy"
                  />
                  {/* Image Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                  {/* Level Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-neutral-700 text-[11px] font-bold text-neutral-200 uppercase tracking-wider font-sans">
                      {program.level}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tagline */}
                    <span className="block text-xs font-semibold text-red-400 uppercase tracking-wider mb-2 font-sans">
                      {program.tagline}
                    </span>

                    {/* Title */}
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-wide uppercase mb-3 group-hover:text-red-400 transition-colors">
                      {program.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-neutral-300 text-sm leading-relaxed mb-6">
                      {program.description}
                    </p>

                    {/* Focus Highlights */}
                    <div className="space-y-2 mb-6">
                      {program.focus.map((item, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-neutral-400 text-xs font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enquiry Action */}
                  <button
                    onClick={() => onSelectProgram(program.title)}
                    className="w-full mt-2 py-3 px-4 rounded-xl bg-neutral-900 hover:bg-red-600 text-neutral-200 hover:text-white text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 border border-neutral-800 hover:border-red-500 group/btn font-display"
                  >
                    <span>ENQUIRE FOR THIS PROGRAM</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-red-500 group-hover/btn:text-white" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
