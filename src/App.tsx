import { useEffect, useState, useRef } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
  Section9,
  Section10,
} from './components/sections';

export default function App() {
  const [activeSection, setActiveSection] = useState(1);
  const totalSections = 10;
  const scrollingRef = useRef(false);

  useEffect(() => {
    if (activeSection === totalSections) return;

    const interval = setInterval(() => {
      if (!scrollingRef.current) {
        handleNext();
      }
    }, 12000);

    return () => clearInterval(interval);
  }, [activeSection]);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(`section-${index}`);
    if (element) {
      scrollingRef.current = true;
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(index);
      setTimeout(() => {
        scrollingRef.current = false;
      }, 1000);
    }
  };

  const handleNext = () => {
    if (activeSection < totalSections) {
      scrollToSection(activeSection + 1);
    }
  };

  const handlePrev = () => {
    if (activeSection > 1) {
      scrollToSection(activeSection - 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const index = parseInt(id.split('-')[1]);
            if (!isNaN(index) && !scrollingRef.current) {
              setActiveSection(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    for (let i = 1; i <= totalSections; i++) {
      const el = document.getElementById(`section-${i}`);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-900 font-sans selection:bg-pink-300 border-[12px] border-slate-900 flex flex-col">
      {/* Presentation Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-4 bg-slate-900/20 z-50 pointer-events-none">
        <div 
          className="h-full bg-pink-500 border-r-4 border-slate-900 transition-all duration-300 ease-out" 
          style={{ width: `${(activeSection / totalSections) * 100}%` }}
        ></div>
      </div>

      <div 
        className="w-full h-full overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar flex-1" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <Section1 id="section-1" isActive={activeSection === 1} />
        <Section2 id="section-2" isActive={activeSection === 2} />
        <Section3 id="section-3" isActive={activeSection === 3} />
        <Section4 id="section-4" isActive={activeSection === 4} />
        <Section5 id="section-5" isActive={activeSection === 5} />
        <Section6 id="section-6" isActive={activeSection === 6} />
        <Section7 id="section-7" isActive={activeSection === 7} />
        <Section8 id="section-8" isActive={activeSection === 8} />
        <Section9 id="section-9" isActive={activeSection === 9} />
        <Section10 id="section-10" isActive={activeSection === 10} />
      </div>

      {/* Floating Sidebar Navigation */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        <div className="bg-white/70 backdrop-blur-md border-4 border-slate-900 p-3 rounded-2xl shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] flex flex-col gap-4">
          <button
            onClick={handlePrev}
            disabled={activeSection === 1}
            className="p-3 bg-teal-400 hover:bg-teal-300 border-2 border-slate-900 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-teal-200"
            aria-label="Previous Section"
          >
            <ChevronUp className="w-6 h-6 text-slate-900 font-black" strokeWidth={3} />
          </button>
          <div className="h-px bg-slate-900/20 mx-2"></div>
          <button
            onClick={handleNext}
            disabled={activeSection === totalSections}
            className="p-3 bg-pink-500 hover:bg-pink-400 border-2 border-slate-900 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-pink-300"
            aria-label="Next Section"
          >
            <ChevronDown className="w-6 h-6 text-white font-black" strokeWidth={3} />
          </button>
        </div>
      </nav>

      {/* Footer Info */}
      <footer className="fixed bottom-0 left-0 w-full p-8 flex justify-between items-end pointer-events-none z-40">
        <div></div>
        
        <div className="relative">
          <div className="absolute -top-12 -left-12 transform -rotate-12 bg-white border-2 border-slate-900 px-4 py-1 font-black text-sm shadow-[4px_4px_0px_0px_#000]">
            YES, YOU.
          </div>
        </div>
      </footer>
      
      {/* Global Visual Accents (Overlaying content, with multiply blend) */}
      <div className="fixed bottom-16 right-64 w-32 h-32 bg-lime-300 rounded-full border-4 border-slate-900 z-30 opacity-40 pointer-events-none mix-blend-multiply transition-transform duration-1000" style={{ transform: `translateY(${(activeSection % 2) * -20}px)` }}></div>
      <div className="fixed top-32 left-16 w-16 h-16 bg-pink-400 rotate-45 border-4 border-slate-900 z-30 opacity-30 pointer-events-none mix-blend-multiply transition-transform duration-700" style={{ transform: `rotate(45deg) translateY(${(activeSection % 3) * 15}px)` }}></div>

      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
