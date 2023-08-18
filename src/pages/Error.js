import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import error from "../assets/images/error.webp";

export const Error = () => {
  useTitle("Error Not Found");

  return (
    <section className="pageNotFound">
      <p>404 Oops</p>
      <img src={error} alt="Page Not Found" />
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </section>
  )
}