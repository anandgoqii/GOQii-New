import { motion } from "motion/react";
import { ShieldCheck, Zap, LineChart, Users } from "lucide-react";
import { cn } from "@/src/lib/utils";

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    title: "HIPAA Compliant Core",
    description: "Built from the ground up to meet the strictest healthcare data security standards.",
  },
  {
    icon: <Zap className="w-6 h-6 text-teal-400" />,
    title: "Real-time Processing",
    description: "Analyze patient vitals and lab results in milliseconds with our edge network.",
  },
  {
    icon: <LineChart className="w-6 h-6 text-cyan-400" />,
    title: "Predictive Analytics",
    description: "Identify at-risk patients before critical events occur using advanced ML models.",
  },
  {
    icon: <Users className="w-6 h-6 text-teal-400" />,
    title: "Care Team Sync",
    description: "Seamlessly coordinate across departments with unified patient timelines.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-slate-900 mb-6"
          >
            A new standard for clinical intelligence.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-600 text-lg"
          >
            We've reimagined the healthcare infrastructure to be fast, secure, and deeply integrated.
            Empowering providers to focus on what matters most: patient care.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
