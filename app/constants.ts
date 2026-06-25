import { LogoItem } from "@/components/ui/LogoLoop"

export const CV_LINK: string =
  "https://drive.google.com/file/d/1MFapTh-BjFUjbBeoUeqYh_PcC78rL-iX/view?usp=drive_link"

export const TEXTS = ["Fullstack developer.", "Frontend developer."]

export const LOGOS: LogoItem[] = [
  {
    src: "/tech_stack_icons/Nextjs.svg",
    alt: "Next.js",
    href: "https://nextjs.org/",
  },
  {
    src: "/tech_stack_icons/react.svg",
    alt: "React",
    href: "https://react.dev/",
  },
  {
    src: "/tech_stack_icons/javascript.svg",
    alt: "JavaScript",
    href: "https://www.javascript.com/",
  },
  {
    src: "/tech_stack_icons/python.svg",
    alt: "Python",
    href: "https://www.python.org/",
  },
  {
    src: "/tech_stack_icons/fastapi.svg",
    alt: "FastAPI",
    href: "https://fastapi.tiangolo.com/",
  },
  {
    src: "/tech_stack_icons/postgresql.svg",
    alt: "PostgreSQL",
    href: "https://www.postgresql.org/",
  },
  {
    src: "/tech_stack_icons/tailwindCSS.svg",
    alt: "Tailwind CSS",
    href: "https://tailwindcss.com/",
  },
  { src: "/tech_stack_icons/bun.svg", alt: "Bun", href: "https://bun.com/" },
  {
    src: "/tech_stack_icons/git.svg",
    alt: "Git",
    href: "https://git-scm.com/",
  },
  {
    src: "/tech_stack_icons/linux.svg",
    alt: "Linux",
    href: "https://www.linux.com/",
  },
]

export const experiences = [
  {
    title: "High School Intern",
    company: "M87 Technologies",
    period: "19 Jan 2026 - 13 Feb 2026",
    description:
      "Primarily focused on frontend development, building React interfaces and interactive features like drag-and-drop and an XML invoice viewer. Occasionally helped with backend tasks involving Python APIs and automated testing.",
    technologies: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Wretch",
      "Python",
      "FastAPI",
      "aiohttp",
      "PydanticAI",
    ],
    icon: "/experience_icons/work.svg",
    link: "https://m87.tech/",
  },
  {
    title: "1st Place - DigiEduHack",
    company: "Selleo EdTech & HRTech",
    period: "2025",
    description:
      "Won first place at DigiEduHack with a personalized microlearning app for learning programming. Built a system that generates short, customized lessons and code examples based on the user's skill level, interests, and preferred language. Competed against teams creating AI-powered educational tools including multi-agent content generators, gamified quiz systems, and intelligent knowledge bases.",
    technologies: ["AI", "Microlearning", "EdTech", "Full-stack Development"],
    icon: "/experience_icons/award.svg",
    link: "https://www.linkedin.com/posts/dariuszwylon_digieduhack-digitaleducation-hackathons-ugcPost-7394649874731896832-5Q6D?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEoe2ycBroGm_QzQFGkFGXLaW8UYOz7ijtk",
  },
  {
    title: "Free Listener",
    company:
      "Higher School of Information Technology and Management in Bielsko-Biala",
    period: "Oct 2025 - Present",
    description:
      "Enrolled as a free listener at the Higher School of Information Technology and Management in Bielsko-Biala, attending advanced university lectures in computer science and software engineering. This selective arrangement allows earning official grades in up to three subjects per semester, bridging high school studies with university-level programming coursework.",
    technologies: [
      "Software Engineering",
      "Computer Science",
      "Advanced Programming",
    ],
    icon: "/experience_icons/graduateCap.svg",
    link: "https://wsi.edu.pl/",
  },
  {
    title: "Full-stack Developer Intern",
    company: "Selleo",
    period: "Jul 2025",
    description:
      "Gained hands-on commercial experience at age 16 by contributing to Mentingo, a scalable LMS platform built with a modern JavaScript monorepo architecture. Collaborated with senior developers in a production environment, applying full-stack skills across NestJS, React, and PostgreSQL while learning professional development workflows and agile practices.",
    technologies: [
      "NestJS",
      "Vite",
      "React",
      "Postgres",
      "Drizzle",
      "Turbo",
      "Figma",
    ],
    icon: "/experience_icons/work.svg",
    link: "https://selleo.pl/",
  },
  {
    title: "High School Student",
    company: "Private IT Technical School (Prywatne Technikum Informatyczne)",
    period: "Sep 2023 - Present",
    description:
      "Studying programming and software development at a specialized IT technical school, with daily hands-on coding alongside core academic subjects. Actively participating in extracurricular workshops and contributing to school tech initiatives to strengthen practical engineering skills.",
    technologies: ["Programming", "IT Fundamentals", "Software Development"],
    icon: "/experience_icons/book.svg",
    link: "https://ptibb.edu.pl/index.php/news/",
  },
]
