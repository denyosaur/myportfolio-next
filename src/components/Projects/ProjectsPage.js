import Project from './Project';

import './Projects.css';

function ProjectsPage({ projects }) {

  return (
    <div className="flex absolute items-end flex-col text-2xl w-full h-[71.5vh] sm:h-[93.7vh] overflow-auto projects-scroll mb-[-2.3rem] top-[-2.25rem] pt-10 sm:pt-40" >
      {projects.map(project => (
        <Project
          key={project.name}
          project={project}
        />
      ))}
    </div>
  )
}

export default ProjectsPage;
