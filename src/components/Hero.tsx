import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, Linkedin, ExternalLink } from "lucide-react";
import jasonHeadshot from "@/assets/jason-headshot.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <Card className="gradient-secondary border-border/50 shadow-elevated hover-glow transition-smooth p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Profile Image */}
            <div className="md:col-span-1 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-glow">
                  <img 
                    src={jasonHeadshot} 
                    alt="Jason K. Mathew"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-2 gradient-primary rounded-full -z-10 opacity-50 blur-lg"></div>
              </div>
            </div>

            {/* Main Info */}
            <div className="md:col-span-2 text-center md:text-left space-y-6">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
                  Jason K. Mathew
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                  Market Research Analyst & Data Professional
                </p>
              </div>

              <div className="animate-slide-up space-y-4">
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge variant="secondary" className="px-3 py-1">
                    Data Analytics
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    Python & SQL
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    Business Intelligence
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    Market Research
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Tampa, FL</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>(813) 970-4544</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>jasonkmathewpersonal@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Linkedin className="w-4 h-4 text-primary" />
                    <a 
                      href="https://linkedin.com/in/jason-mathew" 
                      className="hover:text-primary transition-smooth flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="animate-scale-in">
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  Experienced data professional with expertise in market research, business analytics, 
                  and data visualization. Passionate about transforming complex data into actionable 
                  insights that drive strategic business decisions.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Hero;