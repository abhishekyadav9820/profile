import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "./ScrollAnimation";

const projectsData = [
  {
    title: "CRM & Billing Portal",
    description:
      "Developed comprehensive CRM, DC & Billing portals for multiple insurers like IPRU, SBI, and LIC. Features real-time User Tracker using Laravel Reverb.",
    tags: ["Laravel", "MySQL", "Bootstrap", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "My Portfolio",
    description:
      "A personal portfolio website showcasing my projects, skills, and experience as a Full Stack Developer with modern UI/UX design.",
    tags: ["React.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    liveUrl: "https://portfolio-phi-nine-15.vercel.app/",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Vendor & Buyer Portal",
    description:
      "Dynamic portal using CakePHP 4 with streamlined vendor profile management, form validation, and document upload functionality.",
    tags: ["CakePHP 4", "Bootstrap", "jQuery", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Eera's Agro Resort",
    description:
      "Modern and visually appealing resort website with user-friendly features, booking system, and responsive design.",
    tags: ["PHP", "Bootstrap", "MySQL", "JavaScript"],
    liveUrl: "https://eerasagroresort.in/",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "To Do List App",
    description:
      "React.js to-do list with robust CRUD functionality, task reminders, and local storage persistence for seamless task management.",
    tags: ["React.js", "JavaScript", "CSS", "LocalStorage"],
    liveUrl: "https://todolist-lovat-tau.vercel.app/",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "E-commerce CRM Systems",
    description:
      "Developed 30+ websites and E-commerce solutions with full CRM capabilities, payment integration, and admin dashboards.",
    tags: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A showcase of my work across various technologies and industries
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ScrollAnimation
              key={project.title}
              direction="scale"
              delay={index * 0.1}
            >
              <div
                className={`bg-card rounded-xl border overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 group h-full flex flex-col ${
                  project.featured
                    ? "border-primary/30 hover:border-primary"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {/* Project Header */}
                <div className="h-40 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  <div className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Folder className="w-8 h-8 text-primary" />
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 hover:bg-primary hover:text-primary-foreground"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation direction="up" delay={0.5}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              And many more projects developed during my career...
            </p>
            <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground">
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Projects;
