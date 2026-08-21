export type EventCategory = 'Hackathon' | 'Workshop' | 'Pitching' | 'Summit' | 'Webinar';

export interface EventItem {
  id: string;
  title: string;
  category: EventCategory;
  date: string;
  time: string;
  location: string;
  description: string;
  bannerUrl: string;
  registrationOpen: boolean;
  prizePool?: string;
  tags: string[];
}

export interface EventFilter {
  category: EventCategory | 'All';
  searchQuery: string;
}
