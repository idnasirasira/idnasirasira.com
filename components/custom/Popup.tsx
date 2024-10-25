import { motion } from 'framer-motion';
import { Button } from '../ui/button';

export default function Popup() {
  const popupVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative group">
        <Button className="px-4 py-2 bg-blue-500 text-white rounded">
          Hover Me
        </Button>

        {/* Popup on hover */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 mt-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-64 group"
          initial="hidden"
          animate="hidden"
          whileHover="visible" // Animation on hover
          variants={popupVariants}
        >
          <h2 className="text-lg font-semibold">This is a Popup!</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Here&apos;s some additional information that appears on hover.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
