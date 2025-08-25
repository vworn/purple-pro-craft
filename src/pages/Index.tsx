import ThemeToggle from "@/components/ThemeToggle";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background transition-smooth">
      <ThemeToggle />
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
};

export default Index;
