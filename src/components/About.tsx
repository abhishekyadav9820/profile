import { MapPin, Mail, Download, Phone, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.png";
import ScrollAnimation from "./ScrollAnimation";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <ScrollAnimation direction="up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
            About <span className="text-primary">Me</span>
          </h2>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <ScrollAnimation direction="left" delay={0.2}>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto">
                <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl rotate-6 animate-pulse" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-border shadow-xl">
                  <img
                    src={profileImg}
                    alt="Abhishek Yadav - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Stats Cards */}
                <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-card border border-border rounded-xl p-3 sm:p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    <div>
                      <p className="font-bold text-foreground text-sm sm:text-base">MCA Graduate</p>
                      <p className="text-xs text-muted-foreground">Master's Degree</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Content */}
          <ScrollAnimation direction="right" delay={0.4}>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                I'm Abhishek Vidhinath Yadav
              </h3>
              <p className="text-primary font-medium text-base sm:text-lg mb-6">
                Full Stack Developer & Software Engineer
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                As a passionate Software Engineer with over <span className="text-primary font-semibold">4+ years</span> of hands-on experience, I specialize in <span className="text-foreground">Ubuntu Server environments</span> and <span className="text-foreground">Docker containerization</span>, alongside modern web technologies like <span className="text-foreground">Laravel, React.js, and MySQL</span>.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
                I have successfully delivered multiple challenging projects and have a proven track record of solving complex dataset problems with clean and efficient code. I am a quick learner, self-motivated, and a team player with excellent communication skills.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
                <div className="flex items-center gap-2 sm:gap-3 bg-background/50 rounded-lg p-2.5 sm:p-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-xs sm:text-sm break-all">ay321999@gmail.com</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 bg-background/50 rounded-lg p-2.5 sm:p-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-xs sm:text-sm">Mumbai, India - 400079</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 bg-background/50 rounded-lg p-2.5 sm:p-3">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-xs sm:text-sm">Available for Work</span>
                </div>
              </div>

              <Button size="lg" className="font-semibold hover:scale-105 transition-transform w-full sm:w-auto">
                <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Download Resume
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
