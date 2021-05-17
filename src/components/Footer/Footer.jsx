import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';
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
                <p> Somos un grupo de estudiantes que ha desarrollado una herramienta de convergencia y representación de datos de diferentes orígenes en el campo del exposoma</p>
              </div>
            </div>
            <div className="footer-col-wrapper">
              <div className="footer-col">
                <h4>Links Importantes</h4>
                <ul className="list-footer">
                  <li>
                    Reto propuesto por <a href="https://www.clinicbarcelona.org/en/professionals/laura-mezquita">Laura Mezquita </a>
                  </li>
                  <li>
                    Herramienta diseñada per facilitar el trabajo y la investigación del exposoma en el proyecto <a href="https://www.clinicbarcelona.org/en/idibaps/research-areas/oncology-and-haematology/translational-genomics-and-targeted-therapies-in-solid-tumours/projects"> Translational Genomics</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-col-wrapper">
              <div className="footer-col">
                <h4>Redes Sociales</h4>
                <div className="social-icons">
                  <li>
                    <SocialIcon network="facebook" bgColor="white"/>
                  </li>
                  <li>
                    <SocialIcon network="twitter" bgColor="white"/>
                  </li>
                  <li>
                    <SocialIcon network="instagram" bgColor="white"/>
                  </li>
                  <li>
                    <SocialIcon network="linkedin" bgColor="white"/>
                  </li>
                  <li>
                    <SocialIcon network="email" bgColor="white"/>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          Copyright © ExposomApp - Prototipo funcional
        </div>
      </div>
    );
  }
}

export default Footer;
