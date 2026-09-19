import React, { useState } from 'react';
import { Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { TRANSFORMATIONS } from '../data/gymData';

interface TransformationsSectionProps {
  onOpenEnquiry: () => void;
}

export const TransformationsSection: React.FC<TransformationsSectionProps> = ({ onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="results" className="py-20 sm:py-28 bg-[#09090b] relative overflow-hidden">
      {/* Red ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            <span>MEMBER MILESTONES</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none mb-4">
            YOUR PROGRESS. YOUR STORY.
          </h2>

          <p className="font-display text-xl sm:text-2xl text-red-400 font-bold uppercase tracking-wider mb-3">
            Real people. Real consistency. Real progress.
          </p>

          <p className="font-sans text-neutral-400 text-sm sm:text-base max-w-xl mx-auto">
            Every fitness journey at Solid is structured with measurable checkpoints, nutritional accountability, and progressive resistance benchmarks.
          </p>
        </div>

        {/* Tab selection for transformations */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {TRANSFORMATIONS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-2.5 rounded-xl font-display text-sm sm:text-base font-bold tracking-wider uppercase transition-all ${
                activeTab === index
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-neutral-900/90 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              Case Study #{index + 1}: {item.goal.split('&')[0]}
            </button>
          ))}
        </div>

        {/* Active Transformation Showcase Card */}
        {TRANSFORMATIONS[activeTab] && (
          <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Visual Before & After Split Image Frame */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
                {/* Before Container */}
                <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 aspect-[3/4]">
                  <img
                    src={TRANSFORMATIONS[activeTab].beforeImg}
                    alt="Transformation Milestone Initial Phase"
                    className="w-full h-full object-cover filter brightness-[0.75]"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-neutral-700 text-[11px] font-bold text-neutral-300 uppercase tracking-widest font-sans">
                    STARTING PHASE
                  </div>
                </div>

                {/* After Container */}
                <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-red-600/50 aspect-[3/4] shadow-lg shadow-red-950/40">
                  <img
                    src={TRANSFORMATIONS[activeTab].afterImg}
                    alt="Transformation Milestone Progress Phase"
                    className="w-full h-full object-cover filter contrast-[1.1]"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-red-600 text-[11px] font-bold text-white uppercase tracking-widest font-sans shadow-md">
                    PROGRESS PHASE
                  </div>
                </div>
              </div>

              {/* Transformation Story Details */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="px-3 py-1 rounded-md bg-neutral-900 text-red-400 font-mono text-xs font-bold border border-neutral-800">
                      MEMBER ID: {TRANSFORMATIONS[activeTab].clientInitials}
                    </span>
                    <span className="text-xs font-semibold text-neutral-400 font-sans">
                      {TRANSFORMATIONS[activeTab].timeframe}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wide mb-2">
                    {TRANSFORMATIONS[activeTab].goal}
                  </h3>

                  <p className="text-xs font-semibold text-red-400 font-sans uppercase tracking-wider mb-4">
                    Focus: {TRANSFORMATIONS[activeTab].focus}
                  </p>

                  <p className="font-sans text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                    "{TRANSFORMATIONS[activeTab].note}"
                  </p>

                  <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-400 space-y-1.5 font-sans">
                    <div className="flex items-center gap-2 text-neutral-200 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Individualized Coaching Framework</span>
                    </div>
                    <p className="text-neutral-400">
                      Tailored progressive resistance protocols, metabolic conditioning, and structured recovery guidance.
                    </p>
                  </div>
                </div>

                <button
                  onClick={onOpenEnquiry}
                  className="w-full py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-display text-base font-bold tracking-wider uppercase transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
                >
                  <span>START YOUR OWN TRANSFORMATION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Required Placeholder & Authenticity Disclaimer */}
        <div className="mt-10 p-5 rounded-2xl bg-neutral-950/60 border border-neutral-800/80 max-w-3xl mx-auto text-center font-sans">
          <p className="text-xs text-neutral-400 leading-relaxed">
            <strong className="text-neutral-300">Client Transformation Gallery Archive:</strong> This section features illustrative milestone placeholders designed to display verified member progress. Real client transformation archives are showcased directly in-center at Solid Health &amp; Fitness Porur and on our official Instagram. Individual results naturally depend on personal adherence, training consistency, and nutrition.
          </p>
        </div>
      </div>
    </section>
  );
};
