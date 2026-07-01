import { projects } from "../data/projects";

interface WorkProps {
  onViewProject: (projectId: string) => void;
  onNavigate: (page: string) => void;
}

export function Work({ onViewProject, onNavigate }: WorkProps) {
  const handleViewProject = (projectId: string) => {
    onViewProject(projectId);
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
            My Work
          </h1>
          <p className="text-xl text-stone-800 max-w-3xl mx-auto">
            A collection of relevant projects that demonstrate my
            research philosophy and approach to solving complex challenges in a variety of ecosystems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/75 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleViewProject(project.id)}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
              ) : (
                <div className="h-48 bg-stone-mist"></div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-stone-800 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-stone-mist text-stone-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-stone-500">
                  <span>{project.duration}</span>
                  <span>{project.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
