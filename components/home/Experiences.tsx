import { ExperineceItem } from '../custom/ExperienceItem';

export interface Experiences {
  title: string;
  company: string;
  period: string;
  location: string;
  detail: ExperienceDetails;
}

export interface ExperienceDetails {
  description: string;
  skills: string;
  role: string;
  summary: string;
}

const experiences: Experiences[] = [
  {
    title: 'Co-Founder',
    company: 'Kyoora',
    period: 'Mar 2022 - Present',
    location: 'Jakarta, Indonesia',
    detail: {
      description: `Leading a highly motivated team in providing web and mobile solutions, creating open-source libraries, and sharing programming tips and tutorials.`,
      skills: 'React, Next.js, TypeScript, Tailwind CSS, Firebase',
      role: 'Co-Founder',
      summary: `Leading a highly motivated team in providing web and mobile solutions, creating open-source libraries, and sharing programming tips and tutorials.`,
    },
  },
  {
    title: 'Full Stack Developer',
    company: 'Choir Express (PT Fia Express Indonesia)',
    period: 'Feb 2021 - Jul 2023',
    location: 'Jakarta Selatan, Jakarta, Indonesia',
    detail: {
      description: `Developed and maintained expedition & logistics software, optimized database processes and tracking systems, and developed backend REST API using CodeIgniter & MySQL.`,
      skills: 'CodeIgniter, MySQL, REST API, Elasticsearch',
      role: 'Full Stack Developer',
      summary: `Developed and maintained expedition & logistics software, optimized database processes and tracking systems, and developed backend REST API using CodeIgniter & MySQL.`,
    },
  },
  {
    title: 'Full Stack Developer',
    company: 'Evosistem',
    period: 'Feb 2021 - Apr 2021',
    location: 'Jakarta Selatan, Jakarta, Indonesia',
    detail: {
      description: `Maintained existing software and created the company profile website using Laravel & MySQL.`,
      skills: 'Laravel, MySQL, REST API',
      role: 'Full Stack Developer',
      summary: `Maintained existing software and created the company profile website using Laravel & MySQL.`,
    },
  },
  {
    title: 'Full Stack Developer',
    company: 'Maestrobyte Solution',
    period: 'May 2016 - Sep 2018',
    location: 'Bandung Area, West Java, Indonesia',
    detail: {
      description: `With over five development projects under my belt, I have played a key role in both front-end and back-end aspects of application development. One of these projects included a rental system app built with CodeIgniter, where I was responsible for the full cycle of the development process—from gathering requirements to final deployment. I actively participated in the system architecture design, development, and testing phases, ensuring the system met client expectations.

        In addition to this, I was involved in the research and development (R&D) for implementing Elasticsearch. This included exploring various indexing strategies, optimizing query performance, and integrating the search engine to improve data retrieval speeds and user experience. My work in Elasticsearch was crucial in enhancing search functionalities across different applications, leading to a scalable, high-performance solution.`,
      skills: 'CodeIgniter, MySQL, Elasticsearch, REST API',
      role: 'Full Stack Developer',
      summary: `With over five development projects under my belt, I have played a key role in both front-end and back-end aspects of application development. One of these projects included a rental system app built with CodeIgniter, where I was responsible for the full cycle of the development process—from gathering requirements to final deployment. I actively participated in the system architecture design, development, and testing phases, ensuring the system met client expectations.

        In addition to this, I was involved in the research and development (R&D) for implementing Elasticsearch. This included exploring various indexing strategies, optimizing query performance, and integrating the search engine to improve data retrieval speeds and user experience. My work in Elasticsearch was crucial in enhancing search functionalities across different applications, leading to a scalable, high-performance solution.`,
    },
  },
];

export function Experiences() {
  return (
    <section
      id="experiences"
      className="py-12 bg-blue-50/30 dark:bg-slate-900/20"
    >
      <div className="container px-5 py-24   mx-auto flex-col items-center justify-center">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-blue-600 dark:text-blue-50 tracking-widest font-medium title-font mb-1">
            Work Experiences
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 dark:text-gray-200">
            Experiences
          </h1>
        </div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperineceItem key={index} exp={exp} isActive={index == 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
