import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'; // Import Swiper CSS
function HomeSlider() {
  useEffect(() => {
    const swiper = new Swiper('.home-slider', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      autoHeight: true,
    });
  }, []); // Empty dependency array to run the effect once

  return (
    <section className="home" id="home">
      <div className="swiper-container home-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="box" style={{ backgroundImage: 'url(images/slider1.webp)', height: '85rem' }}>
              <div className="content">
                <span>upto 75% off</span>
                <h3>plant big sale special offer</h3>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="box" style={{ backgroundImage: 'url(images/slider2.jpeg)', height: '85rem' }}>
              <div className="content">
                <span>upto 75% off</span>
                <h3>plant big sale special offer</h3>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="box" style={{ backgroundImage: 'url(images/slide.webp)', height: '85rem' }}>
              <div className="content">
                <span>upto 75% off</span>
                <h3>plant big sale special offer</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default HomeSlider;
