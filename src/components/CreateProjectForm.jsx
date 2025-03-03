import { useEffect, useState } from "react";

const CreateProjectForm = () => {
  const [clients, setClients] = useState([]);
  const [services, setServices] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [clientId, setClientId] = useState(0);
  const [serviceId, setServiceId] = useState(0);

  const getClients = async () => {
    const res = await fetch("https://localhost:7171/api/projects");
    const data = await res.json();

    setClients(data);
  };

  const getServices = async () => {
    const res = await fetch("https://localhost:7171/api/projects");
    const data = await res.json();

    setServices(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      projectName: projectName,
      description: description,
      clientId: parseInt(e.target["clients"].value),
      serviceId: parseInt(e.target["services"].value),
    };

    console.log(formData);

    // const res = await fetch('https://localhost:7171/api/projects', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body:JSON.stringify(formData)
    // })
  };

  useEffect(() => {
    getClients();
    getServices();
  });

  return (
    <section className="section-title">
      <div className="container">
        <h3>Project 100 - Create New</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="projectName">Project Description</label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Notes</label>
            <textarea
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            >
              {description}
            </textarea>
          </div>

          <div className="form-group">
            <label htmlFor="clients">Clients</label>
            <select name="clients" id="clients" defaultValue={clientId}>
              <option
                disabled
                hidden
                value="0"
                onChange={(e) => setClientId(e.target.value)}
              >
                Choose a client from the list
              </option>
              {clients.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.clientName}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="services">Services</label>
            <select name="services" id="services" defaultValue={serviceId}>
              <option
                disabled
                hidden
                value="0"
                onChange={(e) => setServiceId(e.target.value)}
              >
                Choose a service from the list
              </option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.serviceName}
                </option>
              ))}
            </select>
          </div>

          <button type="submit">Create</button>
        </form>
      </div>
    </section>
  );
};

export default CreateProjectForm;
