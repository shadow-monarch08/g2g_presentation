import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface SectionProps {
  id: string;
  isActive: boolean;
}

export function Section6({ id, isActive }: SectionProps) {
  // To avoid hydration mismatches or complex infinite loops, 
  // we can use a CSS animation or motion array translation for the marquee.
  const text = "The Twist? They didn't just walk through the door. They turned right around and held it open for the next kid! • ";
  const repeatedText = text.repeat(4); // Repeat enough times to cover screen

  return (
    <div
      id={id}
      className="w-screen h-screen min-h-screen max-h-screen overflow-hidden snap-start flex flex-col justify-center items-center relative bg-[#FAFAFA]"
    >
      <div className="w-full bg-pink-500 border-y-8 border-slate-900 py-6 overflow-hidden flex whitespace-nowrap shadow-[0px_16px_0px_0px_rgba(15,23,42,1)] transform -rotate-2 scale-110">
        <motion.div
          animate={isActive ? { x: [0, -2000] } : { x: 0 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          <span className="text-4xl md:text-6xl lg:text-7xl font-black text-lime-400 drop-shadow-[4px_4px_0px_rgba(15,23,42,1)] px-4 uppercase tracking-wider">
            {repeatedText}
          </span>
        </motion.div>
      </div>
    </div>
  );
}
