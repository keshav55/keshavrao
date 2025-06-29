import React from 'react';

const CurrentProjects = () => {
  const projects = [
    {
      name: 'Atris Labs',
      url: 'https://atrislabs.com'
    }
  ];

  return (
    <div className="mb-12 text-gray-400">
      <div className="space-y-2">
        <p>
          Focus:
          {projects.map((project, index) => (
            <span key={project.name}>
              {' '}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {project.name}
              </a>
              {index !== projects.length - 1 && ','}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default CurrentProjects;
