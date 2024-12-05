
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectCard = ({ project, index, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.demoLink}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <ExternalLink size={20} />
          Demo
        </a>
        <a
          href={project.githubLink}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <Github size={20} />
          Code
        </a>
      </div>
    </div>
  </motion.div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    demoLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  inView: PropTypes.bool.isRequired,
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;