import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Learning Management System",
    category: "Full-Stack",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    description: "Built a full-stack LMS with role-based dashboards (Admin, Teacher, Student), JWT authentication, course creation, quiz/assignment modules, student-teacher chat, and a responsive UI.",
    features: [
      "Role-based access control",
      "Real-time chat functionality",
      "Quiz & assignment modules",
      "Course management system",
    ],
    color: "from-primary to-accent",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Full-Stack",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    description: "Built a full-stack e-commerce platform featuring user roles, JWT authentication, product management, cart, orders, and payment integration with a responsive UI.",
    features: [
      "Product catalog & search",
      "Shopping cart system",
      "Payment integration",
      "Order management",
    ],
    color: "from-accent to-primary",
  },
  {
    id: 3,
    title: "Movie Search Application",
    category: "Frontend",
    tech: ["React", "REST API", "CSS3"],
    description: "Built a responsive movie search app using ReactJS and external Movie API, featuring real-time search, dynamic movie details, and optimized UI for enhanced user experience.",
    features: [
      "Real-time search",
      "Dynamic movie details",
      "Responsive design",
      "API integration",
    ],
    color: "from-primary to-cyan-400",
  },
  {
    id: 4,
    title: "Sign Language Glove",
    category: "IoT",
    tech: ["Arduino", "ESP32", "React", "WebSocket"],
    description: "Built an IoT-based smart glove that translates sign language into audio and text. Integrated ultrasonic sensors for obstacle detection with real-time web interface.",
    features: [
      "Real-time translation",
      "Obstacle detection",
      "Audio output",
      "Web dashboard",
    ],
    color: "from-green-500 to-primary",
  },
  {
    id: 5,
    title: "Super Store Console App",
    category: "Backend",
    tech: ["Java", "OOP", "Collections"],
    description: "Built a role-based console application where sellers manage inventory and buyers can shop, add to cart, and place orders. Implemented using Java OOP and collections.",
    features: [
      "Inventory management",
      "Shopping cart",
      "Order history",
      "User authentication",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    id: 6,
    title: "Instagram Clone",
    category: "UI/UX Design",
    tech: ["Figma", "Prototyping"],
    description: "Designed a complete Instagram-like mobile app prototype with interactive flows, focusing on user-friendly UI and modern aesthetics.",
    features: [
      "Complete UI kit",
      "Interactive prototype",
      "User flow design",
      "Component library",
    ],
    color: "from-pink-500 to-purple-500",
  },
];

const ProjectCard = ({ project, index, onClick }: { project: typeof projects[0]; index: number; onClick: () => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="glass-card overflow-hidden h-full">
        {/* Gradient Header */}
        <div className={`h-32 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
          <motion.div
            className="absolute inset-0 bg-background/20"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-background/20 backdrop-blur-sm rounded-full text-xs font-medium text-primary-foreground">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-secondary text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-2 py-1 bg-secondary text-xs rounded-md">
                +{project.tech.length - 3}
              </span>
            )}
          </div>

          {/* View More */}
          <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
            <span>View Details</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`h-40 bg-gradient-to-br ${project.color} relative`}>
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-background/20 backdrop-blur-sm rounded-full hover:bg-background/40 transition-colors"
          >
            <X className="w-5 h-5 text-primary-foreground" />
          </button>
          <div className="absolute bottom-4 left-6">
            <span className="px-3 py-1 bg-background/20 backdrop-blur-sm rounded-full text-sm font-medium text-primary-foreground">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-display font-bold mb-4">{project.title}</h2>
          <p className="text-muted-foreground mb-6">{project.description}</p>

          {/* Features */}
          <h3 className="font-semibold mb-3">Key Features</h3>
          <ul className="space-y-2 mb-6">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                <ChevronRight className="w-4 h-4 text-primary" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <h3 className="font-semibold mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-secondary rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <Button variant="gradient" className="flex-1">
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
            <Button variant="glass" className="flex-1">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">My Work</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
