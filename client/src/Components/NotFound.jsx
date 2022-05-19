import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="container">
        <h1>404! Page Not Found</h1>
        <Link to="/" className="btn btn-primary p-2">
          home
        </Link>
      </div>
    </>
  );
}
