import { projects } from "../data/projects";

interface HomeProps {
  onNavigate: (page: string) => void;
  onViewProject: (projectId: string) => void;
}

export function Home({ onNavigate, onViewProject }: HomeProps) {
  const featuredProjects = projects.slice(0, 3);

  const handleViewProject = (projectId: string) => {
    console.log('Home page - handleViewProject called with:', projectId);
    onViewProject(projectId);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-terracotta-50 to-stone-100 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-stone-900 mb-6">
              Great to virtually meet you.
            </h1>
            <p className="text-xl lg:text-2xl text-stone-600 mb-8 max-w-3xl mx-auto">
              My name is Kendall, and I lead holistic programs of research focusing on omnichannel experiences in high-stress, high-stakes environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate("work")}
                className="px-8 py-3 bg-terracotta-600 text-white font-semibold rounded-lg hover:bg-terracotta-700 transition-colors"
              >
                View My Work
              </button>
              <button
                onClick={() => onNavigate("about")}
                className="px-8 py-3 border-2 border-terracotta-600 text-terracotta-600 font-semibold rounded-lg hover:bg-terracotta-50 transition-colors"
              >
                About Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Intro */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6">
            My Philosophy
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Six years of experience research across startups and Fortune 50 companies have shown me that meaningful impact comes from genuine connection and collaborative partnership. My Industrial Engineering background gives me a systems-level view, while Applied Psychology helps me understand the human side of those systems. I'm drawn to research that creates clarity from complexity and is guided by authenticity, presence, and commitment to work that genuinely matters. Altogether, this bridges what users actually need with what businesses need to know in ways that lead to tangible change.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-stone-600">
              How I've used established research methodologies to solution enterprise challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-stone-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleViewProject(project.id)}
              >
                <div className="h-48 bg-gradient-to-br from-terracotta-100 to-terracotta-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-stone-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-terracotta-100 text-terracotta-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate("work")}
              className="px-8 py-3 border-2 border-terracotta-600 text-terracotta-600 font-semibold rounded-lg hover:bg-terracotta-50 transition-colors"
            >
              View All Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
