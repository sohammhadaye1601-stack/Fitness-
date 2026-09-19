import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import { PROGRAMS, BRAND_INFO, getWhatsAppUrl } from '../data/gymData';
import { EnquiryFormData } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillProgram?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  prefillProgram = '',
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    fitnessGoal: 'Muscle Gain / Hypertrophy',
    preferredTraining: prefillProgram || 'Personal Training',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefillProgram) {
      setFormData((prev) => ({ ...prev, preferredTraining: prefillProgram }));
    }
  }, [prefillProgram]);

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const whatsappText = `Hi Solid Health & Fitness Porur! I am ${formData.name}. Phone: ${formData.phone}. Goal: ${formData.fitnessGoal}. Program: ${formData.preferredTraining}.${formData.message ? ` Message: ${formData.message}` : ''}`;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-[#111114] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Accent */}
        <div className="absolute top-0 left-8 right-8 h-1 bg-red-600 rounded-t-3xl" />

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-950/50 border border-red-800/40 text-red-400 text-[11px] font-bold tracking-widest uppercase mb-2 font-sans">
                <Sparkles className="w-3 h-3 text-red-500" />
                <span>SOLID HEALTH &amp; FITNESS PORUR</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                START YOUR FITNESS JOURNEY
              </h3>
              <p className="font-sans text-neutral-400 text-xs sm:text-sm mt-1">
                Receive personalized membership plans, schedule a free in-person tour, or consult our trainers.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Anand Kumar"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-red-500 text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +91 93635 43022"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-red-500 text-sm transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Primary Goal
                  </label>
                  <select
                    value={formData.fitnessGoal}
                    onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs focus:outline-none focus:border-red-500"
                  >
                    <option value="Muscle Gain / Hypertrophy">Muscle Hypertrophy</option>
                    <option value="Fat Loss & Definition">Fat Loss &amp; Definition</option>
                    <option value="Strength & Power">Strength &amp; Power</option>
                    <option value="General Health">General Health</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Program Focus
                  </label>
                  <select
                    value={formData.preferredTraining}
                    onChange={(e) => setFormData({ ...formData, preferredTraining: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs focus:outline-none focus:border-red-500"
                  >
                    {PROGRAMS.map((prog) => (
                      <option key={prog.id} value={prog.title}>
                        {prog.title}
                      </option>
                    ))}
                    <option value="General Gym Access">General Access</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Message / Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Any timings preference, questions, or medical concerns..."
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-red-500 text-sm transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-display text-base font-bold tracking-wider uppercase transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                {isSubmitting ? (
                  <span>SUBMITTING...</span>
                ) : (
                  <>
                    <span>GET STARTED</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-5 animate-in fade-in zoom-in-95 duration-150">
            <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="font-display font-bold text-2xl text-white uppercase">
                THANK YOU, {formData.name.toUpperCase()}!
              </h3>
              <p className="font-sans text-neutral-300 text-sm mt-1">
                Your enquiry for <span className="text-red-400 font-semibold">{formData.preferredTraining}</span> has been noted. We will contact you at {formData.phone} shortly.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
              <p className="text-xs text-neutral-400">
                Want immediate assistance right now?
              </p>
              <a
                href={getWhatsAppUrl(whatsappText)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-display text-sm font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT ON WHATSAPP NOW</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-neutral-500 hover:text-neutral-300 underline font-sans"
            >
              Close this window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
