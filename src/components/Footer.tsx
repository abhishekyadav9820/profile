import { Github, Linkedin, Mail, Heart, Phone } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation direction="up">
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <div>
                <span className="font-bold text-xl text-foreground block">Abhishek Yadav</span>
                <span className="text-sm text-muted-foreground">Full Stack Developer</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group hover:scale-110"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="mailto:ay321999@gmail.com"
                className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group hover:scale-110"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>

            {/* Divider */}
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Copyright */}
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              © {currentYear} Made with <Heart className="w-4 h-4 text-destructive fill-destructive animate-pulse" /> by Abhishek Yadav
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  );
};

export default Footer;
