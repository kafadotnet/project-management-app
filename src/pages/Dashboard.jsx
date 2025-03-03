import CreateProject from "./CreateProject";
import Projects from "./Projects";

const Dashboard = () => {
  return (
    <>
        <div className="">
            <Projects />
            <CreateProject />
        </div>
    </>
  );
};

export default Dashboard;
