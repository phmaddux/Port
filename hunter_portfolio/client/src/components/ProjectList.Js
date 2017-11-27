import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components";

class ProjectList extends Component {
    render() {
        return (
            <div>
                <h1>Certifications</h1>
                <h3>Talk about time at GA</h3>
                <p>Lorem Ipsum</p>
                <h2>Portfolio Projects</h2>
                {this.props.projects.map((project, index) => {
                    return (
                        <div>
                            <h2>{project.name}</h2>
                            <img src={project.photo} alt="" />
                            <h3>{project.date}</h3>
                            <h3>Description: {project.description}</h3>
                            <h3>Technical Description: {project.technical_description}</h3>
                            <ul>
                                <li>
                                    <Link to={project.link_to_project}>Project Demo</Link>
                                </li>
                                <li>
                                    <Link to={project.link_to_readMe}>Project ReadMe</Link>
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ProjectList;
