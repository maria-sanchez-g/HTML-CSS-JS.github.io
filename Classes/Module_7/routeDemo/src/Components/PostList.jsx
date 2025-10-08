import { Outlet, useParams, Link } from "react-router-dom";
import { useData } from "../Utilis/useData"
// save as pages/PostsPage.jsx
export default function PostsPage() {
    return (
        <div className="Posts">
            <h1>Posts</h1>
            <Outlet />
        </div>
    )
}
export function PostList() {
    const postsData =
useData('https://jsonplaceholder.typicode.com/posts?_limit=5');
    // the ? means only call map if postsData is not null
    const postList = postsData?.map(post => (
        <li key={post.id}><Link to={"/posts/" + post.id}>
            Post #{post.id}: {post.title}</Link></li>
    ));
    return (
        <ul>{postList}</ul>
    )
}
