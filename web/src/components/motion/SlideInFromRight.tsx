import { motion } from "framer-motion";

const SlideInFromRight = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1, // Animation duration
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInFromRight;
