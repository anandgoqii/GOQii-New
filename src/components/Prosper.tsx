import { motion } from "motion/react";
import { ArrowRight, Building2, HeartHandshake, Briefcase, Coins } from "lucide-react";
import { cn } from "@/src/lib/utils";

export function Prosper() {
  return (
    <section id="prosper" className="py-32 bg-navy-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-cyan-glow/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-glow/10 rounded-full blur-[100px] translate-y-1/3 translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="text-cyan-glow text-sm font-medium tracking-wide uppercase">Prosper</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white mb-6"
          >
            PROSPER Through AI-Driven Proof-of-Health Solutions at Scale
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Delivering Dynamic Motivation through value-based care solutions for global organizations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col h-full"
          >
            <div className="w-14 h-14 rounded-2xl bg-cyan-glow/20 flex items-center justify-center mb-8">
              <Building2 className="w-7 h-7 text-cyan-glow" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              For Payers & Insurers
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8 flex-1">
              Leverage AI-driven Health Risk Quantification and our unique PPP (Predict, Personalize, Prevent) dynamic premium model to lower claims. Achieved a 34% drop in ER visits.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col h-full"
          >
            <div className="w-14 h-14 rounded-2xl bg-teal-glow/20 flex items-center justify-center mb-8">
              <HeartHandshake className="w-7 h-7 text-teal-glow" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              For Providers & Public Health
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8 flex-1">
              Deploy digital health pathways and Clinical Triage, validated by the UK NHS and Modality Partnership. Achieved 90% patient satisfaction in government-supported care programs.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-auto">
              <button className="inline-flex items-center gap-2 text-teal-glow font-medium hover:text-white transition-colors">
                Explore GOQii Health Engage <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 text-slate-300 font-medium hover:text-white transition-colors">
                Request a Demo <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col h-full"
          >
            <div className="w-14 h-14 rounded-2xl bg-cyan-glow/20 flex items-center justify-center mb-8">
              <Briefcase className="w-7 h-7 text-cyan-glow" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              For Employers
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8 flex-1">
              Transform corporate wellness into an AI-driven, human centric gamified wellness programs. Increased employee engagement and reduced absenteeism by 85% in Fortune 500 companies.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-auto">
              <button className="inline-flex items-center gap-2 text-cyan-glow font-medium hover:text-white transition-colors">
                Explore Corporate Wellness Solutions <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 text-slate-300 font-medium hover:text-white transition-colors">
                Request a Callback <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-cyan-glow/20 to-teal-glow/10 border border-cyan-glow/30 rounded-3xl p-10 backdrop-blur-sm hover:bg-cyan-glow/20 transition-colors flex flex-col h-full relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-glow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-glow/30 transition-colors" />
            
            <div className="w-14 h-14 rounded-2xl bg-navy-900 border border-cyan-glow/30 flex items-center justify-center mb-8 relative z-10">
              <Coins className="w-7 h-7 text-cyan-glow" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 relative z-10">
              Health is the foundation of future prosperity
            </h3>
            <p className="text-slate-300 leading-relaxed mb-8 flex-1 relative z-10">
              UHT is a Web3 protocol that continuously analyzes wearable data. Earn and redeem tokens across 300+ wellness brands by hitting daily goals, while securely sharing anonymized data to fuel Decentralized Science (DeSci) and global AI healthcare research.
            </p>
            <button className="inline-flex items-center gap-2 text-white font-medium hover:text-cyan-glow transition-colors relative z-10 mt-auto w-fit">
              Explore the future of health <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
