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
            <Intro>
                <div>
                    <Image src="https://i.imgur.com/1TWG1bi.png" alt="" />
                </div>
                <h2 class="writing">Welcome to my resume! I'm Hunter Maddux, and as the header indicates, I am a man who wears many, though often very different, hats.</h2>
                <h3 class="writing">I have always enjoyed creating things and solving problems, which is why I chose to pursue web development as a career. </h3>
                <h3 class="writing">As a developer I hope to specialize in React and Ruby on rails as I help to build out new apps. As a person I believe in always learning and striving for excellence, even when I have to learn quickly on the job. Luckily I have proven I can both learn while continuing to put out quality work in both my last job working on commerical real estate deals, and learning the basics needed for my programming career in three months.</h3>
                <h3 class="writing">I hope to find job that shares the same ideals as I do when it comes to the workplace. I am looking for a place that encourages the continuing the education of their employees, and understands the value of proper teamwork.</h3>
            </Intro>
        );
    }
}

export default Personal;
