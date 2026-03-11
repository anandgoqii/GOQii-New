import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const navPadding = useTransform(scrollY, [0, 100], ["1.5rem", "1rem"]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      style={{ paddingTop: navPadding, paddingBottom: navPadding }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-white/60 backdrop-blur-xl border-b border-slate-200/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={cn("font-semibold text-xl tracking-tight transition-colors", scrolled ? "text-navy-900" : "text-white")}>
            GOQii
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["Predict", "Personalize", "Prevent", "Prosper"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn("text-sm font-medium transition-colors hover:opacity-70", scrolled ? "text-slate-600" : "text-slate-200")}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className={cn("px-4 py-2 rounded-full text-sm font-medium transition-colors", scrolled ? "bg-navy-900 text-white hover:bg-navy-800" : "bg-white text-navy-900 hover:bg-slate-100")}>
            Request a Demo
          </button>
        </div>

        <button
          className={cn("md:hidden", scrolled ? "text-navy-900" : "text-white")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 md:hidden shadow-xl"
        >
          {["Predict", "Personalize", "Prevent", "Prosper"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-slate-800 hover:text-navy-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="h-px bg-slate-100 my-2" />
          <button className="w-full px-4 py-3 rounded-xl bg-navy-900 text-white text-lg font-medium hover:bg-navy-800 transition-colors mt-2">
            Request a Demo
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
