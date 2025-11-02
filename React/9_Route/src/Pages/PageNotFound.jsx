import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <h1>Page Not Found</h1>
      <p>
        Going back <Link to="/">home</Link>
      </p>
    </div>
  );
}

export default PageNotFound;

{/* <Link> is a React Router component that changes pages without refreshing the browser. 
It’s perfect when you want a menu link or a text link that takes users to another route. */}