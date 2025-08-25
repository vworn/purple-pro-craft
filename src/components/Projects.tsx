import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Code, Database, BarChart3, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Superstore Tableau Project",
      period: "December 2024",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Performed data analysis using Tableau, creating multiple visualizations including bar charts, trend lines, and a filled map to identify sales by location within the dataset.",
      technologies: ["Tableau", "Data Visualization", "Sales Analytics"],
      highlights: [
        "Created interactive dashboard that allowed dynamic data exploration, using filters and calculated fields to uncover patterns and support data-driven decision-making"
      ]
    },
    {
      title: "Covid-19 Python",
      period: "December 2024", 
      icon: <Code className="w-6 h-6" />,
      description: "Conducted an in-depth analysis of COVID-19 mortality data using Python, leveraging Pandas and Matplotlib for data processing, cleaning, and advanced statistical examination.",
      technologies: ["Python", "Pandas", "Matplotlib", "Statistical Analysis"],
      highlights: [
        "Compiled findings into a comprehensive final report and presented key insights through a video presentation, effectively communicating data-driven conclusions and recommendations"
      ]
    },
    {
      title: "Tour Comparison App",
      period: "May 2025",
      icon: <Globe className="w-6 h-6" />,
      description: "Built an interactive React app that fetches live data from an API to display and compare tour packages.",
      technologies: ["React", "API Integration", "JavaScript", "Web Development"],
      highlights: [
        "Implemented dynamic components and state management to allow users to compare travel details",
        "Enhanced user experience with responsive design and interactive comparison features"
      ]
    },
    {
      title: "AI Powered PC Builder for Educational Platform",
      period: "May 2025-Present",
      icon: <Database className="w-6 h-6" />,
      description: "Planned a 20-week web platform using Angular, Django REST, PostgreSQL, and Amazon Bedrock for AI-driven PC build recommendations.",
      technologies: ["Angular", "Django REST", "PostgreSQL", "AI/ML", "AWS"],
      highlights: [
        "Built architecture and monetization strategy with Docker, ETL pipelines, affiliate links, and AWS cloud services"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Showcasing technical expertise through data analysis, visualization, and web development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="gradient-secondary border-border/50 shadow-card hover-lift transition-smooth p-6 md:p-8 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center shadow-glow flex-shrink-0">
                      <div className="text-accent-foreground">
                        {project.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <Badge variant="outline" className="flex items-center gap-2 w-fit">
                        <Calendar className="w-3 h-3" />
                        {project.period}
                      </Badge>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="hover:bg-primary/10 hover:border-primary/30 transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;