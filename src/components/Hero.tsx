import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

const rotatingWords = ["Predict", "Personalize", "Prevent", "Prosper"];

export function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-navy-900 flex items-center justify-center pt-20">
      {/* AI Neural Network & DNA Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,transparent_60%)]" />
        
        {/* Abstract DNA / Neural Network rendering */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(6,182,212,0.2)" />
              <stop offset="100%" stopColor="rgba(20,184,166,0.2)" />
            </linearGradient>
          </defs>
          {[...Array(15)].map((_, i) => (
            <motion.path
              key={`dna-${i}`}
              d={`M ${-100 + i * 100} ${Math.sin(i) * 200 + 400} Q ${200 + i * 100} ${Math.cos(i) * 300 + 200} ${500 + i * 100} ${Math.sin(i) * 200 + 600} T ${1100 + i * 100} ${Math.cos(i) * 200 + 400}`}
              fill="none"
              stroke="url(#grad1)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear", delay: i * 0.5 }}
            />
          ))}
        </svg>

        {/* Data Streams */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute w-px h-24 bg-gradient-to-b from-transparent via-cyan-glow/50 to-transparent"
            initial={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{
              top: `110%`,
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Neural Nodes */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-teal-glow/40"
            initial={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              scale: 0,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <span className="text-cyan-glow text-sm font-medium tracking-wide uppercase">The Operating System for Human Longevity</span>
        </motion.div>
        
        <div className="h-[120px] md:h-[140px] flex items-center justify-center overflow-hidden mb-6">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentWord}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 1.1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl text-white font-semibold tracking-tighter"
            >
              {rotatingWords[currentWord]}.
            </motion.h1>
          </AnimatePresence>
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-slate-300 text-lg md:text-xl max-w-3xl mb-12 font-light leading-relaxed"
        >
          We are redefining healthspan with an AI-driven system that combines genomics, real-time data and neuroadaptive technology to rejuvenate aging and boost vitality.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-navy-900 font-medium hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 text-base">
            <Play className="w-4 h-4 fill-current" /> Watch How GOQii Works
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors border border-white/10 backdrop-blur-sm flex items-center justify-center gap-2 text-base">
            Request a Demo <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
      
      {/* Marquee Banner */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-navy-900/50 backdrop-blur-md overflow-hidden py-4">
        <motion.div 
          className="flex whitespace-nowrap items-center gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 text-slate-400 text-sm font-medium tracking-widest uppercase">
              <span>Predict</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow" />
              <span>Personalize</span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-glow" />
              <span>Prevent</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow" />
              <span>Prosper</span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-glow" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
