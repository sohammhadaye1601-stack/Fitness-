import React from 'react';
import { Target, Award, Dumbbell, Users, Check } from 'lucide-react';
import { FEATURES } from '../data/gymData';

export const WhySolidSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Target':
        return <Target className="w-7 h-7 text-red-500" />;
      case 'Award':
        return <Award className="w-7 h-7 text-red-500" />;
      case 'Dumbbell':
        return <Dumbbell className="w-7 h-7 text-red-500" />;
      case 'Users':
        return <Users className="w-7 h-7 text-red-500" />;
      default:
        return <Dumbbell className="w-7 h-7 text-red-500" />;
    }
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0a0a0c] relative overflow-hidden border-t border-neutral-900">
      {/* Subtle background red accent glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-bold tracking-widest uppercase mb-4">
            <span>THE SOLID DIFFERENCE</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none mb-6">
            MORE THAN A GYM.
          </h2>

          <p className="font-sans text-neutral-300 text-base sm:text-lg leading-relaxed">
            Solid Health &amp; Fitness provides personalized training, professional guidance, modern workout facilities, and a supportive fitness environment designed to turn effort into lifelong strength and vitality right here in Porur.
          </p>
        </div>

        {/* 4 Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              className="group relative p-7 sm:p-8 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-red-600/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl hover:shadow-red-950/20"
            >
              {/* Subtle top red glow bar on hover */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-red-500 group-hover:to-transparent transition-all duration-300" />

              <div>
                {/* Feature Icon & Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-red-500/40 group-hover:bg-red-950/20 transition-colors">
                    {getIcon(feature.iconName)}
                  </div>
                  <span className="font-display font-bold text-neutral-600 text-2xl group-hover:text-neutral-400 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Feature Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-wide mb-3 group-hover:text-red-400 transition-colors">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="font-sans text-neutral-400 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>

              {/* Feature Highlight Pill */}
              <div className="pt-4 border-t border-neutral-900 flex items-center gap-2">
                <Check className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span className="text-xs font-semibold text-neutral-300 tracking-wide uppercase font-sans">
                  {feature.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
