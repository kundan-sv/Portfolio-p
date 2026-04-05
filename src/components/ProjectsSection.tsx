import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Smart Finance Tracker",
    desc: "Tracks income, expenses, generates insights, and detects suspicious transactions.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/kundan-sv/smart-finance-tracker",
    live: "https://smart-finance-tracker-orpin.vercel.app/",
  },
  {
    title: "Portfolio",
    desc: "Designed and developed a responsive portfolio with modular React components and smooth user experience.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/kundan-sv/Portfolio-p",
    live: "https://portfolio-p-zeta.vercel.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
        >
          Featured <span className="text-accent">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.2 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-xl overflow-hidden group"
            >
              <div className="h-2 bg-gradient-to-r from-accent to-accent/50" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button asChild size="sm" variant="outline" className="rounded-full text-xs">
                    <a href={p.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1.5 h-3.5 w-3.5" /> GitHub
                    </a>
                  </Button>
                  <Button asChild size="sm" className="rounded-full text-xs bg-accent text-accent-foreground hover:bg-accent/90">
                    <a href={p.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
