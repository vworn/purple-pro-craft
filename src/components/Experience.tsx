import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Market Research Analyst Intern",
      company: "Netflix",
      location: "Tampa, FL",
      period: "August 2025 – Present",
      responsibilities: [
        "Conducted targeted market research on emerging technologies relevant to USSOCOM, evaluating technical reports and publications to access capabilities, limitations, and strategic fit",
        "Designed and implemented data collection systems, including online forms and a centralized database, to streamline research workflows and improve data accuracy",
        "Performed quantitative analysis in Excel to identify trends and prioritize high-value opportunities, supporting data-driven decision-making"
      ]
    },
    {
      title: "Consultation Agent",
      company: "Best Buy",
      location: "Brandon, FL",
      period: "May 2022 – Present",
      responsibilities: [
        "Diagnosed and resolved computer issues by analyzing system data, performance logs, and error reports to identify patterns and implement solutions",
        "Conducted in-depth consultations, gathering customer needs and system specifications to recommend technical solutions based on theoretical and practical knowledge",
        "Enhanced customer satisfaction by recommending services, contributing to revenue growth and enhancing customer experience with personalized product recommendations"
      ]
    },
    {
      title: "Pharmacy Technician",
      company: "CVS",
      location: "Dade City, FL",
      period: "June 2018 – April 2023",
      responsibilities: [
        "Maintained and updated customer prescription records in the database, ensuring accuracy and compliance with regulatory requirements",
        "Resolved insurance discrepancies by analyzing patient data, identifying errors, and ensuring proper billing and claims processing"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            Diverse background in data analysis, market research, and customer consultation
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="gradient-secondary border-border/50 shadow-card hover-lift transition-smooth p-6 md:p-8 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-semibold">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end gap-2">
                    <Badge variant="outline" className="flex items-center gap-2 w-fit">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </Badge>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <div key={respIndex} className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">{resp}</p>
                    </div>
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

export default Experience;