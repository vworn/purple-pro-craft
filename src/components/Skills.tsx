import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Globe, 
  Settings,
  BarChart3,
  PieChart
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Data Analysis",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["SQL", "Python (Pandas, NumPy, AI implementations)", "Statistical Analysis", "Data Mining"]
    },
    {
      title: "Data Visualization",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["Power BI", "Tableau", "Excel (Pivot Tables, VLOOKUP, VBA)", "Dashboard Development"]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML", "Java", "React (API Integration)", "Web Development"]
    },
    {
      title: "Project Management",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Jira", "Agile", "Scrum", "Slack", "Cross-functional Collaboration"]
    },
    {
      title: "Operating Systems",
      icon: <Database className="w-6 h-6" />,
      skills: ["Windows", "MacOS", "Linux (Ubuntu)", "System Administration"]
    },
    {
      title: "Analytics & Research",
      icon: <PieChart className="w-6 h-6" />,
      skills: ["Market Research", "Quantitative Analysis", "Business Intelligence", "Trend Analysis"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive expertise across data analytics, programming, and business tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="gradient-secondary border-border/50 shadow-card hover-lift transition-smooth p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center shadow-glow">
                    <div className="text-accent-foreground">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="hover:bg-primary/10 hover:border-primary/30 transition-smooth"
                    >
                      {skill}
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

export default Skills;