import React, { Component } from "react";
import './Footer.css';

class Footer extends Component {
  render() {
    return(
      <div className="footer-wrapper">
        <div className="footer">
          <div className="footer-row">
            <div className="footer-col-wrapper">
              <div className="footer-col">
                <h4>Sobre ExposomApp</h4>
                <p> Som una eina de convergència i representació de dades de diferents orígens</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
