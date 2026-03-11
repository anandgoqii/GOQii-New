import { motion } from "motion/react";
import { ArrowRight, Dna, Activity } from "lucide-react";
import { cn } from "@/src/lib/utils";

export function Predict() {
  return (
    <section id="predict" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-navy-900/5 border border-navy-900/10 mb-6"
          >
            <span className="text-navy-900 text-sm font-medium tracking-wide uppercase">Predict</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-navy-900 mb-6"
          >
            PREDICT Your Biological Destiny
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            We assess every variable to optimize your biological and cognitive aging through advanced diagnostics and longevity intelligence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 hover:shadow-xl transition-all group relative overflow-hidden flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-glow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-glow/10 transition-colors" />
            
            <div className="w-14 h-14 rounded-2xl bg-navy-900 flex items-center justify-center mb-8 relative z-10">
              <Dna className="w-7 h-7 text-cyan-glow" />
            </div>
            
            <h3 className="text-2xl font-semibold text-navy-900 mb-4 relative z-10">
              GOQii Sanjeevini
            </h3>
            
            <p className="text-slate-600 leading-relaxed mb-10 flex-1 relative z-10">
              Decode your organ-specific lifespan using predictive genomics, liquid biopsy, and cfDNA bio-signals. Backed by clinical rigor, Team Sanjeevini is the only Top 40 Milestone Award Winning Team from India in the global $101M XPRIZE Healthspan competition.
            </p>
            
            <button className="inline-flex items-center gap-2 text-navy-900 font-medium hover:text-cyan-glow transition-colors relative z-10 mt-auto w-fit">
              Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 hover:shadow-xl transition-all group relative overflow-hidden flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-glow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-teal-glow/10 transition-colors" />
            
            <div className="w-14 h-14 rounded-2xl bg-navy-900 flex items-center justify-center mb-8 relative z-10">
              <Activity className="w-7 h-7 text-teal-glow" />
            </div>
            
            <h3 className="text-2xl font-semibold text-navy-900 mb-4 relative z-10">
              GOQii SuperLife
            </h3>
            
            <p className="text-slate-600 leading-relaxed mb-10 flex-1 relative z-10">
              Combine elite science with holistic health practices to preserve mobility, cognitive function, and emotional resilience.
            </p>
            
            <button className="inline-flex items-center gap-2 text-navy-900 font-medium hover:text-teal-glow transition-colors relative z-10 mt-auto w-fit">
              Optimize your healthspan <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
