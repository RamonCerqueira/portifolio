"use client";
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function Providers({ children }: { children: React.ReactNode }) {
  // Simple theme persistence
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return <AnimatePresence mode="wait">{children}</AnimatePresence>
}
