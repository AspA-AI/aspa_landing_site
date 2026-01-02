'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'default' | 'purple' | 'blue';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  // Remove all theme classes
  root.classList.remove('theme-default', 'theme-purple', 'theme-blue');
  // Add the current theme class with theme- prefix
  const themeClass = `theme-${theme}`;
  root.classList.add(themeClass);
  // Also add a data-theme attribute for easier CSS targeting
  root.setAttribute('data-theme', theme);
  // Store in localStorage
  localStorage.setItem('theme', theme);
  
  console.log('Applied theme:', themeClass); // Debug log
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('default');
  const [isMounted, setIsMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;
    
    // Get saved theme or default to 'default'
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const initialTheme = (savedTheme && ['default', 'purple', 'blue'].includes(savedTheme)) ? savedTheme as Theme : 'default';
    
    console.log('Initial theme:', initialTheme); // Debug log
    
    // Apply the theme
    applyTheme(initialTheme);
    setTheme(initialTheme);
    setIsMounted(true);
    
    // Handle system preference changes (for future use)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (!localStorage.getItem('theme')) {
        const newTheme = mediaQuery.matches ? 'default' : 'default';
        applyTheme(newTheme);
        setTheme(newTheme);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Update theme when it changes
  useEffect(() => {
    if (!isMounted) return;
    applyTheme(theme);
  }, [theme, isMounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      if (prevTheme === 'default') return 'purple';
      if (prevTheme === 'purple') return 'blue';
      return 'default';
    });
  };

  // Prevent hydration mismatch by only rendering children when mounted
  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
