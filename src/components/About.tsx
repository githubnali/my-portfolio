import React from 'react';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About <span className="text-amber-700 dark:text-amber-500">Me</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-amber-700 dark:bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-indigo-100 dark:border-gray-700 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 dark:from-indigo-600/10 dark:to-purple-600/20"></div>
              <img 
                src='../profile.webp'
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 mt-10 lg:mt-0">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Who am I?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              With over 3 years of hands-on experience, I build modern, responsive web applications 
              that are fast, scalable, and user-focused. I thrive on transforming complex challenges 
              into clean, efficient code creating digital solutions that are not just functional, but 
              built to last.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              My journey began with a deep curiosity about how things work and a 
              drive to solve real-world problems through code. Since then, I’ve 
              continually pushed myself to learn, adapt, and innovate crafting web experiences 
              that deliver value and leave a lasting impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Personal Info</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li><span className="font-medium">Name:</span> Nagaraju Nali</li>
                  <li><span className="font-medium">Location:</span> Bengaluru, India</li>
                  <li><span className="font-medium">Email:</span> nagarajunnr341@gmail.com</li>
                  <li><span className="font-medium">Experience:</span> 3+ Years</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">My Interests</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>🌐 Web Development</li>
                  <li>🚀 Continous Learning</li>
                  <li>🎨 Accessibility(A11y)</li>
                  <li>📱 Performance Optimization</li>
                </ul>
              </div>
            </div>
            <a 
              href="/src/assets/My_Resume.pdf" 
              download target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 bg-amber-700 hover:bg-amber-700 dark:bg-amber-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;