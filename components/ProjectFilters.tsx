"use client";

interface ProjectFiltersProps {
  tags: string[];
  activeTag: string | null;
  onTagChange: (tag: string | null) => void;
}

export default function ProjectFilters({
  tags,
  activeTag,
  onTagChange,
}: ProjectFiltersProps) {
  if (tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onTagChange(null)}
        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
          activeTag === null
            ? "bg-indigo-500 text-white"
            : "border border-zinc-200 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(tag)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            activeTag === tag
              ? "bg-indigo-500 text-white"
              : "border border-zinc-200 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
