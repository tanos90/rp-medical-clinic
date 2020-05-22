import React, { useState, useEffect } from 'react';
import './Header.scss';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [logo, setLogo] = useState('');
  const [mq, setMq] = useState(false);
  const [routes, setRoutes] = useState([]);
  const { t, i18n } = useTranslation();
  const history = useHistory();

  const donateLink =
    'https://give.idonate.com/rocky-point-medical-clinic-pia/donate';

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 900px)');
    setMq(mql.matches);
    mql.addListener((match) => {
      setIsOpen(mq);
    });
    setRoutes([
      {
        title: t('header.home'),
        path: '/',
      },
      {
        title: t('header.about'),
        path: '/about',
      },
      {
        title: t('header.testimonial'),
        path: '/testimonials',
      },
      {
        title: t('header.photos'),
        path: '/photos',
      },
      {
        title: t('header.safety'),
        path: '/safety',
      },
      {
        title: t('header.contact'),
        path: '/contact',
      },
    ]);
    if (i18n.language) {
      setLogo(
        `${process.env.PUBLIC_URL}/assets/images/logo_${i18n.language}.png`
      );
    }
  }, [t, mq, i18n]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const onClickLink = () => {
    setIsOpen(false);
  };

  const onClickDonate = (event) => {
    setIsOpen(false);
    window.open(donateLink, '_blank');
  };

  const onClickLogo = () => {
    history.pushState('/Home');
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header-section w-100">
      <Navbar className="col-12 navbar-expand-custom">
        <NavbarBrand href="/home" className="logo-brand">
          <img
            src={logo}
            className="logo-img"
            alt="logo"
            onClick={onClickLogo}
          />
        </NavbarBrand>
        <div className="navbar-right-side">
          <div className="navbar-toggler" onClick={toggle}>
            <div className="navicon-container">
              <div
                className={
                  isOpen ? 'navicon-button uarr open' : 'navicon-button uarr'
                }
              >
                <div className="navicon"></div>
              </div>
            </div>
          </div>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-4" navbar>
              {routes.map((route) => (
                <NavItem key={route.path}>
                  <Link
                    className="link-animation"
                    to={route.path}
                    onClick={onClickLink}
                  >
                    {route.title}
                  </Link>
                </NavItem>
              ))}
              {/* <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
            </Nav>
          </Collapse>

          <div
            className={
              isOpen
                ? 'right-header-buttons-container'
                : 'right-header-buttons-container is-navbar-closed'
            }
          >
            <button
              className="button-donate-header shake-animation"
              onClick={onClickDonate}
            >
              {t('header.donate')}
            </button>
            <a
              className="link"
              href="#/es"
              onClick={(e) => {
                e.preventDefault();
                changeLanguage('es');
              }}
            >
              ES
            </a>
            <a
              className="link"
              href="#/en"
              onClick={(e) => {
                e.preventDefault();
                changeLanguage('en');
              }}
            >
              EN
            </a>
          </div>
        </div>
      </Navbar>
    </header>
  );
};
export default Header;
