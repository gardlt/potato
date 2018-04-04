import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import {Grid, Col} from 'react-flexbox-grid';

import collage from './programs.jpg';
import logo from './no_computers_wrtr0a.gif';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> | Alexis Rivera De
          La Torre | Potato Engineer | Gardlt |</h1>
        </header>
        <Grid>
            <Col xs>
                <p className="App-intro">
                    I am a software developer. I convert coffee into code and fun stuff.
                    I mostly deal with Python and Javascript for my coding. I also have
                    fun with docker containers. <code>docker run potato/engineer</code>
                </p>
                <img height="350" src="https://avatars0.githubusercontent.com/u/4713614" alt="avatar"/>
                <img height="350" src={collage} alt="programs"/>
            </Col>
            <Col xs>
                <p>
                    <a href="https://github.com/gardlt">
                        <FontAwesomeIcon size="2x" icon={["fab", "github"]} />
                    </a>
                    <a href="https://twitter.com/gardlt">
                        <FontAwesomeIcon size="2x" icon={["fab", "twitter"]} />
                    </a>
                    <a href="www.linkedin.com/in/alexis-rivera-de-la-torre-4b265653">
                        <FontAwesomeIcon size="2x" icon={["fab", "linkedin"]} />
                    </a>
                </p>
            </Col>
        </Grid>
      </div>
    );
  }
}

export default App;
