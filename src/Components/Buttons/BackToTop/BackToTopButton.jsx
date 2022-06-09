import Link from "react-scroll/modules/components/Link";
import "./BackToTopButton.scss";

const BackToTopButton = () => {
  return (
    <Link smooth spy to="home">
      <button className="backToTopButton" smooth spy to="home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
        </svg>
      </button>
    </Link>
  );
};

export default BackToTopButton;
