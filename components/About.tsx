"use client";

import { motion } from "framer-motion";
import { skillIcons } from "@/lib/skills";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Prisma",
  "Git",
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight">About</h2>
          <div className="mt-6 max-w-2xl space-y-4 text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m Jet, a full-stack developer with a passion for building
              clean, performant web applications. I enjoy working with modern
              technologies like Next.js and TypeScript to create seamless user
              experiences.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new tools,
              contributing to open-source projects, or writing about what I
              learn.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Skills & Tools
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => {
                const data = skillIcons[skill];
                return (
                  <span
                    key={skill}
                    className={`inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-4 py-1.5 text-sm font-medium dark:border-zinc-700 ${data?.tint ?? ""}`}
                  >
                    {data?.icon}
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="mt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="size-4"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
