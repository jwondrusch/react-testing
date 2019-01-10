import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import randomstring from 'randomstring';

export default class Nav extends Component {
  render() {
    const str404 = randomstring.generate(8);

    return (
      <nav className="navbar mb-4" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item mr-8" href="/">
            <strong>React Testing 101</strong>
          </a>
        </div>

        <div className="navbar-start">
          <Link className="navbar-item" to='/'>Home</Link>
          <Link className="navbar-item" to='/about'>About</Link>
          <Link className="navbar-item" to={`/${str404}`}>404</Link>
        </div>
      </nav>
    )
  }
}
