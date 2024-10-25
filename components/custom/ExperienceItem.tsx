'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExperiencesDetail } from './ExperienceDetails';
import { Calendar, ChevronDown, ChevronRight, MapPin } from 'lucide-react';
import { Experiences } from '../home/Experiences';

interface ExperienceItemProp {
  exp: Experiences;
  isActive: boolean;
}

export function ExperineceItem({
  exp,
  isActive,
  ...props
}: ExperienceItemProp) {
  const [isVisible, setIsVisible] = useState(isActive);

  return (
    <motion.div className="flex flex-col md:flex-row" {...props}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileTap={{ translateY: -10, translateX: 0 }}
        onClick={() => setIsVisible(!isVisible)}
        className="relative md:w-4/12 hover:bg-slate-100 p-3 transition-colors rounded-md duration-300 cursor-pointer"
      >
        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
          {exp.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
        <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="w-4 h-4 mr-2" />
          {exp.period}
        </div>
        <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
          <MapPin className="w-4 h-4 mr-2" />
          {exp.location}
        </div>

        <span className="absolute right-2 top-2">
          {isVisible && <ChevronRight className="w-6 h-6 text-slate-400" />}
          {!isVisible && <ChevronDown className="w-6 h-6 text-slate-400" />}
        </span>
      </motion.div>
      {isVisible && <ExperiencesDetail detail={exp.detail} />}
    </motion.div>
  );
}
