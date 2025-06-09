import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const roles = ['Frontend Developer', 'UX Designer', 'Problem Solver', 'Creative Thinker'];
  
  useEffect(() => {
    let currentRole = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let pauseDuration = 1500;
    
    const type = () => {
      const role = roles[currentRole];
      
      if (isDeleting) {
        setTypedText(role.substring(0, currentChar - 1));
        currentChar--;
        typingSpeed = 50;
      } else {
        setTypedText(role.substring(0, currentChar + 1));
        currentChar++;
        typingSpeed = 100;
      }
      
      if (!isDeleting && currentChar === role.length) {
        isDeleting = true;
        typingSpeed = pauseDuration;
      } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentRole = (currentRole + 1) % roles.length;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    const typingTimer = setTimeout(type, 1000);
    
    return () => clearTimeout(typingTimer);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="lg:min-h-screen flex items-center justify-center relative bg-gray-50 dark:bg-gray-900">
      {/* <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col justify-center">
        <div className="lg:ml-10 animate-fadeIn">
          <h2 className="text-lg md:text-xl font-medium text-amber-700 dark:text-amber-500 mb-2">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Nagaraju Nali
          </h1>
          <div className="h-9 mb-6">
            <h2 className="text-lg md:text-2xl font-medium text-gray-700 dark:text-gray-300">
              I'm a <span className="text-amber-700 dark:text-amber-500">{typedText}</span>
              <span className={`ml-1 inline-block w-1 h-5 bg-amber-700 dark:bg-amber-500 ${isTyping ? 'animate-blink' : ''}`}></span>
            </h2>
          </div>
          <p className="max-w-2xl text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8">
            I enjoy developing digital experiences that are both useful and enjoyable, solving real problems with clean and creative solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-amber-700 hover:bg-amber-700 dark:bg-amber-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-transparent border-2 border-amber-700 text-amber-700 dark:text-amber-600 dark:border-amber-600 hover:bg-indigo-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-amber-700 dark:text-gray-500 dark:hover:text-amber-500 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </section>
  );
};

export default Hero;