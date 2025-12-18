import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Cpu, Database } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Full-Stack Dev", color: "text-primary" },
  { icon: Palette, label: "UI/UX Design", color: "text-accent" },
  { icon: Cpu, label: "IoT Systems", color: "text-primary" },
  { icon: Database, label: "Database", color: "text-accent" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent" />
      
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main card */}
              <motion.div
                className="glass-card p-8 h-full flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center">
                  <motion.div
                    className="w-32 h-32 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-5xl font-display font-bold text-primary-foreground">BV</span>
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold mb-2">Bala Vignesh A</h3>
                  <p className="text-muted-foreground">Software Engineer @ SriMax</p>
                  <p className="text-sm text-muted-foreground mt-1">Sivakasi, Tamil Nadu</p>
                </div>
              </motion.div>

              {/* Floating badges */}
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="absolute glass-card p-3 flex items-center gap-2"
                  style={{
                    top: `${20 + index * 20}%`,
                    left: index % 2 === 0 ? "-10%" : "auto",
                    right: index % 2 === 1 ? "-10%" : "auto",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-primary font-medium">About Me</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2 mb-6">
              Passionate about creating{" "}
              <span className="gradient-text">innovative solutions</span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a B.Sc. Computer Science graduate from Ayya Nadar Janaki Ammal College 
                with a passion for building elegant, user-centric applications. My journey 
                spans from embedded IoT systems to full-stack web development.
              </p>
              <p>
                Currently at SriMax, I'm contributing to a large-scale property management 
                system, working with Vue.js and Laravel while collaborating with international 
                clients. I thrive on solving complex problems and turning ideas into reality.
              </p>
              <p>
                Beyond coding, I'm fascinated by UI/UX design, having created prototypes in 
                Figma and worked with design tools like Photoshop and CorelDRAW. I believe 
                great software is at the intersection of powerful functionality and beautiful design.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { value: "6+", label: "Projects" },
                { value: "2+", label: "Years Learning" },
                { value: "1", label: "Award Won" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="text-3xl font-display font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
