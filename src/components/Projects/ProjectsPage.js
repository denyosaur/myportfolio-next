import Project from './Project';

function ProjectsPage({ projects }) {
  console.log(projects)
  return (
    <div className="flex flex-col items-end w-full text-2xl" >
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
