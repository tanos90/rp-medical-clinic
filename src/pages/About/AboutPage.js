import React, { useState, useEffect } from 'react';
import './AboutPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageHeader from 'components/shared/PageHeader/PageHeader';
import { useTranslation } from 'react-i18next';

const AboutPage = (props) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(false);
  const [matchQuerySize, setMatchQuerySize] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setShow(false);
    const mql = window.matchMedia('(min-width: 500px)');
    setMatchQuerySize(mql.matches);
    mql.addListener((match) => {
      setMatchQuerySize(match.matches);
    });
    setTitle(t('header.about'));
    setTimeout(function () {
      setShow(true);
    }, 800);
  }, [t, matchQuerySize]);

  return (
    <div className="component-container pt-0 justify-content-center">
      <PageHeader show={show} title={title} cssClass="about-header" />

      <div className=" about-us-container blog-section">
        <h1 className="text-center">{t('about.title')}</h1>
        <h4 className="text-center">{t('about.subtitle')}</h4>
        <div className="row mx-0">
          <div className="col-lg-6 col-md-12 mt-4 text">
            <span className="">
              {t('about.firstParagraph')} <br /> <br />
              {t('about.secondParagraph')}
              <span className="quote-about">
                <FontAwesomeIcon className="quote-icon" icon="quote-left" />
                <b>{t('about.firstQuote')}</b>
                <FontAwesomeIcon
                  className="quote-icon ml-2"
                  icon="quote-right"
                />
                <br />
                <span className="source-quote">
                  - {t('about.sourceQuote')} -
                </span>
              </span>
              <b className="quote-about">
                <FontAwesomeIcon className="quote-icon" icon="quote-left" />
                {t('about.secondQuote')}
                <FontAwesomeIcon
                  className="quote-icon ml-2"
                  icon="quote-right"
                />
              </b>
              <b className="quote-about">
                <FontAwesomeIcon className="quote-icon" icon="quote-left" />
                {t('about.thirdQuote')}
                <FontAwesomeIcon
                  className="quote-icon ml-2"
                  icon="quote-right"
                />
              </b>
              <b className="quote-about">
                <FontAwesomeIcon className="quote-icon" icon="quote-left" />
                {t('about.fourthQuote')}
                <FontAwesomeIcon
                  className="quote-icon ml-2"
                  icon="quote-right"
                />
              </b>
              <b className="quote-about">
                <FontAwesomeIcon className="quote-icon" icon="quote-left" />
                {t('about.fifthQuote')}
                <FontAwesomeIcon
                  className="quote-icon ml-2"
                  icon="quote-right"
                />
              </b>
            </span>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 mt-4 video-container d-flex justify-content-center px-0">
            <iframe
              title="youtube-video"
              style={{
                float: 'right',
                margin: '0px 10px 10px 10px',
              }}
              width={matchQuerySize ? 460 : 300}
              height={matchQuerySize ? 315 : 250}
              src="https://www.youtube.com/embed/mYA4wPdTnxE"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
