import "./Projects.scss";
import useAxios from "../../../hooks/useAxios";

const Projects = () => {
  const { response, error, loading } = useAxios({
    method: "GET",
    url: "https://api.github.com/users/panosfan/repos",
  });

  return (
    <section data-aos="fade-up" id="projects">
      <h4>Projects</h4>
      {/* {response && <p>{response.statusText}</p>}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>} */}
    </section>
  );
};

export default Projects;
