export function About() {
  const skills = [
    "User Research",
    "Usability Testing",
    "User Interviews",
    "Survey Design",
    "Persona Development",
    "Journey Mapping",
    "UserTesting",
    "Mixed-Methodology Research",
    "Heuristic Review",
    "Design Thinking",
    "Figma",
    "DoveTail",
    "UserZoom",
    "AdobeXD",
    "GitHub CoPilot",
    "ClaudeAI",
    "ChatGPT", 
    "QualtricsXM",
    "IBM SPSS Statistics", 
    "In-Depth Interviews",
    "Ethnographic Research", 
    "Multicultural Research", 
    "Omnichannel System Research", 
    "Multi-User Experience Research",
    "Strategic Research",
    "Research Storytelling"
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-stone-800">
            Passionate about nurturing the relationship between humanity and technology with meaningful interactions
          </p>
        </div>

        {/* Bio Section */}
        <div className="mb-16">
          <div className="bg-white/75 backdrop-blur-sm rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">My Story</h2>
            <div className="prose prose-lg text-stone-800 space-y-4">
              <p>
                I have a lush background in UX Research beginning in startup environments and ending in a fortune 50 enterprise. I got my bachelor's degree in Industrial Systems Engineering where I gained in-depth subject matter expertise from the Georgia Institute of Technology on supply chain, management, computer science, and financial systems and decided to follow my passion for quality human experience at the university of southern california where I attended their Masters of Applied Psychology with a User Experience Research concentration in 2018. Since graduating I am thrilled to have had the opportunity to  work in a variety of environments with diverse range of individuals where I had the privilege of working as a single User Experience Researcher and a member of larger teams in Enterprise Settings. Over the last 5 years I've gained the most experience working on modernizing large-scale, multi-user omnichannel end-to-end experiences in purchasing and high-stress auto and Fire claims experiences.
              </p>
              <p>
                My approach to UX Research is holistic, regenerative, and mindful in nature. I am a dual citizen with international reach so I often consider global events, trends, and other insights that directly impact users and their ability to interact with digital tools. My systems engineering background and contextual application in high-stress, high-stakes environments that integrate hundreds of teams in large matrixed organizations has engrained in me the importance of upstream and downstream impact. I am an artist by trade, and prefer bringing creativity into practice in each interaction. I see every interaction as an opportunity to boost quality work and lift each other up. Working directly with VP and director level audiences fortifies my work to be most relevant to leadership audiences. Most recently I have found the most fulfilment in aiding teams with their future-proof vision and strategy given our ever changing world and the impact of emerging technologies like Voice AI, agentic AI, and generative AI.
              </p>
              <p>
                I am passionate about bringing quality and sincere interactions and end-to-end experiences to human users. I am looking to grow my career into settings that allow continued evolution in complex systems, particularly those requiring fast-paced, process-aware, contextual inquiries. 
              </p>

            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-stone-mist text-stone-800 px-4 py-3 rounded-lg text-center flex items-center justify-center font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/75 backdrop-blur-sm rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-stone-900 mb-6">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-stone-900">M.S. Applied Psychology</h4>
                <p className="text-stone-800">Concentration in User Experience Research</p>
                <p className="text-stone-800">University of Southern California, 2021</p>
              </div>
              <div>
                <h4 className="font-semibold text-stone-900">B.S. Industrial Engineering</h4>
                <p className="text-stone-800">Georgia Institute of Technology, 2018</p>
              </div>
            </div>
          </div>

          <div className="bg-white/75 backdrop-blur-sm rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-stone-900 mb-6">Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-stone-900">Advanced UX Researcher</h4>
                <p className="text-stone-800">State Farm Insurance Co., 2021 - Present</p>
              </div>
              <div>
                <h4 className="font-semibold text-stone-900">Lead UX Researcher</h4>
                <p className="text-stone-800">Peak Artificial Intelligence, 2021</p>
              </div>
              <div>
                <h4 className="font-semibold text-stone-900">Co-Founder & Principal Product Development Researcher</h4>
                <p className="text-stone-800">VAILS Virtual Nails Corporation, 2018 - 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
