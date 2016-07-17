import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Starfax Toy App Inspired by Carfax</h1>

        <h3>Technologies Used:</h3>
        <ul>
            <li>React.js</li>
            <li>React Router</li>
            <li>Redux for unidirectional data flow</li>
            <li>Thunk middleware used to dispatch actions</li>
            <li>ES6 with babel used as transpiler</li>
            <li>Webpack for bundling files</li>
            <li>JSX to inject templates</li>
            <li>Toaster.js</li>
            <li>npm</li>
        </ul>

        <h3>-Tyler Kilburn</h3>
      </div>

    );
  }
}

export default HomePage;
