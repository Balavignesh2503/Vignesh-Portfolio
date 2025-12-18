import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

type TimelineItem = {
  type: "work" | "education" | "achievement";
  title: string;
  subtitle: string;
  date: string;
  description: string;
  highlights?: string[];
};

const timelineData: TimelineItem[] = [
  {
    type: "work",
    title: "Software Developer",
    subtitle: "SriMax, Sivakasi",
    date: "2025 - Present",
    description: "Contributing to a large-scale property management system for real estate agencies, working with international clients.",
    highlights: [
      "Building responsive Vue.js frontends",
      "Developing RESTful APIs with Laravel",
      "Collaborating with Australian client team",
      "Sprint-based feature releases",
    ],
  },
  {
    type: "achievement",
    title: "First Prize - Project Expo",
    subtitle: "Anna University Regional Campus",
    date: "2024",
    description: "Won first prize for 'Smart Agriculture' — an IoT-based automation system using NodeMCU with real-time data visualization and remote monitoring.",
  },
  {
    type: "education",
    title: "B.Sc. Computer Science",
    subtitle: "Ayya Nadar Janaki Ammal College, Sivakasi",
    date: "2022 - 2025",
    description: "Bachelor's degree with focus on programming, web development, and IoT systems.",
    highlights: ["71% Overall", "Diploma in Hardware & Networking"],
  },
  {
    type: "education",
    title: "Higher Secondary Certificate",
    subtitle: "S.N.M. Matric. Hr. Sec. School, Sivakasi",
    date: "2020 - 2022",
    description: "Specialized in Computer Science with strong academic performance.",
    highlights: ["84% Overall"],
  },
];

const certifications = [
  "Professional Certificate in Digital Marketing",
  "Certificate Course in Python",
];

const getIcon = (type: TimelineItem["type"]) => {
  switch (type) {
    case "work":
      return Briefcase;
    case "education":
      return GraduationCap;
    case "achievement":
      return Award;
  }
};

const TimelineCard = ({ item, index }: { item: TimelineItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = getIcon(item.type);
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className={`flex items-center gap-4 md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1"
      >
        <div className={`glass-card p-6 ${isLeft ? "md:text-right" : "md:text-left"}`}>
          <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:justify-end" : ""}`}>
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{item.date}</span>
          </div>
          <h3 className="text-xl font-display font-semibold">{item.title}</h3>
          <p className="text-primary font-medium text-sm mb-2">{item.subtitle}</p>
          <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
          {item.highlights && (
            <ul className={`space-y-1 ${isLeft ? "md:text-right" : ""}`}>
              {item.highlights.map((highlight) => (
                <li key={highlight} className="text-xs text-muted-foreground">
                  • {highlight}
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>

      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.3 }}
        className="relative z-10 hidden md:flex"
      >
        <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center shadow-lg glow">
          <Icon className="w-5 h-5 text-primary-foreground" />
        </div>
      </motion.div>

      {/* Spacer for alignment */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
};

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative">
      {/* Background decoration */}
      <motion.div
        className="absolute left-1/4 top-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">My Journey</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {timelineData.map((item, index) => (
              <TimelineCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-xl font-display font-semibold text-center mb-6">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                className="glass-card px-6 py-3 flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
