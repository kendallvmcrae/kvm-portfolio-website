export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  imageDescription?: string;
  role: string;
  duration: string;
  team: string;
  tags: string[];
  challenge: string;
  approach: string;
  methods: string[];
  insights: string[];
  impact: string;
}

export const projects: Project[] = [
  {
    id: "emerging-technologies-vision-summit",
    title: "Emerging Technologies Vision Summit",
    description: "Led strategic UX research and facilitated 3-day leadership workshop to help define how emerging technologies (agentic, generative, voice AI etc.) should be integrated into customer and associate loss reporting claims experiences that connect core drivers of customer satisfaction and maximize operational efficiency for the enterprise.",
    image: "/sky.jpeg",
    role: "Lead UX Researcher",
    duration: "3 days",
    team: "20 leaders representing four main departments spanning Enterprise Technology, Claims Business, Claims Process, and Enterprise Research.",
    tags: ["Strategic Research", "Emerging Technology Integration", "Omnichannel Journeys", "Service Design"],
    challenge: "Support multiple departments in a large matrixed organization in understanding and maintaining strategic alignment for integrating emerging technologies into high-stakes customer and associate experiences in a way that upholds established end-user (customer and associate) needs and balances operational efficiency.",
    approach: "I synthesized competitive intelligence and 16,000+ customer feedback responses using AI-assisted analysis, developed strategic frameworks addressing business constraints, and designed an interactive game-based exercise that enabled leadership teams to apply subject matter expertise and Enterprise Research insights into real-world claims scenarios.",
    methods: [
      "Conducted thorough internal stakeholder interviews to support alignment, communication, and shared goals across multiple cross-functional teams",
      "Completed a comprehensive competitive analysis of digital experiences and AI integration across 5+ industry leaders",
      "AI-assisted synthesis of 16,000+ customer feedback responses in partnership with customer insights measurement research teams",
      "Primary research literature review on established customer and associate needs. Secondary research literature review on emerging technologies in high-stakes service contexts",
      "Developed a scalable user experience framework to guide in-person story building that balanced emerging tech integration with human oversight when needed",
      "Designed and executed an interactive game-based design thinking workshop ('ClaimCraft') equipped with color-coded scenario cards to encourage collaboration and strategic thinking across groups"
    ],
    insights: [
      "Established key drivers of digital channel retention and containment",
      "Identified critical patterns for when automation enhances versus erodes customer trust in high-stakes situations",
      "Reframed perceived business trade-offs (cost vs. experience, speed vs. trust, automation vs. human touch, compliance vs. clarity) as solvable strategic design opportunities",
      "Established experiential requirements to reduce risk of channel abandonment and maximize relationships between groups in regulated environments"
    ],
    impact: "Enabled cross-functional collaboration resulting in unified 3-5 year modernization and integration strategy for Auto claims loss reporting. Physical artifacts included multiple team storyboards, communication agreements, and shared research roadmaps across teams. As of today, pending updates project ~$5-6 million in operational efficiencies savings from proposed changes."
  },
  {
    id: "associate-customer-fire-claims-experience",
    title: "Fire Claims Digital Modernization: Multi-Product Ecosystem Integration",
    description: "Leading end-to-end UX research for the enterprise-wide modernization of Fire claims digital experiences. This ongoing initiative supports multiple product teams as they transition from legacy systems to integrated modern applications while maintaining operational efficiency and associate productivity. Research focuses on evaluating workflows across customer-facing and associate-facing digital tools, ensuring human-centered design principles guide the integration of vendor solutions and internal platforms. The work balances documented user needs with business objectives, helping teams navigate the complexity of modernizing a high-stakes, time-sensitive claims operation without disrupting service delivery.",
    image: "/tree.jpeg",
    role: "Lead UX Researcher, Fire Claims Program",
    duration: "Ongoing (aligned to 2-week agile sprints)",
    team: "Claims Business, Fire Claims Process, Fire Experience Design, Fire Product Management, Customer Insights Measurement, Organizational Insights, Associate Experience, Agency teams",
    tags: [
      "Associate Research",
      "Digital Modernization", 
      "Integrated Vendor Systems",
      "Monitoring",
      "Evaluative"
    ],
    challenge: "Supporting digital modernization across a complex, matrixed ecosystem where siloed teams are measured on individual performance metrics while user experience issues emerge in the connective tissue between systems. Product, process, and engineering teams naturally orient around their specific deliverables, yet many critical pain points occur during handoffs, communications between tools, and transitions from legacy to modern applications. The challenge lies in conducting phased, system-focused research that identifies integration issues across multiple vendor platforms and internal tools, then delivering insights that help distinct teams understand how their individual updates tangibly improve the holistic experience. All while minimizing disruption to associates who are rated on speed and efficiency—metrics that directly impact end-of-lifecycle customer satisfaction scores.",
    approach: "Built rich cross-functional partnerships that leverage the expertise of process, consulting, legal, and engineering teams alongside UX research on journey mapping and system usability evaluation. Developed a phased research approach that balances agile methods for quick-hitting feedback with comprehensive benchmarking and end-to-end evaluations of each major claims phase. This programmatic approach ensures research insights reach all audiences across the matrixed organization, allowing each team to understand their piece while maintaining focus on transition moments and communication flows across the entire system. Close collaboration with leadership teams ensures research scales appropriately and aligns to department priorities, enabling cross-functional teams to move forward with shared understanding of user needs.",
    methods: [
      "Mixed-methods research combining contextual inquiry and ethnographic observation with monitoring surveys and in-depth interviews",
      "Contextual inquiry with claims associates reveals how they actually navigate between tools during time-sensitive claim handling",
      "Service blueprints created by process teams are enriched with end-user journey maps that surface integration pain points",
      "Continuous monitoring tracks system usability scores and identifies emerging issues as modernization progresses",
      "Regular stakeholder presentations align research findings to business objectives and help prioritize feature development across multiple product teams working in parallel"
    ],
    insights: [
      "Due to proprietary constraints, specific findings cannot be shared.",
      "Research has informed product and engineering teams on key feature enhancements that improve communication and integration across the claims system.",
      "Key insights on the transition points between systems that aid in the prioritization of feature enhancements for end-to-end flows."
    ],
    impact: "Research directly influences the strategic product roadmap for Fire claims modernization, ensuring alignment between business goals and user experience objectives. By applying human-centered design principles to workflow evaluation, research helps ensure UX standards are maintained across new and modernized applications, supporting consistency and accessibility as vendor systems integrate with internal platforms. Impact is measured through improved digital flows, seamless connections between front-line field adjusters and in-office claims associates, alignment of product deliverables to research programs and enterprise vision, and systematic improvement of the entire Fire claims experience with minimal operational disruption during the modernization process."
  },
  {
    id: "auto-claims-digital-modernization",
    title: "Auto Claims Digital Experience Modernization",
    description: "Led a digital experience modernization initiative over 6 months that unified seven cross-functional teams hosting web, mobile app, and call channel experiences to a shared vision for auto claims customer interactions. At the start of the project, few customers were completing loss filing and self-service behaviors in digital channels, ultimately leading to higher operational cost overall and decreased associate satisfaction scores and completion rates for claims tasks. Over the course of the project, I coordinated multiple research studies to understand how end-users make decisions under stress, which design proposals were viable and would deliver the highest value in terms of customer satisfaction and core business outcomes. The resulting hybrid solution aligned with Consulting & Legal requirements, was responsive to real customer needs, provided consistency across web and app experiences, alleviated associate workload, and effectively modernized the end-to-end journey for auto claims customers seeking to self-serve.",
    image: "/cactus.jpeg",
    role: "Lead UX Researcher",
    duration: "6 months (discovery through launch)",
    team: "Product Management, Experience Design, Organizational Insights, Consulting & Legal, Claims Process Engineering, Claims Business, Customer Insights Measurement",
    tags: [
      "Customer Research",
      "Digital Modernization",
      "Program Management",
      "Cross-Functional Collaboration",
      "High-Stakes Design"
    ],
    challenge: "At the time research was requested, the business was observing few digital starts and completes in web channels and wanted to modernize the end-to-end experience for auto claims customers to match industry standard and provide more intuitive, responsive, personalized, and modular interactions for State Farm customers. In current state, dense text, insurance jargon, and lack of clear start and end points led to customers often pulling the ripcord to call channels regardless of their actual channel preferences. Beyond the interface, legal requirements limited how approachable and empathetic written language could be, disjointed backend API systems constrained what could be built, and tensions between product and design teams historically slowed progress. The real challenge was ultimately coordinating research across all these moving pieces while keeping everyone aligned on what actually drove core performance metrics and satisfaction scores while remaining competitive with industry.",
    approach: "First, getting to know stakeholders in the mix and taking a collaborative approach was essential. Then, together we built a research standard practice that brought team leaders out of their siloes and allowed them to observe and respond to end-user feedback with each methodology deployed. Over the course of 6 months, we created a shared 'North Star' from primary data collection and articulated that vision through research roadmaps, deliverables, presentations, and core team meetings. In conjunction, I analyzed recorded calls between customers and associates, conducted ethnographic observations on in-house associates, unmoderated testing on updated designs, and in-depth interviews with in-house and competitor customers to gain a holistic view of the experience across multiple versions of the future state. As a biproduct, co-creation of solutions facilitated buy-in and resolved pre-existing tensions between groups.",
    methods: [
      "Background research on how stress affects decision-making to design appropriate research methods",
      "Analysis of recorded customer calls with claims representatives to understand what communication actually works",
      "In-depth interviews with recent claims customers about what they needed during the claims process",
      "Moderated usability testing comparing the current experience against new prototypes",
      "Unmoderated testing to capture how people behave when stressed without re-traumatizing actual claimants",
      "Surveys across multiple design versions to validate our direction",
      "Regular cross-team workshops where all groups analyzed findings and made decisions together"
    ],
    insights: [
      "How information is organized mattered more than how much information was provided.",
      "Key insights on how stressed and time-sensitive users look for and expect websites to respond.",
      "Which strengths from app and phone channel interactions may be utilized in web experiences successfully.",
      "Particular research methodologies that worked well with several cross-functional teams in a large matrixed organization."
    ],
    impact: "Ultimately, the business observed a 127% increase in customers completing claims digitally, ~13% reduction in calls to representatives, and highest satisfaction score ever recorded by our end-users in web. The program of research established also created lasting organizational change: legal, product, engineering, and design teams now had a shared vision and stronger working relationships. This work provided a 2-5 year projected roadmap for future improvements based on documented user needs. Post-launch production data revealed extended patterns in how customers actually used the new experience in non-simulated claims experiences, so consultation is ongoing."
  }
];
