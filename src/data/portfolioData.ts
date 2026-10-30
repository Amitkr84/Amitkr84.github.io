export interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  codeLink: string;
  gradient: string;
  accent: string;
}

export interface SkillCategory {
  title: string;
  color: string;
  techs: string[];
}

export const portfolioData = {
  personal: {
    firstName: 'AMIT',
    lastName: 'KUMAR',
    fullName: 'Amit Kumar',
    displayName: 'Amit',
    title: 'Python Full Stack Developer',
    headline: 'Python Full Stack Developer & Scalable API Architect',
    location: 'Siwan, Bihar, India',
    locationShort: 'Siwan, Bihar',
    openToWork: 'Open to opportunities',
    experienceYears: '1+',
    phone: '+91-8409484637',
    email: '725amit@gmail.com',
    github: 'https://github.com/Amitkr84',
    githubUsername: 'Amitkr84',
    linkedin: 'https://linkedin.com/in/amit-kumar-a357a61ab',
    resumeDownload: '/resume.pdf',
    resumeFilename: 'Amit_Kumar_Resume.pdf',
    bio: 'Results-driven Python Full Stack Developer with practical expertise in designing scalable architectures, enterprise RESTful APIs, and responsive digital web applications. Proficient in Python, Django, DRF, PostgreSQL, React.js, and Next.js.',
    aboutDetails: [
      'Passionate Python Full Stack Developer with hands-on experience designing scalable architectures, enterprise RESTful APIs, and responsive digital web applications.',
      'Experienced in building end-to-end full stack platforms with Python, Django, DRF, PostgreSQL, and modern frontend frameworks like React.js and Next.js. Strong foundation in MVC/MVT patterns, database normalization, query optimization, and deploying robust applications.',
      'Looking for opportunities where I can contribute to mission-critical engineering initiatives, optimize backend performance, and deliver delightful user experiences.'
    ],
  },
  roles: [
    'Python Full Stack Developer',
    'Django & REST API Specialist',
    'React.js & Next.js Developer',
    'PostgreSQL & Cloud Architect',
  ],
  stats: [
    { label: 'Featured Projects', value: 2, suffix: '+', icon: '🚀' },
    { label: 'Tech Stack Skills', value: 15, suffix: '+', icon: '⚡' },
    { label: 'Query Optimization', value: 25, suffix: '%', icon: '⚡' },
    { label: 'Agile Delivery', value: 100, suffix: '%', icon: '🎯' },
  ],
  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Babu Banarasi Das University (BBDU)',
      location: 'Lucknow, UP',
      duration: '2024 – 2026',
      icon: '🎓',
    },
    {
      degree: 'Bachelor of Computer Application (BCA)',
      institution: 'Maulana Mazharul Haque Arabic & Persian University',
      location: 'Patna, Bihar',
      duration: '2020 – 2023',
      icon: '📚',
    },
  ],
  experience: [
    {
      role: 'Python Full Stack Developer Intern',
      division: 'Software Development & Testing Division',
      company: 'Wire Wings Pvt. Ltd.',
      location: 'Lucknow, UP',
      period: 'Jan 2025 – Apr 2026',
      points: [
        'Engineered and deployed scalable full-stack web applications utilizing Python, Django, DRF, and modern frontend stack.',
        'Designed and integrated secure RESTful APIs with JWT authentication, ensuring seamless client-server data synchronization.',
        'Optimized PostgreSQL database queries, Django ORM lookups, and indexing strategies, reducing query latency by 25%.',
        'Executed rigorous root-cause debugging, functional testing, and automated unit testing to maintain production stability.',
        'Collaborated in agile sprint cycles using Git/GitHub for continuous integration, code reviews, and feature delivery.',
      ],
    },
  ],
  certifications: [
    {
      name: 'Python Full Stack Development Certification',
      issuer: 'Wire Wings Pvt. Ltd.',
      date: 'Issued April 2026',
      projects: 'NEXORA Enterprise Platform & Apnora Mart Digital Commerce System',
    },
  ],
  skills: {
    core: [
      { name: 'Python', level: 95, gradient: 'from-blue-500 to-indigo-500' },
      { name: 'Django & DRF', level: 92, gradient: 'from-emerald-500 to-teal-500' },
      { name: 'React.js / Next.js', level: 90, gradient: 'from-cyan-500 to-blue-500' },
      { name: 'PostgreSQL & SQL', level: 88, gradient: 'from-blue-600 to-sky-500' },
      { name: 'JavaScript & TypeScript', level: 88, gradient: 'from-amber-500 to-yellow-500' },
      { name: 'REST APIs & JWT', level: 92, gradient: 'from-violet-500 to-purple-500' },
    ],
    bars: [
      { name: 'Django & Django REST Framework (DRF)', level: 95 },
      { name: 'Enterprise RESTful APIs & JWT Auth', level: 92 },
      { name: 'PostgreSQL, MySQL & ORM Optimization', level: 88 },
      { name: 'React.js, Next.js & Tailwind CSS', level: 90 },
      { name: 'MVC / MVT Architecture & OOP Design', level: 90 },
      { name: 'FastAPI & Node.js Basics', level: 82 },
      { name: 'Redis Caching & Zero-Trust Security', level: 85 },
      { name: 'Docker Basics, Vercel & CI/CD Pipelines', level: 80 },
    ],
    categories: [
      {
        title: 'Backend & APIs',
        color: 'from-emerald-500 to-teal-500',
        techs: ['Python', 'Django', 'Django REST Framework (DRF)', 'FastAPI', 'Node.js', 'RESTful APIs', 'JWT Authentication'],
      },
      {
        title: 'Frontend & UI',
        color: 'from-cyan-500 to-blue-500',
        techs: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap 5', 'AJAX', 'Context API', 'Responsive UI/UX'],
      },
      {
        title: 'Databases & Cloud',
        color: 'from-purple-500 to-pink-500',
        techs: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Redis Caching', 'Vercel', 'Render', 'Docker Basics', 'CI/CD'],
      },
      {
        title: 'Developer Tools',
        color: 'from-orange-500 to-red-500',
        techs: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vite', 'PowerShell', 'Hostinger cPanel', 'Software Testing'],
      },
      {
        title: 'Core Concepts',
        color: 'from-indigo-500 to-violet-500',
        techs: ['OOP', 'MVC/MVT Architecture', 'Database Normalization', 'Zero-Trust Security', 'Unit Testing', 'Root-Cause Debugging'],
      },
    ],
  },
};
