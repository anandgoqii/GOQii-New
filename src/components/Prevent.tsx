import { motion } from "motion/react";
import { ArrowRight, ActivitySquare, Stethoscope, ShieldPlus } from "lucide-react";
import { cn } from "@/src/lib/utils";

const pathways = [
  {
    icon: <ActivitySquare className="w-8 h-8 text-cyan-glow" />,
    title: "GOQii SmartRx (Smarter Weight Loss)",
    description: "A doctor-supervised weight loss program combining GLP-1 medication with a strength-first coaching approach. We pair appetite control with resistance training to protect your lean muscle mass and ensure lasting habit change.",
    cta: "Take the Eligibility Assessment",
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-teal-glow" />,
    title: "Chronic Condition Management",
    description: "Holistic, personalized reversal and management plans led by certified experts. Specialized pathways for Diabetes Care (reducing HbA1c), Hypertension, Fatty Liver, Arthritis, and Women's Health (PCOS & Menopause).",
    cta: "Book a Free Consultation Callback",
  },
  {
    icon: <ShieldPlus className="w-8 h-8 text-cyan-glow" />,
    title: "Health Protect (Proactive Outpatient Care)",
    description: "The all-in-one solution for proactive care. Gain access to a free comprehensive full-body health screening (65+ parameters), a ₹2000 Lab Wallet, and free tele-consultations across 35+ specialties.",
    cta: "Book a Free Consultation Callback",
  },
];

export function Prevent() {
  return (
    <section id="prevent" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-navy-900/5 border border-navy-900/10 mb-6"
          >
            <span className="text-navy-900 text-sm font-medium tracking-wide uppercase">Prevent</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-navy-900 mb-6"
          >
            PREVENT Chronic Decline Before It Starts with Clinically Led Care.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            From doctor-supervised weight loss to specialized chronic care, we bridge the gap between intent and action to deliver evidence-based interventions and reverse the silent biological drift.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pathways.map((pathway, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 hover:shadow-xl transition-all group flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-glow/5 transition-colors" />
              
              <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform">
                {pathway.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-navy-900 mb-4 relative z-10">
                {pathway.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-10 flex-1 relative z-10">
                {pathway.description}
              </p>
              
              <button className="inline-flex items-center gap-2 text-navy-900 font-medium hover:text-cyan-glow transition-colors relative z-10 mt-auto w-fit">
                {pathway.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
