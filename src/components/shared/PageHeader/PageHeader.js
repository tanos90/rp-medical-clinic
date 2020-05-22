import React from 'react';
import './PageHeader.scss';

const PageHeader = (props) => {
  return (
    <div className={'jumbotron paral1 paralsec1 ' + props.cssClass}>
      {props.children !== undefined ? (
        props.children
      ) : (
        <div className="jumbotron-bg"></div>
      )}
      <h1
        className={
          props.show ? 'text-header text-header-animated' : 'text-header'
        }
      >
        {props.title}
      </h1>
    </div>
  );
};

export default PageHeader;
