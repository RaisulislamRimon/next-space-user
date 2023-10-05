interface Post {
  title: string;
  slug: string;
  content: string;
  image: string;
}

interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
  // const posts: Post[] = await fetch(
  // fetch content from api
  const posts: Post[] = await fetch(
    "https://solid-space-spoon-5x6rp5g5xg4267-3000.app.github.dev/api/content"
    // "/api/content"
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
  const post = posts.find((post) => post.slug === params.slug)!;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
