import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <Link
        href="/#projects"
        className="mb-8 inline-flex text-sm text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
      >
        &larr; Back to projects
      </Link>

      <h1 className="text-3xl font-bold">{project.title}</h1>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium dark:bg-zinc-800"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8 flex gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
          >
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium transition-colors hover:border-zinc-400 dark:border-zinc-600 dark:hover:border-zinc-500"
          >
            GitHub
          </a>
        )}
      </div>

      <p className="mt-8 text-lg text-zinc-600 dark:text-zinc-300">
        {project.description}
      </p>

      <div className="mt-10">
        <h2 className="text-xl font-semibold">Overview</h2>
        <div className="mt-3 whitespace-pre-line text-zinc-600 dark:text-zinc-300">
          {project.details}
        </div>
      </div>

      {project.challenges.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold">Challenges & Solutions</h2>
          <ul className="mt-3 space-y-3">
            {project.challenges.map((challenge, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1 text-indigo-500">&bull;</span>
                <span className="text-zinc-600 dark:text-zinc-300">
                  {challenge}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
