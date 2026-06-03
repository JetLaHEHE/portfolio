"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 -right-40 size-[500px] animate-[gradient-drift_12s_ease-in-out_infinite] rounded-full bg-indigo-500/15 blur-3xl"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute -bottom-40 -left-40 size-[500px] animate-[gradient-drift_15s_ease-in-out_infinite_reverse] rounded-full bg-purple-500/15 blur-3xl"
          style={{ animationDelay: "-5s" }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Hi, I&apos;m{" "}
          <span className="text-indigo-500 dark:text-indigo-400">
            John Jethro Agatep
          </span>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Full-stack developer building modern web applications with Next.js,
          TypeScript, and Node.js.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
}
