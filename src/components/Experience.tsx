import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
}

const ExperienceTimeline: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: 'EverestIMS Technologies Limited',
      position: 'Software Engineer',
      period: 'Apr 2025 - Present',
      location: 'Bengaluru, India',
      description: [
        'Develop and maintain the web application',
        'Blog posting, developing email templates',
        'Collaborated with design team to implement responsive, accessible UI components'
      ]
    },
    {
      company: 'Tata Consultancy Services(TCS)',
      position: 'Frontend Developer',
      period: 'Mar 2022 - Mar 2025',
      location: 'Hyderabd, India',
      description: [
        'Built responsive React apps with great UX & speed',
        'Enhanced web pages with agile team collaboration',
        'Developed accessible features using JavaScript'
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Work <span className="text-amber-700 dark:text-amber-500">Experience</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-amber-700 dark:bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-amber-700 dark:bg-amber-500 z-10 shadow-md"></div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 md:px-8">
                    <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
                      {/* Triangle pointer */}
                      <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-t border-l border-gray-100 dark:border-gray-700 ${
                        index % 2 === 0 
                          ? 'left-0 -translate-x-1/2 rotate-45' 
                          : 'right-0 translate-x-1/2 -rotate-135'
                      }`}></div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg font-medium text-amber-700 dark:text-amber-500 mb-3">
                        {exp.company}
                      </h4>
                      
                      <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center mb-2 sm:mb-0">
                          <Calendar size={16} className="mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      <ul className="mt-4 space-y-2 list-disc">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="inline-block w-1 h-1 rounded-full bg-amber-700 dark:bg-amber-500 mt-2 mr-2"></span>
                            <span className="text-gray-600 dark:text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Year badge - mobile only */}
                  <div className="flex md:hidden items-center space-x-2 my-4 text-amber-700 dark:text-amber-500 font-medium">
                    <Calendar size={18} />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Timeline start icon */}
          <div className="hidden md:flex absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-amber-700 dark:bg-amber-500 text-white items-center justify-center shadow-lg">
            <Briefcase size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;