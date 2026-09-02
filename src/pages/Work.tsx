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
              className="bg-white/75 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer flex flex-col h-full"
              onClick={() => handleViewProject(project.id)}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.imageDescription ?? project.title}
                  className="h-48 w-full object-cover"
                />
              ) : (
                <div className="h-48 bg-gradient-to-br from-stone-sand via-stone-mist to-meadow/25"></div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-semibold text-stone-900 mb-1">
                  {project.title}
                </h2>
                <p className="text-xs text-canopy mb-3">
                  {project.industry} · {project.userType} · {project.date}
                </p>
                <p className="text-stone-800 mb-3 line-clamp-4">
                  {project.summary}
                </p>
                <details
                  className="group mb-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden flex items-center gap-1 text-sm text-stone-600 hover:text-stone-900 transition-colors select-none py-2 -my-2">
                    <svg
                      className="w-3 h-3 transition-transform group-open:rotate-90"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Tags ({project.tags.length})
                  </summary>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-stone-mist text-stone-800 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </details>
                <div className="flex items-center justify-between text-sm text-stone-600 mt-auto pt-2">
                  <span>{project.role}</span>
                  <span>{project.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
