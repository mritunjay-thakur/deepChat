import { LoaderIcon } from "lucide-react";
import { useThemeStore } from "../store/useThemeStore";
import { motion } from "framer-motion";

const PageLoader = () => {
  const { theme } = useThemeStore();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-200"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex flex-col items-center gap-4"
      >
        <LoaderIcon className="animate-spin size-12 text-primary drop-shadow-lg" />
        <motion.span
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-lg font-medium tracking-wide"
        >
          Loading...
        </motion.span>
      </motion.div>
    </div>
  );
};

export default PageLoader;
