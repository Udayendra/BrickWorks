import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/frontend/Home";
import AboutPage from "./components/frontend/aboutpage/AboutPage";
import ServicesPage from "./components/frontend/servicespage/ServicesPage";
import Project from "./components/frontend/projectpage/Project";
import BlogPage from "./components/frontend/blogpage/BlogPage";
import Contact from "./components/frontend/contactpage/Contact";
import Login from "./components/backend/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/backend/Dashboard";
import RequireAuth from "./components/common/RequireAuth";
import { default as ShowServices } from "./components/backend/services/Show";
import {default as ShowProjects} from "./components/backend/projects/ShowProject";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<Login />} />

          <Route
            path="/admin/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />

          <Route
            path="/admin/show"
            element={
              <RequireAuth>
                <ShowServices />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/projects"
            element={
              <RequireAuth>
                <ShowProjects />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
