import Project from './Project';

function ProjectsPage({ projects }) {
  console.log(projects)
  return (
    <div className="font-thin text-2xl" >
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
