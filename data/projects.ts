export interface Project {
  slug: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  details: string;
  challenges: string[];
}

export const projects: Project[] = [
  {
    slug: "rfid-system",
    title: "RFID Access Control System",
    description:
      "RFID-based access control and management system with real-time logging and web dashboard.",
    image: "/images/rfid-system.svg",
    tags: ["IoT", "Hardware", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/JetLaHEHE/rfid-system",
    details:
      "A full-stack RFID access control system that manages entry to restricted areas using RFID cards. The system consists of an Arduino-based RFID reader that communicates with a Node.js backend server via serial connection. Access events are logged in PostgreSQL and displayed in real-time on a React dashboard through WebSocket connections.\n\nThe admin panel allows managing registered cards, viewing access logs with timestamps, and configuring access permissions per card. The system supports multiple access modes including card-only, PIN+card, and schedule-based access.\n\nBuilt with fail-safe principles: the door defaults to locked on power loss, and a manual override mechanism is included for emergency situations.",
    challenges: [
      "Serial communication buffering — Arduino sends data faster than serial reads; implemented a line buffer protocol with delimiters",
      "Real-time updates — used WebSockets to push access events to the dashboard without polling",
      "Fail-safe design — door defaults to locked on power loss with manual override key",
    ],
  },
  {
    slug: "sbdmc-website-v1",
    title: "SBDMC Website v1",
    description:
      "First version of the SBDMC organization website.",
    image: "/images/sbdmc-v1.svg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/JetLaHEHE/SBDMC-website-v1",
    details:
      "The first iteration of the SBDMC (San Beda Digital Marketing Corps) website. This version established the brand identity and core information architecture for the organization's online presence.\n\nFeatures include an organization overview, team member profiles, event listings, and a contact form. Built with Next.js for SSR benefits and Tailwind CSS for rapid, responsive styling.",
    challenges: [
      "Establishing a cohesive brand identity from scratch with minimal design assets",
      "Building a responsive layout that works across all devices for an organization with diverse audience",
      "Integrating a contact form without a backend — used serverless functions for email delivery",
    ],
  },
  {
    slug: "sbdmc-website-v2",
    title: "SBDMC Website v2",
    description:
      "Second version of the SBDMC website with improved features, performance, and design.",
    image: "/images/sbdmc-v2.svg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/JetLaHEHE/SBDMC-website-v2",
    details:
      "The second major version of the SBDMC website, rebuilt from the ground up with improved architecture, performance optimizations, and a refined design system.\n\nKey improvements over v1 include: server-side rendering for better SEO, image optimization with next/image, animated page transitions with Framer Motion, a blog/news section, and a more comprehensive event management system with calendar integration.\n\nThe admin panel was rebuilt to allow content managers to update events, member profiles, and announcements without developer assistance.",
    challenges: [
      "Migrating content and data from v1 while maintaining SEO rankings",
      "Implementing a content management system accessible to non-technical staff",
      "Optimizing Core Web Vitals — achieved 90+ Lighthouse scores across all metrics",
    ],
  },
];
