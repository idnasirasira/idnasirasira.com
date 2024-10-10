export function Skills() {
  const skills = [
    { name: 'PHP', level: 'Intermediate', percentage: 90 },
    { name: 'JavaScript', level: 'Expert', percentage: 90 },
    { name: 'TypeScript', level: 'Advanced', percentage: 80 },
    { name: 'Python', level: 'Advanced', percentage: 80 },
    { name: 'Node.js', level: 'Intermediate', percentage: 70 },
    { name: 'CSS/SCSS', level: 'Advanced', percentage: 80 },
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
        <div className="md:w-6/12 mx-auto flex flex-wrap gap-4 justify-center items-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="relative inline-block bg-gray-200 text-gray-800 text-sm font-semibold px-4 py-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:text-white group"
            >
              {skill.name} - {skill.level}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded opacity transition-opacity opacity-0 duration-300 pointer-events-none group-hover:opacity-100">
                {skill.percentage}%
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
