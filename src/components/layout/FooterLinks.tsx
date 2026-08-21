'use client';

import React from 'react';
import Link from 'next/link';

export const FooterLinks: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      <div>
        <h4 className="font-display font-black text-lg mb-4 text-white">Navigation</h4>
        <ul className="space-y-2 text-sm font-body text-slate-300">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
          <li><Link href="/events" className="hover:text-primary transition-colors">Events</Link></li>
          <li><Link href="/startups" className="hover:text-primary transition-colors">Startups</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display font-black text-lg mb-4 text-white">Portals</h4>
        <ul className="space-y-2 text-sm font-body text-slate-300">
          <li><Link href="/idea-pitching" className="hover:text-primary transition-colors">Idea Pitching</Link></li>
          <li><Link href="/join" className="hover:text-primary transition-colors">Recruitment / Join Us</Link></li>
          <li><Link href="/team" className="hover:text-primary transition-colors">Team Members</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display font-black text-lg mb-4 text-white">Contact</h4>
        <p className="text-sm text-slate-300 mb-2">HIT Haldia Campus, West Bengal</p>
        <p className="text-sm text-primary font-bold">ecell@hithaldia.ac.in</p>
      </div>
    </div>
  );
};
