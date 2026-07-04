import { motion } from 'motion/react';

interface SectionProps {
  id: string;
  isActive: boolean;
}

export function Section1({ id, isActive }: SectionProps) {
  const text = "Spoiler alert: Great talent is born everywhere...";
  const words = text.split(" ");

  return (
    <div
      id={id}
      className="w-screen h-screen min-h-screen max-h-screen overflow-hidden snap-start flex flex-col justify-center items-center relative p-8 bg-[#F2E7FE]"
    >
      <motion.div
        animate={isActive ? { y: [-30, 30, -30] } : { y: 0 }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-pink-500 border-[6px] border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] mb-12"
      />
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 drop-shadow-sm text-center max-w-5xl flex flex-wrap justify-center gap-x-4 gap-y-2">
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: index * 0.15,
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </h1>
    </div>
  );
}
