'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden z-[9999]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          {/* Neon grid */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#0ff3_1px,transparent_1px),linear-gradient(90deg,#0ff3_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          {/* Pulsing orb */}
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: [0.4, 1.2, 1], opacity: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            className="absolute w-[380px] h-[380px] rounded-full bg-cyan-500 blur-[80px] opacity-40"
          />

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2 }}
            className="text-6xl font-extrabold tracking-widest text-cyan-400 drop-shadow-[0_0_15px_#0ff]"
          >
            RAMON CERQUEIRA
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -10 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="absolute mt-24 text-xl text-cyan-200 tracking-[0.3em]"
          >
            Desenvolvedor FrontEnd
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
