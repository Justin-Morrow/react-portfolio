import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={process.env.PUBLIC_URL + props.image} width ="400" height = "274" />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Code Repo:</strong> <a href={props.code} > {props.code}</a>
          </li>
          <li>
            <strong>Deployed:</strong> <a href={props.deploy} > {props.deploy}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
