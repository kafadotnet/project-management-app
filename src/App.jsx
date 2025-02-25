import "./mainmin.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import CreateProjects from "./pages/CreateProject";
import PageNotFound from "./pages/PageNotFound";
import CreateProject from "./pages/CreateProject";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateProject />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/create" element={<CreateProjects />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
