export type ThemeMode = 'light' | 'dark';

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface QuickStat {
  id: string;
  label: string;
  value: string;
  bgColor: string;
}

export interface BaseResponse<T> {
  data: T;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
