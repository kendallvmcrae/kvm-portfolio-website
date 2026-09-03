import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Contact } from "./pages/Contact";
import { Process } from "./pages/Process";
import { Fun } from "./pages/Fun";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

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
      case "process":
        navigate("/process");
        break;
      case "fun":
        navigate("/fun");
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
  const [menuOpen, setMenuOpen] = useState(false);

  // Extract current page from URL
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === "/") return "home";
    if (path === "/about") return "about";
    if (path === "/work") return "work";
    if (path === "/contact") return "contact";
    if (path === "/process") return "process";
    if (path === "/fun") return "fun";
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
      case "process":
        navigate("/process");
        break;
      case "fun":
        navigate("/fun");
        break;
      default:
        navigate("/");
    }
  };

  const handleViewProject = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation
        currentPage={getCurrentPage()}
        onNavigate={handleNavigate}
        open={menuOpen}
        onToggle={() => setMenuOpen((prev) => !prev)}
      />
      <div className="flex-1 min-w-0 flex flex-col">
        <main className="flex-1">
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
            <Route
              path="/process"
              element={<Process onNavigate={handleNavigate} />}
            />
            <Route
              path="/fun"
              element={<Fun onNavigate={handleNavigate} />}
            />
          </Routes>
        </main>
        <Footer onNavigate={handleNavigate} onViewProject={handleViewProject} />
      </div>
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
