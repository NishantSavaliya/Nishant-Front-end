import React from "react";
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.avif';
import img3 from '../../assets/images/3.jpg';
const Slider=()=>{
    return(
        <>
<div className="container  p-1 mt-1">
  <div
    id="carouselExampleCaptions"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src='https://demo.zymphonies.com/free-theme/d8/restaurant-zymphonies-theme/index/themes/custom/restaurant_zymphonies_theme/images/slider/slide_03.jpg' className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
        
        </div>
      </div>
      <div className="carousel-item">
        <img src='https://www.qsrmagazine.com/wp-content/uploads/2024/01/Savvy.jpg' className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
        
        </div>
      </div>
      <div className="carousel-item">
        <img src='https://le-tandoor.restaurant.mu/content/restaurants/le-tandoor/gallery/le-tandoor-restaurant%20(05).jpg' className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
       
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

           
        </>
    )
}

export default Slider