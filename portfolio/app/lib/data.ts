import { Project, Category, Interest, SiteConfig } from "./types";

// ===========================================
// SITE CONFIGURATION
// ===========================================
export const siteConfig: SiteConfig = {
  name: "Charlie McCormick",
  title: "Design Strategist",
  description: "exploring product design + strategy across healthcare and consumer tech",
  email: "charlie.mccormick@berkeley.edu",
  location: "San Francisco, CA",
  social: {
    linkedin: "https://www.linkedin.com/in/charlie-mccormick/",
  },
};

// ===========================================
// CATEGORIES
// ===========================================
export const categories: Category[] = [
  {
    id: "category-1",
    number: "01",
    title: "Structure",
    description: "I like taking complex work and shaping it into clear choices.",
    projects: ["category-1-hero", "category-1-secondary-1", "category-1-secondary-2"],
  },
  {
    id: "category-2",
    number: "02",
    title: "Exploration",
    description: "I learn by talking to people, noticing details, and trying things early.",
    projects: ["category-2-hero", "category-2-secondary-1", "category-2-secondary-2"],
  },
  {
    id: "category-3",
    number: "03",
    title: "Execution",
    description: "I turn ideas into real work that can be tested and measured.",
    projects: ["category-3-hero", "category-3-secondary-1", "category-3-secondary-2"],
  },
  {
    id: "category-4",
    number: "04",
    title: "Connection",
    description: "I care about trust and community, and I try to build shared momentum.",
    projects: ["category-4-hero", "category-4-secondary-1", "category-4-secondary-2"],
  },
];

// ===========================================
// PROJECTS
// ===========================================
export const projects: Project[] = [
  // Category 1: Structure
  {
    slug: "category-1-hero",
    title: "Future of In-Home Robotics Strategy",
    role: "Innovation Strategist Intern",
    category: "Structure",
    categoryId: "category-1",
    year: "2025",
    description: "Turning a fuzzy future into clear strategic choices for Samsung's consumer robotics roadmap.",
    challenge: "Homes, people, and technology were shifting fast. The team needed a structured way to make strategic bets without pretending to have certain answers.",
    solution: "Mapped the competitive landscape, used PESTLE and scenario planning to surface macro forces, then ran interviews and studio workshops to translate 150+ jobs-to-be-done into opportunity areas and prioritized concept directions.",
    outcome: "A pre-humanoid strategic framework and 4 prioritized product concepts with initial prototypes, delivered as an executive narrative to guide roadmap decisions.",
    lesson: "I learned about human-centered design and dove deeper into ambiguity. I had to make decisions on what really matters to humans in a future world and how those decisions might shape concept development and consumer products.",
    skills: ["Research and synthesis", "Strategy framing and prioritization", "Workshop facilitation", "Storytelling and executive communication"],
    heroImage: "/images/projects/robotics-home.png",
  },
  {
    slug: "category-1-secondary-1",
    title: "Designing a Better Hybrid Care Experience",
    role: "Senior Strategy Consultant, Monitor Deloitte",
    category: "Structure",
    categoryId: "category-1",
    year: "2020",
    description: "Shaped a joint digital and physical health strategy for an integrated delivery system, aligned to value-based care.",
    challenge: "The organization faced high-stakes choices about how digital and in-person care should work together, with real impact on patient experience and outcomes.",
    solution: "Combined human-centered design with strategic framing: service blueprints, floor layouts, location concepts, health tech recommendations, and early mockups. Then translated it into a clear plan with business case and projections.",
    outcome: "Delivered a C-suite-ready narrative and recommendations, uncovered ~$10M in annual benefit, and created a clearer path toward a more consistent patient experience.",
    lesson: "I learned that strategy becomes real the moment you sketch the patient journey, and that the best solutions solve one problem or serve one population really well, instead of trying to solve everything all at once.",
    skills: ["Experience design and journey mapping", "Strategy framing and prioritization", "Storytelling and executive communication", "Data analysis and measurement"],
    heroImage: "/images/projects/hybrid-care.png",
  },
  {
    slug: "category-1-secondary-2",
    title: "Making a Health System Growth Strategy Actionable",
    role: "Senior Strategy Consultant, Monitor Deloitte",
    category: "Structure",
    categoryId: "category-1",
    year: "2019",
    description: "Helped a health system turn an ambitious growth goal into a clear five-year plan to reach $2B in revenue.",
    challenge: "Many plausible paths existed. The hard part was deciding where to focus and what to deprioritize across the system.",
    solution: "Gathered leadership perspective through ~50 executive interviews, pressure-tested the story with business unit profitability analysis, then built recommendations connecting strategy to health technology and workforce transformation.",
    outcome: "A set of choices the executive team could rally around, with logic that held up across stakeholders.",
    lesson: "I learned that strategy is a set of choices in a world of limited resources. Choosing a path forward often requires multiple stakeholders, and telling a story with input from others is important.",
    skills: ["Research and synthesis", "Strategy framing and prioritization", "Data analysis and measurement", "Cross-functional teaming"],
    heroImage: "/images/projects/health-growth.png",
  },
  // Category 2: Exploration
  {
    slug: "category-2-hero",
    title: "Redesigning Nutrition Through Reflection",
    role: "Co-Founder",
    category: "Exploration",
    categoryId: "category-2",
    year: "2024",
    description: "Built a digital health concept that reframed nutrition tracking as reflection, using small nudges to make healthier eating feel more sustainable.",
    challenge: "Information isn't the main constraint. Most people already know what to do. But behavior change is hard, and diet remains a major driver of poor health outcomes.",
    solution: "Conducted 120+ user interviews, built a revenue model and segmentation, then created and tested 4 prototypes including photo logging, micro-journaling, and AI-based reflection prompts.",
    outcome: "Built a working prototype and sharpened the insight: upstream food system levers may drive more lasting impact than individual tracking alone.",
    lesson: "I learned what it takes to go from 0 to 1, and how to pivot along the way. The customer drives the majority of your company decisions. Listening to your customer is what sets apart bad products from great products.",
    skills: ["Research and synthesis", "Experience design and journey mapping", "Strategy framing and prioritization", "Data analysis and measurement"],
    heroImage: "/images/projects/nutrition-reflection.png",
  },
  {
    slug: "category-2-secondary-1",
    title: "Learning What Pharmacy First Should Be",
    role: "Strategy and Product Intern, mPharma",
    category: "Exploration",
    categoryId: "category-2",
    year: "2024",
    description: "Moved to Nairobi to explore a new kind of work, then led research to shape a region-defining nurse-led, pharmacy-first care model.",
    challenge: "The care model had real momentum, but the team needed confidence in the experience, features, and pricing, and I had to build context quickly in a new environment.",
    solution: "Started with provider and customer discovery, then translated insights into concrete product choices on features, pricing, and user experience, plus clear storylines for leadership and insurer conversations.",
    outcome: "Helped drive a 96% satisfaction rate and supported insurer coverage through pitches to Kenya's top three insurers, enabling rollout to 50% of locations.",
    lesson: "I learned how much growth comes from putting yourself somewhere new and letting curiosity lead. I had to earn trust fast, learn the context, and turn what I heard into real decisions.",
    skills: ["Research and synthesis", "Strategy framing and prioritization", "Storytelling and executive communication", "Cross-functional teaming"],
    heroImage: "/images/projects/pharmacy-first.png",
  },
  {
    slug: "category-2-secondary-2",
    title: "Designing a Safer Fireline Tool with Ergonomic Data",
    role: "Developer and Builder",
    category: "Exploration",
    categoryId: "category-2",
    year: "2025",
    description: "Designed and built an ergonomic power tool concept to reduce strain during fireline construction work.",
    challenge: "Wildland firefighters use manual tools for 8 to 12 hour shifts, with high strain on wrists, elbows, shoulders, and trunk. Explosive, repetitive movements and awkward postures drive musculoskeletal injury over long shifts.",
    solution: "Used the fireline task cycle to frame the problem, then applied Kinovea motion capture and biomechanics data (REBA and RSI scoring) to prioritize what to fix. Built and iterated a prototype with vibration damping, an adjustable handle, and safety features like two-step activation and clear labels.",
    outcome: "A new tool concept that improved posture and reduced effort, meeting targets including 25% decrease in RSI and 50% decrease in REBA components.",
    lesson: "I learned that building is a discipline. I had to translate messy movement into something measurable, then let the data shape the design instead of only relying on my first instincts.",
    skills: ["Research and synthesis", "Data analysis and measurement", "Experience design and journey mapping"],
    heroImage: "/images/projects/fireline-tool.png",
  },
  // Category 3: Execution
  {
    slug: "category-3-hero",
    title: "24/7 On-Demand Virtual Care",
    role: "Strategy Consultant, Monitor Deloitte",
    category: "Execution",
    categoryId: "category-3",
    year: "2021",
    description: "Embedded with Kaiser Permanente teams to build and launch an on-demand virtual front door so members could see a doctor anytime, from anywhere.",
    challenge: "Launching nationwide meant aligning many teams while building a new end-to-end product that could actually run in the real world.",
    solution: "Led go-live planning and execution with cross-functional Kaiser teams while building the product and operational workflows across front-end, back-end, and care delivery.",
    outcome: "Launched across all 50 states, supporting 24/7 on-demand phone and video care for over 10M patients.",
    lesson: "I learned what it means to ship something that people actually depend on. Execution was less about having the perfect plan and more about staying calm, aligning teams, and pushing decisions through.",
    skills: ["Cross-functional teaming", "Strategy framing and prioritization", "Experience design and journey mapping"],
    heroImage: "/images/projects/virtual-care.png",
  },
  {
    slug: "category-3-secondary-1",
    title: "Redesigning KariOut's Customer-Facing Experience",
    role: "Strategist",
    category: "Execution",
    categoryId: "category-3",
    year: "2018",
    description: "A full refresh of KariOut's brand and digital presence, built through research, alignment, and hands-on delivery.",
    challenge: "The existing brand and site didn't tell a strong story, and the customer experience felt fragmented across channels.",
    solution: "Started with executive interviews, then ran visioning and workshops to define direction. Built a clear narrative and creative brief, and worked closely with designers, photographers, and builders to ship the updated site, brand system, and catalog.",
    outcome: "A revamped brand and a more cohesive customer experience, with tangible assets the company could use immediately.",
    lesson: "I learned how to carry a story from vision to real artifacts. Teams are essential. You can't do everything yourself and you shouldn't. Knowing when to lean on others can deliver products better than you could have ever imagined.",
    skills: ["Research and synthesis", "Workshop facilitation", "Storytelling and executive communication", "Cross-functional teaming"],
    heroImage: "/images/projects/kariout-rebrand.png",
  },
  {
    slug: "category-3-secondary-2",
    title: "Building a 480 Sq Ft Garage from Scratch",
    role: "Designer and Builder",
    category: "Execution",
    categoryId: "category-3",
    year: "2019",
    description: "A hands-on build project in Moriarty, New Mexico. Taking a garage from concept to finished construction.",
    challenge: "The work demanded real sequencing and tradeoffs, since design decisions immediately affected cost, materials, and what could actually be built.",
    solution: "Planned the structure in CAD, then moved into hands-on construction, making tradeoffs in real time and completing the build through the last details.",
    outcome: "A completed build that reminds me I like executing, not just thinking, and that I can bring ideas to life with real constraints.",
    lesson: "I learned that follow-through is its own kind of confidence. When you build something physical, you stop hiding behind ideas and start respecting sequencing, constraints, and what it takes to finish.",
    skills: ["Strategy framing and prioritization"],
    heroImage: "/images/projects/garage-build.png",
  },
  // Category 4: Connection
  {
    slug: "category-4-hero",
    title: "Building Community Across Berkeley SkyDeck and Haas Startup Squad",
    role: "SkyDeck Operator in Residence and Haas Startup Squad Leader",
    category: "Connection",
    categoryId: "category-4",
    year: "2023-2025",
    description: "Built community and connection points between founders and MBA talent through Berkeley SkyDeck and Haas Startup Squad.",
    challenge: "Build a system that helps people find each other and build trust, not just exchange introductions.",
    solution: "Led a community of 500+ MBA students and alumni, developed tools and processes to match members with SkyDeck startups, and supported pre-seed founders with product, growth, and operations.",
    outcome: "Stronger connections across the SkyDeck and Haas ecosystems, with a clearer path for founders to find aligned support and for MBAs to find real startup work.",
    lesson: "I learned that community does not happen by accident. It takes structure, repetition, and small moments of trust that make people feel safe enough to contribute.",
    skills: ["Cross-functional teaming", "Workshop facilitation", "Strategy framing and prioritization"],
    heroImage: "/images/projects/skydeck-community.png",
  },
  {
    slug: "category-4-secondary-1",
    title: "Straws In Pockets Curated Food Experiences",
    role: "Co-Founder",
    category: "Connection",
    categoryId: "category-4",
    year: "Ongoing",
    description: "I love food, but I care just as much about the full experience: the time of day, the drinks, the stories, and the mix of people. So I built a curated format around all of it.",
    challenge: "Design an experience that helps people feel present and connected, even if they walk in alone.",
    solution: "Built the experience end-to-end and hosted events for up to 100 people, using local ingredients and producer storytelling to create shared context and thoughtful pacing across the whole event.",
    outcome: "A repeatable format that brought people together through shared food and a shared point of view, plus some tasty food.",
    lesson: "I learned that hosting is design. You can shape how people feel through pacing, details, and the intention behind who you bring into the room. Plus it's fun to get messy, cook, and serve.",
    skills: ["Experience design and journey mapping", "Storytelling and executive communication", "Cross-functional teaming"],
    heroImage: "/images/projects/straws-in-pockets.png",
  },
  {
    slug: "category-4-secondary-2",
    title: "Bridging Cultures During a Health System Carve Out",
    role: "Strategy Consultant, Monitor Deloitte",
    category: "Connection",
    categoryId: "category-4",
    year: "2020",
    description: "Post-merger integration work focused on helping two organizations operate as one across 2 hospitals, 1 physician group, and 7 joint venture interests.",
    challenge: "The hardest work was not the plan. It was trust. Different teams had different norms, language, and ways of making decisions.",
    solution: "Built a clear integration cadence and decision structure, then spent most of my time in the day-to-day coordination that builds confidence: getting the right people in the room, framing tradeoffs, documenting decisions, and creating shared ways of working across teams.",
    outcome: "A smoother path from transaction to operations, with clearer alignment across teams and fewer surprises as the new culture took shape.",
    lesson: "I learned that culture is made in small moments. The work was often just helping people talk to each other in a clearer way until a new normal started to form. Having a unifying team vision and building buy-in was the key to success.",
    skills: ["Cross-functional teaming", "Workshop facilitation", "Strategy framing and prioritization", "Storytelling and executive communication"],
    heroImage: "/images/projects/health-merger.png",
  },
];

// ===========================================
// ABOUT PAGE CONTENT
// ===========================================
export const aboutContent = {
  bio: {
    headline: "About Me",
    text: "I am Charlie McCormick, a design strategist based in San Francisco. I spend most of my time in the messy middle where strategy meets product decisions across healthcare and consumer tech. I like asking simple questions, talking to people, and shaping the work into choices a team can actually move on. Outside of work, I care about making things, training hard, and staying curious through the people and ideas around me.",
  },
  skills: [
    "Research and synthesis",
    "Experience design and journey mapping",
    "Strategy framing and prioritization",
    "Workshop facilitation",
    "Data analysis and measurement",
    "Storytelling and executive communication",
    "Cross-functional teaming",
  ],
  tools: [
    "Figma",
    "AI Tools (Claude Code)",
    "Microsoft Office",
    "Adobe Photoshop",
    "SQL",
    "Tableau",
  ],
  values: [
    {
      number: "01",
      title: "Stay True to My Values",
      description: "I lead with people. I care about trust, connection, and building real community. It means I try to show up consistently and make it easier for others to do the same. Build community wherever I go.",
    },
    {
      number: "02",
      title: "Build for the Future",
      description: "I stay flexible and keep learning. I try to measure progress so I am not just guessing. It means I like being a beginner again, and I want the kind of work where you learn by doing. Forever a student.",
    },
    {
      number: "03",
      title: "Find The Right Stuff",
      description: "I want to work where design and business meet, with motivated, curious people. It means I want work that has a point of view and a team that cares about getting better. Teams matter.",
    },
    {
      number: "04",
      title: "Put a Stake in the Ground",
      description: "I commit, execute, and own new ideas, even if they do not work. It means I move from discussion to a decision, then follow through until there is something real to learn from. Bias for action.",
    },
  ],
  interestsIntro: {
    headline: "Interests",
    text: [
      "Interests are how I stay grounded. They keep me curious, they keep me honest, and they remind me there is more to life than work. When I make time for them, I feel more like myself and I show up better everywhere else.",
    ],
  },
};

export const interests: Interest[] = [
  {
    title: "Art",
    slug: "art",
    description: "Ceramics and photography help me feel present. Hands-on work that creates things I can use.",
    fullDescription: "Ceramics and photography help me feel present. I like the mix of craft and intuition, and I like that you cannot rush the process. It's hands-on work that creates things I can use, the ultimate journey in user testing.",
    image: "/images/interests/art.jpg",
    galleryImages: [
      "/images/interests/art-1.jpg",
      "/images/interests/art-2.jpg",
      "/images/interests/art-3.jpg",
      "/images/interests/art-4.jpg",
    ],
  },
  {
    title: "Sports",
    slug: "sports",
    description: "My clearest teacher about what it means to be on a team and build consistency.",
    fullDescription: "Sport is my clearest teacher about what it means to be on a team and build consistency. Being part of the Dutch national team raised my bar, and the 2028 Olympics aspiration keeps me coming back to the work.",
    image: "/images/interests/sports.jpg",
    galleryImages: [
      "/images/interests/sports-1.jpg",
      "/images/interests/sports-2.jpg",
      "/images/interests/sports-3.jpg",
    ],
  },
  {
    title: "Influences",
    slug: "influences",
    description: "Books, ideas, conversations, and small moments that stick. Things that keep me curious.",
    fullDescription: "I collect influences the way some people collect souvenirs. Books, ideas, conversations, and small moments that stick. These are things I'm currently a beginner at and trying to learn more about, they keep me curious.",
    image: "/images/interests/influences.jpg",
    galleryImages: [
      "/images/interests/influences-1.jpg",
      "/images/interests/influences-2.jpg",
      "/images/interests/influences-3.jpg",
    ],
  },
];

// ===========================================
// FEEDBACK PAGE CONTENT
// ===========================================
export const feedbackContent = {
  headline: "Help Me Improve",
  intro: "I built this portfolio like a product. With intention. It's a work in progress, and I'd love your feedback on what's clear, what's confusing, and what would make it better. Anything goes, all feedback is welcome.",
  formCategories: [
    { value: "broken", label: "Something's broken" },
    { value: "confused", label: "This confused me" },
    { value: "wish", label: "I wish this could..." },
    { value: "great", label: "This is great" },
  ],
};

export const roadmap = {
  now: ["Mobile layout refinements", "Feedback system launch"],
  next: ["Dark mode", "Project filtering"],
  later: ["Case study deep-dives", "Interactive prototypes"],
};

export const changelog = [
  { date: "Feb 2, 2025", text: "Redesigned category cards with editorial layout" },
  { date: "Feb 2, 2025", text: "Fixed mobile project card stacking" },
  { date: "Feb 2, 2025", text: "Added Help Me Improve page" },
  { date: "Jan 2025", text: "Initial site launch" },
];

// ===========================================
// HELPER FUNCTIONS
// ===========================================
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(categoryId: string): Project[] {
  return projects.filter((p) => p.categoryId === categoryId);
}

export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find((c) => c.id === categoryId);
}

export function getNextProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === projects.length - 1) {
    return projects[0]; // Loop back to first
  }
  return projects[currentIndex + 1];
}

export function getPreviousProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === 0) {
    return projects[projects.length - 1]; // Loop back to last
  }
  return projects[currentIndex - 1];
}
