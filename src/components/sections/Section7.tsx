import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface SectionProps {
  id: string;
  isActive: boolean;
}

const useCounter = (end: number, duration: number, isActive: boolean, isFloat = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setCount(0);
      return;
    }
    
    let startTimestamp: number | null = null;
    let animationFrameId: number;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing out function for smoother stop
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(easeOutQuart * end);
      
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };
    
    animationFrameId = window.requestAnimationFrame(step);
    
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [end, duration, isActive]);

  return isFloat ? count.toFixed(1) : Math.floor(count);
};

export function Section7({ id, isActive }: SectionProps) {
  const dreams = useCounter(1000, 2500, isActive);
  const crores = useCounter(24.5, 3000, isActive, true);
  const cycles = useCounter(362, 2800, isActive);

  return (
    <div
      id={id}
      className="w-screen h-screen min-h-screen max-h-screen overflow-hidden snap-start flex flex-col justify-center items-center relative p-8 md:p-16 bg-[#FEF08A]"
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          className="transform -rotate-2"
        >
          <h2 className="text-slate-900 text-sm font-black uppercase tracking-widest bg-white/80 px-4 py-1 border-2 border-slate-900 inline-block mb-4">
            Current Achievement
          </h2>
          <h1 className="text-6xl md:text-[110px] font-black leading-[0.85] text-slate-900 tracking-tighter drop-shadow-sm">
            THE<br/>SCOREBOARD
          </h1>
        </motion.div>
        
        {/* Section Badge */}
        <motion.div 
          initial={{ scale: 0, rotate: -45 }}
          animate={isActive ? { scale: 1, rotate: 12 } : { scale: 0, rotate: -45 }}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-teal-400 border-4 border-slate-900 flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]"
        >
          <span className="font-black text-4xl md:text-5xl text-slate-900">07</span>
        </motion.div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Panel 1 */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white border-4 border-slate-900 p-8 rounded-2xl shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transform hover:-translate-y-2 transition-transform"
        >
          <div className="w-12 h-12 bg-pink-100 border-2 border-slate-900 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
          </div>
          <div className="text-5xl font-black text-slate-900 mb-2 tracking-tight">{dreams}+</div>
          <div className="text-lg font-bold text-slate-600 uppercase tracking-wide leading-tight">Dreams Funded 🚀</div>
        </motion.div>

        {/* Panel 2 */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white border-4 border-slate-900 p-8 rounded-2xl shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transform md:rotate-1 hover:-translate-y-2 transition-transform"
        >
          <div className="w-12 h-12 bg-teal-100 border-2 border-slate-900 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div className="text-5xl font-black text-slate-900 mb-2 tracking-tight">₹{crores}+</div>
          <div className="text-lg font-bold text-slate-600 uppercase tracking-wide leading-tight">Crores Dropped 💰</div>
        </motion.div>

        {/* Panel 3 */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white border-4 border-slate-900 p-8 rounded-2xl shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transform md:-rotate-1 hover:-translate-y-2 transition-transform"
        >
          <div className="w-12 h-12 bg-purple-100 border-2 border-slate-900 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          </div>
          <div className="text-5xl font-black text-slate-900 mb-2 tracking-tight">{cycles}+</div>
          <div className="text-lg font-bold text-slate-600 uppercase tracking-wide leading-tight">Cycles Completed 🔄</div>
        </motion.div>
      </div>
    </div>
  );
}
