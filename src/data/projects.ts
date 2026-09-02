export interface Project {
  id: string;
  title: string;
  description: string;
  summary: string;
  image?: string;
  imageDescription?: string;
  industry: string;
  userType: string;
  date: string;
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

// Ordered most complete -> least complete, so the most fully-realized
// case studies surface first. Re-sort as projects are fleshed out.
export const projects: Project[] = [
  {
    id: "auto-claims-digital-modernization",
    title: "Auto Claims Digital Experience Modernization",
    description: "Led a digital experience modernization initiative over 6 months that unified seven cross-functional teams hosting web, mobile app, and call channel experiences to a shared vision for auto claims customer interactions. At the start of the project, few customers were completing loss filing and self-service behaviors in digital channels, ultimately leading to higher operational cost overall and decreased associate satisfaction scores and completion rates for claims tasks. Over the course of the project, I coordinated multiple research studies to understand how end-users make decisions under stress, which design proposals were viable and would deliver the highest value in terms of customer satisfaction and core business outcomes. The resulting hybrid solution aligned with Consulting & Legal requirements, was responsive to real customer needs, provided consistency across web and app experiences, alleviated associate workload, and effectively modernized the end-to-end journey for auto claims customers seeking to self-serve.",
    summary: "Led a 6-month digital modernization initiative that unified seven cross-functional teams around a shared vision for auto claims customer interactions. Coordinated research to understand how stressed, time-pressed customers make decisions and validated design proposals accordingly. The resulting hybrid solution modernized the end-to-end self-service journey for auto claims.",
    image: "/cactus.jpeg",
    industry: "Insurance",
    userType: "Customer",
    date: "Current role",
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
  },
  {
    id: "associate-customer-fire-claims-experience",
    title: "Fire Claims Digital Modernization: Multi-Product Ecosystem Integration",
    description: "Leading end-to-end UX research for the enterprise-wide modernization of Fire claims digital experiences. This ongoing initiative supports multiple product teams as they transition from legacy systems to integrated modern applications while maintaining operational efficiency and associate productivity. Research focuses on evaluating workflows across customer-facing and associate-facing digital tools, ensuring human-centered design principles guide the integration of vendor solutions and internal platforms. The work balances documented user needs with business objectives, helping teams navigate the complexity of modernizing a high-stakes, time-sensitive claims operation without disrupting service delivery.",
    summary: "Leading end-to-end UX research for the enterprise-wide modernization of Fire (Homeowners) claims digital experiences. This ongoing initiative evaluates workflows across customer- and associate-facing tools as legacy systems transition to modern, integrated platforms. Research ensures human-centered design principles guide vendor and internal platform integration.",
    image: "/tree.jpeg",
    industry: "Insurance",
    userType: "Customer & Associate",
    date: "Current role",
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
    id: "emerging-technologies-vision-summit",
    title: "Emerging Technologies Vision Summit",
    description: "Led strategic UX research and facilitated 3-day leadership workshop to help define how emerging technologies (agentic, generative, voice AI etc.) should be integrated into customer and associate loss reporting claims experiences that connect core drivers of customer satisfaction and maximize operational efficiency for the enterprise.",
    summary: "Led strategic UX research and facilitated a 3-day leadership workshop to define how emerging technologies like agentic and generative AI should integrate into claims experiences. Synthesized competitive intelligence and 16,000+ customer feedback responses into a framework balancing customer trust with operational efficiency. Aligned 20 cross-departmental leaders around a shared modernization strategy.",
    image: "/sky.jpeg",
    industry: "Insurance",
    userType: "Business Leadership",
    date: "Current role",
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
    id: "vails-virtual-nails",
    title: "Vails: Custom 3D-Printed Nail Subscription Platform",
    description: "Co-founded Vails Virtual Nails through Georgia Tech's CREATE-X accelerator, a startup building fully customized, 3D-printed artificial nails personalized through a mobile app and delivered via subscription. Customers could design perfect-fit nails reflecting emerging trends, personal art, celebrity looks, or artist-custom designs, printed and shipped to their door using adhesives and materials designed to be as non-damaging and easy to swap as possible.",
    image: "/vails-homepage.jpg",
    summary: "Co-founded Vails Virtual Nails through Georgia Tech's CREATE-X accelerator, building fully customized, 3D-printed artificial nails personalized through a mobile app and delivered via subscription. Led field and materials research, authored customer journeys, and managed a small cross-functional team. Delivered a working MVP, a patent-pending app concept, and an AR partnership with Gravity Jack.",
    imageDescription: "Vails homepage design, featuring the brand's minimalist wordmark and signature open-hand motif",
    industry: "Beauty Tech / Consumer Hardware",
    userType: "Consumer",
    date: "2018–2019",
    role: "Co-Founder & UX Strategy Lead",
    duration: "~16 months",
    team: "Materials science research interns, mobile app development interns, a CAD engineer, and a website designer, in partnership with Gravity Jack (an AR development firm holding 8 patents)",
    tags: [
      "Startup / 0-to-1",
      "Hardware-Software Integration",
      "Subscription Model",
      "Field & Ethnographic Research",
      "Cross-Functional Team Leadership"
    ],
    challenge: "Building a subscription-based, perfect-fit alternative to salon and stick-on manicures meant solving problems no single discipline could own alone: understanding why customers were dissatisfied with existing manicure options, identifying materials and adhesives that were durable yet non-damaging to natural nails, and translating all of it into a mobile app experience that let customers personalize and reorder nails easily. As a first-time founding team, we also had to build the research, design, and engineering functions from nothing while operating under CREATE-X accelerator timelines.",
    approach: "I started as an experience generalist, conducting field research at in-person nail salons to observe real customer and technician behavior, alongside secondary research into materials used in manicures and stick-on nails to identify feasible, non-damaging options within our MVP budget. From there, I authored the core customer journeys and an app experience draft, then grew into managing a small cross-functional team, materials science and mobile app development interns, a CAD engineer, and a website designer, to bring the business to life across a physical product, mobile app, and website. I also helped lead our partnership with Gravity Jack, an AR development firm, to bring AR try-on capability into the app.",
    methods: [
      "Field research and observation at in-person nail salons to understand current customer and technician workflows",
      "Secondary research on manicure and stick-on nail materials and adhesives to identify non-damaging, easy-to-swap options within budget",
      "Customer journey mapping for the end-to-end subscription and personalization experience",
      "App experience drafting and prototyping, later developed into IP that is patent pending",
      "Cross-functional team management across materials science, mobile app development, CAD engineering, and web design",
      "Partner collaboration with an external AR development firm to scope AR try-on features"
    ],
    insights: [
      "Specific research findings are proprietary, as they informed IP included in our provisional patent filing."
    ],
    impact: "Delivered a working physical MVP, a mobile app experience concept (now patent pending), a provisional patent filing, and a technical partnership with Gravity Jack, an AR development firm holding 8 patents. Presented the concept via a live pitch at CREATE-X. I left the company after about a year to pursue a master's in Applied Psychology at the University of Southern California."
  },
  {
    id: "peak-artificial-intelligence",
    title: "Peak Artificial Intelligence: Ethical Entertainment Strategy & Trust & Safety Research",
    description: "Served as Lead Experience Research Strategist for a Series A startup originally building a next-generation adult entertainment platform combining sex education, consensual content, and ethical business practices. When major banking partners exited PornHub, the platform's mission shifted to focus on identifying, flagging, and terminating CSAM (child sexual abuse material) content, making trust & safety the company's central challenge.",
    summary: "Served as Lead Experience Research Strategist for a startup originally building an ethics-forward adult entertainment platform. When banking partners exited PornHub industry-wide, the company's mission pivoted to trust & safety, specifically identifying and terminating CSAM content. Conducted secondary research and employee interviews to define an MVP concept and a Mission, Vision, and Values framework.",
    industry: "Adult Entertainment / Trust & Safety",
    userType: "Consumer & Platform / Content Moderation",
    date: "Post-Graduate",
    role: "Lead Experience Research Strategist",
    duration: "Short-term engagement",
    team: "Full startup team (cross-functional, all employees)",
    tags: ["Trust & Safety Research", "Ethical Product Strategy", "Startup / 0-to-1", "Secondary Research", "Organizational Strategy"],
    challenge: "Originally hired to help design an end-to-end customer experience for a next-generation adult entertainment platform combining sex education, consensual content, and ethical business practices. When major banking companies withdrew support from PornHub, trust & safety became the company's core challenge: how to reliably identify, flag, and terminate CSAM content on an adult platform, while still working toward a more ethical, education-forward vision for the category.",
    approach: "Conducted extensive secondary research into the current state of adult entertainment, including what 'ethical' pornography means in practice, the range of adult entertainment types, the needs and tradeoffs facing adult entertainment workers, and gaps in sex education access. Used these findings to define an MVP concept for an ideal end-to-end experience. In parallel, conducted 1:1 interviews with every employee at the company to surface shared goals and expectations, informing team communication plans and a Mission, Vision, and Values statement that the team voted on and adopted.",
    methods: [
      "Secondary research on ethical adult entertainment practices, industry landscape, and worker needs",
      "Systems-level, end-to-end customer journey concepting",
      "1:1 employee interviews to surface shared goals and expectations",
      "Facilitated development of Mission, Vision, and Values statements"
    ],
    insights: [
      "Because the company's later work on content-moderation technology became government-sponsored and proprietary, most specific research findings from this period cannot be shared publicly."
    ],
    impact: "Defined an MVP concept for an ethics-forward adult entertainment platform grounded in secondary research, and established a Mission, Vision, and Values framework along with shared team communication norms. As government sponsorship continued the underlying content-moderation work under strict confidentiality, this engagement is described here at a high level; specific outcomes remain private."
  },
  {
    id: "georgia-tech-design-prototyping",
    title: "Early Prototyping: AR/VR Concepting & Wearable Input Device",
    description: "Explored two early human-centered design concepts at Georgia Tech: a hand-sketched AR/VR mobile app experience, and a 3D-printed wearable device designed and tested as an alternative to the conventional computer mouse.",
    summary: "Explored two early human-centered design concepts at Georgia Tech: a hand-sketched AR/VR mobile app experience, and a 3D-printed wearable device designed and tested as an ergonomic alternative to the conventional computer mouse. This independent prototyping work laid an early foundation in wearable technology and immersive interface design.",
    industry: "Consumer Technology / Wearables",
    userType: "Consumer",
    date: "2017",
    role: "Design Researcher & Prototyper",
    duration: "Short-term project",
    team: "Independent project",
    tags: ["Wearable Technology", "AR/VR Concepting", "3D Prototyping", "Human-Centered Design"],
    challenge: "Investigating whether alternative input modalities and immersive interfaces could improve on established interaction paradigms, specifically whether a wearable device could offer a more natural, ergonomic alternative to the conventional computer mouse, and what an AR/VR mobile experience could look like designed from first principles.",
    approach: "Hand-sketched and conceptualized a mobile AR/VR app experience to explore interaction and interface ideas before any digital tooling was involved. In parallel, designed and 3D-printed a wearable prototype intended to replace the conventional computer mouse, then vetted it through hands-on testing.",
    methods: [
      "Hand-sketched concepting for AR/VR mobile interactions",
      "3D modeling and printing of a wearable input device prototype",
      "Hands-on prototype testing and evaluation of the wearable device"
    ],
    insights: [
      "Early, hands-on exploration surfaced ergonomic and interaction tradeoffs between wearable and traditional input methods that informed later, more formal human-centered design work."
    ],
    impact: "Served as an early foundation in wearable technology, 3D prototyping, and immersive interface design that carried forward into later UX research and product development work, including at Vails Virtual Nails."
  },
  {
    id: "transforming-cat-customer-experience",
    title: "Transforming the Catastrophe (CAT) Claims Customer Experience",
    description: "End-to-end research on the catastrophe (CAT) claims experience, examining how customers navigate the claims process during high-volume, high-stress catastrophic events.",
    summary: "Conducted end-to-end research on the catastrophe (CAT) claims experience, examining how customers navigate the claims process during high-volume, high-stress catastrophic events. Mapped the full journey and interviewed recent CAT claimants to identify where the experience broke down most.",
    industry: "Insurance",
    userType: "Customer",
    date: "Current role",
    role: "UX Researcher, Claims",
    duration: "End-to-end research initiative",
    team: "Claims Business, Claims Process, Customer Insights Measurement, Organizational Insights",
    tags: ["Catastrophe Claims", "End-to-End Journey Research", "High-Stakes Design", "Customer Research"],
    challenge: "Catastrophe events create surges in claims volume under uniquely stressful circumstances for customers, straining both the digital and human-supported parts of the claims experience. Understanding the full, end-to-end journey during these events was necessary to identify where the experience broke down most.",
    approach: "Mapped the end-to-end CAT claims journey and conducted research with customers who had recently gone through a catastrophe claim, to understand needs and pain points specific to high-volume, high-emotion events.",
    methods: [
      "End-to-end journey mapping for catastrophe claims",
      "Customer interviews with recent CAT claimants",
      "Cross-functional synthesis with claims process and business teams"
    ],
    insights: [
      "Due to proprietary constraints, specific findings cannot be shared."
    ],
    impact: "Informed how the catastrophe claims experience is prioritized and improved across digital and human-supported channels."
  },
  {
    id: "multicultural-customer-omnichannel-experience",
    title: "Multicultural Customer Omnichannel Experience",
    description: "Multicultural research comparing Spanish- and English-speaking customer experiences across claims channels, to ensure the omnichannel experience served customers equitably regardless of language preference.",
    summary: "Conducted multicultural research comparing Spanish- and English-speaking customer experiences across claims channels. The work identified where language and cultural context created gaps in usability or trust, ensuring the omnichannel experience serves all customers equitably.",
    industry: "Insurance",
    userType: "Customer",
    date: "Current role",
    role: "UX Researcher, Claims",
    duration: "Multicultural research initiative",
    team: "Claims Business, Customer Insights Measurement, Organizational Insights",
    tags: ["Multicultural Research", "Omnichannel Experience", "Spanish/English UX", "Customer Research"],
    challenge: "Ensuring that Spanish-speaking customers received an equally effective claims experience as English-speaking customers, across digital and human-supported channels.",
    approach: "Conducted comparative research with Spanish- and English-speaking customers across the claims omnichannel experience, identifying where language and cultural context created gaps in usability or trust.",
    methods: [
      "Comparative multicultural customer interviews (Spanish/English)",
      "Omnichannel journey comparison across language groups",
      "Cross-functional synthesis with claims business and process teams"
    ],
    insights: [
      "Due to proprietary constraints, specific findings cannot be shared."
    ],
    impact: "Informed how the claims omnichannel experience is designed and prioritized to serve Spanish-speaking customers as effectively as English-speaking customers."
  },
  {
    id: "immersive-technology-employee-training",
    title: "Immersive Technology for Employee Training",
    description: "Innovation research exploring the current state of and future expectations for immersive technologies (AR/VR) as tools for training claims employees, conducted as part of my ongoing UX research work in Auto and Fire claims at State Farm.",
    summary: "Conducted innovation research exploring the current state of and future expectations for immersive technologies (AR/VR) as tools for training claims employees. Benchmarked emerging capabilities against the practical constraints of a large, matrixed claims organization.",
    industry: "Insurance",
    userType: "Employee / Associate",
    date: "Current role",
    role: "UX Researcher, Claims",
    duration: "Innovation / 0-to-1 research initiative",
    team: "Claims Business, Claims Process, Enterprise Technology, Organizational Insights",
    tags: ["Innovation Research", "Immersive Technology", "Employee Training", "0-to-1 Research"],
    challenge: "Understanding whether and how immersive technologies could realistically improve claims employee training, given the gap between emerging AR/VR capabilities and the practical constraints of a large, matrixed claims organization.",
    approach: "Assessed the current state of immersive technology adoption and employee expectations for training use cases, benchmarking against what the technology could realistically deliver in a high-stakes, time-sensitive claims environment.",
    methods: [
      "Secondary research and competitive benchmarking on immersive technology for employee training",
      "Employee interviews and expectation-setting sessions",
      "Current-state vs. future-state gap analysis"
    ],
    insights: [
      "Due to proprietary constraints, specific findings cannot be shared."
    ],
    impact: "Informed how immersive technology investment for employee training was prioritized and discussed within the broader innovation research portfolio for claims."
  },
  {
    id: "lastpass-usability-evaluation",
    title: "LastPass Usability Evaluation",
    description: "Conducted a usability study on the LastPass password management platform during graduate research at the University of Southern California, evaluating how effectively users could complete core security and account management tasks.",
    summary: "Conducted a usability study on the LastPass password management platform during graduate research at USC, evaluating how effectively users could complete core security and account management tasks. Moderated task-based testing surfaced specific interface and flow issues within a widely-used consumer security product.",
    industry: "Cybersecurity / SaaS",
    userType: "Consumer",
    date: "Graduate School, USC",
    role: "UX Researcher",
    duration: "Short-term academic project",
    team: "Independent research project",
    tags: ["Usability Testing", "Security & Privacy UX", "Academic Research"],
    challenge: "Password managers ask users to trust a single platform with highly sensitive credentials, so usability failures can carry outsized security consequences. This study set out to evaluate whether LastPass's interface supported users in completing essential tasks accurately and with confidence.",
    approach: "Designed and moderated a task-based usability study across LastPass's core flows, such as account setup, password retrieval, and credential management, observing where users hesitated, made errors, or lost confidence in the platform's security.",
    methods: [
      "Task-based moderated usability testing",
      "Think-aloud protocol",
      "Post-task and post-study questionnaires"
    ],
    insights: [
      "Full findings are documented in the original usability report, which is being prepared for the portfolio."
    ],
    impact: "Produced a formal usability report identifying specific interface and flow issues within a live, widely-used consumer security product."
  },
  {
    id: "vibra-research-strategy",
    title: "Vibra: Research Program Formation & Product Strategy",
    description: "Ongoing contract engagement as an experience specialist and strategist for Vibra, a Series A startup, helping establish foundational research practices, a Mission/Vision/Values framework, and usability research for early-stage product prototypes.",
    summary: "Ongoing contract engagement as an experience specialist and strategist for Vibra, a Series A startup, establishing foundational research practices and a Mission/Vision/Values framework. Also designing and moderating usability tests and interviews across prototype end-users, from business leaders to sound designers and engineers.",
    industry: "Wellness Tech / Multi-Sensory Tech",
    userType: "Business Leaders, Sound Designers & Engineers",
    date: "Ongoing",
    role: "Contracted Experience Specialist & Strategist",
    duration: "Part-time contract engagement",
    team: "Co-founders, business leaders, sound designers, and engineers",
    tags: ["Research Program Strategy", "MVV & Foundational Research", "Usability Testing", "Product-Market Fit", "Startup / 0-to-1"],
    challenge: "As an early-stage Series A startup, Vibra needed a research protocol and information architecture that could function whether or not a dedicated researcher was in the room, plus usability validation across prototypes for a wide range of end-user types.",
    approach: "Designed a research protocol linking existing tool suites (Google Apps, Claude, and Notion) to support data management, information architecture, and a self-sustaining, regenerative research practice for the co-founders. Simultaneously, designed and moderated usability tests and in-depth interviews on in-progress prototypes with end-user types ranging from business leaders to sound designers and engineers, and consulted on budget-constrained, large-n product-market fit surveys.",
    methods: [
      "Research protocol and information architecture design across existing tool suites",
      "Usability testing and in-depth interviews with prototype end-users",
      "Product-market fit survey consulting"
    ],
    insights: [
      "This is an ongoing engagement; specific findings will be added as the work matures."
    ],
    impact: "Established a research protocol and foundational practice designed to outlast any single researcher's involvement, while directly informing feature prioritization for upcoming prototype versions."
  },
  {
    id: "adobe-ocean-conservation-campaign-case-study",
    title: "Adobe Ocean Conservation Campaign: Viral Media Case Study",
    description: "A case study examining Adobe's marketing initiative to raise awareness for ocean conservation through viral media, completed as part of graduate research at the University of Southern California.",
    summary: "A case study examining Adobe's marketing initiative to raise awareness for ocean conservation through viral media, completed during graduate research at USC. Analyzed the campaign's content strategy, distribution, and audience engagement to understand the mechanics behind its viral reach.",
    industry: "Marketing & Media",
    userType: "Consumer / Audience",
    date: "Graduate School, USC",
    role: "Researcher",
    duration: "Course-based case study",
    team: "Independent research project",
    tags: ["Case Study", "Marketing & Media Research", "Academic Research"],
    challenge: "Understanding what made Adobe's ocean conservation marketing campaign effective as viral media, and what that reveals about designing content-driven initiatives for social causes.",
    approach: "Conducted a case study analysis of Adobe's campaign, examining its content strategy, distribution, and audience engagement to understand the mechanics behind its viral reach.",
    methods: [],
    insights: [
      "Full findings from this case study are being organized for portfolio publication."
    ],
    impact: "Contributed to graduate coursework in media and marketing research methods at USC; a fuller write-up is in progress."
  },
  {
    id: "online-identity-treatise",
    title: "Treatise: Building Identity Through Online Social Networks",
    description: "My graduate treatise at the University of Southern California, examining how people form and define their identities across different kinds of social networking platforms.",
    summary: "My graduate treatise at USC, examining how people form and define their identities across different kinds of social networking platforms. Built a framework for how online identity is constructed by drawing on existing literature and platform analysis.",
    industry: "Social Media / Academic Research",
    userType: "Consumer",
    date: "Graduate School, USC",
    role: "Author / Researcher",
    duration: "Capstone research project",
    team: "Independent research project",
    tags: ["Academic Research", "Identity & Social Media", "Treatise"],
    challenge: "Understanding how the design and norms of different social networking platforms shape the way people construct and express their online identities.",
    approach: "Researched and authored a treatise exploring identity formation across varied social networking site types, drawing on existing literature and platform analysis to build a framework for how online identity is constructed.",
    methods: [],
    insights: [
      "Full findings are detailed in the treatise itself, which is being prepared for the portfolio."
    ],
    impact: "Completed as the culminating research treatise for my graduate program at USC; the full document is available on request and will be linked here."
  },
  {
    id: "new-media-artists-research",
    title: "New Media Artists Research",
    description: "Graduate research at the University of Southern California examining how new media artists engage with emerging technology and digital platforms as part of their creative practice.",
    summary: "Graduate research at USC examining how new media artists engage with emerging technology and digital platforms as part of their creative practice. Explored how platform and tool choices shape both creative process and audience reach.",
    industry: "Arts & New Media",
    userType: "Creative Professional",
    date: "Graduate School, USC",
    role: "Researcher",
    duration: "Course-based research project",
    team: "Independent research project",
    tags: ["Academic Research", "New Media", "Creative Technology"],
    challenge: "Understanding how new media artists navigate an evolving technology landscape in their creative work, and how their platform and tool choices shape both process and audience reach.",
    approach: "Conducted research into new media artists' practices and platform use as part of graduate coursework at USC.",
    methods: [],
    insights: [
      "Full findings from this research project are being organized for portfolio publication."
    ],
    impact: "Contributed to graduate coursework in human-centered research methods at USC; a fuller write-up is in progress."
  }
];
