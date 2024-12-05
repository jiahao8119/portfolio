
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../data/skills';

const SkillBar = ({ name, level }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-gray-600 dark:text-gray-300">{name}</span>
      <span className="text-gray-600 dark:text-gray-300">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1 }}
        className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
      />
    </div>
  </div>
);

SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

const SkillCategory = ({ title, icon: Icon, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
  >
    <div className="flex items-center gap-3 mb-6">
      <span className="text-blue-600 dark:text-blue-400">
        <Icon className="w-6 h-6" />
      </span>
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
    </div>
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <SkillBar key={index} {...skill} />
      ))}
    </div>
  </motion.div>
);

SkillCategory.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
    })
  ).isRequired,
  delay: PropTypes.number.isRequired,
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;