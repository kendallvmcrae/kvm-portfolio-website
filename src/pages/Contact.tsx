export function Contact() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-stone-800 max-w-2xl mx-auto">
            I sincerely value others' perspectives and would love to chat with you about our changing world,
            UX industry, emerging technologies, regenerative UX.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <a
            href="mailto:kendallvmcrae@gmail.com"
            className="bg-white/75 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-stone-mist rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-basalt" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-semibold text-stone-900 group-hover:text-basalt transition-colors">
                  Email
                </h3>
                <p className="text-stone-800 break-words">kendallvmcrae@gmail.com</p>
              </div>
            </div>
            <p className="text-stone-800">
              Drop me a line for project inquiries, collaboration opportunities, or just to say hello.
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/kendallvictoriam/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/75 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-stone-mist rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-basalt" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-semibold text-stone-900 group-hover:text-basalt transition-colors">
                  LinkedIn
                </h3>
                <p className="text-stone-800">LinkedIn Profile</p>
              </div>
            </div>
            <p className="text-stone-800">
              Connect with me professionally and see my latest updates and thoughts on UX research.
            </p>
          </a>
        </div>

        {/* Additional Info */}
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">
            Open to New Opportunities
          </h2>
          <p className="text-stone-800 mb-6 max-w-2xl mx-auto">
            I'm currently open for work in leading UX programs, experience strategy, user experience research, and similar.
            Whether you're looking for a full-time researcher, consultant, or collaborator
            on an exciting project, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <span className="px-4 py-2 bg-white/80 text-stone-700 rounded-lg font-medium">
              Available for Full-time Roles
            </span>
            <span className="px-4 py-2 bg-white/80 text-stone-700 rounded-lg font-medium">
              Open to Consulting
            </span>
            <span className="px-4 py-2 bg-white/80 text-stone-700 rounded-lg font-medium">
              Remote Friendly
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
