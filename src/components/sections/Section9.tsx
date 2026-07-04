import { motion } from 'motion/react';

interface SectionProps {
  id: string;
  isActive: boolean;
}

export function Section9({ id, isActive }: SectionProps) {
  return (
    <div
      id={id}
      className="w-screen h-screen min-h-screen max-h-screen overflow-hidden snap-start flex flex-col justify-center items-center relative p-8 bg-[#FCE7F3]"
    >
      <div className="max-w-7xl w-full text-center flex flex-col items-center justify-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight text-slate-900 uppercase"
        >
          Look around you.
        </motion.h2>

        <motion.div
          animate={isActive ? { scale: [1, 1.15, 1] } : { scale: 1 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="bg-slate-900 text-pink-400 px-8 py-4 md:px-16 md:py-8 border-8 border-pink-500 rounded-full shadow-[16px_16px_0px_0px_rgba(236,72,153,0.5)] my-8 transform -rotate-3"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-none">
            YES, YOU.
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight text-slate-900 uppercase"
        >
          You built this engine!
        </motion.h2>
      </div>
    </div>
  );
}
