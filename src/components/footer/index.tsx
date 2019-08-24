import React, { Component } from 'react';
import './styles.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 d-block d-sm-none">
              <ul>
                <li><b>Formation Secours 33</b></li>
                <li>
                  <ul className="socialr">
                    <li>
                      <a href="https://www.facebook.com/freddelacompta" target="_blank" rel="noopener noreferrer">
                        <i className="icon-facebook-logo"></i>Facebook
                  </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/10087322/" target="_blank" rel="noopener noreferrer">
                        <i className="icon-linkedin-logo"></i>Linkedin
                  </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-3 offset-3">
              <ul>
                <li className="first"><b>Formation Secours 33</b></li>
                <li><a href="/web/20171215011439/http://freddelacompta.com/legal">Mentions Légales</a></li>
                <li><a href="mailto:contact.fs33@gmail.com" target="_blank">contact.fs33@gmail.com</a></li>
                <li><a>06 52 65 39 98</a></li>
                <li>©Formation Secours</li>
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li className="first"><b>Formations</b></li>
                <li><a href="/web/20171215011439/http://freddelacompta.com/#fonctionnalites">Prévention</a></li>
                <li><a href="/web/20171215011439/http://freddelacompta.com/#pricer">Incendie</a></li>
                <li><a href="/web/20171215011439/http://freddelacompta.com/cgu">Conseil</a></li>
                <li><a href="/web/20171215011439/http://freddelacompta.com/cgu">Organisme</a></li>
              </ul>
            </div>
            <div className="col-3">
              <ul>
                <li className="first"><b>Formation Secours 33 sur le web</b></li>
                <li>
                  <ul className="socialr notmobile">
                    <li>
                      <a href="https://www.facebook.com/freddelacompta" target="_blank" rel="noopener noreferrer">
                        <i className="icon-facebook-logo"></i>Facebook
                  </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/10087322/" target="_blank" rel="noopener noreferrer">
                        <i className="icon-linkedin-logo"></i>Linkedin
                  </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    )
  }
}

export default Footer;
