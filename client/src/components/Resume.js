import React, { Component } from 'react';
import styled from "styled-components";

const Head = styled.h1`
margin: 18px;
font-size: 1.9rem;
padding: 7px;
text-decoration: bold;
`
const Image = styled.div`
display: flex;
justify-content: center;
margin: 20px;
`
class Resume extends Component {
    render() {
        return (
            <div>
                <Head>My Resume</Head>
                <Image>
                    <img src="https://i.imgur.com/ijv3N4p.jpg" alt=""/>
                </Image>
            </div>
        );
    }
}
export default Resume;