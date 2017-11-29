import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Intro = styled.div`
display: inline;
`
const Image = styled.img`
float: left;
margin: 0px 20px 0px 20px;
`


class Personal extends Component {
    render() {
        return (
            <div>
                <Intro>
                    <div>
                        <Image src="https://i.imgur.com/1TWG1bi.png" alt="" />
                    </div>
                    <h2 class="writing">Welcome to my resume! I'm Hunter Maddux, and as the header indicates, I am a man who wears many, though often very different, hats.</h2>
                    <h3 class="writing">I have reccently reached the end of my time at General Asembly in their Web Development Immersive course, and begun the search for a long term occupation.</h3>
                    <h3 class="writing">Interest in Ruby</h3>
                    <h3 class="writing">As a person in the workplace I believe in always learning and striving for excellence, even when I have to learn on the job. Luckily I have proven I can both learn and continue to put out work in both my last job working on commerical real estate deals, and learning the basics needed for my programming career in three months.</h3>
                    <h3 class="writing">Both with no previous experience I might add...</h3>
                    <h3 class="writing">I hope to find job that shares the same ideals as I do when it comes to the workplace. I am looking for a place that encourages the continuing the education of their employees, and understands the value of proper teamwork.</h3>
                </Intro>
            </div>
        );
    }
}

export default Personal;
