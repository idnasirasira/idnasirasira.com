import { AnimatePresence, motion } from 'framer-motion';
import { ExperienceDetails } from '../home/Experiences';

interface ExperienceDetailProps {
  detail: ExperienceDetails;
}

export function ExperiencesDetail({ detail }: ExperienceDetailProps) {
  return (
    <AnimatePresence mode="sync">
      <motion.div
        initial={{ opacity: 0, translateX: '-30px' }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: '-30px' }}
        transition={{ duration: 0.7 }}
        whileTap={{ translateY: -10 }}
        className="md:w-8/12 mt-4 md:mt-0 md:pl-8 text-gray-700 dark:text-gray-300 p-3"
      >
        <div className="flex flex-col gap-6 w-full">
          <div className="">
            <h3 className="text-blue-700 font-semibold">Skills</h3>
            <p className="body-text pl-3 mt-[6px]">
              <span>{detail.skills}</span>
            </p>
          </div>
          <div className="">
            <h3 className="text-blue-700 font-semibold">Role</h3>
            <p className="body-text pl-3 mt-[6px]">
              <span>{detail.role}</span>
            </p>
          </div>
          <div className="">
            <h3 className="text-blue-700 font-semibold">Summary</h3>
            <div className="body-text pl-3 mt-[6px] whitespace-pre-wrap">
              {detail.summary}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
