import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProjectsArea from "./components/project area/project-area.jsx";
import HomePage from "./components/home page/home-page.jsx";
import SignUp from "./components/Auth/signup/signup-container.jsx";
import Login from "./components/Auth/login/login-container.jsx";

import "./App.css";

import { ProjectProvider } from './context/ProjectContext';

export default function Home() {
  return (
    <ProjectProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsArea />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ProjectProvider>
  );
}
