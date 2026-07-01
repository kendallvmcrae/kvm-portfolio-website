import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Contact } from "./pages/Contact";
import { Navigation } from "./components/Navigation";

function ProjectDetailWrapper() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    switch (page) {
      case "home":
        navigate("/");
        break;
      case "about":
        navigate("/about");
        break;
      case "work":
        navigate("/work");
        break;
      case "contact":
        navigate("/contact");
        break;
      default:
        navigate("/");
    }
  };

  return <ProjectDetail projectId={projectId || null} onNavigate={handleNavigate} />;
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract current page from URL
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === "/") return "home";
    if (path === "/about") return "about";
    if (path === "/work") return "work";
    if (path === "/contact") return "contact";
    if (path.startsWith("/project/")) return "project";
    return "home";
  };

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavigate = (page: string) => {
    switch (page) {
      case "home":
        navigate("/");
        break;
      case "about":
        navigate("/about");
        break;
      case "work":
        navigate("/work");
        break;
      case "contact":
        navigate("/contact");
        break;
      default:
        navigate("/");
    }
  };

  const handleViewProject = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={getCurrentPage()} onNavigate={handleNavigate} />
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<Home onNavigate={handleNavigate} onViewProject={handleViewProject} />} 
          />
          <Route 
            path="/about" 
            element={<About />} 
          />
          <Route 
            path="/work" 
            element={<Work onViewProject={handleViewProject} onNavigate={handleNavigate} />} 
          />
          <Route 
            path="/project/:projectId" 
            element={<ProjectDetailWrapper />} 
          />
          <Route 
            path="/contact" 
            element={<Contact />} 
          />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
