interface Post {
  title: string;
  slug: string;
  content: string;
  image: string;
}

interface Props {
  params: { slug: string };
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Post",
  description: "This is a blog post",
};

export default async function BlogPostPage({ params }: Props) {
  // const posts: Post[] = await fetch(
  // fetch content from api
  const posts: Post[] = await fetch(
    // "https://solid-space-spoon-5x6rp5g5xg4267-3000.app.github.dev/api/content"
    // "/api/content"
    "http://localhost:3000/api/content"
    // "http://127.0.0.1:3000/api/content"
  ).then((response) => response.json());
  const post = posts.find((post) => post.slug === params.slug)!;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
