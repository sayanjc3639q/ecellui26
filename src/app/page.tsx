import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { ECellPulse } from '@/components/home/ECellPulse';
import { FindYourPath } from '@/components/home/FindYourPath';
import { HubDashboardSection } from '@/components/home/HubDashboardSection';
import { SpiritOfInnovation } from '@/components/home/SpiritOfInnovation';
import { OurAchievements } from '@/components/home/OurAchievements';
import { CapturedInMotion } from '@/components/home/CapturedInMotion';
import { GuidanceThatEmpowers } from '@/components/home/GuidanceThatEmpowers';
import { MeetOurTeamHome } from '@/components/home/MeetOurTeamHome';
import { WhatOurMembersSay } from '@/components/home/WhatOurMembersSay';
import { CtaBanner } from '@/components/home/CtaBanner';
import { GsapScrollProvider } from '@/components/common/GsapScrollProvider';

export default function HomePage() {
  return (
    <GsapScrollProvider>
      <HeroSection />
      <ECellPulse />
      <FindYourPath />
      <HubDashboardSection />
      <SpiritOfInnovation />
      <OurAchievements />
      <CapturedInMotion />
      <GuidanceThatEmpowers />
      <MeetOurTeamHome />
      <WhatOurMembersSay />
      <CtaBanner />
    </GsapScrollProvider>
  );
}

