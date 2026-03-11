import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/10 pt-24 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">The ALIVE Ecosystem (Consumer)</h4>
            
            <div className="space-y-6">
              <div>
                <h5 className="text-cyan-glow text-sm font-medium mb-3 uppercase tracking-wider">Predict</h5>
                <ul className="space-y-2">
                  {["GOQii Sanjeevini", "SuperLife Program", "Diagnostics & Lab Tests"].map((item) => (
                    <li key={item}><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">{item}</a></li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="text-teal-glow text-sm font-medium mb-3 uppercase tracking-wider">Personalize</h5>
                <ul className="space-y-2">
                  {["Smart Wearables Shop", "Personalized Coaching Ecosystem"].map((item) => (
                    <li key={item}><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">{item}</a></li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="text-cyan-glow text-sm font-medium mb-3 uppercase tracking-wider">Prevent</h5>
                <ul className="space-y-2">
                  {["GOQii SmartRx (GLP-1)", "Chronic Care Management", "Health Protect (OPD)"].map((item) => (
                    <li key={item}><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">{item}</a></li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="text-teal-glow text-sm font-medium mb-3 uppercase tracking-wider">Prosper</h5>
                <ul className="space-y-2">
                  {["GOQii Insure+", "Universal Health Token (UHT)"].map((item) => (
                    <li key={item}><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">{item}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Column 2 */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Global Enterprise (B2B)</h4>
            <ul className="space-y-4">
              {[
                "GOQii HealthEngage Platform",
                "Payers & Insurtech Solutions",
                "Providers & Clinical Triage (NHS UK)",
                "Corporate Wellness & GOQii Corporate Challenge (GCC)",
                "Pharma & Clinical Research"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-cyan-glow transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Science & Company</h4>
            <ul className="space-y-4">
              {[
                "About GOQii",
                "Leadership & Team Sanjeevini",
                "XPRIZE Healthspan Validation",
                "Investors & Partners",
                "Careers & Press"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-teal-glow transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Resources & Support</h4>
            <ul className="space-y-4 mb-10">
              {[
                "Evidence-Based Blog Hub",
                "The GOQii India Fit Report",
                "User Transformations & Case Studies",
                "Track Your Order & Support",
                "Contact Us / Business Inquiries"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-cyan-glow transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            
            <h4 className="font-semibold text-white mb-4 text-lg">Global Office Locations</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <strong className="text-slate-300">US HQ:</strong> 601 Marshall Street, Redwood City, California, USA 94063
              </li>
              <li>
                <strong className="text-slate-300">UK Office:</strong> 29 West Way, Hove, England, BN3 8LS
              </li>
              <li>
                <strong className="text-slate-300">India HQ:</strong> Mumbai, Maharashtra, India
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
          </div>
          
          <div className="text-cyan-glow font-semibold tracking-wide">
            #BeTheForce
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Warranty & Returns</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility Statement</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Medical Disclaimer</a>
          </div>
          
          <p className="text-slate-500 text-xs">
            © 2026 GOQii Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
