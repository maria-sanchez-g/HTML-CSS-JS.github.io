import { Link } from "next/link";

export default function About() {
  return (
    <div className="about">
      <h1>Page Not Found</h1>
      <p>
        Going back <Link to="/">home</Link>
      </p>
    </div>
  );
}