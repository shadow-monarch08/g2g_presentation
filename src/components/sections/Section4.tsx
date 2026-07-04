import { motion } from 'motion/react';
import { Laptop, Zap, Users } from 'lucide-react';

interface SectionProps {
  id: string;
  isActive: boolean;
}

export function Section4({ id, isActive }: SectionProps) {
  const cards = [
    { title: "High-Tech Laptops", icon: Laptop, color: "bg-cyan-300" },
    { title: "Superhero Mentors", icon: Zap, color: "bg-yellow-300" },
    { title: "Global Alumni Crew", icon: Users, color: "bg-pink-300" },
  ];

  return (
    <div
      id={id}
      className="w-screen h-screen min-h-screen max-h-screen overflow-hidden snap-start flex flex-col justify-center items-center relative p-8 bg-[#F9F6EE] gap-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 text-center max-w-5xl px-4"
      >
        We don't just hand over a cheque. We hand over the <span className="text-pink-500 underline decoration-8 underline-offset-8">ultimate launchpad.</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isActive ? { opacity: 1, y: [-15, 15, -15] } : { opacity: 0, y: 50 }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                  delay: idx * 0.4,
                },
                opacity: { duration: 0.5, delay: idx * 0.2 },
              }}
              className="bg-white border-4 border-slate-900 p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] rounded-2xl flex flex-col items-center text-center gap-6"
            >
              <div className={`p-6 rounded-full border-4 border-slate-900 ${card.color} shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]`}>
                <Icon size={48} className="text-slate-900" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900">{card.title}</h3>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
