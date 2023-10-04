import "./projects.style.scss";
import picture1 from "../../assets/projects/tictactoe.png";
import picture2 from "../../assets/projects/blog.png";
export default function ProjectsComponent() {
  return (
    <div className="projects-content-container">
      <div className="projects-container-1">
        <h2>1st Protfolio in plain HTML/CSS </h2>
        <div className="project-1">
          <iframe src="https://squasmn.github.io/portfolio-project/"></iframe>
        </div>
      </div>
      <div className="projects-container-2">
        <h2>React and NextJS Tutorials</h2>
        <div className="projects-container-2-1">
          <div className="project-2">
            <img src={picture1} alt="" />
          </div>
          <div className="project-3">
            <img src={picture2} alt="" />
          </div>
        </div>
        <div className="projects-container-2-2">
          <h2>VanillaJS API</h2>
          <div className="project-4">
            <iframe src="https://squasmn.github.io/countryAPI/"></iframe>
          </div>

          <h2></h2>
        </div>
      </div>
    </div>
  );
}
