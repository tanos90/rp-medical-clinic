import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageHeader from 'components/shared/PageHeader/PageHeader';
import './TestimonialsPage.css';

const testimionies = [
  {
    name: 'Paula Wilson',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
    sem tempor, varius quam at, luctus dui. Mauris magna metus,
    dapibus nec turpis vel, semper malesuada ante, commodo iacul
    viverra.`,
  },
  {
    name: 'Wilson Paul',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
    sem tempor, varius quam at, luctus dui. Mauris magna metus,
    dapibus nec turpis vel, semper malesuada ante, commodo iacul
    viverra.`,
  },
];

class TestimonialsPage extends React.Component {
  state = {
    show: false,
  };

  componentDidMount(props) {
    this.timeoutId = setTimeout(
      function () {
        this.setState({ show: true });
      }.bind(this),
      800
    );
  }

  render() {
    return (
      <div className="component-container  pt-0">
        <PageHeader
          show={this.state.show}
          title="TESTIMONIALS"
          cssClass="testimonials-header-background"
        />
        <section className="blog-section pt-0">
          <div className="row mx-0 ">
            {testimionies.map((testimony, index) => (
              <div className="col-md-6 col-sm-12 my-4" key={index}>
                <div className="testimonial-wrapper">
                  <div className="testimonial">
                    <FontAwesomeIcon
                      className="quote-icon mr-2"
                      icon="quote-left"
                    />
                    {testimony.text}
                    <FontAwesomeIcon
                      className="quote-icon ml-2"
                      icon="quote-right"
                    />
                  </div>
                  <div className="quote-author-container">
                    <div className="d-flex mr-3">
                      {/* <img src="/examples/images/clients/1.jpg" alt="" /> */}
                    </div>
                    <div className="quote-author">
                      <div className="overview">
                        <div className="d-flex justify-content-center">
                          <div className="line mr-2"></div>
                          <b>{testimony.name}</b>
                          <div className="line ml-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default TestimonialsPage;
