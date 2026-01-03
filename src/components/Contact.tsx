import { useState } from "react";
import { Mail, MapPin, Phone, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ScrollAnimation from "./ScrollAnimation";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <ScrollAnimation direction="up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or opportunities
          </p>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <ScrollAnimation direction="left" delay={0.2}>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                Let's build something amazing!
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-8">
                I'm available for freelance projects and full-time opportunities.
                With 4+ years of experience in full stack development, I can help
                bring your ideas to life.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <a
                  href="mailto:ay321999@gmail.com"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-background/50 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                    <p className="text-sm sm:text-base text-foreground font-medium group-hover:text-primary transition-colors break-all">
                      ay321999@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-background/50 rounded-xl border border-border">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Location</p>
                    <p className="text-sm sm:text-base text-foreground font-medium">
                      Mumbai, India - 400079
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4 mt-8">
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-background border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group hover:scale-110"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-background border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group hover:scale-110"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              </div>
            </div>
          </ScrollAnimation>

          {/* Contact Form */}
          <ScrollAnimation direction="right" delay={0.4}>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 bg-background/30 p-4 sm:p-6 md:p-8 rounded-2xl border border-border">
              <div>
                <label className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                  Your Name
                </label>
                <Input
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-10 sm:h-12 bg-background text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                  Your Email
                </label>
                <Input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-10 sm:h-12 bg-background text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                  Your Message
                </label>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background resize-none text-sm sm:text-base"
                />
              </div>
              <Button type="submit" size="lg" className="w-full font-semibold hover:scale-[1.02] transition-transform text-sm sm:text-base">
                <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;
