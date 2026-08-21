export type MemberRole = 'President' | 'Vice President' | 'Lead' | 'Executive' | 'Mentor';
export type Department = 'Tech' | 'Events' | 'PR & Marketing' | 'Design' | 'Finance' | 'Operations';

export interface MemberItem {
  id: string;
  name: string;
  role: MemberRole;
  department: Department;
  avatarUrl: string;
  linkedinUrl?: string;
  githubUrl?: string;
  bio: string;
}
