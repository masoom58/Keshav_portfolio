import { SkillCategory, ExperienceItem, EducationItem, AchievementItem, ProjectItem } from '../types/portfolio';

export const personalInfo = {
  name: "Keshav Parvat",
  headline: "Building Strong Foundations in Code, Logic & Problem Solving.",
  subheadline: "I’m Keshav Parvat, a Computer Science graduate and M.Tech IT student at SGSITS, Indore. I enjoy programming, solving algorithmic problems, exploring web technologies, and helping students understand complex concepts through practical examples.",
  email: "keshavparvat2@gmail.com",
  phone: "+91 9575502890",
  github: "https://github.com/keshavparvat11",
  githubDisplay: "github.com/keshavparvat11",
  institution: "Shri G. S. Institute of Technology & Science (SGSITS), Indore",
  location: "Indore, Madhya Pradesh, India",
  resumeUrl: "/assets/aistudio/KESHAV_5b9d9bae.pdf",
  resumeDownloadName: "Keshav_Parvat_Resume.pdf",
  tagline: "Learning continuously. Building thoughtfully. Solving logically.",
  professionalSummary: `Computer Science graduate and M.Tech IT student at SGSITS, Indore, with a strong foundation in programming, Data Structures and Algorithms, logical reasoning, and mathematical problem-solving. Experienced in supporting student learning as a Teaching Assistant, with the ability to explain technical concepts and analytical problems through clear, structured, and practical examples. Passionate about helping students develop coding skills, computational thinking, and strong problem-solving abilities.`
};

export const metricsData = [
  {
    label: "GATE 2026 Qualified",
    value: "Score 316",
    subtext: "Computer Science & Information Technology"
  },
  {
    label: "Algorithmic Practice",
    value: "200+ Solved",
    subtext: "LeetCode & GeeksforGeeks problems"
  },
  {
    label: "Teaching Assistant",
    value: "SGSITS Indore",
    subtext: "C programming & structured problem solving"
  },
  {
    label: "Graduate Education",
    value: "M.Tech in IT",
    subtext: "2026 – Present (Post-Graduation)"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for systems, algorithmic problem solving, and object-oriented architecture.",
    iconName: "Code",
    skills: ["C", "C++", "Java", "Kotlin"]
  },
  {
    title: "Web Development",
    description: "Modern foundational frontend standards for building accessible and responsive interfaces.",
    iconName: "Globe",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Computer Science Fundamentals",
    description: "Core theory, algorithmic intuition, and system security fundamentals.",
    iconName: "Binary",
    skills: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming (OOP)",
      "Programming Fundamentals",
      "Computer Fundamentals",
      "Blockchain Technology",
      "Cybersecurity"
    ]
  },
  {
    title: "Development Tools & Environment",
    description: "Development environments, version control systems, and engineering workflows.",
    iconName: "Wrench",
    skills: ["VS Code", "Git", "GitHub", "Android Studio", "AI Tools", "GCD"]
  },
  {
    title: "Teaching & Productivity Tools",
    description: "Pedagogical platforms, documentation suites, and collaborative student instruction tools.",
    iconName: "GraduationCap",
    skills: [
      "Microsoft Excel",
      "Microsoft Word",
      "Microsoft PowerPoint",
      "Digital Whiteboards",
      "Online Coding Platforms",
      "Learning Management Systems"
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "sgsits-ta",
    role: "Teaching Assistant",
    organization: "Shri G. S. Institute of Technology & Science (SGSITS)",
    location: "Indore, Madhya Pradesh",
    period: "August 2026 – Present",
    weeklyHours: "Approx. 8 hours of teaching-related duties per week",
    summary: "Guiding undergraduate engineering students in C language programming, structured logic, and analytical problem-solving methodologies.",
    responsibilities: [
      "Assist students with academic learning in C programming through step-by-step conceptual walkthroughs and structured debugging methods.",
      "Apply logical reasoning and analytical thinking to break down complex concepts—such as pointer arithmetic, dynamic memory allocation, and recursion—into intuitive, structured explanations.",
      "Support students in developing conceptual clarity and self-sufficient, independent problem-solving skills rather than rote memorization.",
      "Perform approximately 8 hours of teaching-related duties, lab demonstrations, code reviews, and student consultations per week."
    ],
    keyCompetencies: [
      "C Programming Pedagogy",
      "Code Explanation & Mentoring",
      "Structured Problem-Solving",
      "Debugging & Error Analysis",
      "Analytical Reasoning"
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "mtech",
    degree: "Master of Technology (M.Tech)",
    field: "Information Technology",
    institution: "Shri G. S. Institute of Technology & Science (SGSITS)",
    location: "Indore, Madhya Pradesh",
    period: "2026 – Present",
    highlights: [
      "Postgraduate study in advanced information technology and system architectures.",
      "Active Teaching Assistant within the department, mentoring foundational programming cohorts.",
      "Focusing on data structures, algorithmic optimization, and computational theory."
    ]
  },
  {
    id: "btech",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science",
    institution: "Samrat Ashok Technological Institute (SATI)",
    location: "Vidisha, Madhya Pradesh",
    period: "2022 – 2026",
    highlights: [
      "Comprehensive four-year curriculum in core computer science principles.",
      "Solid foundation in OOP, Operating Systems, Database Management, and Network fundamentals.",
      "Rigorous competitive programming practice culminating in qualifying GATE 2026."
    ]
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: "gate-2026",
    title: "Qualified GATE 2026",
    metric: "Score: 316",
    category: "National Examination",
    description: "Qualified the Graduate Aptitude Test in Engineering (GATE 2026) in Computer Science & Information Technology, demonstrating strong theoretical and analytical mastery across core disciplines.",
    details: [
      "Subject: Computer Science & Information Technology (CS & IT)",
      "Official GATE Score: 316",
      "Validated theoretical grasp of algorithms, discrete mathematics, and computer architecture."
    ],
    badgeText: "GATE 2026 CS/IT"
  },
  {
    id: "coding-practice",
    title: "Algorithmic Problem Solving",
    metric: "200+ Problems",
    category: "Coding Practice",
    description: "Consistently solved algorithmic and data structure problems across LeetCode and GeeksforGeeks, reinforcing core logic and space/time complexity optimization.",
    details: [
      "Platforms: LeetCode & GeeksforGeeks",
      "Focus Areas: Arrays, Strings, Linked Lists, Trees, Stacks, Queues, and Binary Search",
      "Practical translation into teaching real-world debugging to engineering students."
    ],
    badgeText: "LeetCode & GFG Practice"
  }
];

export const defaultProjects: ProjectItem[] = [
  {
    id: "placeholder-1",
    title: "Project Slot (Ready for Your Project)",
    description: "This portfolio is pre-configured for your real projects. Click '+ Add Your Project' above to input your real project title, GitHub repository, live URL, and description.",
    techStack: ["C++", "DSA", "Web"],
    githubUrl: "https://github.com/keshavparvat11",
    status: "placeholder"
  }
];
