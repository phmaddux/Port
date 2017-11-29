import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Head = styled.div`
margin: 18px;
font-size: 1.9rem;
padding: 7px;
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