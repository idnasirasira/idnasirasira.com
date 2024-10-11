'use client';
import { SkillItem } from '../custom/SkillItem';
import { SkillPopup } from '../custom/SkillPopup';
import { Badge } from '../ui/badge';
import { AnimatePresence, motion } from 'framer-motion';

export function Skills() {
  const skills = [
    {
      name: 'PHP',
      description:
        'PHP is a popular general-purpose scripting language that is especially suited to web development.',
      item: ['Native', 'Laravel', 'Codeigniter', 'Wordpress', 'Symfony'],
    },
    {
      name: 'JavaScript',
      description:
        'JavaScript is a programming language that adds interactivity to your website.',
      item: ['Typescript', 'Node', 'React', 'Vue', 'Express.js'],
    },
    {
      name: 'Python',
      description:
        'Python is a programming language that lets you work quickly and integrate systems more effectively.',
      item: ['Django', 'Flask', 'FastAPI'],
    },
    {
      name: 'HTML & CSS',
      description:
        'HTML and CSS are the basic building blocks of web development.',
      item: ['SCSS', 'Tailwind', 'Bootstrap'],
    },
    {
      name: 'GoLang',
      description:
        'Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.',
      item: ['Gin', 'Echo', 'Fiber'],
    },
    {
      name: 'Databases',
      description:
        'A database is an organized collection of data, generally stored and accessed electronically from a computer system.',
      item: ['MySQL', 'NoSQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
    },
    {
      name: 'DevOps',
      description:
        'DevOps is a set of practices that combines software development (Dev) and IT operations (Ops).',
      item: [
        'Docker',
        'Kubernetes',
        'Jenkins',
        'Gitlab CI/CD',
        'Github Actions',
      ],
    },
  ];

  return (
    <section id="skills" className="my-12">
      <div className="container px-5 py-24 mx-auto flex-col items-center justify-center">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-blue-600 dark:text-blue-50 tracking-widest font-medium title-font mb-1">
            Skills & Expertise
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 dark:text-gray-200">
            Skills
          </h1>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
