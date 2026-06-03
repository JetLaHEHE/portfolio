import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="mb-2 text-3xl font-bold">Blog</h1>
      <p className="mb-10 text-zinc-500 dark:text-zinc-400">
        Thoughts on development, projects, and technology.
      </p>

      {posts.length === 0 ? (
        <p className="text-zinc-400">No posts yet. Check back soon!</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-zinc-200 p-6 transition-colors hover:border-indigo-300 dark:border-zinc-800 dark:hover:border-indigo-700"
              >
                <h2 className="text-xl font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  {post.title}
                </h2>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                  <time>{post.date}</time>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium dark:bg-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-zinc-600 dark:text-zinc-300">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
