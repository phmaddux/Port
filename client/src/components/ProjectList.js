import React, { Component } from 'react';
import styled from "styled-components";
import axios from 'axios'

const Head = styled.h1`
margin: 18px;
font-size: 1.9rem;
padding: 7px;
text-decoration: bold;
`
const Project = styled.div`
display: inline-block;
`
const Image = styled.img`
float: left;
margin: 0px 10px 0px 10px;
height: 33%;
width: 33%;
`
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
                <Head>These are some of the projects I completed while at General Assembly.</Head>
                {this.state.projects.map((project, index) => {
                    return (
                        <Project>
                            <a href={project.link_to_project}>
                                <Image src={project.photo} alt="" />
                            </a>
                            <h2>{project.name}</h2>
                            <h3 class="writing2">Created on: {project.date_created}</h3>
                            <h3 class="writing2">{project.description}</h3>
                            <h3 class="writing2">{project.technical_description}</h3>
                            
                            <br></br>
                        </Project>
                    )
                })}
            </div>
        );
    }
}

export default ProjectList;
