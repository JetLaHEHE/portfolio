import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold text-zinc-300 dark:text-zinc-700">
        404
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Page not found
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
      >
        Go Home
      </Link>
    </div>
  );
}
