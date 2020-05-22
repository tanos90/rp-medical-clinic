import React from 'react';
import './slider.css';
import Slider from 'react-slick';
import 'react-animated-slider/build/horizontal.css';
import { useHistory } from 'react-router-dom';

const SliderComponent = (props) => {
  const history = useHistory();
  const slides = [
    {
      title: '',
      description: '',
      button: '',
      goToButton: function () {
        history.push('/about');
      },
      image: 'home.png',
    },
    {
      title: '',
      description: '',
      button: '',
      goToButton: function () {
        history.push('/contact');
      },
      image: 'RPMC1.jpg',
    },
    {
      title: '',
      description: '',
      button: '',
      goToButton: function () {
        history.push('/contact');
      },
      image: 'RPMC2.jpg',
    },
    {
      title: '',
      description: '',
      button: '',
      goToButton: function () {
        history.push('/contact');
      },
      image: 'RPMC3.jpg',
    },
    {
      title: '',
      description: '',
      button: '',
      goToButton: function () {
        history.push('/contact');
      },
      image: 'rp2.jpg',
    },
    {
      title: 'Volunteer',
      description:
        'If you are interested in volunteering, Contact Us for more information.',
      button: 'Read More',
      goToButton: function () {
        history.push('/contact');
      },
      image: 'volunteer.jpg',
    },
    {
      title: '',
      description: 'Lorem ipsum',
      button: 'Read More',
      goToButton: () => {},
      image: '3.jpg',
    },
  ];

  Slider.infinite = true;

  return (
    <div className="row mx-0">
      <div className="col-12 px-0">
        <div className="slider-container">
          <Slider {...props.settings} className="slider-home">
            {slides.map((slide, index) => (
              <div key={index} className="">
                <div
                  className="slider-image slider-text"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.500), rgba(0,0,0,.1)), url(${process.env.PUBLIC_URL}/assets/images/${slide.image}) `,
                  }}
                >
                  {slide.title !== '' ? (
                    <div className="row mx-0">
                      <h1 className="col-12 alt-text-color">{slide.title}</h1>
                      <p className="col-12 alt-text-color">
                        {slide.description}
                      </p>
                      <div className="col-12">
                        <button
                          className="button-styled"
                          onClick={() => {
                            slide.goToButton();
                          }}
                        >
                          {slide.button}
                        </button>
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
