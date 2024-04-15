import { motion } from 'framer-motion';
import { MY_PROJECTS } from '../../assets/portfolio';

const Projects = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid gap-8">
        {MY_PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-full md:w-1/4">
              {project.banner && (
                <img
                  src={project.banner}
                  alt={project.title}
                  className="w-full h-auto md:h-full object-cover"
                />
              )}
            </div>
            <div className="p-4 w-full md:w-3/4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap">
                <p className="text-gray-600 dark:text-gray-400 font-semibold mr-2">Technologies:</p>
                <ul className="list-disc ml-2 text-gray-700 dark:text-gray-300 flex flex-wrap gap-4 pl-2">
                  {project.tech.map((tech, index) => (
                    <li key={index} className="mr-2">{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                {project.live_link && (
                  <a
                    href={project.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline mr-4"
                  >
                    Live Demo
                  </a>
                )}
                {project.github_link && (
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
