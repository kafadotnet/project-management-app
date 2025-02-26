import "./mainmin.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import CreateProject from "./pages/CreateProject";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Header/>
          <main>
            <Routes>
              <Route path="/" element={<CreateProject />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/create" element={<CreateProject />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
