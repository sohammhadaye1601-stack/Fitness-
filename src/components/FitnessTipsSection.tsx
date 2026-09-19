import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X, CheckCircle2, Instagram } from 'lucide-react';
import { FITNESS_TIPS, BRAND_INFO } from '../data/gymData';
import { FitnessTip } from '../types';

export const FitnessTipsSection: React.FC = () => {
  const [selectedTip, setSelectedTip] = useState<FitnessTip | null>(null);

  return (
    <section id="tips" className="py-20 sm:py-28 bg-[#09090b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-bold tracking-widest uppercase mb-4">
              <span>INSTAGRAM INSIGHTS &amp; GYM TIPS ✨</span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none mb-4">
              TRAIN SMARTER.
            </h2>

            <p className="font-sans text-neutral-300 text-base sm:text-lg">
              Curated fitness knowledge from our coaches. Practical guidelines, biomechanics, habit architecture, and recovery science to elevate your training.
            </p>
          </div>

          {/* Link to official Instagram highlight */}
          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 text-xs font-semibold tracking-wider font-sans transition-all hover:border-red-500/50"
          >
            <Instagram className="w-4 h-4 text-red-500" />
            <span>Follow {BRAND_INFO.instagramHandle}</span>
          </a>
        </div>

        {/* 4 Article Preview Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FITNESS_TIPS.map((tip) => (
            <div
              key={tip.id}
              className="group relative rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800/90 hover:border-red-600/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-red-950/20"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-[0.75]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />

                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-bold text-red-400 uppercase tracking-wider font-sans">
                  <span>{tip.category}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-sans mb-3">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{tip.readTime}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white uppercase tracking-wide mb-3 group-hover:text-red-400 transition-colors line-clamp-2 leading-tight">
                    {tip.title}
                  </h3>

                  <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {tip.summary}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedTip(tip)}
                  className="w-full py-2.5 px-3 rounded-lg bg-neutral-900 group-hover:bg-red-600 text-neutral-300 group-hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-neutral-800 group-hover:border-red-600 font-display"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>READ FULL GUIDE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guide Reading Modal */}
      {selectedTip && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedTip(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#111114] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden flex-shrink-0">
              <img
                src={selectedTip.image}
                alt={selectedTip.title}
                className="w-full h-full object-cover filter brightness-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-black/60" />

              <button
                onClick={() => setSelectedTip(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/80 hover:bg-red-600 text-white transition-colors"
                aria-label="Close guide"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest block font-sans mb-1">
                  {selectedTip.category} • {selectedTip.readTime}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  {selectedTip.title}
                </h3>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans">
              <p className="text-neutral-300 text-base leading-relaxed italic border-l-2 border-red-500 pl-4">
                "{selectedTip.summary}"
              </p>

              <div className="space-y-4">
                <h4 className="font-display font-bold text-xl text-white uppercase tracking-wider">
                  Coaching Breakdown:
                </h4>
                {selectedTip.content.map((paragraph, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 text-neutral-300 text-sm leading-relaxed">
                    {paragraph}
                  </div>
                ))}
              </div>

              {/* Key Takeaways Box */}
              <div className="p-5 rounded-2xl bg-red-950/20 border border-red-900/40">
                <h4 className="font-display font-bold text-lg text-red-400 uppercase tracking-wider mb-3">
                  Key Coach Takeaways:
                </h4>
                <div className="space-y-2">
                  {selectedTip.takeaways.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-neutral-200 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedTip(null)}
                  className="px-6 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-display text-sm font-bold tracking-wider uppercase border border-neutral-800"
                >
                  Close Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
