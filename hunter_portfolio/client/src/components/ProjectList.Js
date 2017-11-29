import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components";
import axios from 'axios'


class ProjectList extends Component {
    state = {
        projects: []
    }
    async componentWillMount() {
        try {
            const response = await axios.get('/api/projects')
            console.table(response.data)
            this.setState({ projects: response.data })
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div>
                <h1>These are an overview of some of the projects I completed while at General Assembly.</h1>
                {this.state.projects.map((project, index) => {
                    return (
                        <div>
                            <img src={project.photo} alt="" />
                            <h2>{project.name}</h2>
                            <h3>Created on: {project.date_created}</h3>
                            <h3>Description: {project.description}</h3>
                            <h3>Technical Description: {project.technical_description}</h3>
                            <div>
                                <a href={project.link_to_project}>Project Demo</a>
                            </div>
                            <br></br>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ProjectList;
