import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SliderComponent from './Slider/slider';
import DayEvent from 'components/shared/DayEvent/DayEvent';
import './HomePage.scss';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import db from 'services/firebase/firebase';
import ServiceComponent from './ServiceComponent';
import DonateComponent from './DonateComponent';
import ClinicServices from 'services/ClinicServices';
import getDatesByYear from 'services/ClinicDates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { es, enUS } from 'date-fns/esm/locale';
import { capitalize } from 'shared/helpers/Utilities';

export default function HomePage() {
  const [articles, setArticles] = useState([]);
  const [dates, setDates] = useState([]);
  const [year, setYear] = useState([]);
  const [mainArticle, setMainArticle] = useState();
  const { t, i18n } = useTranslation();
  const [mq, setMq] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [services] = useState(ClinicServices.getServices());
  console.log(mq);
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 600px)');
    console.log(mql);
    setMq(mql.matches);
    setIsMobile(mql.matches);
    mql.addListener((match) => {
      console.log(match);
      setIsMobile(match.matches);
    });
  }, []);

  useEffect(() => {
    const getData = async () => {
      const articles = [];
      let mainArticle = {};
      fetch('locales/articles.json').then(resp => resp.json()).then(data => {
        data.map(article => {
          if (article.isMain) {
            mainArticle = article
          } else {
            articles.push(article);
          }
        });
        setArticles(articles);
        setMainArticle(mainArticle);
      }
      );
    };
    getData();
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    getDatesByYear(currentDate.getFullYear()).then(datesResponse => {
      const dates = [];
      datesResponse.forEach((date) => {
        const newDate = new Date(date);
        dates.push(newDate);
      });
      console.log(dates);
      const datesSeparated = dates.map((date) => {
        return {
          week: capitalize(
            format(date, 'EEEE', {
              locale,
            })
          ),
          day: format(date, 'dd'),
          month: format(date, 'MMM', {
            locale,
          }),
        };
      });
      setYear(format(dates[0], 'yyyy'));
      setDates(datesSeparated);
    });
    const locale = i18n.language === 'es' ? es : enUS;

  }, [t, i18n]);

  const goTo = (e, url) => {
    window.open(url, '_blank');
  };

  const sliderSetting = {
    dots: true,
    infinite: true,
    speed: 900,
    autoplaySpeed: 10000,
    autoplay: true,
    adaptiveHeight: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    fade: true,
    cssEase: 'linear',
  };

  return (
    <div>
      <section className="hero-section">
        {!isMobile ? (
          <SliderComponent settings={{ ...sliderSetting }}></SliderComponent>
        ) : (
          <div className="mt-5"></div>
        )}
      </section>
      <section className="blog-section mt-3 text-center">
        <DonateComponent
          donateText={t('home.donateText')}
          donateButtonText={t('home.donateButtonText')}
        ></DonateComponent>

        <div className="row">
          <p
            className="p-3 presentation-text"
            dangerouslySetInnerHTML={{ __html: t('home.presentationText') }}
          ></p>
        </div>
        <div className="">
          <div className="separator my-3"></div>
          <div className="row">
            <div className="col-lg-8 blog-posts mb-4 card">
              <div className="blog-post featured-post card-container">
                {!mainArticle ? null : (
                  <div className=" featured-post">
                    <img
                      src={mainArticle.image}
                      alt={mainArticle.title[i18n.language]}
                    />
                    <h3 className="my-3">{mainArticle.title[i18n.language]}</h3>
                    <p className="main-color">
                      {mainArticle.text[i18n.language]}
                    </p>
                    <Link
                      href="javascript.void(0);"
                      to="/about"
                      className="site-btn"
                    >
                      Read More
                    </Link>
                  </div>
                )}
              </div>
              <div className="separator my-2"></div>
              <div className="row mx-0 pt-5">
                <div className="col-md-6  card-container">
                  <div className="blog-post">
                    <iframe
                      title="community-center-video"
                      width="95%"
                      height="260"
                      src="https://www.youtube.com/embed/tRDLToYKHK0"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <h4 className="my-3"> {t('home.videoTitle')}</h4>
                    <p className="main-color">{t('home.videoText')}</p>
                    {/* <Link
                        className="read-more"
                        to={{
                          pathname: '/post/' + article.id,
                          article: article,
                        }}
                      >
                        Read More
                      </Link> */}
                  </div>
                </div>
                {articles.map((article) => (
                  <div className="col-md-6 card-container" key={article.id}>
                    <div className="blog-post">
                      <img
                        src={article.image}
                        alt={article.title[i18n.language]}
                      />
                      <h4 className="my-3">{article.title[i18n.language]}</h4>
                      <p className="main-color">
                        {article.text[i18n.language]}
                      </p>
                      {/* <Link
                        className="read-more"
                        to={{
                          pathname: '/post/' + article.id,
                          article: article,
                        }}
                      >
                        Read More
                      </Link> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4 sidebar">
              <div className="sidebar-section-container">
                <h3 className="my-4 home-section-title">
                  {t('home.services.title')}
                  <div className="d-block color-line color-line-section-header my-2"></div>
                </h3>

                <div className="row services-container sidebar-section">
                  {services.map((service, index) => (
                    <div
                      className="col-sm-3 col-md-6 col-lg-6 service"
                      key={index}
                    >
                      <ServiceComponent
                        {...service}
                        lng={i18n.language}
                      ></ServiceComponent>
                    </div>
                  ))}
                </div>
              </div>
              <div className="sidebar-section-container">
                <h3 className="my-4 home-section-title">
                  {t('home.communityCenter')}
                  <div className="d-block color-line color-line-section-header my-2"></div>
                </h3>

                <div className="sidebar-section">
                  <div className="ln-item row mx-0">
                    <div className="col-12">
                      <img
                        className="sidebar-image col-12"
                        src="assets/images/centro-comunitario.jpg"
                        alt="centro-comunitario"
                      />
                    </div>

                    <div className="ln-text">
                      <a
                        href="#top"
                        onClick={(e) => {
                          e.preventDefault();
                          goTo(e, 'https://www.penascowordsofhope.com/');
                        }}
                      >
                        <h6>Visita el sitio del centro comunitario</h6>
                      </a>
                      <a
                        className="my-2"
                        href="#top"
                        onClick={(e) => {
                          e.preventDefault();
                          goTo(e, 'https://www.penascowordsofhope.com/');
                        }}
                      >
                        https://www.penascowordsofhope.com/
                      </a>
                      <div className="ln-metas mt-2">
                        <FontAwesomeIcon
                          className="social-icon facebook-color ml-2 mb-2"
                          onClick={(e) => {
                            goTo(
                              e,
                              'https://www.facebook.com/pages/category/Nonprofit-Organization/Centro-Comunitario-Palabras-de-Esperanza-899895016727078/'
                            );
                          }}
                          icon={['fab', 'facebook']}
                        ></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-section-container">
                <div className="dates-container">
                  <div className="dates-title px-3">
                    <h3>
                      {t('home.upcomingClinics')} <br />
                      {year}
                    </h3>
                    <div className="d-block color-line color-line-dates"></div>
                  </div>

                  <div className=" row mx-0 d-flex justify-content-center sidebar-section">
                    {dates.map((date) => (
                      <div
                        className="col list-dates"
                        key={date.day + date.month}
                      >
                        <DayEvent {...date}></DayEvent>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
