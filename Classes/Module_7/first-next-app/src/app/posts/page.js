import Link from "next/link";
import PostsLimit from "@/components/PostLimit";

async function getPostsData(limit, page = 1) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/" +
      "posts?_limit=" +
      limit +
      "&_page=" +
      page
  );
  if (!res.ok) {
    // Recommendation: handle errors
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export default async function Page({ searchParams }) {
  // throw new Error(); //Uncomment this if you want to show the error
  const { limit } = await searchParams;
  const limitValue = limit ? limit : 5;
  const posts = await getPostsData(limitValue);
  const postList = posts.map((post) => (
    <li key={post.id}>
      <Link href={"/posts/" + post.id}>
        Post #{post.id}: {post.title}
      </Link>
    </li>
  ));

  return (
    <div className="About">
      <h1>Posts</h1>
      <ul>{postList}</ul>
      <PostsLimit defaultLimit={limit} />
    </div>
  );
}