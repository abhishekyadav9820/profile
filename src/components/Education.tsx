import { GraduationCap, Calendar, MapPin } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const educationData = [
  {
    degree: "MCA (Master of Computer Application)",
    years: "2021 - 2023",
    institution: "YCMOU University",
    college: "Chandrabhan Sharma College, Powai",
  },
  {
    degree: "B.Sc (Information Technology)",
    years: "2017 - 2020",
    institution: "Mumbai University",
    college: "Chandrabhan Sharma College, Powai",
  },
  {
    degree: "H.S.C (Science)",
    years: "2015 - 2017",
    institution: "Maharashtra Board",
    college: "Chandrabhan Sharma College, Powai",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-12 lg:py-20 bg-card relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-primary">Education</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line – DESKTOP ONLY */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transform -translate-x-1/2" />

          {educationData.map((item, index) => (
            <ScrollAnimation
              key={item.degree}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.15}
            >
            <div
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
                {/* Timeline dot – DESKTOP ONLY */}
                <div className="absolute left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-background z-10 shadow-lg shadow-primary/30" />

                {/* Card */}
                <div
                  className={`w-full md:w-1/2 pt-8${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 group mx-auto md:mx-0">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-7 h-7 text-primary-foreground" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start items-center gap-2 text-primary font-semibold text-sm mb-1">
                          <Calendar className="w-4 h-4" />
                          {item.years}
                        </div>

                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.degree}
                        </h3>

                        <p className="text-muted-foreground font-medium mt-1">
                          {item.institution}
                        </p>

                        <div className="flex justify-center md:justify-start items-start gap-2 text-muted-foreground text-sm mt-2">
                        <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                          {item.college}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty column for desktop alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
