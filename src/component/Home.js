import React from 'react';

function Home() {
  return (
    <section className="home" id="home">
      <div className="swiper-container home-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="box" style={{ background: 'url(images/slider1.webp)', height: '85rem' }}>
              <div className="content">
                <span>upto 75% off</span>
                <h3>plant big sale special offer</h3>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="box" style={{ background: 'url(images/slider2.jpeg)', height: '85rem' }}>
              <div className="content">
                <span>upto 75% off</span>
                <h3>plant big sale special offer</h3>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="box" style={{ background: 'url(images/slide.webp)', height: '85rem' }}>
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

export default Home;
