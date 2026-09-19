import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Navigation, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { BRAND_INFO, getWhatsAppUrl, PROGRAMS } from '../data/gymData';
import { EnquiryFormData } from '../types';

interface LocationContactSectionProps {
  prefilledProgram?: string;
}

export const LocationContactSection: React.FC<LocationContactSectionProps> = ({ prefilledProgram = '' }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    fitnessGoal: 'Muscle Gain / Hypertrophy',
    preferredTraining: prefilledProgram || 'Personal Training',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Update preferredTraining when prefilledProgram changes
  React.useEffect(() => {
    if (prefilledProgram) {
      setFormData((prev) => ({ ...prev, preferredTraining: prefilledProgram }));
    }
  }, [prefilledProgram]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate swift local validation and confirmation
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      fitnessGoal: 'Muscle Gain / Hypertrophy',
      preferredTraining: 'Personal Training',
      message: '',
    });
  };

  const whatsappMessageForSubmission = `Hello Solid Health & Fitness Porur! My name is ${formData.name}. Phone: ${formData.phone}. My Goal: ${formData.fitnessGoal}. Preferred Training: ${formData.preferredTraining}.${formData.message ? ` Note: ${formData.message}` : ''}`;

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#09090b] relative overflow-hidden">
      {/* Background Red Accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-bold tracking-widest uppercase mb-4">
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            <span>VISIT &amp; CONNECT</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none mb-4">
            FIND SOLID.
          </h2>

          <p className="font-sans text-neutral-300 text-base sm:text-lg">
            Located in the heart of Porur, Chennai. Drop by for a facility walk-through, meet our strength coaches, or enquire online for instant details.
          </p>
        </div>

        {/* Two-Column Grid: Contact/Map on Left, Enquiry Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Location Info, Direct Action Buttons, Google Map */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quick Contact & Address Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-neutral-950 border border-neutral-800/90 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest block font-sans mb-1">
                  OFFICIAL LOCATION
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wide">
                  Solid Health &amp; Fitness Porur
                </h3>
                <p className="font-sans text-neutral-300 text-sm mt-1.5 leading-relaxed">
                  Porur, Chennai, Tamil Nadu
                </p>
              </div>

              {/* Action Buttons: CALL NOW, WHATSAPP, GET DIRECTIONS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {/* CALL NOW */}
                <a
                  href={`tel:${BRAND_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-red-500 font-display text-sm font-bold tracking-wider uppercase transition-colors"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>CALL NOW</span>
                </a>

                {/* WHATSAPP */}
                <a
                  href={getWhatsAppUrl('Hi Solid Health & Fitness Porur! I would like to enquire about membership options and visit timings.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-950/60 hover:bg-emerald-900 text-emerald-300 border border-emerald-800 font-display text-sm font-bold tracking-wider uppercase transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WHATSAPP</span>
                </a>

                {/* GET DIRECTIONS */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Solid+Health+Fitness+Porur+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-display text-sm font-bold tracking-wider uppercase transition-all shadow-md shadow-red-600/30"
                >
                  <Navigation className="w-4 h-4" />
                  <span>DIRECTIONS</span>
                </a>
              </div>

              {/* Operating Hours */}
              <div className="pt-4 border-t border-neutral-900 space-y-2 text-xs sm:text-sm font-sans">
                <div className="flex items-center gap-2 text-neutral-200 font-semibold mb-2">
                  <Clock className="w-4 h-4 text-red-500" />
                  <span>Gym Working Hours</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Monday – Saturday:</span>
                  <span className="font-medium text-white">{BRAND_INFO.hours.weekdays}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Sunday:</span>
                  <span className="font-medium text-white">{BRAND_INFO.hours.sunday}</span>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps Box */}
            <div className="rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-xl relative aspect-[16/10]">
              <iframe
                title="Solid Health & Fitness Porur Location Map"
                src="https://maps.google.com/maps?q=Porur,+Chennai,+Tamil+Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/90 backdrop-blur-md border border-neutral-800 flex items-center justify-between text-xs font-sans">
                <div className="flex items-center gap-2 text-neutral-200">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span className="truncate">Porur, Chennai, Tamil Nadu</span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Solid+Health+Fitness+Porur+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 font-bold uppercase whitespace-nowrap ml-2"
                >
                  Open Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Required ENQUIRY FORM */}
          <div className="lg:col-span-6">
            <div className="p-7 sm:p-10 rounded-3xl bg-[#111114] border border-neutral-800 shadow-2xl relative">
              {/* Subtle Red border top accent */}
              <div className="absolute top-0 left-10 right-10 h-1 bg-red-600 rounded-t-3xl" />

              {!submitted ? (
                <div>
                  <div className="mb-8">
                    <span className="text-xs font-bold text-red-500 uppercase tracking-widest block font-sans mb-1">
                      NO COMMITMENT REQUIRED
                    </span>
                    <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                      START YOUR FITNESS JOURNEY
                    </h3>
                    <p className="font-sans text-neutral-400 text-sm mt-2">
                      Fill out the form below to receive membership details, tour availability, and customized training options.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                    {/* Name */}
                    <div>
                      <label htmlFor="enquiry-name" className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="enquiry-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sundaram"
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-red-500 text-sm transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="enquiry-phone" className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                        Phone Number (WhatsApp Preferred) <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="enquiry-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-red-500 text-sm transition-colors"
                      />
                    </div>

                    {/* Fitness Goal */}
                    <div>
                      <label htmlFor="enquiry-goal" className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                        Primary Fitness Goal
                      </label>
                      <select
                        id="enquiry-goal"
                        value={formData.fitnessGoal}
                        onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-red-500 text-sm transition-colors"
                      >
                        <option value="Muscle Gain / Hypertrophy">Muscle Gain / Hypertrophy</option>
                        <option value="Weight Loss & Lean Definition">Weight Loss &amp; Lean Definition</option>
                        <option value="Athletic Strength & Power">Athletic Strength &amp; Power</option>
                        <option value="General Health, Stamina & Fitness">General Health, Stamina &amp; Fitness</option>
                        <option value="Mobility, Flexibility & Posture">Mobility, Flexibility &amp; Posture</option>
                      </select>
                    </div>

                    {/* Preferred Training */}
                    <div>
                      <label htmlFor="enquiry-training" className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                        Preferred Training Category
                      </label>
                      <select
                        id="enquiry-training"
                        value={formData.preferredTraining}
                        onChange={(e) => setFormData({ ...formData, preferredTraining: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-red-500 text-sm transition-colors"
                      >
                        {PROGRAMS.map((prog) => (
                          <option key={prog.id} value={prog.title}>
                            {prog.title}
                          </option>
                        ))}
                        <option value="General Gym Access">General Gym Access / Self-Guided</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="enquiry-message" className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                        Message / Timing Preference (Optional)
                      </label>
                      <textarea
                        id="enquiry-message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="e.g. Interested in morning slots (6 AM - 8 AM) or 1-on-1 personal trainer guidance..."
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-red-500 text-sm transition-colors resize-none"
                      />
                    </div>

                    {/* Button: GET STARTED */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-display text-lg font-bold tracking-wider uppercase transition-all shadow-xl shadow-red-600/30 hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {submitting ? (
                        <span>PROCESSING...</span>
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
                /* Clear Confirmation Message */
                <div className="py-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div>
                    <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mb-2">
                      ENQUIRY RECEIVED!
                    </h3>
                    <p className="font-sans text-neutral-300 text-base max-w-md mx-auto">
                      Thank you, <span className="text-white font-bold">{formData.name}</span>. Our fitness team at Solid Health &amp; Fitness Porur has received your request for <span className="text-red-400 font-semibold">{formData.preferredTraining}</span>.
                    </p>
                    <p className="font-sans text-neutral-400 text-xs mt-3">
                      We will reach out to you on <span className="text-white">{formData.phone}</span> shortly.
                    </p>
                  </div>

                  {/* Immediate WhatsApp Forwarding Option */}
                  <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 max-w-md mx-auto space-y-3">
                    <p className="text-xs text-neutral-300 font-medium">
                      Want an instant reply right now?
                    </p>
                    <a
                      href={getWhatsAppUrl(whatsappMessageForSubmission)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display text-sm font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>CHAT ON WHATSAPP IMMEDIATELY</span>
                    </a>
                  </div>

                  <div>
                    <button
                      onClick={handleReset}
                      className="text-xs text-neutral-500 hover:text-neutral-300 underline font-sans"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
