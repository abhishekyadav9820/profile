import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Code,
  GraduationCap,
  Folder,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Skills", href: "#skills", icon: Code },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Projects", href: "#projects", icon: Folder },
  { label: "Contact", href: "#contact", icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR (DESKTOP) ================= */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  A
                </span>
              </div>
              <span className="font-bold text-lg text-foreground">
                Abhishek
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 rounded-full text-sm transition ${
                    activeSection === item.href.slice(1)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ================= FLOATING ACTION BUTTON ================= */}
      <motion.div
        className="md:hidden fixed bottom-6 right-6 z-[60]"
        animate={!isOpen ? { y: [0, -6, 0] } : {}}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Pulse Ring */}
        {!isOpen && (
          <motion.span
            className="absolute inset-0 rounded-full bg-primary/30"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 1.8, opacity: 0 }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        )}

        <Button
          size="icon"
          className="relative w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </motion.div>

      {/* ================= RADIAL MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Circular Menu */}
            <div className="fixed inset-0 z-[55] md:hidden flex items-center justify-center pointer-events-none">
              <div className="relative w-64 h-64 pointer-events-auto">
                {navItems.map((item, index) => {
                  const angle =
                    (2 * Math.PI * index) / navItems.length - Math.PI / 2;
                  const radius = 100;
                  const Icon = item.icon;

                  return (
                    <motion.button
                      key={item.label}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                        x: radius * Math.cos(angle),
                        y: radius * Math.sin(angle),
                      }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 16,
                        delay: index * 0.05,
                      }}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection(item.href)}
                      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                        w-14 h-14 rounded-full shadow-lg flex items-center justify-center
                        ${
                          activeSection === item.href.slice(1)
                            ? "bg-primary text-primary-foreground"
                            : "bg-card text-foreground border border-border"
                        }`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;