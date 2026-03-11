import { motion } from "motion/react";
import { Activity, HeartPulse, Stethoscope, FileText } from "lucide-react";

export function Platform() {
  return (
    <section className="py-32 bg-[#050B14] relative overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-8">
              <Activity className="w-4 h-4" />
              <span>Aura Platform</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
              A unified operating system for modern healthcare.
            </h2>
            
            <p className="text-slate-400 text-lg md:text-xl mb-8 font-light leading-relaxed">
              Connect disparate data silos, automate administrative workflows, and unlock clinical insights with our comprehensive AI-native platform.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Longitudinal patient records",
                "Automated clinical documentation",
                "Predictive risk stratification",
                "Interoperable FHIR APIs"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="px-6 py-3 rounded-full bg-cyan-400 text-[#050B14] font-medium hover:bg-cyan-300 transition-colors">
              Explore Platform
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Abstract UI Representation */}
            <div className="aspect-[4/3] rounded-3xl bg-[#0A1526] border border-white/10 shadow-2xl overflow-hidden flex flex-col">
              {/* Header */}
              <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              
              {/* Body */}
              <div className="flex-1 p-6 flex gap-6">
                {/* Sidebar */}
                <div className="w-1/4 flex flex-col gap-4">
                  <div className="h-8 rounded-lg bg-white/5 w-full" />
                  <div className="h-8 rounded-lg bg-cyan-400/20 w-full border border-cyan-400/30" />
                  <div className="h-8 rounded-lg bg-white/5 w-3/4" />
                  <div className="h-8 rounded-lg bg-white/5 w-5/6" />
                </div>
                
                {/* Main Content */}
                <div className="flex-1 flex flex-col gap-6">
                  {/* Top Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 rounded-xl bg-white/5 border border-white/10 p-4 flex flex-col justify-between">
                      <HeartPulse className="w-5 h-5 text-red-400" />
                      <div className="h-2 w-1/2 bg-white/20 rounded-full" />
                    </div>
                    <div className="h-24 rounded-xl bg-white/5 border border-white/10 p-4 flex flex-col justify-between">
                      <Stethoscope className="w-5 h-5 text-cyan-400" />
                      <div className="h-2 w-2/3 bg-white/20 rounded-full" />
                    </div>
                    <div className="h-24 rounded-xl bg-white/5 border border-white/10 p-4 flex flex-col justify-between">
                      <FileText className="w-5 h-5 text-teal-400" />
                      <div className="h-2 w-1/3 bg-white/20 rounded-full" />
                    </div>
                  </div>
                  
                  {/* Chart Area */}
                  <div className="flex-1 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-6 relative overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path d="M0,100 Q20,80 40,90 T80,40 T100,50 L100,100 Z" fill="rgba(0,240,255,0.1)" />
                      <path d="M0,100 Q20,80 40,90 T80,40 T100,50" fill="none" stroke="rgba(0,240,255,0.5)" strokeWidth="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-1/4 bg-[#112240] border border-white/10 rounded-2xl p-4 shadow-xl backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-400/20 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Vitals Stable</div>
                  <div className="text-xs text-slate-400">Updated just now</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}