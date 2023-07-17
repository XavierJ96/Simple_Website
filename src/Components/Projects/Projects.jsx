import "./Projects.css";

function Projects(props) {
  return (
    <section className="project-section" id="projects">
      <div className="project-container container">
        <h2 className="pr-header">{props.item.projectTitle}</h2>
        <div className="project-card">
          <div className="project-img">
            <img
              src={props.item.Image}
              alt="Image of project"
              className="project1"
            />
          </div>
          <div className="project-text">
            <h4 className="projectTitle">{props.item.title}</h4>
            <p className="projectDes">{props.item.description}</p>
            <div>
              <span className="stackTitle">{props.item.stackTitle}</span>
              <span className="stackTags">{props.item.stackTags}</span>
            </div>
            <div className="projectLink-container">
              <a
                href={props.item.gitLink}
                target="_blank"
                className="projectLinks git-link"
              >
                Github
              </a>
              <a
                href={props.item.live}
                target="_blank"
                className="projectLinks live-link"
              >
                Live →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
