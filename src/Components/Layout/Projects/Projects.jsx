import "./Projects.scss";
import useAxios from "../../../hooks/useAxios";

const Projects = () => {
  const { response, error, loading } = useAxios({
    method: "GET",
    url: "https://api.github.com/users/panosfan/repos",
  });

  return (
    <section id="projects">
      <div data-aos="fade-up">
        <h2>Projects</h2>
        {/* {response && <p>{response.statusText}</p>}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>} */}
      </div>
    </section>
  );
};

export default Projects;
