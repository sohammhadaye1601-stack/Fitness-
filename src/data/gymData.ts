import { Program, Feature, StatItem, Transformation, GalleryItem, FitnessTip } from '../types';

export const BRAND_INFO = {
  name: 'Solid Health & Fitness Porur',
  shortName: 'SOLID',
  subtitle: 'Gym & Wellness Center',
  city: 'Porur, Chennai, Tamil Nadu',
  fullAddress: 'No. 24, Mount Poonamallee High Road, Opposite DLF Cybercity / Porur Junction, Porur, Chennai, Tamil Nadu 600116',
  phone: '+91 93635 43022',
  phoneRaw: '+919363543022',
  whatsapp: '+91 93635 43022',
  whatsappNumber: '919363543022',
  instagramHandle: '@solidhealthandfitnessporur',
  instagramUrl: 'https://www.instagram.com/solidhealthandfitnessporur/',
  instagramFollowers: '1,440+',
  instagramPosts: '611+',
  tagline: 'Personalized training & exclusive fitness insights 💪',
  trustBadge: 'Top-rated & largest gym in Porur',
  footerMotto: 'Train. Transform. Thrive.',
  hours: {
    weekdays: '5:30 AM – 10:00 PM',
    saturday: '5:30 AM – 10:00 PM',
    sunday: '6:00 AM – 1:00 PM',
  },
};

export const getWhatsAppUrl = (customText?: string) => {
  const defaultText = `Hi Solid Health & Fitness Porur! I saw your website and would like to enquire about gym membership and personalized training.`;
  const text = encodeURIComponent(customText || defaultText);
  return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${text}`;
};

export const FEATURES: Feature[] = [
  {
    id: 'personalized-training',
    title: 'Personalized Training',
    description: 'Customized guidance based on individual goals, fitness levels, and biometric assessments.',
    iconName: 'Target',
    highlight: 'Goal-driven routines',
  },
  {
    id: 'expert-guidance',
    title: 'Expert Guidance',
    description: 'Professional certified support to help members master correct biomechanics and prevent injury.',
    iconName: 'Award',
    highlight: 'Technique & form focus',
  },
  {
    id: 'complete-fitness',
    title: 'Complete Fitness Experience',
    description: 'Heavy strength, conditioning, recovery, wellness and functional gear under one spacious roof.',
    iconName: 'Dumbbell',
    highlight: 'Comprehensive facility',
  },
  {
    id: 'supportive-community',
    title: 'Supportive Community',
    description: 'A motivating, high-energy environment designed to keep members consistent day after day.',
    iconName: 'Users',
    highlight: 'Daily accountability',
  },
];

export const PROGRAMS: Program[] = [
  {
    id: 'strength-training',
    title: 'STRENGTH TRAINING',
    tagline: 'Hypertrophy, power & progressive overload',
    description: 'Build strength, muscle and overall physical performance with our Olympic barbells, power racks, and precision plate-loaded equipment.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=900&auto=format&fit=crop',
    focus: ['Progressive Overload', 'Olympic Barbells', 'Muscle Hypertrophy', 'Core Density'],
    level: 'All Experience Levels',
  },
  {
    id: 'personal-training',
    title: 'PERSONAL TRAINING',
    tagline: 'Dedicated 1-on-1 coaching & accountability',
    description: 'One-to-one guidance tailored to your specific physical milestones, lifestyle schedule, and progressive strength metrics.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=900&auto=format&fit=crop',
    focus: ['1-on-1 Mentorship', 'Nutritional Direction', 'Injury Prevention', 'Milestone Tracking'],
    level: 'Custom 1:1',
  },
  {
    id: 'weight-management',
    title: 'WEIGHT MANAGEMENT',
    tagline: 'Sustainable fat loss & lean definition',
    description: 'Structured workouts and fitness guidance for sustainable progress, combining metabolic conditioning, resistance training, and daily habit coaching.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=900&auto=format&fit=crop',
    focus: ['Metabolic Conditioning', 'Body Recomposition', 'Caloric Guidance', 'Cardio Intervals'],
    level: 'Beginner to Advanced',
  },
  {
    id: 'functional-fitness',
    title: 'FUNCTIONAL FITNESS',
    tagline: 'Mobility, agility & real-world athletic stamina',
    description: 'Improve mobility, conditioning, strength and everyday performance using kettlebells, battle ropes, plyometrics, and agility turf routines.',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=900&auto=format&fit=crop',
    focus: ['Kettlebells & Ropes', 'Dynamic Athleticism', 'Core & Stability', 'Full-Body Endurance'],
    level: 'All Levels',
  },
  {
    id: 'yoga-wellness',
    title: 'YOGA & WELLNESS',
    tagline: 'Mind-body balance, recovery & flexibility',
    description: 'Improve flexibility, balance, recovery and overall wellness with guided mobility flows, breathing control, and restorative stretching routines.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=900&auto=format&fit=crop',
    focus: ['Flexibility & Posture', 'Joint Mobility', 'Active Recovery', 'Breathwork & Calm'],
    level: 'All Levels',
  },
];

export const STATS: StatItem[] = [
  {
    value: '1,400+',
    label: 'FITNESS COMMUNITY',
    detail: 'Active members training consistently in Porur',
  },
  {
    value: '600+',
    label: 'POSTS & FITNESS CONTENT',
    detail: 'Daily fitness insights, form breakdowns & community highlights',
  },
  {
    value: 'PERSONALIZED',
    label: 'TRAINING',
    detail: 'Every workout adapted to individual physical milestones',
  },
  {
    value: 'PORUR\'S',
    label: 'FITNESS DESTINATION',
    detail: 'The largest and most complete gym & wellness facility in the area',
  },
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: 't-1',
    clientInitials: 'M. S.',
    goal: 'Muscle Hypertrophy & Power',
    timeframe: '16 Weeks Program',
    focus: 'Barbell Strength & Progressive Overload',
    beforeImg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop',
    note: 'Built lean functional muscle while improving deadlift and bench press benchmarks under direct coach supervision.',
  },
  {
    id: 't-2',
    clientInitials: 'P. K.',
    goal: 'Fat Loss & Metabolic Conditioning',
    timeframe: '12 Weeks Program',
    focus: 'Functional Conditioning & Caloric Deficit',
    beforeImg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
    note: 'Shed excess body fat while increasing daily stamina and cardiovascular endurance on the gym floor.',
  },
  {
    id: 't-3',
    clientInitials: 'A. R.',
    goal: 'Athletic Strength & Core Mobility',
    timeframe: '20 Weeks Program',
    focus: 'Personal Training & Joint Mobility',
    beforeImg: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop',
    note: 'Rebuilt posture, improved shoulder and hip mobility, and sustained heavy lifts injury-free.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Heavy Strength & Free Weights Zone',
    category: 'strength',
    categoryLabel: 'Strength Training',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
    description: 'Precision dumbbells, power racks, and Olympic platforms for progressive overload.',
  },
  {
    id: 'g-2',
    title: '1-on-1 Trainer Guidance & Form Correction',
    category: 'strength',
    categoryLabel: 'Trainers & Guidance',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop',
    description: 'Hands-on biomechanical feedback to ensure every rep is safe and effective.',
  },
  {
    id: 'g-3',
    title: 'High-Performance Cardio Deck',
    category: 'cardio',
    categoryLabel: 'Cardio',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1200&auto=format&fit=crop',
    description: 'Commercial treadmills, stairmasters, and cross-trainers for stamina and heart health.',
  },
  {
    id: 'g-4',
    title: 'High-Energy Group Training Floor',
    category: 'functional',
    categoryLabel: 'Group Training',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    description: 'Team workouts, battle ropes, and functional conditioning circuits.',
  },
  {
    id: 'g-5',
    title: 'Mindful Yoga & Recovery Sanctuary',
    category: 'yoga',
    categoryLabel: 'Yoga & Recovery',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
    description: 'Dedicated quiet studio for flexibility, mobility flows, and post-workout decompression.',
  },
  {
    id: 'g-6',
    title: 'Spacious & Modern Gym Floor',
    category: 'interior',
    categoryLabel: 'Gym Interiors',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
    description: 'Clean, climate-controlled, premium dark aesthetic with ample space between stations.',
  },
];

export const FITNESS_TIPS: FitnessTip[] = [
  {
    id: 'tip-1',
    title: '5 Mistakes Beginners Make in the Gym',
    category: 'Form & Strategy',
    readTime: '3 min read',
    summary: 'Avoid ego lifting, skipping warm-ups, and erratic routines that stall your physical gains before you even begin.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    content: [
      '1. Lifting Too Heavy Too Fast: Chasing heavy weights before mastering biomechanics leads to joint strain and poor muscle recruitment.',
      '2. Inconsistent Training Frequency: Jumping between 5 days one week and 1 day the next destroys neuromuscular adaptation. 3 consistent days always beats sporadic bursts.',
      '3. Neglecting Warm-Up & Dynamic Mobility: Cold tendons are stiff tendons. 5–7 minutes of dynamic hip and shoulder openers reduces injury risks drastically.',
      '4. Copying Advanced Influencer Routines: Complex supersets are unnecessary for newcomers. Master compound fundamentals: squat, hinge, push, pull.',
      '5. Ignoring Sleep & Protein: Muscles break down on the gym floor; they rebuild during restful sleep with adequate amino acid intake.',
    ],
    takeaways: [
      'Master the basic movement patterns first',
      'Track your weights in a logbook',
      'Treat warm-ups as mandatory training time',
    ],
  },
  {
    id: 'tip-2',
    title: 'How to Stay Consistent With Training',
    category: 'Mindset & Habits',
    readTime: '4 min read',
    summary: 'Discipline outperforms motivation every single time. Learn how Porur\'s most consistent members build automatic gym habits.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    content: [
      '1. Anchor to a Fixed Time Window: Decide whether you are a 6:00 AM lifter or a 6:30 PM post-work warrior. Consistency of timing primes your nervous system.',
      '2. Reduce Friction the Night Before: Pack your gym bag, water bottle, and gym footwear the previous evening so morning excuses disappear.',
      '3. Focus on Showing Up, Not Perfection: On low-energy days, commit to walking through the gym doors for just 20 minutes. 90% of the battle is physical arrival.',
      '4. Community Accountability: Training alongside like-minded members at Solid keeps you engaged and accountable.',
    ],
    takeaways: [
      'Schedule gym sessions as non-negotiable meetings',
      'Aim for frequency first, intensity second',
      'Celebrate weekly adherence streaks',
    ],
  },
  {
    id: 'tip-3',
    title: 'Strength Training Basics',
    category: 'Lifting Fundamentals',
    readTime: '3 min read',
    summary: 'Understanding progressive overload, compound movements, and rep ranges for optimal strength and muscle density.',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop',
    content: [
      '1. The Golden Law of Progressive Overload: To build stronger muscle tissue, you must gradually increase tension over time—adding 1 kg, an extra rep, or better tempo control.',
      '2. Prioritize Big Compound Lifts: Squats, deadlifts, presses, and rows recruit multiple muscle groups, stimulating higher metabolic response.',
      '3. Understanding Rep Brackets: 3–6 reps for maximal strength output, 8–12 reps for hypertrophy (muscle size), 15+ for local muscular endurance.',
      '4. Rest Periods Matter: Allow 2–3 minutes of rest between heavy sets so your ATP stores replenish and your next set maintains peak intensity.',
    ],
    takeaways: [
      'Form precedes load without exception',
      'Record your sets and reps every session',
      'Prioritize compound multi-joint movements',
    ],
  },
  {
    id: 'tip-4',
    title: 'Recovery Matters More Than You Think',
    category: 'Recovery & Nutrition',
    readTime: '4 min read',
    summary: 'Why true growth happens outside the gym walls. Discover the science of active recovery, sleep, and hydration.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
    content: [
      '1. Deep Slow-Wave Sleep: Growth hormone secretion peaks during stage 3 and REM sleep. Aim for 7–8 hours of quality, dark-room sleep.',
      '2. Daily Hydration with Electrolytes: Dehydrated muscles lose up to 15% contractile power and are prone to painful cramping during heavy leg days.',
      '3. Active Rest Days: Instead of lying motionless, engage in 30 minutes of brisk walking, swimming, or our dedicated Yoga & Mobility classes.',
      '4. Post-Workout Nutrition Timing: Consume 25–35g of bioavailable protein within 2 hours post-session to trigger muscle protein synthesis.',
    ],
    takeaways: [
      'Never sacrifice sleep for an extra hour in the gym',
      'Incorporate structured foam rolling and stretching',
      'Maintain steady daily water intake (3–4 Liters)',
    ],
  },
];

export const FREQUENT_QUESTIONS = [
  {
    q: 'Where is Solid Health & Fitness located in Porur?',
    a: 'We are situated on Mount Poonamallee Road in Porur, Chennai, conveniently accessible from Porur Junction, DLF IT Park, and Ramapuram.',
  },
  {
    q: 'Do you provide certified personal trainers?',
    a: 'Yes, we offer dedicated one-on-one personal training with certified strength and conditioning coaches tailored to your individual goals and fitness levels.',
  },
  {
    q: 'How can I enquire about current membership plans and offers?',
    a: 'You can tap the WhatsApp button or Call +91 93635 43022 directly, or submit our online enquiry form. Our team will share current membership packages, flexible month options, and schedule a walk-through tour.',
  },
  {
    q: 'What are the gym operating timings?',
    a: 'We are open Monday through Saturday from 5:30 AM to 10:00 PM, and on Sundays from 6:00 AM to 1:00 PM to accommodate busy working professionals and morning athletes alike.',
  },
];
