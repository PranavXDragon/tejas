'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import Preloader from '@/components/Preloader';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Preloader />
      {children}
    </ThemeProvider>
  );
}
