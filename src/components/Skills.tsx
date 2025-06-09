import React, { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
}

const Skills: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const skills: Skill[] = [
    { name: 'JavaScript', level: 70, category: 'frontend' },
    { name: 'React', level: 70, category: 'frontend' },
    { name: 'Angular', level: 25, category: 'frontend' },
    { name: 'HTML & CSS', level: 75, category: 'frontend' },
    { name: 'TypeScript', level: 10, category: 'frontend' },
    { name: 'Tailwind CSS', level: 70, category: 'frontend' },
    { name: 'Responsive Design', level: 90, category: 'frontend' },
    { name: 'Node.js', level: 40, category: 'backend' },
    { name: 'Express', level: 10, category: 'backend' },
    { name: 'Figma', level: 30, category: 'design' },
    { name: 'Git & GitHub', level: 70, category: 'other' },
  ];
  
  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);
  
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-amber-700 dark:text-amber-500">Skills</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-amber-700 dark:bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            {['all', 'frontend', 'backend', 'design', 'other'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  filter === category 
                    ? 'bg-white dark:bg-gray-700 text-amber-700 dark:text-amber-500 shadow-sm' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.name} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-amber-700 dark:text-amber-500">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-700 dark:from-amber-400 dark:to-amber-600 rounded-full"
                  style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
                ></div>
              </div>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 capitalize">
                {skill.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;