import { motion } from "framer-motion";

const SlideInFromUp = ({
  children,
  duration = 1,
}: {
  children: React.ReactNode;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        y: -50,
      }}
      whileInView={{
        opacity: 1,
        y: 0, // Slide in to its original position
        transition: {
          duration, // Animation duration
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInFromUp;
