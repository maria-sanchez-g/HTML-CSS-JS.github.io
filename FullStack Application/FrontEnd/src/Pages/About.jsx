import { Link } from "react-router-dom";

function About() {
  return (
    <div className="PageNotFound">
      <h1>Page Not Found</h1>
      <p>
        Going back <Link to="/">home</Link>
      </p>
    </div>
  );
}

export default About;