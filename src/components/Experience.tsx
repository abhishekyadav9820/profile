import { Briefcase, Calendar, MapPin } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const experienceData = [
  {
    title: "Software Developer",
    company: "Imperi Paytech",
    location: "Mumbai",
    period: "Nov 2024 - Present",
    description: [
      "Working on payment technology solutions and fintech applications",
      "Developing scalable software solutions for payment processing",
    ],
  },
  {
    title: "Software Developer",
    company: "Callmedilife Healthcare Services Pvt. Ltd",
    location: "Mumbai",
    period: "Mar 2024 - Oct 2024",
    description: [
      "Developed CRM, DC & Billing portals for insurers like IPRU, SBI, and LIC",
      "Built real-time User Tracker using Laravel Reverb and 'My Cases' dashboard",
      "Designed CRM features: abort-to-reopen modal, bulk reopen, case assignment",
      "Delivered insurer-specific MIS using Laravel jobs, queues, and cron jobs",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "F.T Solution Pvt. Ltd",
    location: "Mumbai",
    period: "May 2023 - Oct 2023",
    description: [
      "Developed dynamic Vendor and Buyer Portal using CakePHP 4 framework",
      "Integrated Bootstrap and jQuery for responsive front-end features",
      "Created streamlined vendor profile management system",
      "Collaborated with cross-functional teams for real-time updates",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Shree Krishna Digital Marketing",
    location: "Andheri (West), Mumbai",
    period: "Sep 2021 - Apr 2023",
    description: [
      "Developed 30+ websites and E-commerce (CRM) applications",
      "Worked with PHP, HTML, CSS, Bootstrap-5, React.js, MySQL",
      "Solved challenging dataset problems with clean and efficient code",
      "Managed and optimized PHP databases and server-side operations",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <ScrollAnimation direction="up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            4+ years of hands-on experience in full stack development
          </p>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-2 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {experienceData.map((item, index) => (
              <ScrollAnimation
                key={item.company}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.1}
              >
                <div className="relative pl-6 sm:pl-8 md:pl-20 pb-8 sm:pb-12 last:pb-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-2 md:left-8 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full transform -translate-x-1/2 border-2 sm:border-4 border-background z-10 shadow-lg shadow-primary/30" />

                  {/* Connector Line */}
                  <div className="absolute left-3 md:left-9 w-6 sm:w-8 md:w-10 h-0.5 bg-primary/30 top-1.5 sm:top-2" />

                  <div className="bg-card rounded-xl p-4 sm:p-6 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 group mb-3">
                    <div className="flex flex-col sm:flex-row sm:flex-wrap items-start justify-between gap-3 sm:gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base text-primary font-semibold flex items-center gap-2 mt-1">
                          <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="break-words">{item.company}</span>
                        </p>
                      </div>
                      <div className="w-full sm:w-auto sm:text-right">
                        <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                          {item.period}
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 mt-1">
                          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                          {item.location}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-muted-foreground text-xs sm:text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 sm:mt-2 shrink-0" />
                          <span className="flex-1">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
