import React from 'react';
import { STATS } from '../data/gymData';

export const StatsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#09090b] via-neutral-950 to-[#0a0a0c] border-y border-neutral-800/80 relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2315_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2315_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-bold tracking-widest uppercase mb-3 font-sans">
            <span>PROVEN TRACK RECORD</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            WHY PEOPLE CHOOSE SOLID
          </h2>
        </div>

        {/* 4 Provided Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="relative p-7 sm:p-8 rounded-2xl bg-[#111114]/90 border border-neutral-800/80 text-center flex flex-col justify-between items-center hover:border-red-600/40 transition-all duration-300 group"
            >
              {/* Subtle top indicator bar */}
              <div className="w-12 h-1 bg-neutral-800 group-hover:bg-red-600 transition-colors rounded-full mb-6" />

              <div>
                {/* Big Number / Title */}
                <div className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none mb-3 group-hover:text-red-500 transition-colors">
                  {stat.value}
                </div>

                {/* Stat Label */}
                <div className="font-display font-bold text-lg sm:text-xl text-neutral-200 uppercase tracking-wider mb-3">
                  {stat.label}
                </div>

                {/* Detail */}
                <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-[240px] mx-auto">
                  {stat.detail}
                </p>
              </div>

              <div className="mt-6 text-[11px] font-mono text-neutral-600 uppercase tracking-widest">
                VERIFIED PORUR CENTER
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
