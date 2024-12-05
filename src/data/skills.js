import { Code, Database, Layout, Server } from 'lucide-react';

export const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'CSS/Tailwind', level: 95 },
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 88 },
      
    ],
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
     
      { name: 'PostgreSQL', level: 80 },
      { name: 'FireBase', level: 80 },
      
    ],
  },
  {
    title: 'Other',
    icon: Code,
    skills: [
      { name: 'Git', level: 92 },
      { name: 'Vercel', level: 70 },
     
    ],
  },
];