
const ProjectListItem = ({project}) => {
  return (
    <div className="project">
        <div>{project.id}</div>
        <div>{project.projectName}</div>
        <div>{project.client.clientName}</div>
        <div>{project.service.serviceName}</div>
    </div>
  )
}

export default ProjectListItem;