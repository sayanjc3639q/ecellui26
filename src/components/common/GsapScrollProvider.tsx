'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const GsapScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // 1. Hero Entrance Stagger
    const heroElements = document.querySelectorAll('.gsap-hero-item');
    if (heroElements.length > 0) {
      gsap.fromTo(
        heroElements,
        { y: 40, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );
    }

    // 2. Scroll Trigger Sections Reveal
    const sections = document.querySelectorAll('.gsap-section-reveal');
    sections.forEach((sec) => {
      gsap.fromTo(
        sec,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // 3. Staggered Memphis Cards Reveal
    const cardGrids = document.querySelectorAll('.gsap-cards-grid');
    cardGrids.forEach((grid) => {
      const cards = grid.querySelectorAll('.memphis-card, .gsap-card-item');
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: grid,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
};
