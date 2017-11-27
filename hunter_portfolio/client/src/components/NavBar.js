import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'

class NavBar extends Component {
    render() {
        return (
            <div>
                <li>
                    <ul>
                        <Link to={`/`}>About Me</Link>
                    </ul>
                    <ul>
                        <Link to={`/Resume`}>Resume</Link>
                    </ul>
                    <ul>
                        <Link to={`/Experience`}>Experience</Link>
                    </ul>
                </li>
                <br></br>
            </div>
        );
    }
}

export default NavBar;