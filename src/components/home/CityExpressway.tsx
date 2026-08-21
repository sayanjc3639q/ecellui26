'use client';

import React from 'react';

export const CityExpressway: React.FC = () => {
  return (
    <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none pointer-events-none h-32">
      {/* City Skyline Buildings in Background */}
      <div className="absolute bottom-10 inset-x-0 flex items-end justify-around opacity-30 text-slate-400">
        <div className="w-12 h-20 bg-slate-300 border-2 border-black rounded-t-md" />
        <div className="w-16 h-28 bg-slate-300 border-2 border-black rounded-t-md" />
        <div className="w-10 h-16 bg-slate-300 border-2 border-black rounded-t-md" />
        <div className="w-20 h-24 bg-slate-300 border-2 border-black rounded-t-md" />
        <div className="w-14 h-20 bg-slate-300 border-2 border-black rounded-t-md" />
      </div>

      {/* Expressway Road Surface */}
      <div className="absolute bottom-0 inset-x-0 h-10 bg-slate-900 border-t-4 border-black">
        <div className="w-full h-full border-t-2 border-dashed border-yellow-400 mt-4 opacity-80" />
      </div>

      {/* Car Driving Across Expressway */}
      <div className="absolute bottom-3 left-0 animate-car-drive z-10">
        <svg className="w-20 h-10 text-primary drop-shadow-[2px_2px_0px_#000]" viewBox="0 0 100 50" fill="none">
          {/* Car Body */}
          <path d="M10 35 L20 20 L40 18 L70 20 L90 35 Z" fill="#FF6B35" stroke="#000" strokeWidth="3" />
          {/* Windows */}
          <path d="M25 22 L38 20 L38 32 L25 32 Z" fill="#D8F3DC" stroke="#000" strokeWidth="2" />
          <path d="M42 20 L65 22 L65 32 L42 32 Z" fill="#D8F3DC" stroke="#000" strokeWidth="2" />
          {/* Wheels */}
          <circle cx="30" cy="38" r="8" fill="#1A1B1E" stroke="#fff" strokeWidth="2" />
          <circle cx="70" cy="38" r="8" fill="#1A1B1E" stroke="#fff" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};
