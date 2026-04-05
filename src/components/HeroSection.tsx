import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingCode = [
  { text: "const build = () => 🚀", x: "10%", y: "20%", delay: 0 },
  { text: "<Component />", x: "75%", y: "15%", delay: 1 },
  { text: "npm run dev", x: "80%", y: "70%", delay: 2 },
  { text: "export default App", x: "5%", y: "75%", delay: 0.5 },
  { text: "useState()", x: "60%", y: "45%", delay: 1.5 },
  { text: "tailwind.config", x: "20%", y: "55%", delay: 2.5 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      {/* Floating code elements */}
      {floatingCode.map((item, i) => (
        <motion.span
          key={i}
          className="absolute font-mono-code text-xs text-primary-foreground/10 select-none pointer-events-none"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -20, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
        >
          {item.text}
        </motion.span>
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-slow" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono-code text-sm text-accent-foreground/60 mb-4 tracking-wider uppercase"
          >
            Hello, I'm
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-primary-foreground mb-4 leading-tight">
            Edupuganti Kundan
            <br />
            <span className="text-gradient">Sri Vyshnavi</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 font-medium mb-2">
            Aspiring Software Engineer
          </p>
          <p className="text-sm md:text-base text-primary-foreground/50 max-w-xl mx-auto mb-8">
            I build clean, functional web apps with React & TypeScript
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8"
            >
              <a href="#projects">
                View Projects <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8"
            >
              <a href="/Kundan_Sri_Vyshnavi_Resume.pdf" download>
                Download Resume <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-5 w-5 text-primary-foreground/40" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
