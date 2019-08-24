import React, { Component } from 'react';
import './styles.scss';
import ImageSrc from '../../assets/logo.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <nav className="navbar navbar-light">
            <a className="navbar-brand" href="/">
              <img src={ImageSrc} height="30" alt="logo" />
            </a>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link" href="#">Qui sommes-nous ?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/formations/liste">Nos formations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Nous contacter</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header;
