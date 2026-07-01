import { projects } from "../data/projects";

interface ProjectDetailProps {
  projectId: string | null;
  onNavigate: (page: string) => void;
}

export function ProjectDetail({ projectId, onNavigate }: ProjectDetailProps) {
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-stone-900 mb-4">Project Not Found</h1>
          <button
            onClick={() => onNavigate("work")}
            className="px-6 py-2 bg-basalt text-white rounded-lg hover:bg-[#A8832A] transition-colors"
          >
            Back to Work
          </button>
        </div>
      </div>
    );
  }

  const methodsList = project.methods;

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => onNavigate("work")}
          className="flex items-center text-basalt hover:text-[#A8832A] mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Work
        </button>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-stone-800 mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-stone-100 px-4 py-2 rounded-lg">
              <span className="text-sm font-medium text-stone-800">Role:</span>
              <span className="ml-2 text-stone-900">{project.role}</span>
            </div>
            <div className="bg-stone-100 px-4 py-2 rounded-lg">
              <span className="text-sm font-medium text-stone-800">Duration:</span>
              <span className="ml-2 text-stone-900">{project.duration}</span>
            </div>
            <div className="bg-stone-100 px-4 py-2 rounded-lg">
              <span className="text-sm font-medium text-stone-800">Team:</span>
              <span className="ml-2 text-stone-900">{project.team}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-stone-mist text-stone-800 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project Image */}
        {project.image && (
          <div className="mb-12">
            <img
              src={project.image}
              alt={project.title}
              className="h-64 lg:h-96 w-full object-cover rounded-xl"
            />
            {project.imageDescription && (
              <div className="px-4 py-2">
                <p className="text-sm text-chestnut text-right">{project.imageDescription}</p>
              </div>
            )}
          </div>
        )}

        {/* Project Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white/75 backdrop-blur-sm rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Challenge</h2>
            <p className="text-stone-800">{project.challenge}</p>
          </div>

          <div className="bg-white/75 backdrop-blur-sm rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Approach</h2>
            <p className="text-stone-800 mb-4">{project.approach}</p>
            {methodsList.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">Methods:</h3>
                <ul className="list-disc list-inside text-stone-800 space-y-2">
                  {methodsList.map((method, index) => (
                    <li key={index}>{method}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="bg-white/75 backdrop-blur-sm rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Key Insights</h2>
            <ul className="list-disc list-inside text-stone-800 space-y-2">
              {project.insights.map((insight, index) => (
                <li key={index}>{insight}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white/75 backdrop-blur-sm rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Impact</h2>
            <p className="text-stone-800">{project.impact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
