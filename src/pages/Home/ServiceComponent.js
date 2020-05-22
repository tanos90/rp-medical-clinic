import React from 'react';
import SVG from 'react-inlinesvg';

const ServiceComponent = (props) => {
  return (
    <div>
      <SVG
        className="service-icon"
        baseURL="/home"
        cacheRequests={true}
        description="The React logo"
        onError={(error) => console.log(error.message)}
        preProcessor={(code) => code.replace(/stroke=".*?"/g, 'stroke="#fff"')}
        src={props.iconPath}
        title="React"
        uniqueHash="a1f8d1"
        uniquifyIDs={true}
      />
      <h5 className="mt-2">{props.serviceName[props.lng]}</h5>
    </div>
  );
};

export default ServiceComponent;
