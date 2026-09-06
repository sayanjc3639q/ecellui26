'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Search, X, Users, Laptop, Megaphone, Handshake, Mail } from 'lucide-react';
import { BsLinkedin } from 'react-icons/bs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export type TeamCategory = 'CORE TEAM' | 'TECH TEAM' | 'MEDIA TEAM' | 'PR TEAM';
export type MemberStatus = 'ACTIVE' | 'ALUMNI';

export interface Member {
  id: string;
  name: string;
  role: string;
  team: TeamCategory;
  status: MemberStatus;
  badgeBg: string;
  description: string;
  image: string;
  colorOverlay?: string;
  linkedinUrl?: string;
  email?: string;
  department?: string;
  /** Sub-category within MEDIA TEAM: 'PHOTOGRAPHER' | 'CONTENT_WRITER' | 'GRAPHIC_DESIGNER' */
  subRole?: string;
  // Alumni specific fields
  batch?: string;
  currentRole?: string;
  company?: string;
}

const allMembers: Member[] = [
  // ===================== ACTIVE MEMBERS =====================
  // --- CORE TEAM ---
  {
    id: 'act-1',
    name: 'Rahul Verma',
    role: 'Chairperson',
    team: 'CORE TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#9a3412]',
    description: 'Leading strategic vision, institutional partnerships & ecosystem scale.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#eab308]/40 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'rahul.verma@ecellhit.in',
  },
  {
    id: 'act-2',
    name: 'Sneha Kapoor',
    role: 'Vice Chairperson',
    team: 'CORE TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#fef08a] text-[#854d0e]',
    description: 'Driving internal operations, high-impact leadership dynamics & culture.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#fbcfe8]/40 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'sneha.kapoor@ecellhit.in',
  },
  {
    id: 'act-3',
    name: 'Rohan Sen',
    role: 'Operations Lead',
    team: 'CORE TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ccfbf1] text-[#115e59]',
    description: 'Managing overall logistics, campus venue execution & strategic resource pipelines.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#14b8a6]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'rohan.sen@ecellhit.in',
    department: 'ME',
    batch: "Batch of '25",
  },
  {
    id: 'act-4',
    name: 'Ananya Roy',
    role: 'Sponsorship Lead',
    team: 'CORE TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ede9fe] text-[#5b21b6]',
    description: 'Securing venture partnerships, corporate grants & marquee summit sponsorships.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#8b5cf6]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'ananya.roy@ecellhit.in',
    department: 'IT',
    batch: "Batch of '25",
  },
  {
    id: 'act-4b',
    name: 'Debjit Mukherjee',
    role: 'Treasurer & Finance Lead',
    team: 'CORE TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#fef08a] text-[#854d0e]',
    description: 'Managing financial audits, budget allocations & treasury operations.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#eab308]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'debjit.m@ecellhit.in',
    department: 'EE',
    batch: "Batch of '25",
  },
  {
    id: 'act-4c',
    name: 'Rituparna Saha',
    role: 'Strategic Partnerships Lead',
    team: 'CORE TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ede9fe] text-[#5b21b6]',
    description: 'Cultivating corporate relations, incubator alliances & startup synergy.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#8b5cf6]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'rituparna.s@ecellhit.in',
    department: 'ECE',
    batch: "Batch of '25",
  },

  // --- TECH TEAM ---
  {
    id: 'act-5',
    name: 'Amit Kumar',
    role: 'Tech Lead',
    team: 'TECH TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#dbeafe] text-[#1e40af]',
    description: 'Building full-stack digital platforms, hackathon automation & infrastructure.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#3b82f6]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'amit.kumar@ecellhit.in',
    department: 'CSE',
    batch: "Batch of '24",
  },
  {
    id: 'act-6',
    name: 'Pooja Das',
    role: 'Full Stack Developer',
    team: 'TECH TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#dbeafe] text-[#1e40af]',
    description: 'Architecting scalable web applications, REST APIs & cloud microservices.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#0284c7]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'pooja.das@ecellhit.in',
    department: 'IT',
    batch: "Batch of '25",
  },
  {
    id: 'act-7',
    name: 'Arjun Mehta',
    role: 'Web & App Developer',
    team: 'TECH TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#dbeafe] text-[#1e40af]',
    description: 'Specializing in reactive user interfaces, performance optimization & tooling.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#0ea5e9]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'arjun.mehta@ecellhit.in',
    department: 'IT',
    batch: "Batch of '25",
  },
  {
    id: 'tech-4',
    name: 'Prince Sharma',
    role: 'Frontend Architect',
    team: 'TECH TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#dbeafe] text-[#1e40af]',
    description: 'Building responsive component libraries, web accessibility & performance.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#3b82f6]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'prince.sharma@ecellhit.in',
    department: 'EE',
    batch: "Batch of '24",
  },
  {
    id: 'tech-5',
    name: 'Sayan Maity',
    role: 'Backend & Cloud Engineer',
    team: 'TECH TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#dbeafe] text-[#1e40af]',
    description: 'Designing distributed databases, event architectures & secure microservices.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#0284c7]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'sayan.maity@ecellhit.in',
    department: 'EE',
    batch: "Batch of '25",
  },
  {
    id: 'tech-6',
    name: 'Samprity Bhattacharjee',
    role: 'Full Stack Systems Engineer',
    team: 'TECH TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#dbeafe] text-[#1e40af]',
    description: 'Developing high-throughput cloud workflows, serverless functions & CI/CD pipelines.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#0ea5e9]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'samprity.b@ecellhit.in',
    department: 'CSE',
    batch: "Batch of '25",
  },
  {
    id: 'tech-7',
    name: 'Abhishek Roy',
    role: 'Cloud Infrastructure Lead',
    team: 'TECH TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#dbeafe] text-[#1e40af]',
    description: 'Architecting containerized platforms, Kubernetes deployments & distributed clusters.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#3b82f6]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'abhishek.roy@ecellhit.in',
    department: 'CSE',
    batch: "Batch of '24",
  },
  {
    id: 'tech-8',
    name: 'Siddharth Das',
    role: 'DevOps & Reliability Engineer',
    team: 'TECH TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#dbeafe] text-[#1e40af]',
    description: 'Maintaining CI/CD pipelines, edge networking and high-traffic summit platforms.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#0284c7]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'siddharth.das@ecellhit.in',
    department: 'IT',
    batch: "Batch of '24",
  },
  {
    id: 'tech-9',
    name: 'Ritam Sen',
    role: 'Mobile & Flutter Engineer',
    team: 'TECH TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#dbeafe] text-[#1e40af]',
    description: 'Building native iOS and Android experiences for startup fests and registrations.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#0ea5e9]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'ritam.sen@ecellhit.in',
    department: 'ECE',
    batch: "Batch of '25",
  },
  {
    id: 'tech-10',
    name: 'Anwesha Ghosh',
    role: 'Security & API Architect',
    team: 'TECH TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#dbeafe] text-[#1e40af]',
    description: 'Securing student portals, payment gateways and authentication microservices.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#3b82f6]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'anwesha.ghosh@ecellhit.in',
    department: 'CSE',
    batch: "Batch of '25",
  },

  // --- MEDIA TEAM ---
  {
    id: 'act-8',
    name: 'Riya Sen',
    role: 'Design & Media Lead',
    team: 'MEDIA TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#fce7f3] text-[#9d174d]',
    description: 'Directing Memphis brand identity, creative storytelling & UI/UX experiences.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#ec4899]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'riya.sen@ecellhit.in',
    department: 'IT',
    batch: "Batch of '24",
  },
  {
    id: 'act-9',
    name: 'Sourav Ghosh',
    role: 'Graphics & Visual Designer',
    team: 'MEDIA TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#fce7f3] text-[#9d174d]',
    description: 'Crafting vibrant event creatives, neobrutalist posters & motion graphics.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#f43f5e]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'sourav.ghosh@ecellhit.in',
    department: 'CSE',
    batch: "Batch of '25",
  },
  {
    id: 'act-10',
    name: 'Kabir Roy',
    role: 'Video & Motion Producer',
    team: 'MEDIA TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#fce7f3] text-[#9d174d]',
    description: 'Producing aftermovies, podcast streams & cinematic startup teasers.',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#e11d48]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'kabir.roy@ecellhit.in',
    department: 'ECE',
    batch: "Batch of '25",
  },
  {
    id: 'act-10b',
    name: 'Isha Mukherjee',
    role: 'Creative Storyteller & UI/UX',
    team: 'MEDIA TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#fce7f3] text-[#9d174d]',
    description: 'Specializing in visual storytelling, brand merchandise and media campaigns.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#ec4899]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'isha.mukherjee@ecellhit.in',
    department: 'IT',
    batch: "Batch of '26",
  },

  // --- MEDIA TEAM: PHOTOGRAPHER ---
  {
    id: 'photo-1',
    name: 'Arnab Dutta',
    role: 'Photographer',
    subRole: 'PHOTOGRAPHER',
    team: 'MEDIA TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#fce7f3] text-[#9d174d]',
    description: 'Capturing candid founder moments, event highlights & product launch visuals.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#ec4899]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'arnab.dutta@ecellhit.in',
    department: 'CSE',
    batch: "Batch of '25",
  },
  {
    id: 'photo-2',
    name: 'Debasmita Pal',
    role: 'Event Photographer',
    subRole: 'PHOTOGRAPHER',
    team: 'MEDIA TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#fce7f3] text-[#9d174d]',
    description: 'Specialising in event coverage, portrait sessions & post-production editing.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#f43f5e]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'debasmita.pal@ecellhit.in',
    department: 'IT',
    batch: "Batch of '26",
  },
  {
    id: 'photo-3',
    name: 'Saurav Mondal',
    role: 'Visual Photographer',
    subRole: 'PHOTOGRAPHER',
    team: 'MEDIA TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#fce7f3] text-[#9d174d]',
    description: 'Shooting summit keynotes, pitch competitions & campus engagement events.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#e11d48]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'saurav.mondal@ecellhit.in',
    department: 'ECE',
    batch: "Batch of '24",
  },
  {
    id: 'photo-4',
    name: 'Priyanka Biswas',
    role: 'Product Photographer',
    subRole: 'PHOTOGRAPHER',
    team: 'MEDIA TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#fce7f3] text-[#9d174d]',
    description: 'Producing polished product shots, sponsor banners & merchandise visuals.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#ec4899]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'priyanka.biswas@ecellhit.in',
    department: 'EE',
    batch: "Batch of '25",
  },
  {
    id: 'photo-5',
    name: 'Niloy Ghosh',
    role: 'Drone & Aerial Photographer',
    subRole: 'PHOTOGRAPHER',
    team: 'MEDIA TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#fce7f3] text-[#9d174d]',
    description: 'Capturing aerial campus shots, drone reels & cinematic wide-angle footage.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#be185d]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'niloy.ghosh@ecellhit.in',
    department: 'ME',
    batch: "Batch of '26",
  },

  // --- MEDIA TEAM: CONTENT WRITER ---
  {
    id: 'cw-1',
    name: 'Ankita Roy',
    role: 'Content Writer',
    subRole: 'CONTENT_WRITER',
    team: 'MEDIA TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#fce7f3] text-[#9d174d]',
    description: 'Crafting compelling startup stories, blog posts & founder spotlight articles.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#ec4899]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'ankita.roy@ecellhit.in',
    department: 'CSE',
    batch: "Batch of '25",
  },
  {
    id: 'cw-2',
    name: 'Rohan Bose',
    role: 'Tech Content Writer',
    subRole: 'CONTENT_WRITER',
    team: 'MEDIA TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#fce7f3] text-[#9d174d]',
    description: 'Writing technical explainers, product reviews & innovation deep-dives.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#f43f5e]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'rohan.bose@ecellhit.in',
    department: 'IT',
    batch: "Batch of '24",
  },
  {
    id: 'cw-3',
    name: 'Shreya Das',
    role: 'Social Media Copywriter',
    subRole: 'CONTENT_WRITER',
    team: 'MEDIA TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#fce7f3] text-[#9d174d]',
    description: 'Writing punchy captions, campaign copy & newsletter content for social channels.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#e11d48]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'shreya.das@ecellhit.in',
    department: 'EE',
    batch: "Batch of '25",
  },
  {
    id: 'cw-4',
    name: 'Subhajit Sen',
    role: 'Press & PR Writer',
    subRole: 'CONTENT_WRITER',
    team: 'MEDIA TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#fce7f3] text-[#9d174d]',
    description: 'Drafting media releases, press notes & sponsored editorial features.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#ec4899]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'subhajit.sen@ecellhit.in',
    department: 'ECE',
    batch: "Batch of '26",
  },
  {
    id: 'cw-5',
    name: 'Tanushree Ghosh',
    role: 'Brand Storyteller',
    subRole: 'CONTENT_WRITER',
    team: 'MEDIA TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#fce7f3] text-[#9d174d]',
    description: 'Building narrative arcs for events, merchandise campaigns & partner activations.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#be185d]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'tanushree.ghosh@ecellhit.in',
    department: 'ME',
    batch: "Batch of '25",
  },
  {
    id: 'cw-6',
    name: 'Priyam Saha',
    role: 'Creative Content Strategist',
    subRole: 'CONTENT_WRITER',
    team: 'MEDIA TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#fce7f3] text-[#9d174d]',
    description: 'Aligning content calendars, SEO strategy & long-form editorial planning.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#f43f5e]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'priyam.saha@ecellhit.in',
    department: 'CSE',
    batch: "Batch of '24",
  },

  // --- MEDIA TEAM: GRAPHIC DESIGNER ---
  {
    id: 'gd-1',
    name: 'Swastika Mukherjee',
    role: 'Graphic Designer',
    subRole: 'GRAPHIC_DESIGNER',
    team: 'MEDIA TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#fce7f3] text-[#9d174d]',
    description: 'Designing event posters, brand kits, infographics & digital creatives.',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#ec4899]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'swastika.m@ecellhit.in',
    department: 'CSE',
    batch: "Batch of '25",
  },
  {
    id: 'gd-2',
    name: 'Aritra Chatterjee',
    role: 'UI & Visual Designer',
    subRole: 'GRAPHIC_DESIGNER',
    team: 'MEDIA TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#fce7f3] text-[#9d174d]',
    description: 'Producing UI mockups, pitch decks, motion stickers & sponsor assets.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#f43f5e]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'aritra.c@ecellhit.in',
    department: 'IT',
    batch: "Batch of '26",
  },

  // --- PR TEAM ---
  {
    id: 'act-11',
    name: 'Vikram Singh',
    role: 'PR & Outreach Lead',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Expanding public relations, national media coverage & founder ecosystems.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#f97316]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'vikram.singh@ecellhit.in',
    department: 'IT',
    batch: "Batch of '25",
  },
  {
    id: 'act-12',
    name: 'Tanmoy Pal',
    role: 'Content Strategist',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Writing engaging press releases, founder interviews & newsletter stories.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#ea580c]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'tanmoy.pal@ecellhit.in',
    department: 'CSE',
    batch: "Batch of '25",
  },
  {
    id: 'act-13',
    name: 'Kriti Sharma',
    role: 'Community Manager',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Engaging student founders, managing campus ambassadors & youth outreach.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#c2410c]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'kriti.sharma@ecellhit.in',
    department: 'ECE',
    batch: "Batch of '26",
  },

  // ===================== ALUMNI MEMBERS =====================
  // --- CORE TEAM ALUMNI ---
  {
    id: 'alm-1',
    name: 'Aryan Raj',
    role: 'Founder & President',
    team: 'CORE TEAM',
    status: 'ALUMNI',
    badgeBg: 'bg-[#fef3c7] text-[#92400e]',
    batch: 'Class of 2023',
    currentRole: 'Co-Founder & CEO',
    company: 'Nexus Innovations',
    description: 'Established E-Cell HIT foundation and led the first three national summits.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#eab308]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'aryan.raj@ecellhit.in',
    department: 'IT',
  },
  {
    id: 'alm-2',
    name: 'Rohan Kumar Singh',
    role: 'Co-Founder & VP',
    team: 'CORE TEAM',
    status: 'ALUMNI',
    badgeBg: 'bg-[#fef3c7] text-[#92400e]',
    batch: 'Class of 2023',
    currentRole: 'Founder',
    company: 'PayFlow Fintech',
    description: 'Spearheaded corporate relations and raised initial pre-seed incubation fund.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#f59e0b]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'rohan.ks@ecellhit.in',
    department: 'CSE',
  },

  // --- TECH TEAM ALUMNI ---
  {
    id: 'alm-3',
    name: 'Abhishek Roy',
    role: 'Tech & Hackathon Lead',
    team: 'TECH TEAM',
    status: 'ALUMNI',
    badgeBg: 'bg-[#dbeafe] text-[#1e40af]',
    batch: 'Class of 2022',
    currentRole: 'Senior AI Engineer',
    company: 'DeepCloud Labs',
    description: 'Built E-Cell core portal and automated hackathon judging workflows.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#3b82f6]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'abhishek.roy@ecellhit.in',
    department: 'CSE',
  },
  {
    id: 'alm-4',
    name: 'Siddharth Das',
    role: 'Lead Cloud Architect',
    team: 'TECH TEAM',
    status: 'ALUMNI',
    badgeBg: 'bg-[#dbeafe] text-[#1e40af]',
    batch: 'Class of 2021',
    currentRole: 'SDE-2 (Distributed Systems)',
    company: 'Microsoft',
    description: 'Architected high-throughput infrastructure handling 10k+ live summit registrants.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#0284c7]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'siddharth.das@ecellhit.in',
    department: 'IT',
  },

  // --- MEDIA TEAM ALUMNI ---
  {
    id: 'alm-5',
    name: 'Isha Mukherjee',
    role: 'Head of Media & Design',
    team: 'MEDIA TEAM',
    status: 'ALUMNI',
    badgeBg: 'bg-[#fce7f3] text-[#9d174d]',
    batch: 'Class of 2023',
    currentRole: 'Senior Brand Designer',
    company: 'Swiggy',
    description: 'Established the original Memphis design style and viral social media playbooks.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#ec4899]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'isha.mukherjee@ecellhit.in',
    department: 'IT',
  },
  {
    id: 'alm-6',
    name: 'Kunal Sen',
    role: 'Creative Director',
    team: 'MEDIA TEAM',
    status: 'ALUMNI',
    badgeBg: 'bg-[#fce7f3] text-[#9d174d]',
    batch: 'Class of 2022',
    currentRole: 'UI/UX Lead',
    company: 'Zomato',
    description: 'Directed visual storytelling and award-winning merchandise designs.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#f43f5e]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'kunal.sen@ecellhit.in',
    department: 'ECE',
  },

  // --- PR TEAM ALUMNI ---
  {
    id: 'alm-7',
    name: 'Devika Banerjee',
    role: 'Head of Outreach & Incubation',
    team: 'PR TEAM',
    status: 'ALUMNI',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    batch: 'Class of 2022',
    currentRole: 'Product Lead',
    company: 'HyperGrowth VC',
    description: 'Connected 50+ startup founders with angel investors and national venture funds.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#f97316]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'devika.b@ecellhit.in',
    department: 'EE',
  },
  {
    id: 'alm-8',
    name: 'Tanvi Patel',
    role: 'Strategic Partnerships Lead',
    team: 'PR TEAM',
    status: 'ALUMNI',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    batch: 'Class of 2023',
    currentRole: 'Venture Analyst',
    company: 'Sequoia Surge',
    description: 'Formed tie-ups with 20+ national incubators, state startup cells and accelerators.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#ea580c]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'tanvi.patel@ecellhit.in',
    department: 'CSE',
  },
  {
    id: 'alm-9',
    name: 'Priyanshu Verma',
    role: 'Head of Operations & Logistics',
    team: 'CORE TEAM',
    status: 'ALUMNI',
    badgeBg: 'bg-[#fef3c7] text-[#92400e]',
    batch: 'Class of 2022',
    currentRole: 'Senior Operations Lead',
    company: 'Flipkart',
    description: 'Scaled flagship E-Summit logistics and established inter-college startup networks.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#f59e0b]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'priyanshu.v@ecellhit.in',
    department: 'ME',
  },
  {
    id: 'alm-10',
    name: 'Sneha Ganguly',
    role: 'Head of Corporate Alliances',
    team: 'PR TEAM',
    status: 'ALUMNI',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    batch: 'Class of 2021',
    currentRole: 'Growth & Strategy Lead',
    company: 'Paytm',
    description: 'Spearheaded marquee corporate partnerships, venture grants and angel syndicates.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#ea580c]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'sneha.g@ecellhit.in',
    department: 'CSE',
  },

  // ===================== FRONT LINE — ACTIVE (PR TEAM / Strategic Growth) =====================
  {
    id: 'fl-1',
    name: 'Aditya Sharma',
    role: 'Campus Ambassador',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Driving campus-level outreach, startup awareness and community engagement.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#f97316]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'aditya.sharma@ecellhit.in',
    department: 'CSE',
    batch: "Batch of '25",
  },
  {
    id: 'fl-2',
    name: 'Ritika Sen',
    role: 'Growth & Outreach Executive',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Expanding E-Cell reach through national startup events and media partnerships.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#ea580c]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'ritika.sen@ecellhit.in',
    department: 'IT',
    batch: "Batch of '26",
  },
  {
    id: 'fl-3',
    name: 'Souvik Das',
    role: 'Alliance & Partnership Executive',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Building strategic ties with incubators, colleges and VC networks.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#f97316]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'souvik.das@ecellhit.in',
    department: 'EE',
    batch: "Batch of '24",
  },
  {
    id: 'fl-4',
    name: 'Pritha Bose',
    role: 'PR & Communications Executive',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Managing institutional communications, press kits and media relations.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#ea580c]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'pritha.bose@ecellhit.in',
    department: 'ECE',
    batch: "Batch of '25",
  },
  {
    id: 'fl-5',
    name: 'Subham Ghosh',
    role: 'Social Media Growth Executive',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Scaling social presence, community growth and engagement across platforms.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#f97316]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'subham.ghosh@ecellhit.in',
    department: 'ME',
    batch: "Batch of '26",
  },
  {
    id: 'fl-6',
    name: 'Anirban Roy',
    role: 'Ecosystem Builder',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Connecting student entrepreneurs with mentors, VCs and government cells.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#ea580c]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'anirban.roy@ecellhit.in',
    department: 'CSE',
    batch: "Batch of '25",
  },
  {
    id: 'fl-7',
    name: 'Puja Mondal',
    role: 'Corporate Relations Executive',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Developing corporate tie-ups, sponsorship decks and B2B networking.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#c2410c]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'puja.mondal@ecellhit.in',
    department: 'IT',
    batch: "Batch of '24",
  },
  {
    id: 'fl-8',
    name: 'Debarpan Pal',
    role: 'Event Relations Executive',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Coordinating inter-college events, speaker invitations and stage logistics.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#f97316]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'debarpan.pal@ecellhit.in',
    department: 'EE',
    batch: "Batch of '25",
  },
  {
    id: 'fl-9',
    name: 'Snehal Mukherjee',
    role: 'Startup Liaison Officer',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Acting as bridge between startups, government programs and accelerators.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#ea580c]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'snehal.m@ecellhit.in',
    department: 'ECE',
    batch: "Batch of '26",
  },
  {
    id: 'fl-10',
    name: 'Rahul Dey',
    role: 'Sponsorship Executive',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Negotiating sponsorship agreements and managing sponsor deliverables.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#f97316]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'rahul.dey@ecellhit.in',
    department: 'ME',
    batch: "Batch of '24",
  },
  {
    id: 'fl-11',
    name: 'Sweta Rana',
    role: 'Brand Visibility Executive',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Amplifying E-Cell brand visibility via OOH, digital ads and campus activations.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#c2410c]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'sweta.rana@ecellhit.in',
    department: 'CSE',
    batch: "Batch of '25",
  },
  {
    id: 'fl-12',
    name: 'Nilanjana Das',
    role: 'Investor Relations Executive',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Preparing pitch materials and facilitating startup-investor introductions.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#ea580c]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'nilanjana.das@ecellhit.in',
    department: 'IT',
    batch: "Batch of '26",
  },
  {
    id: 'fl-13',
    name: 'Ayan Chatterjee',
    role: 'Media Outreach Executive',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Pitching stories to student media, edtech blogs and startup publications.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#f97316]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'ayan.c@ecellhit.in',
    department: 'EE',
    batch: "Batch of '25",
  },
  {
    id: 'fl-14',
    name: 'Paramita Roy',
    role: 'Community Growth Strategist',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Building founder communities, alumni networks and mentorship ecosystems.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#c2410c]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'paramita.roy@ecellhit.in',
    department: 'ECE',
    batch: "Batch of '24",
  },
  {
    id: 'fl-15',
    name: 'Bidhan Saha',
    role: 'National Liaison Executive',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Representing E-Cell at national entrepreneurship fests and inter-IIT summits.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#f97316]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'bidhan.saha@ecellhit.in',
    department: 'ME',
    batch: "Batch of '25",
  },
  {
    id: 'fl-16',
    name: 'Koyel Ghosh',
    role: 'Startup Ecosystem Analyst',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Researching startup trends, policy updates and venture funding landscape.',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#ea580c]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'koyel.ghosh@ecellhit.in',
    department: 'CSE',
    batch: "Batch of '26",
  },
  {
    id: 'fl-17',
    name: 'Suvrajit Dey',
    role: 'Incubation Support Executive',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Supporting early-stage startups with documentation, GTM and pitch coaching.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#f97316]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'suvrajit.dey@ecellhit.in',
    department: 'IT',
    batch: "Batch of '24",
  },
  {
    id: 'fl-18',
    name: 'Megha Pal',
    role: 'Digital Campaign Manager',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Running targeted digital campaigns for E-Cell events, recruitment and summits.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#c2410c]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'megha.pal@ecellhit.in',
    department: 'EE',
    batch: "Batch of '25",
  },
  {
    id: 'fl-19',
    name: 'Tanmay Biswas',
    role: 'Ambassador Coordinator',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Managing E-Cell campus ambassador programs across West Bengal colleges.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#ea580c]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'tanmay.biswas@ecellhit.in',
    department: 'ECE',
    batch: "Batch of '26",
  },
  {
    id: 'fl-20',
    name: 'Roshni Sarkar',
    role: 'Policy & Startup Affairs Executive',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Liaising with government startup cells, DPIIT and state innovation bodies.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#f97316]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'roshni.sarkar@ecellhit.in',
    department: 'ME',
    batch: "Batch of '24",
  },
  {
    id: 'fl-21',
    name: 'Bikash Roy',
    role: 'Networking & Alliances Officer',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Fostering cross-institutional collaborations and tech-startup alliances.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#c2410c]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'bikash.roy@ecellhit.in',
    department: 'CSE',
    batch: "Batch of '25",
  },
  {
    id: 'fl-22',
    name: 'Sarbani Dutta',
    role: 'Brand Partnerships Executive',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Negotiating brand collaborations for E-Cell merchandise, events and campaigns.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#ea580c]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'sarbani.dutta@ecellhit.in',
    department: 'IT',
    batch: "Batch of '26",
  },
  {
    id: 'fl-23',
    name: 'Partha Sarathi Mandal',
    role: 'Growth Hacking Executive',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Experimenting with viral growth loops, referral campaigns and traction strategies.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#f97316]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'partha.mandal@ecellhit.in',
    department: 'EE',
    batch: "Batch of '25",
  },
  {
    id: 'fl-24',
    name: 'Shubhankar Sen',
    role: 'Founder Relations Executive',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Maintaining relationships with E-Cell alumni founders and startup mentors.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#ea580c]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'shubhankar.sen@ecellhit.in',
    department: 'ECE',
    batch: "Batch of '24",
  },
  {
    id: 'fl-25',
    name: 'Tumpa Ghosh',
    role: 'Public Affairs & CSR Executive',
    subRole: 'FRONT_LINE',
    team: 'PR TEAM',
    status: 'ACTIVE',
    badgeBg: 'bg-[#ffedd5] text-[#c2410c]',
    description: 'Driving CSR partnerships, social impact initiatives and public goodwill campaigns.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    colorOverlay: 'bg-[#c2410c]/30 mix-blend-multiply',
    linkedinUrl: 'https://linkedin.com',
    email: 'tumpa.ghosh@ecellhit.in',
    department: 'ME',
    batch: "Batch of '26",
  },
];

const teamFilterList: ('ALL' | TeamCategory)[] = [
  'ALL',
  'CORE TEAM',
  'TECH TEAM',
  'MEDIA TEAM',
  'PR TEAM',
];

// ─── MEMBER CARD COMPONENT (INSPIRED BY REFERENCE DESIGN) ──────────────────────
function MemberCard({
  member,
  index,
  statusTab,
}: {
  member: Member;
  index: number;
  statusTab: MemberStatus;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), (index % 9) * 60);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  // Department display value (e.g., EE, CSE, IT, ECE or role)
  const deptDisplay =
    member.department ||
    (member.team === 'TECH TEAM'
      ? 'CSE'
      : member.team === 'CORE TEAM'
        ? 'EE'
        : member.team === 'MEDIA TEAM'
          ? 'IT'
          : 'ECE');

  // Affiliation display value (e.g., Batch of '24, Batch of '25, or team)
  const affilDisplay =
    member.batch ||
    (statusTab === 'ACTIVE'
      ? index % 2 === 0
        ? "Batch of '25"
        : "Batch of '24"
      : member.batch || member.team);

  return (
    <div
      ref={cardRef}
      className="group h-full"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.4s ease ${(index % 9) * 0.03}s, transform 0.4s ease ${(index % 9) * 0.03}s`,
      }}
    >
      {/* Outer Card Shell — Clean Modern Rounded Card */}
      <div className="relative h-full flex flex-col sm:flex-row items-stretch sm:items-center bg-white dark:bg-slate-900 rounded-[24px] sm:rounded-[28px] p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_36px_-10px_rgba(0,82,204,0.14)] dark:hover:shadow-[0_16px_36px_-10px_rgba(72,149,239,0.22)] hover:-translate-y-1 transition-all duration-250 ease-out gap-4 min-h-[160px]">

        {/* LEFT — Rounded Squircle Image Container */}
        <div className="relative w-full sm:w-[115px] md:w-[125px] aspect-square rounded-[20px] overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-800 shadow-inner">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
          />
        </div>

        {/* RIGHT — Content Information */}
        <div className="flex flex-col flex-1 justify-between min-w-0 h-full py-0.5">

          {/* Member Name */}
          <h3 className="font-display font-black text-lg sm:text-xl text-slate-950 dark:text-white group-hover:text-[#0052cc] dark:group-hover:text-[#4895ef] transition-colors duration-250 tracking-tight leading-snug truncate" title={member.name}>
            {member.name}
          </h3>

          {/* Thin Divider Line */}
          <div className="h-px bg-slate-100 dark:bg-slate-800/90 w-full my-2.5" />

          {/* Department & Affiliation Columns */}
          <div className="grid grid-cols-2 gap-2 mb-2.5">
            <div className="min-w-0">
              <span className="block text-[9px] font-display font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                DEPARTMENT
              </span>
              <span className="font-body font-semibold text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 truncate block">
                {deptDisplay}
              </span>
            </div>
            <div className="min-w-0">
              <span className="block text-[9px] font-display font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                AFFILIATION
              </span>
              <span className="font-body font-semibold text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 truncate block">
                {affilDisplay}
              </span>
            </div>
          </div>

          {/* Bottom Action Row: VIEW PROFILE + Social Links (Both LinkedIn & Email on EVERY card) */}
          <div className="flex items-center justify-between gap-2 pt-1.5 border-t border-slate-100 dark:border-slate-800/80">
            {/* VIEW PROFILE → */}
            <a
              href={member.linkedinUrl || '#'}
              target={member.linkedinUrl ? '_blank' : undefined}
              rel={member.linkedinUrl ? 'noopener noreferrer' : undefined}
              onClick={(e) => {
                if (!member.linkedinUrl) e.preventDefault();
              }}
              className="inline-flex items-center gap-1.5 font-display font-bold text-[10px] sm:text-[11px] uppercase tracking-wider text-[#0052cc] dark:text-[#4895ef] hover:text-[#003db3] dark:hover:text-[#6db3ff] transition-colors duration-200"
            >
              <span>VIEW PROFILE</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            {/* LinkedIn & Email Action Buttons */}
            <div className="flex items-center gap-1.5 ml-auto">
              {/* LinkedIn Button */}
              <div className="relative group/li">
                <a
                  href={member.linkedinUrl || '#'}
                  target={member.linkedinUrl ? '_blank' : undefined}
                  rel={member.linkedinUrl ? 'noopener noreferrer' : undefined}
                  onClick={(e) => {
                    if (!member.linkedinUrl) e.preventDefault();
                  }}
                  aria-label={`${member.name} LinkedIn`}
                  className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-[#0077b5] hover:bg-[#0077b5]/10 hover:border-[#0077b5]/40 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <BsLinkedin className="w-3.5 h-3.5" />
                </a>
                <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-display font-black text-[8px] uppercase tracking-wider whitespace-nowrap opacity-0 group-hover/li:opacity-100 transition-opacity duration-150 shadow-sm z-20">
                  LinkedIn
                </span>
              </div>

              {/* Email Button */}
              <div className="relative group/em">
                <a
                  href={member.email ? `mailto:${member.email}` : '#'}
                  onClick={(e) => {
                    if (!member.email) e.preventDefault();
                  }}
                  aria-label={`Send Email to ${member.name}`}
                  className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-[#0052cc] hover:bg-[#0052cc]/10 hover:border-[#0052cc]/40 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
                <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-display font-black text-[8px] uppercase tracking-wider whitespace-nowrap opacity-0 group-hover/em:opacity-100 transition-opacity duration-150 shadow-sm z-20">
                  Email
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cloudLeftRef = useRef<HTMLDivElement>(null);
  const cloudRightRef = useRef<HTMLDivElement>(null);
  const cloudCenterRef = useRef<HTMLDivElement>(null);
  const membersSectionRef = useRef<HTMLDivElement>(null);

  // Filter States (Max 9 cards displayed)
  const MAX_DISPLAY_MEMBERS = 9;
  const [statusTab, setStatusTab] = useState<MemberStatus>('ACTIVE');
  const [selectedTeam, setSelectedTeam] = useState<'ALL' | TeamCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      if (cloudLeftRef.current && cloudRightRef.current && cloudCenterRef.current) {
        tl.to(cloudLeftRef.current, { xPercent: -70, yPercent: 20, opacity: 0, ease: 'power2.out' }, 0)
          .to(cloudRightRef.current, { xPercent: 70, yPercent: 20, opacity: 0, ease: 'power2.out' }, 0)
          .to(cloudCenterRef.current, { yPercent: 50, scale: 1.3, opacity: 0, ease: 'power2.out' }, 0);
      }
    });
    return () => ctx.revert();
  }, []);

  // Helper to filter a member subset based on status and search query
  const filterList = (list: Member[]) => {
    return list.filter((member) => {
      // 1. Status Filter (ACTIVE vs ALUMNI)
      if (member.status !== statusTab) {
        return false;
      }

      // 2. Search Query Filter (Searches Name, Role, Team, Company, Past Role)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = member.name.toLowerCase().includes(query);
        const matchesRole = member.role.toLowerCase().includes(query);
        const matchesTeam = member.team.toLowerCase().includes(query);
        const matchesCompany = member.company?.toLowerCase().includes(query) || false;
        const matchesCurrentRole = member.currentRole?.toLowerCase().includes(query) || false;

        return matchesName || matchesRole || matchesTeam || matchesCompany || matchesCurrentRole;
      }

      return true;
    });
  };

  // 1. COMMAND CENTER Members (Core Team + PR Team non-FRONT_LINE, max 9)
  const commandCenterMembers = useMemo(() => {
    const list = allMembers.filter(
      (m) => (m.team === 'CORE TEAM' || m.team === 'PR TEAM') && !m.subRole
    );
    return filterList(list).slice(0, 9);
  }, [statusTab, searchQuery]);

  // 2. ENGINE ROOM Members (Tech Team, exactly 10 cards max: 3 + 3 + 3 + 1)
  const engineRoomMembers = useMemo(() => {
    const list = allMembers.filter((m) => m.team === 'TECH TEAM');
    return filterList(list).slice(0, 10);
  }, [statusTab, searchQuery]);

  // 3. ECHO CHAMBER Members (Media Team, first 4: lead/non-subRole members)
  const echoChamberMembers = useMemo(() => {
    const list = allMembers.filter(
      (m) => m.team === 'MEDIA TEAM' && !m.subRole
    );
    return filterList(list).slice(0, 4);
  }, [statusTab, searchQuery]);

  // 4. PHOTOGRAPHER Members (5 cards)
  const photographerMembers = useMemo(() => {
    const list = allMembers.filter(
      (m) => m.team === 'MEDIA TEAM' && m.subRole === 'PHOTOGRAPHER'
    );
    return filterList(list).slice(0, 5);
  }, [statusTab, searchQuery]);

  // 5. CONTENT WRITER Members (6 cards)
  const contentWriterMembers = useMemo(() => {
    const list = allMembers.filter(
      (m) => m.team === 'MEDIA TEAM' && m.subRole === 'CONTENT_WRITER'
    );
    return filterList(list).slice(0, 6);
  }, [statusTab, searchQuery]);

  // 6. GRAPHIC DESIGNER Members (2 cards)
  const graphicDesignerMembers = useMemo(() => {
    const list = allMembers.filter(
      (m) => m.team === 'MEDIA TEAM' && m.subRole === 'GRAPHIC_DESIGNER'
    );
    return filterList(list).slice(0, 2);
  }, [statusTab, searchQuery]);

  // 7. FRONT LINE Members (PR TEAM / FRONT_LINE sub-role, 25 cards)
  const frontLineMembers = useMemo(() => {
    const list = allMembers.filter(
      (m) => m.team === 'PR TEAM' && m.subRole === 'FRONT_LINE'
    );
    return filterList(list).slice(0, 25);
  }, [statusTab, searchQuery]);

  // 8. ALUMNI Members (Exactly 10 cards max: 3 + 3 + 3 + 1)
  const alumniMembers = useMemo(() => {
    if (statusTab !== 'ALUMNI') return [];
    const list = allMembers.filter((member) => {
      // 1. Status Filter
      if (member.status !== 'ALUMNI') return false;

      // 2. Team Category Filter
      if (selectedTeam !== 'ALL' && member.team !== selectedTeam) return false;

      // 3. Search Query Filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = member.name.toLowerCase().includes(query);
        const matchesRole = member.role.toLowerCase().includes(query);
        const matchesTeam = member.team.toLowerCase().includes(query);
        const matchesCompany = member.company?.toLowerCase().includes(query) || false;
        const matchesCurrentRole = member.currentRole?.toLowerCase().includes(query) || false;

        return matchesName || matchesRole || matchesTeam || matchesCompany || matchesCurrentRole;
      }

      return true;
    });

    return list.slice(0, 10);
  }, [statusTab, selectedTeam, searchQuery]);

  // Section visibility based on selected team filter and status tab
  const showCommandCenter =
    statusTab === 'ACTIVE' &&
    (selectedTeam === 'ALL' || selectedTeam === 'CORE TEAM' || selectedTeam === 'PR TEAM');
  const showEngineRoom =
    statusTab === 'ACTIVE' &&
    (selectedTeam === 'ALL' || selectedTeam === 'TECH TEAM');
  const showEchoChamber =
    statusTab === 'ACTIVE' &&
    (selectedTeam === 'ALL' || selectedTeam === 'MEDIA TEAM');
  const showPhotographer = showEchoChamber;
  const showContentWriter = showEchoChamber;
  const showGraphicDesigner = showEchoChamber;
  const showFrontLine =
    statusTab === 'ACTIVE' &&
    (selectedTeam === 'ALL' || selectedTeam === 'PR TEAM');
  const showAlumni = statusTab === 'ALUMNI';

  const totalMatchingCount =
    statusTab === 'ACTIVE'
      ? (showCommandCenter ? commandCenterMembers.length : 0) +
      (showEngineRoom ? engineRoomMembers.length : 0) +
      (showEchoChamber ? echoChamberMembers.length : 0) +
      (showPhotographer ? photographerMembers.length : 0) +
      (showContentWriter ? contentWriterMembers.length : 0) +
      (showGraphicDesigner ? graphicDesignerMembers.length : 0) +
      (showFrontLine ? frontLineMembers.length : 0)
      : alumniMembers.length;

  const clearAllFilters = () => {
    setSelectedTeam('ALL');
    setSearchQuery('');
  };

  return (
    <div className="pt-20 min-h-screen bg-[#faf8f5] dark:bg-[#121418] text-slate-900 dark:text-white overflow-x-hidden">
      {/* 1. FIRST PAGE HERO WITH INTEGRATED FILTER PANEL & PRESERVED THEME */}
      <section
        ref={heroRef}
        className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between items-center overflow-hidden border-b-4 border-black bg-white dark:bg-slate-950 text-center px-4 pt-8 sm:pt-12 pb-0"
      >
        {/* Left Peach Half-Circle Motif */}
        <div className="absolute -top-12 -left-16 w-56 sm:w-72 h-56 sm:h-72 bg-[#fecdd3] dark:bg-pink-950/40 rounded-full border-4 border-black pointer-events-none z-0 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]" />

        {/* Right Lilac Tilted Squircle Box */}
        <div className="hidden sm:block absolute -top-8 -right-8 w-44 sm:w-56 h-44 sm:h-56 bg-[#dbeafe] dark:bg-blue-950/40 rounded-[44px] border-4 border-black rotate-12 pointer-events-none z-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />

        {/* Diagonal Crosses Background */}
        <div className="absolute inset-0 bg-memphis-crosses pointer-events-none opacity-30 z-0" />

        {/* 4. FLOATING BADGE CARDS (CORE TEAM, TECH TEAM, MEDIA TEAM, PR TEAM) */}

        {/* Card 1: CORE TEAM (Top-Left) */}
        <div className="hidden lg:flex absolute left-[3%] xl:left-[6%] top-[20%] z-20 animate-shape-float-a pointer-events-none">
          <div className="bg-white dark:bg-slate-900 border-2 border-black dark:border-white rounded-2xl p-3 flex flex-col items-center justify-center gap-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] min-w-[84px] sm:min-w-[94px]">
            <div className="w-8 h-8 rounded-full bg-[#FFD166] border-2 border-black flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_#000]">
              <Users className="w-4 h-4 text-slate-950 stroke-[2.5]" />
            </div>
            <span className="font-display font-black text-[10px] sm:text-[11px] tracking-wider text-slate-800 dark:text-slate-100 uppercase">
              CORE TEAM
            </span>
          </div>
        </div>

        {/* Card 2: TECH TEAM (Bottom-Left) */}
        <div className="hidden lg:flex absolute left-[4%] xl:left-[7%] top-[50%] z-20 animate-shape-float-b pointer-events-none">
          <div className="bg-white dark:bg-slate-900 border-2 border-black dark:border-white rounded-2xl p-3 flex flex-col items-center justify-center gap-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] min-w-[84px] sm:min-w-[94px]">
            <div className="w-8 h-8 rounded-full bg-[#4895EF] border-2 border-black flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_#000]">
              <Laptop className="w-4 h-4 text-white stroke-[2.5]" />
            </div>
            <span className="font-display font-black text-[10px] sm:text-[11px] tracking-wider text-slate-800 dark:text-slate-100 uppercase">
              TECH TEAM
            </span>
          </div>
        </div>

        {/* Card 3: MEDIA TEAM (Top-Right) */}
        <div className="hidden lg:flex absolute right-[3%] xl:right-[6%] top-[20%] z-20 animate-shape-float-b pointer-events-none">
          <div className="bg-white dark:bg-slate-900 border-2 border-black dark:border-white rounded-2xl p-3 flex flex-col items-center justify-center gap-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] min-w-[84px] sm:min-w-[94px]">
            <div className="w-8 h-8 rounded-full bg-[#FBDAE9] border-2 border-black flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_#000]">
              <Megaphone className="w-4 h-4 text-slate-950 stroke-[2.5]" />
            </div>
            <span className="font-display font-black text-[10px] sm:text-[11px] tracking-wider text-slate-800 dark:text-slate-100 uppercase">
              MEDIA TEAM
            </span>
          </div>
        </div>

        {/* Card 4: PR TEAM (Bottom-Right) */}
        <div className="hidden lg:flex absolute right-[4%] xl:right-[7%] top-[50%] z-20 animate-shape-float-a pointer-events-none">
          <div className="bg-white dark:bg-slate-900 border-2 border-black dark:border-white rounded-2xl p-3 flex flex-col items-center justify-center gap-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] min-w-[84px] sm:min-w-[94px]">
            <div className="w-8 h-8 rounded-full bg-[#D8F3DC] border-2 border-black flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_#000]">
              <Handshake className="w-4 h-4 text-slate-950 stroke-[2.5]" />
            </div>
            <span className="font-display font-black text-[10px] sm:text-[11px] tracking-wider text-slate-800 dark:text-slate-100 uppercase">
              PR TEAM
            </span>
          </div>
        </div>

        {/* Hero Central Content */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5 relative z-30 my-auto pt-4 pb-2 w-full">
          {/* Main Headline with Yellow Organic Blob Behind 'Behind' */}
          <div className="relative inline-block">
            <div className="absolute -top-3 right-[12%] sm:right-[15%] w-24 sm:w-36 h-14 sm:h-20 bg-[#fde047] dark:bg-amber-500/30 rounded-[50%] border-3 border-black -rotate-6 pointer-events-none z-0" />
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-950 dark:text-white leading-[1.1] relative z-10">
              The Brains Behind <br />
              <span className="text-[#0052cc] dark:text-[#4895ef]">The Hustle.</span>
            </h1>
          </div>

          {/* Subtitle Inside Memphis Rounded Pill Frame */}
          <div className="inline-block max-w-2xl mx-auto p-1 bg-white dark:bg-slate-900 rounded-full border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff]">
            <p className="font-body text-slate-700 dark:text-slate-200 text-xs sm:text-sm md:text-base px-6 sm:px-8 py-2.5 sm:py-3 font-semibold leading-relaxed">
              Meet the minds behind the mission, the leaders driving the change, and the alumni who built the legacy.
            </p>
          </div>

          {/* INTEGRATED COMPLETE MEMBER FILTER PANEL DIRECTLY BELOW DESCRIPTION */}
          <div className="max-w-3xl mx-auto w-full pt-2 sm:pt-3 space-y-4 sm:space-y-5">
            {/* 1. Large Horizontal Filter Container: [ ACTIVE ] [ ALUMNI ] | 🔍 Search by name, role, or team... */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-full border-3 border-black dark:border-white shadow-[5px_5px_0px_0px_#000] dark:shadow-[5px_5px_0px_0px_#fff] p-1.5 sm:p-2 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 transition-all">
              {/* Left: ACTIVE / ALUMNI TOGGLE BUTTONS */}
              <div className="flex items-center gap-1 shrink-0 w-full sm:w-auto justify-center sm:justify-start">
                <button
                  type="button"
                  onClick={() => setStatusTab('ACTIVE')}
                  className={`flex-1 sm:flex-initial px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-display font-black text-xs uppercase tracking-wider transition-all cursor-pointer ${statusTab === 'ACTIVE'
                      ? 'bg-black text-white dark:bg-white dark:text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]'
                      : 'bg-transparent text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
                    }`}
                >
                  ACTIVE
                </button>
                <button
                  type="button"
                  onClick={() => setStatusTab('ALUMNI')}
                  className={`flex-1 sm:flex-initial px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-display font-black text-xs uppercase tracking-wider transition-all cursor-pointer ${statusTab === 'ALUMNI'
                      ? 'bg-black text-white dark:bg-white dark:text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]'
                      : 'bg-transparent text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
                    }`}
                >
                  ALUMNI
                </button>
              </div>

              {/* Vertical Divider */}
              <div className="hidden sm:block w-px h-7 bg-slate-300 dark:bg-slate-700" />

              {/* Right: Search Input Bar */}
              <div className="flex items-center flex-1 w-full px-2">
                <Search className="w-5 h-5 text-slate-400 shrink-0 mr-2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, role, or team..."
                  className="w-full py-2 bg-transparent text-slate-950 dark:text-white font-body font-semibold text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="p-1.5 text-slate-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* 2. Team Filter Buttons: [ ALL ] [ CORE TEAM ] [ TECH TEAM ] [ MEDIA TEAM ] [ PR TEAM ] */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-2.5 px-2">
              {teamFilterList.map((team) => {
                const isSelected = selectedTeam === team;
                return (
                  <button
                    key={team}
                    type="button"
                    onClick={() => setSelectedTeam(team)}
                    className={`px-3.5 sm:px-5 py-2 rounded-full font-display font-black text-[11px] sm:text-xs uppercase tracking-wider border-2 border-black dark:border-white transition-all cursor-pointer ${isSelected
                        ? 'bg-black text-white dark:bg-white dark:text-black shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#fff] -translate-y-0.5'
                        : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]'
                      }`}
                  >
                    {team}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Scroll Down Yellow Bounce Button */}
          <div className="pt-2 sm:pt-4 flex flex-col items-center gap-1.5 relative z-30">
            <button
              onClick={() => {
                membersSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-10 h-10 rounded-full bg-[#fde047] border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_#000] active:translate-y-0.5 animate-bounce hover:scale-105 transition-transform cursor-pointer"
              aria-label="Scroll down to members"
            >
              <ChevronDown className="w-5 h-5 text-black stroke-[3]" />
            </button>
          </div>
        </div>

        {/* 3. REVEALING MEMPHIS CLOUD SVG OVERLAYS AT BOTTOM (WITH FULL ROUNDED TOPS) */}
        <div className="w-full relative h-28 sm:h-36 pointer-events-none z-20 overflow-visible flex items-end">
          {/* Left Cloud */}
          <div
            ref={cloudLeftRef}
            className="absolute -bottom-1 -left-6 sm:-left-10 w-[50vw] max-w-lg transition-transform"
          >
            <svg
              viewBox="0 0 450 220"
              className="w-full h-auto drop-shadow-[0_4px_0_#000]"
              style={{ overflow: 'visible' }}
            >
              <path
                d="M 20 220 L 430 220 C 430 180 400 150 370 150 C 375 100 330 60 280 75 C 250 30 180 25 140 70 C 90 50 40 90 45 145 C 15 160 10 200 20 220 Z"
                fill="#e0e7ff"
                stroke="#000"
                strokeWidth="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Center Cloud */}
          <div
            ref={cloudCenterRef}
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[55vw] max-w-xl transition-transform"
          >
            <svg
              viewBox="0 0 550 240"
              className="w-full h-auto drop-shadow-[0_4px_0_#000]"
              style={{ overflow: 'visible' }}
            >
              <path
                d="M 20 240 L 530 240 C 535 200 500 165 460 170 C 470 110 410 70 350 85 C 320 25 230 20 180 75 C 130 50 60 90 70 160 C 30 175 15 210 20 240 Z"
                fill="#fecdd3"
                stroke="#000"
                strokeWidth="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Right Cloud */}
          <div
            ref={cloudRightRef}
            className="absolute -bottom-1 -right-6 sm:-right-10 w-[50vw] max-w-lg transition-transform"
          >
            <svg
              viewBox="0 0 450 220"
              className="w-full h-auto drop-shadow-[0_4px_0_#000]"
              style={{ overflow: 'visible' }}
            >
              <path
                d="M 430 220 L 20 220 C 20 180 50 150 80 150 C 75 100 120 60 170 75 C 200 30 270 25 310 70 C 360 50 410 90 405 145 C 435 160 440 200 430 220 Z"
                fill="#e0e7ff"
                stroke="#000"
                strokeWidth="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC MEMBERS CARDS SECTION DIRECTLY CONNECTED TO FILTERS */}
      <section
        id="members-section"
        ref={membersSectionRef}
        className="py-12 sm:py-16 border-b-4 border-black relative overflow-hidden bg-[#faf8f5] dark:bg-[#121418]"
      >
        {/* Subtle Neobrutalist Polka Dot Pattern Texture */}
        <div className="absolute inset-0 bg-memphis-dots pointer-events-none opacity-25 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">

          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* SECTION 1: COMMAND CENTER (9 cards: 3 × 3 grid)                   */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          {showCommandCenter && commandCenterMembers.length > 0 && (
            <div className="space-y-5 sm:space-y-6">
              {/* Header */}
              <div className="relative text-center pt-2 pb-1 space-y-2 sm:space-y-2.5">
                <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-950 dark:text-white tracking-tight leading-tight uppercase">
                  COMMAND CENTER
                </h2>
                <div className="flex items-center justify-center gap-2.5 sm:gap-4 max-w-xl mx-auto pt-0.5 px-2">
                  <div className="w-8 sm:w-16 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#0052cc] to-[#4895ef]" />
                  <p className="font-display font-black text-[11px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.28em] text-[#0052cc] dark:text-[#4895ef] uppercase text-center">
                    THE STRATEGIC VISIONARY CORE
                  </p>
                  <div className="w-8 sm:w-16 h-[3px] rounded-full bg-gradient-to-l from-transparent via-[#0052cc] to-[#4895ef]" />
                </div>
              </div>

              {/* 3-col Desktop, 2-col Tablet, 1-col Mobile Grid (9 cards max: 3x3) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-1">
                {commandCenterMembers.map((member, idx) => (
                  <MemberCard key={member.id} member={member} index={idx} statusTab={statusTab} />
                ))}
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* SECTION 2: ENGINE ROOM (10 cards: 3 + 3 + 3 + 1)                  */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          {showEngineRoom && engineRoomMembers.length > 0 && (
            <div className="space-y-5 sm:space-y-6">
              {/* Header */}
              <div className="relative text-center pt-3 pb-1 space-y-2 sm:space-y-2.5">
                <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-950 dark:text-white tracking-tight leading-tight uppercase">
                  ENGINE ROOM
                </h2>
                <div className="flex items-center justify-center gap-2.5 sm:gap-4 max-w-xl mx-auto pt-0.5 px-2">
                  <div className="w-8 sm:w-16 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#0052cc] to-[#4895ef]" />
                  <p className="font-display font-black text-[11px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.28em] text-[#0052cc] dark:text-[#4895ef] uppercase text-center">
                    DIGITAL INNOVATION & SYSTEMS
                  </p>
                  <div className="w-8 sm:w-16 h-[3px] rounded-full bg-gradient-to-l from-transparent via-[#0052cc] to-[#4895ef]" />
                </div>
              </div>

              {/* Category Divider */}
              <div className="flex items-center gap-3 sm:gap-4 pt-1 pb-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0052cc] dark:bg-[#4895ef] shrink-0" />
                <h3 className="font-display font-black text-xs sm:text-sm md:text-base tracking-[0.22em] text-slate-900 dark:text-white uppercase whitespace-nowrap">
                  W E B &nbsp; D E V E L O P E R
                </h3>
                <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
              </div>

              {/* 3-col Desktop, 2-col Tablet, 1-col Mobile Grid (10 cards max) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-1">
                {engineRoomMembers.map((member, idx) => (
                  <MemberCard key={member.id} member={member} index={idx} statusTab={statusTab} />
                ))}
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* SECTION 3: ECHO CHAMBER (4 cards: 3 + 1)                          */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          {showEchoChamber && echoChamberMembers.length > 0 && (
            <div className="space-y-5 sm:space-y-6">
              {/* Header */}
              <div className="relative text-center pt-3 pb-1 space-y-2 sm:space-y-2.5">
                <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-950 dark:text-white tracking-tight leading-tight uppercase">
                  ECHO CHAMBER
                </h2>
                <div className="flex items-center justify-center gap-2.5 sm:gap-4 max-w-xl mx-auto pt-0.5 px-2">
                  <div className="w-8 sm:w-16 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#0052cc] to-[#4895ef]" />
                  <p className="font-display font-black text-[11px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.28em] text-[#0052cc] dark:text-[#4895ef] uppercase text-center">
                    VISUAL NARRATIVES & STORYTELLING
                  </p>
                  <div className="w-8 sm:w-16 h-[3px] rounded-full bg-gradient-to-l from-transparent via-[#0052cc] to-[#4895ef]" />
                </div>
              </div>

              {/* Category Divider */}
              <div className="flex items-center gap-3 sm:gap-4 pt-1 pb-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0052cc] dark:bg-[#4895ef] shrink-0" />
                <h3 className="font-display font-black text-xs sm:text-sm md:text-base tracking-[0.22em] text-slate-900 dark:text-white uppercase whitespace-nowrap">
                  C R E A T I V E &nbsp; & &nbsp; M E D I A
                </h3>
                <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
              </div>

              {/* 3-col Desktop, 2-col Tablet, 1-col Mobile Grid (4 cards) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-1">
                {echoChamberMembers.map((member, idx) => (
                  <MemberCard key={member.id} member={member} index={idx} statusTab={statusTab} />
                ))}
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* SECTION 4: PHOTOGRAPHER (5 cards: 3 + 2)                          */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          {showPhotographer && photographerMembers.length > 0 && (
            <div className="space-y-5 sm:space-y-6">
              {/* Category Divider */}
              <div className="flex items-center gap-3 sm:gap-4 pt-2 pb-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0052cc] dark:bg-[#4895ef] shrink-0" />
                <h3 className="font-display font-black text-xs sm:text-sm md:text-base tracking-[0.22em] text-slate-900 dark:text-white uppercase whitespace-nowrap">
                  P H O T O G R A P H E R
                </h3>
                <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
              </div>

              {/* 3-col Desktop, 2-col Tablet, 1-col Mobile Grid (5 cards) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-1">
                {photographerMembers.map((member, idx) => (
                  <MemberCard key={member.id} member={member} index={idx} statusTab={statusTab} />
                ))}
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* SECTION 5: CONTENT WRITER (6 cards: 3 + 3)                         */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          {showContentWriter && contentWriterMembers.length > 0 && (
            <div className="space-y-5 sm:space-y-6">
              {/* Category Divider */}
              <div className="flex items-center gap-3 sm:gap-4 pt-2 pb-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0052cc] dark:bg-[#4895ef] shrink-0" />
                <h3 className="font-display font-black text-xs sm:text-sm md:text-base tracking-[0.22em] text-slate-900 dark:text-white uppercase whitespace-nowrap">
                  C O N T E N T &nbsp; W R I T E R
                </h3>
                <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
              </div>

              {/* 3-col Desktop, 2-col Tablet, 1-col Mobile Grid (6 cards) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-1">
                {contentWriterMembers.map((member, idx) => (
                  <MemberCard key={member.id} member={member} index={idx} statusTab={statusTab} />
                ))}
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* SECTION 6: GRAPHIC DESIGNER (2 cards, left-aligned)               */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          {showGraphicDesigner && graphicDesignerMembers.length > 0 && (
            <div className="space-y-5 sm:space-y-6">
              {/* Category Divider */}
              <div className="flex items-center gap-3 sm:gap-4 pt-2 pb-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0052cc] dark:bg-[#4895ef] shrink-0" />
                <h3 className="font-display font-black text-xs sm:text-sm md:text-base tracking-[0.22em] text-slate-900 dark:text-white uppercase whitespace-nowrap">
                  G R A P H I C &nbsp; D E S I G N E R
                </h3>
                <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
              </div>

              {/* 3-col Desktop, 2-col Tablet, 1-col Mobile Grid (2 cards) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-1">
                {graphicDesignerMembers.map((member, idx) => (
                  <MemberCard key={member.id} member={member} index={idx} statusTab={statusTab} />
                ))}
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* SECTION 7: FRONT LINE (25 cards)                                   */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          {showFrontLine && frontLineMembers.length > 0 && (
            <div className="space-y-5 sm:space-y-6">
              {/* Section Heading */}
              <div className="relative text-center pt-3 pb-1 space-y-2 sm:space-y-2.5">
                <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-950 dark:text-white tracking-tight leading-tight uppercase">
                  FRONT LINE
                </h2>
                <div className="flex items-center justify-center gap-2.5 sm:gap-4 max-w-xl mx-auto pt-0.5 px-2">
                  <div className="w-8 sm:w-16 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#0052cc] to-[#4895ef]" />
                  <p className="font-display font-black text-[11px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.28em] text-[#0052cc] dark:text-[#4895ef] uppercase text-center">
                    STRATEGIC GROWTH & ALLIANCES
                  </p>
                  <div className="w-8 sm:w-16 h-[3px] rounded-full bg-gradient-to-l from-transparent via-[#0052cc] to-[#4895ef]" />
                </div>
              </div>

              {/* Category Divider */}
              <div className="flex items-center gap-3 sm:gap-4 pt-1 pb-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0052cc] dark:bg-[#4895ef] shrink-0" />
                <h3 className="font-display font-black text-xs sm:text-sm md:text-base tracking-[0.22em] text-slate-900 dark:text-white uppercase whitespace-nowrap">
                  P R &nbsp; & &nbsp; O U T R E A C H
                </h3>
                <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
              </div>

              {/* 3-col Desktop, 2-col Tablet, 1-col Mobile Grid (25 cards) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-1">
                {frontLineMembers.map((member, idx) => (
                  <MemberCard key={member.id} member={member} index={idx} statusTab={statusTab} />
                ))}
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* SECTION: ALUMNI NETWORK (Exactly 10 cards: 3 + 3 + 3 + 1)          */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          {showAlumni && alumniMembers.length > 0 && (
            <div className="space-y-5 sm:space-y-6">
              {/* Alumni Header */}
              <div className="relative text-center pt-2 pb-1 space-y-2 sm:space-y-2.5">
                <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-950 dark:text-white tracking-tight leading-tight uppercase">
                  ALUMNI NETWORK
                </h2>
                <div className="flex items-center justify-center gap-2.5 sm:gap-4 max-w-xl mx-auto pt-0.5 px-2">
                  <div className="w-8 sm:w-16 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#0052cc] to-[#4895ef]" />
                  <p className="font-display font-black text-[11px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.28em] text-[#0052cc] dark:text-[#4895ef] uppercase text-center">
                    LEGACY &amp; STRATEGIC VISIONARIES
                  </p>
                  <div className="w-8 sm:w-16 h-[3px] rounded-full bg-gradient-to-l from-transparent via-[#0052cc] to-[#4895ef]" />
                </div>
              </div>

              {/* Category Divider */}
              <div className="flex items-center gap-3 sm:gap-4 pt-1 pb-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0052cc] dark:bg-[#4895ef] shrink-0" />
                <h3 className="font-display font-black text-xs sm:text-sm md:text-base tracking-[0.22em] text-slate-900 dark:text-white uppercase whitespace-nowrap">
                  {selectedTeam === 'ALL'
                    ? 'A L U M N I \u00A0 D I R E C T O R Y'
                    : selectedTeam === 'CORE TEAM'
                      ? 'L E A D E R S H I P \u00A0 A L U M N I'
                      : selectedTeam === 'TECH TEAM'
                        ? 'T E C H \u00A0 A L U M N I'
                        : selectedTeam === 'MEDIA TEAM'
                          ? 'M E D I A \u00A0 A L U M N I'
                          : 'P R \u00A0 & \u00A0 O U T R E A C H \u00A0 A L U M N I'}
                </h3>
                <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
              </div>

              {/* 3-col Desktop, 2-col Tablet, 1-col Mobile Grid (10 cards max) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-1">
                {alumniMembers.map((member, idx) => (
                  <MemberCard key={member.id} member={member} index={idx} statusTab={statusTab} />
                ))}
              </div>
            </div>
          )}

          {/* Empty Search State if no members match */}
          {totalMatchingCount === 0 && (
            <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-[32px] border-3 border-black shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] max-w-lg mx-auto space-y-4 my-8">
              <div className="w-16 h-16 bg-[#fde047] rounded-full border-3 border-black flex items-center justify-center mx-auto shadow-[3px_3px_0px_0px_#000]">
                <Search className="w-7 h-7 text-black stroke-[2.5]" />
              </div>
              <h3 className="font-display font-black text-2xl text-slate-900 dark:text-white">
                No members found
              </h3>
              <p className="font-body text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                We couldn&apos;t find any {statusTab.toLowerCase()} members matching &ldquo;{searchQuery || selectedTeam}&rdquo;. Try adjusting your filters or search terms.
              </p>
              <button
                onClick={clearAllFilters}
                className="px-6 py-2.5 rounded-full bg-black text-white font-display font-black text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-slate-800 active:translate-y-0.5 transition-all cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. JOIN THE TEAM CTA BANNER */}
      <section
        id="recruitment"
        className="pt-28 sm:pt-32 md:pt-36 pb-20 sm:pb-24 md:pb-28 scroll-mt-24 sm:scroll-mt-28 border-b-4 border-black relative overflow-hidden bg-[#fde047] text-slate-950"
      >
        <div className="absolute inset-0 bg-memphis-crosses pointer-events-none opacity-25 z-0" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6 relative z-10">
          <span className="inline-block px-4 py-1.5 bg-black text-white font-display font-black text-xs rounded-full uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_0px_#fff]">
            RECRUITMENTS 2026
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-black leading-tight">
            Want To Join The Hustle?
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-900 font-semibold max-w-xl mx-auto leading-relaxed">
            Become a part of the vibrant startup ecosystem at HIT Haldia. Work across Tech, Media, PR, Operations and Leadership domains.
          </p>
          <div className="pt-2">
            <Link
              href="/join"
              className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-black text-white hover:bg-slate-900 font-display font-black text-sm border-2 border-black shadow-[4px_4px_0px_0px_#fff] active:translate-y-0.5 transition-all"
            >
              Apply For Membership <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




