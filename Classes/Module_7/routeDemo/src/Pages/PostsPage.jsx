import { Outlet, useParams, Link, useSearchParams } from "react-router-dom";
import { useData } from "../Utlis/useData";
// save as pages/PostsPage.jsx
export default function PostsPage() {
  return (
    <div className="Posts">
      <h1>Posts</h1>
      <Outlet />
    </div>
  );
}
export function PostList() {
  // updated from slide 60, replace old version
  const [searchParams, setSearchParams] = useSearchParams(); // import this hook;
  const limit = searchParams.get("limit") ? searchParams.get("limit") : 5;
  console.log(searchParams);
  const postsData = useData(
    "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
  );
  const handleChangeLimit = (e) => {
    setSearchParams({ limit: e.target.value });
  };
  // the ? means only call map if postsData is not null
  const postList = postsData?.map((post) => (
    <li key={post.id}>
      <Link to={"/posts/" + post.id}>
        Post #{post.id}: {post.title}
      </Link>
    </li>
  ));
  return (
    <>
      <ul>{postList}</ul>
      <Link to="/posts?limit=10">Load 10 Posts</Link>
      <button
        onClick={() => {
          setSearchParams({ limit: 19, order: "something" });
        }}
      >
        set limit to 19
      </button>
    </>
  );
}

export function PostExample() {
  return <h1>example</h1>;
}
