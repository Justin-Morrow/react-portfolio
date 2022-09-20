import React from 'react';
import ProjectCard from "../ProjectCard";
import Wrapper from "../Wrapper";
import Title from "../Title";
import projects from "../projects.json";

export default function Portfolio() {
  return (
    <div>
      <Wrapper>
        <Title>My Projects</Title>
        {projects.map(project => (
          <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            code={project.code}
          />
        ))}
      </Wrapper>
      </div>
  );
}
