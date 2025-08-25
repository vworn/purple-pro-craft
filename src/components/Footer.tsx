import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <Card className="gradient-secondary border-border/50 shadow-card p-8 md:p-12">
          <div className="text-center space-y-8">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                I'm always interested in discussing new opportunities, innovative projects, 
                and ways to apply data analytics to solve real-world challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-muted/20 transition-smooth">
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center shadow-glow">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-center">
                  <p className="font-medium mb-1">Email</p>
                  <a 
                    href="mailto:jasonkmathewpersonal@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    jasonkmathewpersonal@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-muted/20 transition-smooth">
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center shadow-glow">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-center">
                  <p className="font-medium mb-1">Phone</p>
                  <a 
                    href="tel:+18139704544"
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    (813) 970-4544
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-muted/20 transition-smooth">
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center shadow-glow">
                  <Linkedin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-center">
                  <p className="font-medium mb-1">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/jason-mathew"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center gap-1 justify-center"
                  >
                    Connect
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-muted/20 transition-smooth">
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center shadow-glow">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-center">
                  <p className="font-medium mb-1">Location</p>
                  <p className="text-sm text-muted-foreground">Tampa, FL</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border/50 pt-8 animate-scale-in">
              <p className="text-muted-foreground text-sm">
                © 2024 Jason K. Mathew. Crafted with passion for data and innovation.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </footer>
  );
};

export default Footer;