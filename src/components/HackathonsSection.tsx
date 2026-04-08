import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Zap } from "lucide-react";

const hackathons = [
  {
    icon: Zap,
    title: "OffPay",
    event: "NxtWave GenAI Hackathon — State Level",
    desc: "Built an offline digital payments prototype enabling transactions without internet connectivity.",
  },
  {
    icon: Trophy,
    title: "TrustLens",
    event: "Hack and Break, IIT Bombay",
    desc: "AI-powered claim verification system with trust scoring for identifying misinformation.",
  },
];

const HackathonsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hackathons" className="py-24 hero-bg">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-12"
        >
          Hackathon <span className="text-gradient">Experience</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {hackathons.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.2 }}
              whileHover={{ y: -5 }}
              className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm"
            >
              <h.icon className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary-foreground mb-1">{h.title}</h3>
              <p className="text-xs font-medium text-primary-foreground/80 mb-3 uppercase tracking-wider">{h.event}</p>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;
