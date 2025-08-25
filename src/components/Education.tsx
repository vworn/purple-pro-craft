import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic foundation in business analytics and information systems
          </p>
        </div>

        <Card className="gradient-secondary border-border/50 shadow-card hover-lift transition-smooth p-6 md:p-8 animate-slide-up">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center shadow-glow">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <div className="flex-grow space-y-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  Bachelor of Science, Business Analytics and Information Systems
                </h3>
                <p className="text-primary font-medium text-lg">
                  University of South Florida (USF), Tampa, FL
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Badge variant="outline" className="flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  Expected May 2026
                </Badge>
                <Badge variant="secondary">Dean's List</Badge>
              </div>

              <div className="text-muted-foreground">
                <p>
                  Specialized curriculum focusing on data analytics, business intelligence, 
                  and information systems management. Gaining expertise in statistical analysis, 
                  database design, and business process optimization.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;