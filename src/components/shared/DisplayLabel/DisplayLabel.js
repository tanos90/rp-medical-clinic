import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DisplayLabel.scss';

const DisplayLabel = (props) => {
  return (
    <div className="row col-12 my-2">
      <FontAwesomeIcon
        icon={props.icon}
        className="display-label-icon col-1 mx-0 pl-0 pr-0 "
      />
      <b className="col-md-3 col-sm-6 display-label-info px-0 ">
        {props.label}:
      </b>
      <div className="col-md-8 col-sm-6 px-0">{props.children}</div>
    </div>
  );
};

export default DisplayLabel;
