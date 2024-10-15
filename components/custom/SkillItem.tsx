'use client';

import { useState } from 'react';
import { Badge } from '../ui/badge';
import { SkillPopup } from './SkillPopup';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  item: string[];
}

interface SkillItemProps {
  skill: Skill;
}

export function SkillItem({ skill, ...props }: SkillItemProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1, translateY: -5 }}
      whileTap={{ scale: 1.1, translateY: -5 }}
      onHoverStart={() => setIsVisible(true)}
      onHoverEnd={() => setIsVisible(false)}
      onClick={() => setIsVisible(!isVisible)}
      {...props}
    >
      <Badge
        variant="secondary"
        className="relative inline-block text-sm font-semibold px-4 py-2 cursor-pointer transition-all duration-300 group hover:bg-blue-600 hover:text-white"
      >
        {skill.name}
        {isVisible && <SkillPopup item={skill.item} />}
      </Badge>
    </motion.div>
  );
}
