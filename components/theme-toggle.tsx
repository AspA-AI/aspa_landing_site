'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/theme-context';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const getThemeIcon = () => {
    switch(theme) {
      case 'purple':
        return <Moon className="h-3 w-3 text-white" />;
      case 'blue':
        return <Sun className="h-3 w-3 text-white" />;
      default: // default (green/gold)
        return <Sun className="h-3 w-3 text-white" />;
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-6 w-16 items-center rounded-full border border-border bg-background p-0.5 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`flex h-5 w-5 transform items-center justify-center rounded-full transition-transform ${
          theme === 'default' ? 'translate-x-0 bg-green-500' : 
          theme === 'purple' ? 'translate-x-5 bg-purple-500' : 
          'translate-x-10 bg-blue-500'
        }`}
      >
        {getThemeIcon()}
      </span>
    </button>
  );
}
