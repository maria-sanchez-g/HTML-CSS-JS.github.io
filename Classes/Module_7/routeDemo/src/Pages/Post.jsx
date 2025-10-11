import { useParams } from "react-router-dom";
import { useData } from "../Utlis/useData";
export default function Post() {
  const { postId } = useParams(); // custom hook to access dynamic params;
  const post = useData("https://jsonplaceholder.typicode.com/posts/" + postId);
  return (
    <div className="Post">
      {post ? (
        <>
          <h3>
            Post #{post.id}: {post.title}
          </h3>
          <p>{post.body}</p>
        </>
      ) : (
        "Loading ..."
      )}
    </div>
  );
}
