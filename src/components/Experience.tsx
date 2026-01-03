import { Briefcase, Calendar, MapPin } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const experienceData = [
  {
    title: "Senior Software Developer",
    company: "Imperi Paytech Pvt. Ltd.",
    location: "Mumbai",
    period: "Nov 2025 - Present",
    description: [
      "Working on payment technology solutions and fintech applications",
      "Developing scalable software solutions for payment processing",
    ],
  },
  {
    title: "Software Developer",
    company: "Callmedilife Healthcare Services Pvt. Ltd",
    location: "Mumbai",
    period: "Mar 2024 - Oct 2025",
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
    <section
      id="experience"
      className="py-12 lg:py-20 bg-background relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation direction="up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            4+ years of hands-on experience in full stack development
          </p>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line (center on mobile, left on desktop) */}
          <div className="absolute left-1/2 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent -translate-x-1/2 md:translate-x-0" />

          {experienceData.map((item, index) => (
            <ScrollAnimation
              key={index}
              direction="up"
              delay={index * 0.1}
            >
              <div className="relative pb-20 last:pb-0 md:pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 md:left-8  md:top-2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 md:translate-x-0 border-4 border-background z-10 shadow-lg shadow-primary/30" />

                {/* Connector (desktop only) */}
                <div className="hidden md:block absolute left-9 top-3 w-10 h-0.5 bg-primary/30" />

                {/* Card */}
                <div className="bg-card rounded-xl p-5 sm:p-6 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 group mt-10 md:mt-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    {/* Left */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-primary font-semibold flex items-start gap-2 mt-1">
                        <Briefcase className="w-4 h-4 mt-0.5 shrink-0" />
                        <span>{item.company}</span>
                      </p>
                    </div>

                    {/* Right */}
                    <div className="sm:text-right space-y-1">
                      <p className="text-sm text-muted-foreground flex items-start gap-2 sm:justify-end">
                        <Calendar className="w-4 h-4 mt-0.5 shrink-0" />
                        <span>{item.period}</span>
                      </p>
                      <p className="text-sm text-muted-foreground flex items-start gap-2 sm:justify-end">
                        <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                        <span>{item.location}</span>
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {item.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground text-sm flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;