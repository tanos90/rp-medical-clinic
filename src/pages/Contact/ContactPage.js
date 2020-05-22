import React, { useState, useEffect } from 'react';
import './ContactPage.scss';

import PageHeader from 'components/shared/PageHeader/PageHeader';
import DisplayLabel from 'components/shared/DisplayLabel/DisplayLabel';
import PersonData from './PersonData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

function ContactPage() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState();
  const { t } = useTranslation();

  const contactPlace = {
    name: '',
    address:
      'Callejón Juan Aldama #668, Colonia San Rafael Puerto Peñasco, Sonora',
  };

  useEffect(() => {
    setTitle(t('header.contact'));
    setShow(false);
    setTimeout(function () {
      setShow(true);
    }, 800);
  }, [t]);

  return (
    <div className="component-container pt-0 justify-content-center">
      <PageHeader show={show} title={title} cssClass="paralsec1-contact" />
      <section className="blog-section d-flex justify-content-center">
        <div className="container contact-info-container m-2">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 p-2 mx-auto">
              <h2 className="header-sub-container">{t('contact.title')}</h2>
              <h4 className="icon-block__title align-left mbr-fonts-style display-5">
                {t('contact.subtitle')}
              </h4>
              <div>
                <div className="icon-contacts pb-3 ml-3">
                  <div className="contact-information row">
                    <div className="col-12 my-2 px-0">
                      <h4 className="col-12 mt-3 px-0">USA</h4>
                      <div className="color-line d-block"></div>
                      <PersonData
                        name="Tony Rivero"
                        phone="6381120517"
                        phoneWithFormat="638-112-0517"
                        email="tony@rockypointmedicalclinics.com"
                      ></PersonData>
                    </div>
                    <div className="col-12 my-2 px-0">
                      <h4 className="col-12 my-2 px-0">Mexico</h4>
                      <div className="color-line d-block"></div>
                      <PersonData
                        name="Loly Martinez"
                        phone="6381120517"
                        phoneWithFormat="638-112-0517"
                        email="loly@rockypointmedicalclinics.com"
                      ></PersonData>
                      <PersonData
                        name="Susie Stavros"
                        phone="6025241173"
                        phoneWithFormat="602-524-1173"
                        email="susiestavros@aol.com"
                      ></PersonData>
                    </div>

                    <div className="my-3 row col-12">
                      <h5 className="mr-3 mt-1">
                        {t('contact.communityCenter')}:{' '}
                      </h5>
                      <div className="col-12"></div>
                      <div className="col-12 community-center-link mt-2">
                        <FontAwesomeIcon
                          className="social-icon facebook-color mb-2 "
                          onClick={(e) => {
                            goTo(
                              e,
                              'https://www.youtube.com/watch?v=mYA4wPdTnxE'
                            );
                          }}
                          icon={['fab', 'facebook']}
                        ></FontAwesomeIcon>
                      </div>

                      <a
                        className="my-2 col-12"
                        href="#top"
                        onClick={(e) => {
                          e.preventDefault();
                          goTo(e, 'https://www.penascowordsofhope.com/');
                        }}
                      >
                        https://www.penascowordsofhope.com/
                      </a>
                    </div>

                    <div className="my-3 row col-12">
                      <h5 className="mr-3">{t('contact.socialLabel')}: </h5>
                      <FontAwesomeIcon
                        className="social-icon facebook-color"
                        onClick={(e) => {
                          goTo(
                            e,
                            'https://www.facebook.com/RockyPointMedicalClinics/'
                          );
                        }}
                        icon={['fab', 'facebook']}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        className="social-icon youtube-color ml-2"
                        onClick={(e) => {
                          goTo(
                            e,
                            'https://www.youtube.com/watch?v=mYA4wPdTnxE'
                          );
                        }}
                        icon={['fab', 'youtube']}
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 px-0">
              <div className="col-12 px-0">
                <h3 className="col-12 px-0 mt-2 ml-2">
                  {t('contact.placeLabel')}
                </h3>
                <DisplayLabel
                  icon="map-marker"
                  label={t('contact.addressLabel')}
                >
                  <span className="col-md-9 col-lg-8 col-sm-12 contact-info px-0">
                    {contactPlace.address}
                  </span>
                </DisplayLabel>
              </div>
              <div className="google-map col-12 d-flex my-2">
                <div className="map-container">
                  <iframe
                    title="google-maps"
                    style={{ border: '0', width: '100%', height: '100%' }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2026.564211059751!2d-113.48331750756239!3d31.32415987334453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x812ba4294099d18d%3A0x2a205b563001978b!2sCjon.%20Juan%20Aldama%20668%2C%20Col.%20San%20Rafael%2C%20Col%20San%20Rafael%2C%20Puerto%20Pe%C3%B1asco%2C%20Son.!5e0!3m2!1sen!2smx!4v1589478602677!5m2!1sen!2smx"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const goTo = (e, url) => {
  window.open(url, '_blank');
};

export default ContactPage;
