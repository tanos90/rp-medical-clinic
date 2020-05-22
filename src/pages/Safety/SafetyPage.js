import './SafetyPage.scss';
import PageHeader from 'components/shared/PageHeader/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SafetyPage = (props) => {
  const [show, setShow] = useState(false);
  const [tips, setTips] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    setTips(t('safety.tips', { returnObjects: true }));
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 800);
  }, [t]);

  const toggleCard = (event, tip) => {
    const newTips = [...tips].map((item) =>
      item.title === tip.title ? Object.assign(item, { show: !tip.show }) : item
    );
    setTips(newTips);
  };

  const renderTip = (tip) => {
    const iconClass = !tip.show ? 'hide' : '';
    return (
      <li
        onClick={(e) => {
          toggleCard(e, tip);
        }}
        key={tip.title}
        className={iconClass}
      >
        <div />
        <i className={iconClass}></i>
        <div className="tip-header">
          <div className="tip-icon-container clickable-icon alt-background-color">
            <FontAwesomeIcon
              icon={tip.icon}
              className="tip-icon ml-0 pl-0 text-left"
            />
          </div>
        </div>
        <h2>{tip.title}</h2>
        <p
          onClick={(e) => {
            toggleCard(e, tip);
          }}
          className="tip-text text-justify mx-auto px-3"
          dangerouslySetInnerHTML={{ __html: tip.text }}
        ></p>
      </li>
    );
  };

  return (
    <div className="component-container pt-0 justify-content-center">
      <PageHeader
        show={show}
        title={t('safety.title')}
        cssClass="safety-header"
      />
      <div className="row m-3 px-0 mx-0 safety-component-container blog-section text-center">
        <div className="col-12 mb-3">
          <h1 className="text-center title-safety">{t('safety.subtitle')}</h1>
        </div>

        <div className="safety-tips col-12">
          <ul>{tips.map((tip) => renderTip(tip))}</ul>
        </div>
      </div>
    </div>
  );
};

export default SafetyPage;
