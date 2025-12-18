import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Logo */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative"
      >
        <motion.div
          className="w-24 h-24 rounded-2xl gradient-bg flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <span className="text-4xl font-display font-bold text-primary-foreground">BV</span>
        </motion.div>
        
        {/* Orbiting dots */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-primary"
            style={{ top: "50%", left: "50%" }}
            animate={{
              x: Math.cos((i * 120 * Math.PI) / 180) * 60,
              y: Math.sin((i * 120 * Math.PI) / 180) * 60,
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Progress Bar */}
      <div className="mt-12 w-48">
        <div className="h-1 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full gradient-bg"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <motion.p
          className="text-sm text-muted-foreground text-center mt-3 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Loading... {progress}%
        </motion.p>
      </div>
    </motion.div>
  );
};
