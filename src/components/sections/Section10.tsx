import { motion } from 'motion/react';
import { Rocket } from 'lucide-react';

interface SectionProps {
  id: string;
  isActive: boolean;
}

export function Section10({ id, isActive }: SectionProps) {
  return (
    <div
      id={id}
      className="w-screen h-screen min-h-screen max-h-screen overflow-hidden snap-start flex flex-col justify-center items-center relative p-8 bg-gradient-to-tr from-rose-300 via-orange-300 to-amber-300 gap-12"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="w-full max-w-4xl aspect-video bg-white/90 backdrop-blur-sm border-8 border-slate-900 shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] rounded-3xl flex flex-col items-center justify-center p-8 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.05)_25%,rgba(0,0,0,0.05)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.05)_75%,rgba(0,0,0,0.05)_100%)] [background-size:20px_20px]" />
        
        <div className="relative z-10 flex flex-col items-center gap-6">
          <motion.div 
             animate={isActive ? { y: [-10, 10, -10] } : {}}
             transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
             className="w-24 h-24 bg-orange-400 rounded-full border-4 border-slate-900 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
          >
             <Rocket size={40} className="text-slate-900 fill-slate-900" />
          </motion.div>
          <h3 className="text-2xl md:text-4xl font-black text-slate-900 text-center uppercase px-6 py-3 bg-white border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rounded-xl transform rotate-2">
            [PLACEHOLDER: VIDEO 2 - PENCIL ROCKET LOOP]
          </h3>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 max-w-4xl mb-4 bg-white/80 inline-block px-4 py-2 border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transform -rotate-1">
          Here’s to the next 20 years of fueling rockets.
        </h2>
        <br/>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white drop-shadow-[4px_4px_0px_rgba(15,23,42,1)] uppercase inline-block mt-4 transform rotate-1">
          Have an amazing night!
        </h2>
      </motion.div>
    </div>
  );
}
