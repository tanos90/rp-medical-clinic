import React, { useEffect } from 'react';
import DisplayLabel from 'components/shared/DisplayLabel/DisplayLabel';
import { useTranslation } from 'react-i18next';

function PersonData(props) {
  const { t } = useTranslation();

  useEffect(() => {}, [t]);

  return (
    <div className="my-3">
      <h5 className="col-12 px-0 mb-2">{props.name}</h5>
      <DisplayLabel icon="phone-square" label={t('contact.phoneLabel')}>
        <a href={`"tel:${props.phone}"`}>{props.phoneWithFormat}</a>
      </DisplayLabel>
      <DisplayLabel icon="envelope-square" label={t('contact.emailLabel')}>
        <a href={`"mailto:${props.email}?Subject=Hello"`} target="_top">
          {props.email}
        </a>
      </DisplayLabel>
    </div>
  );
}

export default PersonData;
