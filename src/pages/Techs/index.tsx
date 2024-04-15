import { motion } from "framer-motion";
import { TechDetails } from "../../assets/portfolio";

const Techs = () => {
  return (
    <div className="flex flex-wrap justify-evenly md:justify-center pt-10">
    {TechDetails.map((tech, index) => (
      <motion.a
        key={index}
        href={tech.url}
        target="_blank"
        rel="noopener noreferrer"
        className="m-2 sm:m-4 p-4 rounded-xl shadow-lg flex items-center justify-center bg-gray-900 text-white transition duration-300 transform hover:scale-105 hover:bg-gray-800"
        whileHover={{ scale: 1.1 }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <motion.img
          src={tech.logo}
          alt={tech.label}
          className="w-8 h-8 sm:w-12 sm:h-12 mr-2"
          whileHover={{ rotate: 360, scale: 1.2 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, y: [null, -5, 0], transition: { duration: 0.5, delay: index * 0.1 } }}
        />
        <motion.span
          className="text-sm sm:text-lg font-semibold"
          whileHover={{ color: "#f0c929", scale: 1.1 }}
        >
          {tech.label}
        </motion.span>
      </motion.a>
    ))}
  </div>
  
  );
};

export default Techs;
