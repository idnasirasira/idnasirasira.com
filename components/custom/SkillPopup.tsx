'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Badge } from '../ui/badge';

interface SkillPopupProp {
  item: string[];
}

export function SkillPopup({ item }: SkillPopupProp) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: -5 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.5, ease: 'backInOut' }}
        className="absolute left-0 bottom-full mb-2 bg-white dark:bg-slate-900 text-white text-xs font-medium px-2 py-1 duration-300 pointer-events-none"
      >
        <Badge className="mb-2">Frameworks:</Badge>
        <div className="flex flex-wrap w-[200px]">
          {item.map((item, idx) => (
            <Badge key={idx} variant="secondary" className="m-1 inline">
              {item}
            </Badge>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
