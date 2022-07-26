import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className='container mt-5 mb-5 p-5 pt-3 banner'>
      <div className="row">
        <div className="col-sm-12 col-lg-6 p-3">
          <h1>Welcome to</h1>
          <h1 className='globe'>Globetech</h1>
          <p>We are committed to deliver <span className='best'>best IT service.</span> Our Consultants have experience in working With clients. We have extensive experience in the software application space and also often a broad range and depth of technology.</p>
          <button className='btn btn-warning'>Support us</button>
          <button className='btn btn-outline-info m-2'>Our Mission</button>
        </div>
        <div className="col-sm-12 col-lg-6 p-3">
          <img className='banner-img' src={'https://i.ibb.co/KbTn0hp/91-XEW-u-MQb-L-AC-SX466.jpg'} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;