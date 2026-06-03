import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllPosts().map((post) => ({
    url: `https://jetagatep.dev/blog/${post.slug}`,
    lastModified: post.date,
  }));

  const projectPages = projects.map((project) => ({
    url: `https://jetagatep.dev/projects/${project.slug}`,
  }));

  return [
    { url: "https://jetagatep.dev", lastModified: new Date() },
    { url: "https://jetagatep.dev/blog", lastModified: new Date() },
    ...blogPosts,
    ...projectPages,
  ];
}
