
import { motion } from 'framer-motion';
import { GithubIcon, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500"
              alt="Profile"
              className="rounded-full w-48 h-48 object-cover mx-auto lg:mx-0 shadow-xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
              Yap Jia Hao
            </h1>
            <h2 className="text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 mb-6">
              Full Stack Web Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Crafting elegant solutions to complex problems with modern technologies
            </p>
            
            <div className="flex gap-6 justify-center lg:justify-start mb-8">
              <a
                href="https://github.com/jiahao8119"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <GithubIcon size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/yap-jia-hao-74393b24a/"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:jiahaoyap9139@gmail.com"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
            
            <button
              onClick={scrollToProjects}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2 mx-auto lg:mx-0"
            >
              View My Work
              <ArrowDown size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;