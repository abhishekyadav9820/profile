import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-muted-foreground text-lg mb-2 tracking-wider uppercase"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              Hi There,
              <br />
              I'm <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Abhishek Yadav</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2 tracking-wide">
                Software Engineer & Full Stack Developer
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mb-8">
                4+ Years Experience • Laravel • PHP • React.js • Linux
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-4 justify-center lg:justify-start lg:mb-8 mb-4"
            >
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group hover:scale-110"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="mailto:ay321999@gmail.com"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group hover:scale-110"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="hidden lg:block"
            >
              <Button
                size="lg"
                onClick={scrollToAbout}
                className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 "
              >
                Explore My Work
                <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center order-1 lg:order-2 mt-5 lg:mt-0"
          >
            <div className="relative">
              {/* Rotating Border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-full opacity-75 blur-sm animate-spin" style={{ animationDuration: "8s" }} />

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-40 animate-pulse" />

              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src={profileImg}
                  alt="Abhishek Yadav - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -right-2 sm:-right-4 top-1/4 bg-card border border-border rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 shadow-lg"
              >
                <span className="text-primary font-bold text-sm sm:text-base">4+</span>
                <span className="text-muted-foreground text-xs sm:text-sm ml-1">Years</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -left-2 sm:-left-4 bottom-1/4 bg-card border border-border rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 shadow-lg"
              >
                <span className="text-primary font-bold text-sm sm:text-base">30+</span>
                <span className="text-muted-foreground text-xs sm:text-sm ml-1">Projects</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-muted-foreground text-sm">Scroll Down</span>
          <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
