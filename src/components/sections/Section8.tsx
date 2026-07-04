import { motion } from 'motion/react';
import { Heart, ShieldCheck, Network } from 'lucide-react';

interface SectionProps {
  id: string;
  isActive: boolean;
}

export function Section8({ id, isActive }: SectionProps) {
  return (
    <div
      id={id}
      className="w-screen h-screen min-h-screen max-h-screen overflow-hidden snap-start flex flex-col justify-center items-center relative p-8 bg-[#F3E8FF] gap-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 text-center max-w-4xl"
      >
        Not a corporate board. <br/> Just a giant, <span className="text-purple-600 underline decoration-8 underline-offset-8">unstoppable family.</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ type: 'spring', delay: 0.2, stiffness: 200 }}
          className="bg-lime-400 border-4 border-slate-900 p-8 rounded-2xl shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col items-center justify-center text-center gap-4 min-h-[250px] md:col-span-2"
        >
          <Heart size={48} className="text-slate-900" />
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase">100% Local Genius</h3>
        </motion.div>
        
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ type: 'spring', delay: 0.4, stiffness: 200 }}
          className="bg-cyan-400 border-4 border-slate-900 p-8 rounded-2xl shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col items-center justify-center text-center gap-4 min-h-[250px]"
        >
          <ShieldCheck size={48} className="text-slate-900" />
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase">Dedicated Mentors</h3>
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ type: 'spring', delay: 0.6, stiffness: 200 }}
          className="bg-pink-400 border-4 border-slate-900 p-8 rounded-2xl shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col items-center justify-center text-center gap-4 min-h-[250px] md:col-span-3"
        >
          <Network size={48} className="text-slate-900" />
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase">The Global Alumni Network</h3>
        </motion.div>
      </div>
    </div>
  );
}
