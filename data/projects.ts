export interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "rfid-system",
    description:
      "RFID-based access control and management system.",
    image: "/images/rfid-system.svg",
    tags: ["IoT", "Hardware", "TypeScript"],
    githubUrl: "https://github.com/JetLaHEHE/rfid-system",
  },
  {
    title: "SBDMC-website-v1",
    description:
      "First version of the SBDMC website.",
    image: "/images/sbdmc-v1.svg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/JetLaHEHE/SBDMC-website-v1",
  },
  {
    title: "SBDMC-website-v2",
    description:
      "Second version of the SBDMC website with improved features.",
    image: "/images/sbdmc-v2.svg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/JetLaHEHE/SBDMC-website-v2",
  },
];
