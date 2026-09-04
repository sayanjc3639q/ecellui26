export type EventType = 'hackathon' | 'workshop' | 'seminar';

export interface EventDetail {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  type: EventType;
  categoryBadge: string;
  badgeBg: string;
  bannerImage: string;
  date: string;
  time: string;
  venue: string;
  entryFee: string;
  prizePool?: string;
  teamSize?: {
    min: number;
    max: number;
  };
  overview: string;
  agenda: {
    time: string;
    activity: string;
    speakerOrHost?: string;
  }[];
  rules: string[];
  eligibility: string[];
  perks: string[];
  speakersOrJudges?: {
    name: string;
    role: string;
    organization: string;
    image: string;
  }[];
}

export const eventsData: Record<string, EventDetail> = {
  'e-summit-2024': {
    id: '1',
    slug: 'e-summit-2024',
    title: 'E-Summit 2024: Flagship Entrepreneurial Conclave',
    tagline: 'Where Ideas Meet Investment • 2 Days of High-Voltage Innovation',
    type: 'seminar',
    categoryBadge: 'Flagship Summit',
    badgeBg: 'bg-[#0052cc] text-white',
    bannerImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
    date: 'October 15 - 16, 2024',
    time: '09:30 AM - 06:00 PM IST',
    venue: 'Main Auditorium, Haldia Institute of Technology',
    entryFee: 'Free (Registration Required)',
    prizePool: '₹2,50,000 in Grants & Perks',
    overview:
      'E-Summit 2024 is the annual flagship entrepreneurial conclave hosted by E-Cell HIT Haldia. The summit convenes visionary founders, angel investors, venture capitalists, and eager student innovators across India for keynote talks, panel discussions, and founder networking arenas.',
    agenda: [
      { time: '09:30 AM - 10:30 AM', activity: 'Inaugural Keynote & Lighting of the Lamp', speakerOrHost: 'Director & Guests of Honor' },
      { time: '11:00 AM - 01:00 PM', activity: 'Panel Discussion: Scaling from 0 to 1 in Eastern India', speakerOrHost: 'VC Partners & Series-A Founders' },
      { time: '02:00 PM - 04:00 PM', activity: 'Live Pitching Arena & Angel Showcase', speakerOrHost: 'Top 10 Shortlisted Teams' },
      { time: '04:30 PM - 06:00 PM', activity: 'Networking Mixer & Award Ceremony', speakerOrHost: 'E-Cell HIT Organizing Team' },
    ],
    rules: [
      'Attendees must carry a valid College/Institution ID card alongside the issued digital pass.',
      'Auditorium seating is allocated on a first-come, first-served basis.',
      'Laptops and notebooks are permitted for workshop breakout segments.',
      'Adherence to campus code of conduct and decorum is strictly required.',
    ],
    eligibility: [
      'Open to all undergraduate and postgraduate students from recognized colleges/universities.',
      'Early-stage startup founders, researchers, and aspiring innovators.',
    ],
    perks: [
      'Official Certificate of Participation accredited by E-Cell HIT Haldia.',
      'Exclusive networking opportunities with angel investors and industry leaders.',
      'Complimentary delegate kit, refreshments, and lunch on both days.',
    ],
    speakersOrJudges: [
      {
        name: 'Kunal Shah',
        role: 'Founder',
        organization: 'CredX Capital',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
      },
      {
        name: 'Pooja Agarwal',
        role: 'Partner',
        organization: 'Bengal Angels Fund',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
      },
    ],
  },
  'lean-startup-workshop': {
    id: '2',
    slug: 'lean-startup-workshop',
    title: 'Lean Startup: Zero to MVP Workshop',
    tagline: 'Master Customer Discovery, Validation & Rapid Prototyping in 4 Hours',
    type: 'workshop',
    categoryBadge: 'Interactive Workshop',
    badgeBg: 'bg-[#FFD166] text-slate-950',
    bannerImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
    date: 'November 02, 2024',
    time: '02:00 PM - 06:30 PM IST',
    venue: 'Smart Seminar Hall, Room 304, HIT Campus',
    entryFee: 'Free (Limited to 80 Seats)',
    overview:
      'A hands-on interactive masterclass for students looking to transform concepts into minimum viable products (MVPs). Participants will learn the Lean Canvas framework, customer discovery interviewing, no-code prototyping tools, and unit economics validation.',
    agenda: [
      { time: '02:00 PM - 03:00 PM', activity: 'Framework: The Lean Canvas & Problem Validation', speakerOrHost: 'Product Mentor' },
      { time: '03:15 PM - 04:30 PM', activity: 'Hands-on Sprint: Building a clickable MVP using No-Code', speakerOrHost: 'Tech Facilitators' },
      { time: '04:45 PM - 05:45 PM', activity: 'Peer Testing & Customer Feedback Simulation', speakerOrHost: 'All Attendees' },
      { time: '05:45 PM - 06:30 PM', activity: 'Q&A & Mentor Evaluation', speakerOrHost: 'E-Cell Mentors' },
    ],
    rules: [
      'Participants must bring a laptop with WiFi capability.',
      'Prerequisite: Come prepared with at least 1 raw startup idea or problem statement.',
      'Active participation in the hands-on sprints is mandatory for certificate eligibility.',
    ],
    eligibility: [
      'Students across all branches (Engineering, MBA, MCA, Biotech).',
      'No prior coding or business experience required.',
    ],
    perks: [
      'Hands-on Lean Canvas workbook and no-code toolkits worth ₹15,000.',
      'Direct fast-track entry into the upcoming E-Cell Hackathon.',
      'Verified Certificate of Completion.',
    ],
  },
  'innovation-challenge': {
    id: '3',
    slug: 'innovation-challenge',
    title: 'HIT Grand Hackathon: Innovation Challenge 2024',
    tagline: '48-Hour National Hackathon • Code, Pitch & Build Real-World Solutions',
    type: 'hackathon',
    categoryBadge: '48H Hackathon',
    badgeBg: 'bg-[#e11d48] text-white',
    bannerImage: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop',
    date: 'December 10 - 12, 2024',
    time: 'Starts 10:00 AM (48 Hours Non-Stop)',
    venue: 'Central Computing Lab & Innovation Arena, HIT Campus',
    entryFee: 'Free',
    prizePool: '₹1,50,000 Cash Prize + Incubation Grant',
    teamSize: {
      min: 2,
      max: 4,
    },
    overview:
      'The biggest 48-hour build sprint at HIT Haldia. Hackers, designers, and innovators assemble in teams of 2 to 4 to engineer working solutions across 4 specialized tracks: AI & Healthcare, CleanTech & Sustainability, Web3 & FinTech, and Smart Campus & Logistics. Pitch directly to VC judges and incubators.',
    agenda: [
      { time: 'Day 1 - 10:00 AM', activity: 'Opening Ceremony, Problem Statements Release & Hacking Begins' },
      { time: 'Day 1 - 08:00 PM', activity: 'Round 1 Mentorship & Architecture Checkpoint' },
      { time: 'Day 2 - 02:00 PM', activity: 'Mid-Way Evaluation & Code Freeze Warning' },
      { time: 'Day 3 - 10:00 AM', activity: 'Final Submissions & Live Demo to Grand Jury' },
      { time: 'Day 3 - 03:00 PM', activity: 'Winners Announcement & Grand Prize Distribution' },
    ],
    rules: [
      'Teams must consist of 2 to 4 registered members.',
      'All code and design assets must be developed during the 48-hour hackathon duration.',
      'Use of open-source libraries and APIs is permitted; pre-built full applications will lead to immediate disqualification.',
      'Each team must push their code to a public GitHub repository with active commit history.',
      'Every team member must complete individual identity registration prior to joining or creating a team.',
    ],
    eligibility: [
      'Open to all college students (Undergraduate/Postgraduate) nationwide.',
      'Inter-college and cross-department teams are fully permitted.',
    ],
    perks: [
      '₹1,50,000 Cash Prize Pool for Top 3 Teams + Best All-Girls Team award.',
      'Incubation support & ₹10,00,000 Seed Grant pipeline via E-Cell HIT Haldia.',
      '24/7 high-speed WiFi, food, snacks, caffeine drinks, and hacker swag.',
      'Direct interview fast-track with sponsoring tech companies.',
    ],
  },
};
