import { Code, Database, Server, Wrench, Bot, Globe } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["HTML5", "CSS3", "Bootstrap 5", "Ant Design", "React.js (Hooks)", "TypeScript", "JavaScript", "jQuery", "REST API"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Laravel-12", "PHP", "REST API", "API Integration"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB","Sql"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Ubuntu 24", "Docker", "Linux","GitHub", "Vesta Panel", "Bitbucket", "Jira", "GitLab", "Postman", "VS Code"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "AI Tools",
    icon: Bot,
    skills: ["Claude.ai", "Deepseek", "ChatGPT"],
    color: "from-red-500 to-rose-500",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 lg:py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <ScrollAnimation key={category.title} direction="scale" delay={index * 0.1}>
            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 group h-full">          
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 
                mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300`} >
                <category.icon className="w-7 h-7 text-primary-foreground" />
              </div>
          
              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-4 
                text-center md:text-left group-hover:text-primary transition-colors">
                {category.title}
              </h3>
          
              {/* Skills */}
              <div className="flex flex-wrap gap-2 
                justify-center md:justify-start">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary/10 text-foreground rounded-full text-sm font-medium border border-border 
                    hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>
          ))}
        </div>

        {/* Certifications */}
        <ScrollAnimation direction="up" delay={0.3}>
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-center mb-6">
              Certifications & <span className="text-primary">Courses</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Android Studio Application - Chandrabhan Sharma College",
                "TypeScript Course - Udemy",
                "Laravel Development - Udemy",
                "React.js Development - Udemy",
                "Java Basics - Udemy",
                "Communication Skills - TCSIonHub",
              ].map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Skills;
