import React from "react";
import "../Filter.css";

const ProjectList = ({ projects, selectedTechStacks }) => {
  const filteredProjects = projects.filter((project) =>
    selectedTechStacks.every((techStack) =>
      project.techStack.includes(techStack)
    )
  );

  return (
    <div className="project-list">
      {filteredProjects.map((project) => (
        <div key={project.id} className="project-card">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
