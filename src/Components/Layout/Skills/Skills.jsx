import "./Skills.scss";

const Skills = () => {
  const detectScreenWidth = () => {
    return window.innerWidth < 900 ? true : false;
  };
  return (
    <section id="skills">
      <h2 data-aos="fade-up">
        My experience
        <div className="headersLine"></div>
      </h2>
      <div className="cards">
        <div
          className="frontEnd card"
          data-aos={detectScreenWidth() ? "flip-right" : "fade-right"}
        >
          <h5>Frontend Development</h5>
          <div className="content">
            <ul>
              <li>
                <div className="skill">HTML</div>
                <div className="experience">Intermediate</div>
              </li>
              <li>
                <div className="skill">CSS</div>
                <div className="experience">Intermediate</div>
              </li>
              <li>
                <div className="skill">JavaScript</div>
                <div className="experience">Intermediate</div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="skill">React</div>
                <div className="experience">Experienced</div>
              </li>
              <li>
                <div className="skill">Bootstrap</div>
                <div className="experience">Experienced</div>
              </li>
              <div className="skill">jQuery</div>
              <div className="experience">Basic</div>
            </ul>
          </div>
        </div>
        <div
          className="backEnd card"
          data-aos={detectScreenWidth() ? "flip-left" : "fade-left"}
        >
          <h5>Backend Development</h5>
          <div className="content">
            <ul>
              <li>
                <div className="skill">PHP</div>
                <div className="experience">Intermediate</div>
              </li>
              <li>
                <div className="skill">Laravel</div>
                <div className="experience">Experienced</div>
              </li>
              <li>
                <div className="skill">MySQL</div>
                <div className="experience">Experienced</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
