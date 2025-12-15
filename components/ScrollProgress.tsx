"use client";
import { useEffect } from 'react';

export default function ScrollProgress() {
  useEffect(() => {
    const el = document.getElementById('scroll-progress');
    if (!el) return;
    const onScroll = () => {
      const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = height ? (scrolled / height) * 100 : 0;
      el.style.width = pct + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div id="scroll-progress" />;
}
