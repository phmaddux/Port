import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.div`
background-color: rgba(255, 255, 255, .1);
display: flex;
justify-content: space-around;
align-items: center;
`
const Title = styled.div` 
font-size: 3rem;
margin: 7px;
`
const Subtitle = styled.div` 
font-size: 1.5rem;
margin: 7px;
`
const Navbar = styled.div`
background-color: rgba(255, 255, 255, .1);
flex-direction: row;
font-size: 1.9rem;
display: flex;
justify-content: flex-end;
align-items: center;
`
const Linkitem = styled.div`
margin: 6px 15px 0px 15px;
`
const Linkimage = styled.img`
height: 60px;
width: 60px;
`
class NavBar extends Component {
    render() {
        return (
            <div>
                <Header>
                    <Title>Hunter Maddux</Title>
                    <Subtitle>Full Stack Web Developer || Game Enthusiast || Problem Solver || Metalworker</Subtitle>
                </Header>
                <Navbar>
                    <Linkitem>
                        <Link to={`/`}>About Me</Link>
                    </Linkitem>
                    <Linkitem>
                        <Link to={`/Resume`}>Resume</Link>
                    </Linkitem>
                    <Linkitem>
                        <Link to={`/Experience`}>Experience</Link>
                    </Linkitem>
                    <Linkitem>
                        <a href="mailto:hunter@maddux.tech">
                            <Linkimage src="https://i.imgur.com/RfPRnuV.png" alt="Email" />
                        </a>
                    </Linkitem>
                    <Linkitem>
                        <a href="https://github.com/phmaddux">
                            <Linkimage src="https://i.imgur.com/w123zaK.png" alt="Github" />
                        </a>
                    </Linkitem>
                    <Linkitem>
                        <a href="https://www.linkedin.com/in/hunter-maddux-353703133/">
                            <Linkimage src="https://i.imgur.com/lEcWcqn.png" alt="Linkedin" />
                        </a>
                    </Linkitem>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;