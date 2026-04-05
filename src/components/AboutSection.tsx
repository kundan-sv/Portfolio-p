import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "B.Tech CGPA", value: "8.52", sub: "Amrita Vishwa Vidyapeetham" },
  { icon: Award, label: "Class XII", value: "97.9%", sub: "Sasi College" },
  { icon: BookOpen, label: "Class X", value: "95.67%", sub: "Sasi College" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            I'm a second-year CSE student passionate about frontend development and building real-world
            applications. I love turning ideas into clean, deployed products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="glass-card rounded-xl p-6 text-center hover:glow-border transition-shadow duration-300"
            >
              <s.icon className="h-8 w-8 text-accent mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground mb-1">{s.value}</p>
              <p className="text-sm font-medium text-foreground/80">{s.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
