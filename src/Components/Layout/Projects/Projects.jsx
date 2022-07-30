import "./Projects.scss";
import useAxios from "../../../hooks/useAxios";

const Projects = () => {
  const { response, error, loading } = useAxios({
    method: "GET",
    url: "https://api.github.com/users/panosfan/repos",
  });

  return (
    <section id="projects">
      <h2 data-aos="fade-up">
        Projects
        <div className="headersLine"></div>
      </h2>
      {/* {response && <p>{response.statusText}</p>}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>} */}
    </section>
  );
};

export default Projects;
