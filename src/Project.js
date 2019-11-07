import React, { Component } from 'react';
import Logo from './assets/logo.png'

class Project extends Component {
    render() {
        return (
            <div class="container text-center mt-5">
                <img src={Logo} width="200px" alt="logo"/>
                <h4>Coming Soon :)</h4>
            </div>
        );
    }
}

export default Project;