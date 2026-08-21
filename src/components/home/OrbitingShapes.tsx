'use client';

import React from 'react';
import { Rocket, Disc, Circle, Triangle, Square, Zap, Star, Flame } from 'lucide-react';

export const OrbitingShapes: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none">
      <div className="absolute inset-0 rounded-full border border-dashed border-primary/20 dark:border-primary/40 animate-spin duration-[20000ms]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-orbit">
        <Disc className="w-8 h-8 text-primary animate-spin" />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-orbit [animation-delay:-7s]">
        <Star className="w-8 h-8 text-secondary fill-current" />
      </div>
    </div>
  );
};
