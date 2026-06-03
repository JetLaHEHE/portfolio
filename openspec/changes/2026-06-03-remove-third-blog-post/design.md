# Design: Remove Third Blog Post

Simply delete `content/blog/getting-started-with-typescript.md`. The `getAllPosts()` function
reads all `.md` files from the directory, so the post will stop appearing without any code changes.
