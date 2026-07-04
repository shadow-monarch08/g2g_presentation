import { motion } from 'motion/react';

interface SectionProps {
  id: string;
  isActive: boolean;
}

export function Section2({ id, isActive }: SectionProps) {
  return (
    <div
      id={id}
      className="w-screen h-screen min-h-screen max-h-screen overflow-hidden snap-start flex flex-col justify-center items-center relative p-8 bg-[#FFFDD0]"
    >
      <motion.div
        initial={{ y: -500, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: -500, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.2 }}
        className="w-full max-w-3xl h-48 md:h-64 mb-12 bg-[#FF7F50] border-8 border-slate-900 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] rounded-2xl relative overflow-hidden"
      >
        {/* Stylized Brick Pattern */}
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: 'linear-gradient(335deg, rgba(0,0,0,0.5) 23px, transparent 23px), linear-gradient(155deg, rgba(0,0,0,0.5) 23px, transparent 23px), linear-gradient(335deg, rgba(0,0,0,0.5) 23px, transparent 23px), linear-gradient(155deg, rgba(0,0,0,0.5) 23px, transparent 23px)',
          backgroundSize: '58px 58px',
          backgroundPosition: '0px 2px, 4px 35px, 29px 31px, 34px 6px'
        }} />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-slate-900 rounded-full flex items-center justify-center shadow-inner">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-200 rounded-full flex flex-col items-center pt-2 md:pt-4">
                     <div className="w-6 h-8 md:w-8 md:h-12 border-4 border-slate-900 rounded-t-full bg-slate-200"></div>
                     <div className="w-10 h-8 md:w-12 md:h-10 bg-slate-900 rounded-sm -mt-2"></div>
                </div>
            </div>
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={
          isActive 
            ? { 
                opacity: 1, 
                x: [-12, 12, -12, 10, -10, 0], 
                color: ["#0f172a", "#ea580c", "#0f172a", "#ea580c"] 
              } 
            : { opacity: 0 }
        }
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-center max-w-4xl"
      >
        ...but great opportunities? Those usually come with a giant lock on the door.
      </motion.h2>
    </div>
  );
}
