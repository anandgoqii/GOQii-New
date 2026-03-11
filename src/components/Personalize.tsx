import { motion } from "motion/react";
import { Watch, Users, ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

export function Personalize() {
  return (
    <section id="personalize" className="py-32 bg-navy-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-glow/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-glow/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="text-cyan-glow text-sm font-medium tracking-wide uppercase">Personalize</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
              PERSONALIZE Your Health Architecture with Adaptive Intelligence
            </h2>
            
            <p className="text-slate-400 text-lg md:text-xl mb-12 font-light leading-relaxed">
              We combine sentient wearables, AI digital twins, and expert human coaching to map a dynamic pathway just for you.
            </p>

            <div className="space-y-8">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-cyan-glow/20 flex items-center justify-center mb-6">
                  <Watch className="w-6 h-6 text-cyan-glow" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Sentient Devices & Wearables
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Track real-time physiological entropy with the GOQii Smart Devices, combined with best in class technology.
                </p>
                <button className="inline-flex items-center gap-2 text-cyan-glow font-medium hover:text-white transition-colors">
                  Shop Devices & Plans <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-teal-glow/20 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-teal-glow" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Expert Coaching Ecosystem
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Work directly with certified doctors, physiotherapists, and nutritionists to build sustainable habits tailored to your unique biomarkers.
                </p>
                <button className="inline-flex items-center gap-2 text-teal-glow font-medium hover:text-white transition-colors">
                  Book a Free Consultation Callback <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[600px] lg:h-[800px] flex items-center justify-center"
          >
            {/* 3D Digital Twin Representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Abstract Human Silhouette */}
              <svg viewBox="0 0 200 400" className="w-full max-w-sm h-auto opacity-80" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(6,182,212,0.3)" />
                    <stop offset="100%" stopColor="rgba(20,184,166,0.1)" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Head */}
                <circle cx="100" cy="40" r="25" fill="url(#bodyGrad)" stroke="rgba(6,182,212,0.5)" strokeWidth="1" />
                
                {/* Body */}
                <path d="M 60 90 Q 100 70 140 90 L 150 180 Q 100 200 50 180 Z" fill="url(#bodyGrad)" stroke="rgba(6,182,212,0.5)" strokeWidth="1" />
                
                {/* Arms */}
                <path d="M 50 100 Q 20 150 30 220" fill="none" stroke="rgba(6,182,212,0.5)" strokeWidth="15" strokeLinecap="round" />
                <path d="M 150 100 Q 180 150 170 220" fill="none" stroke="rgba(6,182,212,0.5)" strokeWidth="15" strokeLinecap="round" />
                
                {/* Legs */}
                <path d="M 70 190 Q 60 280 60 360" fill="none" stroke="rgba(6,182,212,0.5)" strokeWidth="18" strokeLinecap="round" />
                <path d="M 130 190 Q 140 280 140 360" fill="none" stroke="rgba(6,182,212,0.5)" strokeWidth="18" strokeLinecap="round" />

                {/* Data Points / Wearables */}
                <circle cx="100" cy="140" r="4" fill="#00F0FF" filter="url(#glow)" />
                <circle cx="35" cy="180" r="4" fill="#00E5C0" filter="url(#glow)" />
                <circle cx="165" cy="180" r="4" fill="#00F0FF" filter="url(#glow)" />
                <circle cx="100" cy="40" r="4" fill="#00E5C0" filter="url(#glow)" />
              </svg>

              {/* Orbital Data Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-cyan-glow/20"
                  style={{
                    rotateX: 70,
                    rotateY: i * 30,
                  }}
                  animate={{
                    rotateZ: 360,
                  }}
                  transition={{
                    duration: 20 + i * 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-cyan-glow shadow-[0_0_10px_#00F0FF]" />
                </motion.div>
              ))}

              {/* Floating Data Cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -right-4 md:right-10 bg-navy-800/80 border border-white/10 rounded-2xl p-4 shadow-xl backdrop-blur-md"
              >
                <div className="text-xs text-slate-400 mb-1">Heart Rate</div>
                <div className="text-xl font-semibold text-white flex items-baseline gap-1">
                  62 <span className="text-xs font-normal text-teal-glow">bpm</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/3 -left-4 md:left-10 bg-navy-800/80 border border-white/10 rounded-2xl p-4 shadow-xl backdrop-blur-md"
              >
                <div className="text-xs text-slate-400 mb-1">Sleep Score</div>
                <div className="text-xl font-semibold text-white flex items-baseline gap-1">
                  94 <span className="text-xs font-normal text-cyan-glow">/100</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
