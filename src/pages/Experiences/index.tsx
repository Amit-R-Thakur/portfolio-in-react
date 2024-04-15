
import { motion } from 'framer-motion';
import {ExperiencesDetails} from '../../assets/portfolio';

const Experiences = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {ExperiencesDetails.map((experience, index) => (
          <motion.div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg bg-gray-900 dark:bg-gray-800 p-6 border border-gray-700 dark:border-gray-600"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <motion.img
                src={experience.logo}
                alt={experience.label}
                className="w-[80px] h-[40px] mr-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
              <div>
                <motion.p
                  className="font-semibold text-lg text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {experience.label}
                </motion.p>
                <p className="text-sm text-gray-400">{experience.role}</p>
                <p className="text-sm text-gray-400">{experience.from} - {experience.to}</p>
              </div>
            </div>
            <div>
              <motion.ul
                className="list-disc ml-6 text-gray-300 dark:text-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {experience.responsiblities.map((responsibility, index) => (
                  <motion.li
                    key={index}
                    className="mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {responsibility}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
