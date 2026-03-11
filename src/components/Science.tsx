import { motion } from "motion/react";
import { Award, TrendingDown, Users, ShieldCheck, Building, FileText, BookOpen } from "lucide-react";
import { cn } from "@/src/lib/utils";

export function Science() {
  return (
    <section id="science" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-navy-900 mb-6"
          >
            Science & Success
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-600 text-lg"
          >
            Driven by global longevity research and proven by millions of data points, here is how we are redefining human healthspan.
          </motion.p>
        </div>

        {/* Block 1: Global Longevity Validation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-navy-900 rounded-3xl p-10 md:p-16 mb-12 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-glow/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
          
          <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
            <div className="w-20 h-20 rounded-full bg-cyan-glow/20 flex items-center justify-center shrink-0 border border-cyan-glow/30">
              <Award className="w-10 h-10 text-cyan-glow" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Global Longevity Validation
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg font-light">
                GOQii’s Team Sanjeevini is the only Top 40 Milestone Award Winning Team from India in the $101 Million XPRIZE Healthspan competition. Spearheaded by our Vanguard of Digital Humanity (including experts in genomic systems biology and cardiovascular resilience), our mission is to achieve a clinically proven reduction in biological age by 10-20 years.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Block 2: Real Results. Real Change */}
        <div className="mb-12">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-navy-900 mb-8 text-center"
          >
            Real Results. Real Change
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <TrendingDown className="w-6 h-6 text-cyan-glow" />,
                title: "Clinical Impact",
                description: "Across our preventive care pathways, users experience an 85% average reduction in medication dependency, a 20% average reduction in HbA1c, a 10% average reduction in body weight, and a 7% reduction in cholesterol.",
              },
              {
                icon: <Users className="w-6 h-6 text-teal-glow" />,
                title: "Public Health",
                description: "Achieved a 90% patient satisfaction rate in government-supported care programs and a 30% improvement in public sector preventive health engagement.",
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-cyan-glow" />,
                title: "Insurance & Payers",
                description: "Delivered a 34% drop in ER visits and lower claims through dynamic health engagement.",
              },
              {
                icon: <Building className="w-6 h-6 text-teal-glow" />,
                title: "Corporate Wellness",
                description: "Boosted employee engagement and reduced absenteeism by 85% across Fortune 500 companies.",
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                  {stat.icon}
                </div>
                <h4 className="text-lg font-semibold text-navy-900 mb-3">
                  {stat.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Block 3: Evidence-Based Research */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-navy-900 mb-8 text-center"
          >
            Evidence-Based Research (The Insights)
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-glow/10 flex items-center justify-center shrink-0">
                <FileText className="w-7 h-7 text-cyan-glow" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-navy-900 mb-3">
                  India Fit Report
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Access the GOQii India Fit Report 2025: The Blueprint for Healthy Longevity, our annual deep dive mapping the health, stress, and lifestyle trends of millions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-teal-glow/10 flex items-center justify-center shrink-0">
                <BookOpen className="w-7 h-7 text-teal-glow" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-navy-900 mb-3">
                  The Evidence Hub
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Explore our research-backed insights on everything from the social side of GLP-1 navigation and leaky gut symptoms, to why muscle strength predicts lifespan more than cardio.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
