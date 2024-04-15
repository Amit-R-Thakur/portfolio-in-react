import { motion, AnimatePresence } from "framer-motion";
import { ME } from "../../assets/portfolio";

const Me = () => {
  return (
    <div className="text-white px-8 py-6">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {ME.INTRO_1}
          </h1>
        </motion.div>
      </AnimatePresence>
      <div className="mt-6">
        <p className="text-yellow-400 text-lg md:text-xl lg:text-2xl">
          {ME.INTRO_2}
        </p>
      </div>
      <AnimatePresence>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-lg md:text-xl lg:text-2xl" dangerouslySetInnerHTML={{ __html: ME.INTRO_3 }}></p>
        </motion.div>
      </AnimatePresence>
      <div className="mt-10">
        <p className="text-lg md:text-xl lg:text-2xl">{ME.INTRO_4} </p>
      </div>
      <AnimatePresence>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-lg md:text-xl lg:text-2xl">{ME.INTRO_5} </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Me;
