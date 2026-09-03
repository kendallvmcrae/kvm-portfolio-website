import { useRef } from "react";
import { projects } from "../data/projects";
import { FernColony, type FernColonyHandle } from "../components/FernColony";
import { LogoStrip } from "../components/LogoStrip";

interface HomeProps {
  onNavigate: (page: string) => void;
  onViewProject: (projectId: string) => void;
}

/**
 * Testimonials, verbatim. Text wrapped in **double asterisks** renders bold — edit those markers
 * to change which phrases are emphasized.
 */
const testimonials = [
  {
    quote:
      "I wanted to share the amazing experience that I had with Kendall during her time working with my team. **She was simply remarkable.** She scheduled meetings with me to go over the specifics. **She was always very positive and worked well with the team.** I heard nothing but great things from the team about their experience with Kendall. **She has given me confidence that my team made an impact**...and we look forward to seeing the final product.",
    attribution: "Program Manager, State Farm",
  },
  {
    quote:
      "I really wanted to reach out and provide some positive feedback for Kendall McRae on a recent virtual observation. Due to some scheduling issues, we weren't able to have an onsite observation as intended and I was really nervous/anxious on what was expected of me. **Kendall made me feel comfortable** while communicating my day to day work on activities and what they entailed. She was able to **maintain exceptional professionalism while being personable** and **made me feel like my opinions whether positive or not, mattered.** There was **a feeling of openness and wanting to gain understanding** how the tools being implemented assisted with my job. This allowed a natural conversation which I really enjoyed and couldn't thank her enough.",
    attribution: "Employee Research Participant, State Farm",
  },
  {
    quote:
      "**Outstanding job on your presentation**...your discussion points and illustrations were **very applicable to the work our teams have done** and **allowed our teams to see where we can go in the future!** Thank you for your partnership - looking forward to more collaboration in the future!",
    attribution: "Director of Digital Claims Platform & Mobile (DCPM) Experiences, State Farm",
  },
  {
    quote:
      "It is not common to run into **brilliant people with a sincere interest in other cultures.** When I see that, I immediately make a mental note.",
    attribution: "Technology Director, State Farm",
  },
  {
    quote:
      "Kendall was **open and quick to incorporate input and ideas** into her line of questioning during interviews with Spanish-capable agents. I was impressed with her work, but was even more impressed last week when she presented her study's preliminary findings/report to a group of stakeholders. Kendall delivered her presentation, which included complex and often delicate demographical subjects, in a **remarkably professional, clear and engaging manner.** **Her subject matter expertise exceeded my expectations** and she answered questions with confidence and accuracy. I have worked with many researchers in the past, but Kendall's work and her presentation skills **appear above the standard.**",
    attribution: "Group Product Manager, Digital Experience, State Farm",
  },
];

/** Renders **bold** segments inside a testimonial quote. */
function EmphasizedQuote({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-stone-900">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}

const engagementTypes = [
  {
    title: "Series A Partnership",
    description:
      "Co-founded and led product research for Vails, a Georgia Tech CREATE-X startup — customer discovery, field research, and go-to-market strategy from 0 to MVP.",
  },
  {
    title: "Enterprise Initiatives",
    description:
      "Lead research programs inside a Fortune 50 organization — coordinating research across dozens of cross-functional teams to modernize large-scale claims and customer experiences.",
  },
  {
    title: "Independent Contracting",
    description:
      "Currently contracted with Vibra, an early-stage wellness technology startup, to help stand up their research function — program formation and foundational strategy.",
  },
];

export function Home({ onNavigate, onViewProject }: HomeProps) {
  const featuredProjects = projects.slice(0, 6);
  const colonyRef = useRef<FernColonyHandle>(null);

  return (
    <div>
      {/* Hero — fern colony merged into the background, wakes up on hover */}
      <section
        className="relative overflow-hidden py-28 lg:py-48"
        onPointerEnter={() => colonyRef.current?.play()}
        onPointerMove={() => colonyRef.current?.play()}
        onFocus={() => colonyRef.current?.play()}
      >
        {/* Wallpaper colony — oversized, faded into the page, wakes as the cursor crosses the hero */}
        <div className="absolute -right-[22%] sm:-right-[12%] lg:right-[-6%] top-1/2 -translate-y-1/2 opacity-[0.28] lg:opacity-[0.35]">
          <FernColony ref={colonyRef} size={1040} count={11} pairs={13} decorative />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-stone-900 leading-[1.05] tracking-tight max-w-3xl">
            Great to virtually meet you.
          </h1>
          <p className="text-xl lg:text-2xl text-stone-800 mt-6 max-w-xl">
            I am an Experience Research Strategist working at the intersection of creativity, systems thinking and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button
              onClick={() => onNavigate("work")}
              className="px-8 py-3 bg-basalt text-white font-semibold rounded-lg hover:bg-[#A8832A] transition-colors"
            >
              View My Work
            </button>
            <button
              onClick={() => onNavigate("about")}
              className="px-8 py-3 border-2 border-basalt text-basalt font-semibold rounded-lg hover:bg-[#A8832A] hover:text-white hover:border-[#A8832A] transition-colors"
            >
              About Me
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 lg:py-24 border-t border-stone-300/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-stone-900 mb-6">
            My Philosophy
          </h2>
          <p className="text-lg text-stone-800 leading-relaxed">
            Six years of experience research across startups and Fortune 50 companies have shown me that meaningful impact comes from genuine connection and collaborative partnership. My Industrial Engineering background gives me a systems-level view, while Applied Psychology helps me understand the human side of those systems. I'm drawn to research that creates clarity from complexity and is guided by authenticity, presence, and commitment to work that genuinely matters. Altogether, this bridges what users actually need with what businesses need to know in ways that lead to tangible change.
          </p>
        </div>
      </section>

      {/* Worked with */}
      <section className="py-16 border-t border-stone-300/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-stone-600 mb-12">
            I have conducted research in a variety of fields and worked with some amazing people
          </p>
          <LogoStrip />
        </div>
      </section>

      {/* Selected work — horizontal scroll */}
      <section className="py-16 lg:py-24 border-t border-stone-300/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end justify-between mb-10 gap-4">
          <h2 className="text-3xl lg:text-4xl font-semibold text-stone-900">
            Selected work
          </h2>
          <button
            onClick={() => onNavigate("work")}
            className="whitespace-nowrap text-sm font-semibold text-basalt hover:text-[#A8832A] transition-colors"
          >
            View the case study library &rarr;
          </button>
        </div>
        <div className="overflow-x-auto">
          <div className="flex gap-6 px-4 sm:px-6 lg:px-8 w-max">
            {featuredProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => onViewProject(project.id)}
                className="w-72 shrink-0 text-left group"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.imageDescription ?? project.title}
                    className="h-44 w-full object-cover rounded-lg mb-4"
                  />
                ) : (
                  <div className="h-44 w-full bg-gradient-to-br from-stone-sand via-stone-mist to-meadow/25 rounded-lg mb-4"></div>
                )}
                <p className="text-xs uppercase tracking-[0.14em] text-terracotta-bluff mb-1">
                  {project.industry} &middot; {project.date}
                </p>
                <h3 className="text-lg font-semibold text-stone-900 group-hover:text-[#A8832A] transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-stone-700 line-clamp-2">{project.summary}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 border-t border-stone-300/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-semibold text-stone-900 mb-12 text-center">
            What people say
          </h2>
          <div className="columns-1 lg:columns-2 gap-10">
            {testimonials.map((t, i) => (
              <div key={i} className="break-inside-avoid mb-10">
                <p className="text-stone-800 leading-relaxed mb-3">
                  &ldquo;<EmphasizedQuote text={t.quote} />&rdquo;
                </p>
                <p className="text-xs uppercase tracking-[0.14em] text-stone-500">{t.attribution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Services */}
      <section className="py-16 lg:py-24 border-t border-stone-300/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-stone-900 mb-6">
              Motivated by building a shared understanding of user stories and anticipating future needs through a tailored, collaborative mixed-methodology research.
            </h2>
            <p className="text-lg text-stone-800">
              Systems-level engineering growth mindset combined with applied psychology training in consumer psychology, organizational psychology, and user experience research to solve complex, dynamic, nonlinear systems where ambiguity is expected.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {engagementTypes.map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-semibold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-700 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
