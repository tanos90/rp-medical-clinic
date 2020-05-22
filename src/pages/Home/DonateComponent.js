import React from 'react';

const DonateComponent = (props) => (
  <div className="row mx-0 mx-0 px-3 mb-3 px-4 d-flex justify-content-center">
    <div className="col-12 message-container d-flex row mx-0 mx-0 px-4">
      <div className="col-sm-12 col-md-2 d-flex justify-content-center my-2">
        <svg
          className="donate-icon"
          x="0px"
          y="0px"
          viewBox="0 0 1000 1000"
          enableBackground="new 0 0 1000 1000"
        >
          <g>
            <path d="M590.3,617.8c4.7,3.1,10,4.7,15.4,4.7s10.8-1.6,15.4-4.7c9.5-6.3,233-156.5,315.4-307.4c20.4-31.6,31.1-68,31.1-105.5C967.7,97.4,880.3,10,772.8,10c-79,0-137.5,65.6-167,99.8c-29.5-34.3-88-99.8-167-99.8c-107.5,0-194.9,87.4-194.9,194.9c0,37.5,10.8,73.9,31.1,105.5C357.3,461.3,580.8,611.5,590.3,617.8z M438.8,65.7c55.7,0,102.2,54.2,127.3,83.3c15.5,18.1,24.1,28.1,39.8,28.1c15.7,0,24.2-10,39.8-28.1c25-29.1,71.6-83.3,127.3-83.3c76.8,0,139.2,62.5,139.2,139.2c0,27-7.8,53.3-22.7,76c-0.4,0.6-0.8,1.3-1.2,2c-63.6,117.5-230.7,241.4-282.4,277.9C554.1,524.2,387,400.3,323.4,282.9c-0.4-0.7-0.8-1.3-1.2-2c-14.8-22.7-22.7-49-22.7-76C299.5,128.1,362,65.7,438.8,65.7L438.8,65.7z" />
            <path d="M940.6,611.1c-50.9-29.8-93.6,14.4-109.7,31C797,677.2,756.2,712,735.5,729c-8.8-3.9-18.5-6.2-28.7-6.3c-63-3.4-162.2-14.7-187-29.5c-26.7-15.9-48.1-31.4-66.9-45C398.7,609,355.9,578,249.4,578c-30.9,0-58,8.6-84.1,16.9c-26.9,8.5-52.3,16.6-82.9,16.6c-33.8,0-61.3,27.5-61.3,61.3v155.9c0,33.8,27.5,61.3,61.3,61.3c58.2,0,149.3,3,169.4,9.7c36.2,12.1,121.1,62.4,150.7,80.7c0.4,0.2,0.8,0.5,1.1,0.7c10.7,6,22.9,9.1,35.2,9.1h283.1c30,0,63.3-27.7,74.8-46.9c37.1-61.6,170.2-229.2,171.6-230.9c1.2-1.5,2.2-3.2,3.1-4.9C988.6,672.8,975.3,631.4,940.6,611.1L940.6,611.1z M721.9,934.3H438.7c-2.7,0-5.3-0.6-7.7-1.9c-10.5-6.5-113.5-69.7-161.7-85.8c-35.9-12-162.1-12.6-187-12.6c-3.1,0-5.6-2.5-5.6-5.6V672.6c0-3.1,2.5-5.6,5.6-5.6c39.2,0,71.4-10.2,99.7-19.1c24.2-7.7,45.1-14.3,67.3-14.3c88.5,0,119.4,22.5,170.8,59.7c19.8,14.4,42.3,30.6,71.1,47.8c14.5,8.6,38.5,15.4,65.4,20.6c57.8,11.3,129,15.7,147.9,16.7c0.5,0,1,0,1.5,0c9.2,0,16.7,7.5,16.7,16.7c0,9.2-7.5,16.7-16.7,16.7c-0.5,0-1,0-1.5,0.1l-210.7,11.1c-16.8-0.6-56.4-28.6-82.7-47.2c-6.8-4.8-13.4-9.5-20-14c-14.2-9.8-27.8-18.7-40.3-24.9c-13.8-6.9-30.5-1.3-37.3,12.4c-6.9,13.8-1.3,30.5,12.4,37.4c14.3,7.2,33.1,20.4,53,34.5c41.8,29.6,81.2,57.5,115.4,57.5c0.5,0,1,0,1.5,0l210.9-11.1c39.5-0.4,71.6-32.8,71.6-72.4c0-9-1.6-17.5-4.6-25.5c22.3-18.5,62.6-53,97.2-88.8c23.7-24.6,33.2-26.6,41.5-21.7c7.4,4.3,12.8,12.8,9.9,21.3c-18.5,23.4-136.7,173.1-173.4,234C744.1,922.4,727.8,933.7,721.9,934.3L721.9,934.3z" />
          </g>
        </svg>
      </div>
      <span className="col-sm-12 col-md-7 my-2 text-center">
        {props.donateText}
      </span>
      <div className="col-sm-12 col-md-3 my-2 text-center d-flex justify-content-center">
        <a
          href="https://give.idonate.com/rocky-point-medical-clinic-pia/donate"
          className="btn-animated btn-donate "
        >
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
          </svg>
          {props.donateButtonText}
        </a>
      </div>
    </div>
  </div>
);

export default DonateComponent;
