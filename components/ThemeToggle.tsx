"use client";
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const t = localStorage.getItem('theme') || 'dark';
    setTheme(t);
    document.documentElement.setAttribute('data-theme', t);
  }, []);

  const toggle = () => {
    const nt = theme === 'dark' ? 'light' : 'dark';
    setTheme(nt);
    localStorage.setItem('theme', nt);
    document.documentElement.setAttribute('data-theme', nt);
  };

  return (
    <button onClick={toggle} className="px-3 py-2 rounded-lg bg-white/6 text-sm">
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}
