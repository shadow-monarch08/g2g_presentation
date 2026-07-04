import { motion } from 'motion/react';
import { Play } from 'lucide-react';

interface SectionProps {
  id: string;
  isActive: boolean;
}

export function Section5({ id, isActive }: SectionProps) {
  return (
    <div
      id={id}
      className="w-screen h-screen min-h-screen max-h-screen overflow-hidden snap-start flex flex-col justify-center items-center relative p-8 bg-[#E0F2FE] gap-10"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-full max-w-4xl aspect-video bg-white border-8 border-slate-900 shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] rounded-3xl flex flex-col items-center justify-center p-8 relative overflow-hidden group"
      >
        {/* Placeholder Pattern Background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0f172a_2px,transparent_2px)] [background-size:20px_20px]" />
        
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="w-24 h-24 bg-pink-400 rounded-full border-4 border-slate-900 flex items-center justify-center pl-2 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] group-hover:scale-110 transition-transform cursor-pointer">
             <Play size={40} className="text-slate-900" fill="currentColor" />
          </div>
          <h3 className="text-2xl md:text-4xl font-black text-slate-900 text-center uppercase px-4 py-2 bg-yellow-300 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rounded-xl transform -rotate-2">
            [PLACEHOLDER: VIDEO 1 - CLAYMATION HIGH-FIVE LOOP]
          </h3>
        </div>
      </motion.div>

      <motion.h2
        initial={{ rotateX: 90, opacity: 0 }}
        animate={isActive ? { rotateX: 0, opacity: 1 } : { rotateX: 90, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
        style={{ transformPerspective: 1000 }}
        className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 text-center max-w-4xl"
      >
        The Glow-Up is Real. <br/>
        <span className="text-pink-500">Families transformed, careers launched.</span>
      </motion.h2>
    </div>
  );
}
