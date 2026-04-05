import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  { title: "Languages", skills: ["Python", "Java"] },
  { title: "Web & Frontend", skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"] },
  { title: "CS Fundamentals", skills: ["DSA", "DBMS", "Operating Systems"] },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 hero-bg">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-12"
        >
          My <span className="text-gradient">Skills</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + gi * 0.15 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50 mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + gi * 0.1 + si * 0.07 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium border border-primary-foreground/10 hover:border-accent/50 hover:bg-accent/20 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
