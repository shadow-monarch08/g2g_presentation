import { motion } from 'motion/react';

interface SectionProps {
  id: string;
  isActive: boolean;
}

export function Section3({ id, isActive }: SectionProps) {
  return (
    <div
      id={id}
      className="w-screen h-screen min-h-screen max-h-screen overflow-hidden snap-start flex flex-col md:flex-row justify-center items-center relative p-8 md:p-16 bg-gradient-to-br from-teal-400 to-yellow-300 gap-12"
    >
      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start z-10">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 drop-shadow-sm uppercase leading-tight"
        >
          Boom. <br className="hidden md:block" />
          <span className="text-white text-stroke-3 text-stroke-slate-900" style={{ WebkitTextStroke: '4px #0f172a' }}>
            That’s where we drop the key.
          </span>
        </motion.h2>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center h-full max-h-[60vh] md:max-h-full">
        <motion.div
          initial={{ scale: 0, rotate: -15 }}
          animate={isActive ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -15 }}
          transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.4 }}
          className="w-full h-full flex items-center justify-center relative"
        >
          <img
            src="http://googleusercontent.com/image_generation_content/1"
            alt="The Key"
            className="w-full h-full max-h-[80%] object-contain scale-100 drop-shadow-[16px_16px_0px_rgba(15,23,42,1)] border-8 border-slate-900 rounded-[2rem] bg-white p-4"
          />
        </motion.div>
      </div>
    </div>
  );
}
