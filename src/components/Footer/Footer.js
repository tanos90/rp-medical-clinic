import React from 'react';
import './Footer.scss';
import getYear from 'date-fns/getYear';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = function () {
  const today = new Date();

  return (
    <section className="section-footer row mx-0 px-0">
      <footer className="col-12 px-0 ">
        <div className="d-flex justify-content-center">
          <div className="icons-container d-block">
            <FontAwesomeIcon
              className="footer-icon facebook-color facebook-bg-color"
              onClick={(e) => {
                goTo(e, 'https://www.facebook.com/RockyPointMedicalClinics/');
              }}
              icon={['fab', 'facebook']}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="footer-icon youtube-color youtube-bg-color"
              onClick={(e) => {
                goTo(e, 'https://www.youtube.com/watch?v=mYA4wPdTnxE');
              }}
              icon={['fab', 'youtube']}
            ></FontAwesomeIcon>
          </div>
        </div>
        <span className=" col-12 px-0 text-center d-flex justify-content-center">
          Rocky Point Medical Clinics
        </span>
        <span className="copyright-text col-12 px-0 text-center d-flex justify-content-center">
          By Devise IS - &copy;{getYear(today)}
        </span>
      </footer>
    </section>
  );
};

const goTo = (e, url) => {
  window.open(url, '_blank');
};

export default Footer;
