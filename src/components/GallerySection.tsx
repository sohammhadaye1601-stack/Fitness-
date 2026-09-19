import React, { useState } from 'react';
import { Maximize2, X, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filters = [
    { key: 'all', label: 'ALL FACILITY' },
    { key: 'strength', label: 'STRENGTH & WEIGHTS' },
    { key: 'cardio', label: 'CARDIO DECK' },
    { key: 'functional', label: 'GROUP & FUNCTIONAL' },
    { key: 'yoga', label: 'YOGA & RECOVERY' },
    { key: 'interior', label: 'GYM INTERIORS' },
  ];

  const filteredItems = selectedFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0a0a0c] relative overflow-hidden border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-bold tracking-widest uppercase mb-4 font-sans">
              <Eye className="w-3.5 h-3.5 text-red-500" />
              <span>THE FACILITY</span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none mb-4">
              GYM EXPERIENCE.
            </h2>

            <p className="font-sans text-neutral-300 text-base sm:text-lg">
              Explore the training environment: heavy iron racks, precision selectorized machinery, high-energy turf, and dedicated recovery spaces.
            </p>
          </div>

          <div className="flex items-center gap-2 text-neutral-400 text-xs sm:text-sm font-sans">
            <span className="font-bold text-white">Porur's Largest Gym Floor</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setSelectedFilter(filter.key)}
              className={`px-4 py-2 rounded-xl font-display text-xs sm:text-sm font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
                selectedFilter === filter.key
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Editorial-Style Image Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800/90 hover:border-red-600/60 cursor-pointer transition-all duration-300 shadow-xl hover:shadow-red-950/20"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[0.8] contrast-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md bg-black/75 backdrop-blur-md border border-neutral-700 text-[11px] font-bold text-neutral-200 uppercase tracking-wider font-sans">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Inspect Overlay Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-neutral-700 flex items-center justify-center text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Caption details */}
              <div className="p-5 sm:p-6">
                <h3 className="font-display font-extrabold text-xl text-white uppercase tracking-wide mb-2 group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High-Resolution Modal Lightbox */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/80 hover:bg-red-600 text-white transition-colors"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[75vh] w-full overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-neutral-950 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest block font-sans mb-1">
                  {activeModalItem.categoryLabel}
                </span>
                <h4 className="font-display font-bold text-2xl text-white uppercase">
                  {activeModalItem.title}
                </h4>
                <p className="font-sans text-neutral-400 text-sm mt-1">
                  {activeModalItem.description}
                </p>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold tracking-wider uppercase border border-neutral-800 self-start sm:self-auto font-display"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
