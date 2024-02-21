import React from 'react'
import one from './1.png';
import two from './2.png';
import three from './3.png';

const Slider = () => {
  return (
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={one} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={two} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={three} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slider