import { useState, useEffect } from "react";
import ProjectListItem from "./ProjectListItem";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const res = await fetch('https://localhost:7171/api/projects')
    const data = await res.json()

    setProjects(data)
  }

  useEffect(() => {
    getProjects();
  }, [])

  return (
    <section id="project-list">
        <div className="container">
          {
            projects.map(project => (<ProjectListItem key={project.id} project={project}/>))
          }  
        </div>
    </section>
  )
}

export default ProjectList;