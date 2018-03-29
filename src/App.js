import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'



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
        <p className="App-intro">
            I am a software developer. I convert coffee into code and fun stuff.
            I mostly deal with Python and Javascript for my coding. I also have
            fun with docker containers. <code>docker run </code>
        </p>
        <p>
            <FontAwesomeIcon icon="check-square"/>
            <a href="https://github.com/gardlt">
                <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a href="https://twitter.com/gardlt">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a href="www.linkedin.com/in/alexis-rivera-de-la-torre-4b265653">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
        </p>
      </div>
    );
  }
}

export default App;
