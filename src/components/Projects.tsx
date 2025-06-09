import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Taskmate from '../assets/projects/taskmate.webp';

import Cinemate from '../assets/projects/cinemate.webp'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Task Mate',
      description: 'A smart task manager app to organize, track, and complete tasks efficiently every day.',
      image: Taskmate,
      tags: ['React', 'Tailwind CSS', 'Bootstrap'],
      liveUrl: 'https://nalin-taskmate.netlify.app/',
      githubUrl: 'https://github.com/githubnali/nalin-taskmate',
      featured: false

    },
    {
      id: 2,
      title: 'Cinemate',
      description: 'Discover popular, top-rated, and upcoming movies with details using TMDB API in a sleek React web app',
      image: Cinemate,
      tags: ['React', 'APIs', 'Tailwind CSS'],
      liveUrl: 'https://nalin-cinemate.netlify.app/movies/popular',
      githubUrl: 'https://github.com/githubnali/nalin-cinemate',
      featured: true
    },
    {
      id: 3,
      title: 'Sass Website Design Demo',
      description: 'Sample Assignment built using HTML, CSS, Javascript',
      image: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://nalin-whitepace.netlify.app/',
      githubUrl: '#',
      featured: false


    },
    {
      id: 4,
      title: 'E-Commerce (Coming Soon....)',
      description: 'Coming Soon....',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'MongoDB', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Coming Soon....',
      description: 'Coming Soon....',
      image: 'https://images.pexels.com/photos/7567432/pexels-photo-7567432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'APIs'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 6,
      title: 'Coming Soon....',
      description: 'Coming Soon....',
      image: 'https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'TypeScript', ],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 7,
      title: 'Coming Soon....',
      description: 'Coming Soon....',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['HTML/CSS', 'JavaScript', 'UI/UX'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];
  
  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-amber-700 dark:text-amber-500">Projects</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-amber-700 dark:bg-amber-500 mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 overflow-x-auto py-2">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  filter === tag 
                    ? 'bg-amber-700 text-white' 
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {tag === 'all' ? 'All' : tag}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full flex justify-between">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 text-gray-900 rounded-full hover:bg-white transition-colors"
                      aria-label="Live Preview"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 text-gray-900 rounded-full hover:bg-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs font-medium bg-amber-100 dark:bg-indigo-900/30 text-amber-700 dark:text-amber-500 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;