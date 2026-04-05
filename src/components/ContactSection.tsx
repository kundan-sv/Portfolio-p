import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", href: "mailto:kundansri2007@gmail.com", text: "kundansri2007@gmail.com" },
  { icon: Phone, label: "Phone", href: "tel:+917008514869", text: "+91 7008514869" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kundan-sri-vyshnavi-edupuganti-131182337", text: "LinkedIn Profile" },
  { icon: Github, label: "GitHub", href: "https://github.com/kundan-sv", text: "github.com/kundan-sv" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4"
        >
          Get In <span className="text-accent">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-center mb-12"
        >
          Feel free to reach out — I'd love to connect!
        </motion.p>

        <div className="flex flex-wrap justify-center gap-5 max-w-2xl mx-auto">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.label === "Email" || c.label === "Phone" ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="glass-card rounded-xl px-6 py-5 flex items-center gap-3 hover:glow-border transition-shadow"
            >
              <c.icon className="h-5 w-5 text-accent flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">{c.label}</p>
                <p className="text-sm font-medium text-foreground">{c.text}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center text-xs text-muted-foreground">
        <p>© 2025 Edupuganti Kundan Sri Vyshnavi. Built with React & Tailwind CSS.</p>
      </div>
    </section>
  );
};

export default ContactSection;
