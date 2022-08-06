import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import SwiperCore, { Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination]);

const Testimonial = styled.div`
  .testimonial_border {
    border-bottom: 1px solid #000;
    width: 90%;
    margin: 0 auto;
  }

  .testimonial_border_bottom {
    border-bottom: 1px solid #000;
    width: 100%;
    flex: 85% 0 0;
  }

  .Testimonial_container {
    width: 95%;
    margin: 3.5rem auto;
    margin-bottom: 2rem;
    position: relative;
  }

  .single_testimonial {
    padding: 10px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3rem;
    position: relative;

    & .testimonial_column:first-child {
      grid-column: span 2;
      grid-row: span 2;
      height: 500px;
      position: relative;
    }

    & .testimonial_column {
      background-color: #c4c4c4;
    }
  }

  .testimonials_navigation {
    display: flex;
    width: 90%;
    margin: 0 auto;
    justify-content: flex-start;
    align-items: center;
    gap: 2.5rem;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .button {
    width: 50px;
    height: 50px;
    background-color: #c4c4c4;
    z-index: 999;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    cursor: pointer;
  }
`;

const Carousel = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <Testimonial>
      <div className="testimonial_border"></div>
      <Swiper
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        slidesPerGroup={1}
        className="Testimonial_container"
      >
        <SwiperSlide>
          <div className="single_testimonial">
            <div className="testimonial_column">1</div>
            <div className="testimonial_column">2</div>
            <div className="testimonial_column">3</div>
            <div className="testimonial_column">4</div>
            <div className="testimonial_column">5</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single_testimonial">
            <div className="testimonial_column">1</div>
            <div className="testimonial_column">2</div>
            <div className="testimonial_column">3</div>
            <div className="testimonial_column">4</div>
            <div className="testimonial_column">5</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single_testimonial">
            <div className="testimonial_column">1</div>
            <div className="testimonial_column">2</div>
            <div className="testimonial_column">3</div>
            <div className="testimonial_column">4</div>
            <div className="testimonial_column">5</div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="testimonials_navigation">
        <div className="testimonial_border_bottom"></div>
        <div className="buttons">
          <div className="button" ref={navigationPrevRef}>
            &#60;
          </div>
          <div className="button" ref={navigationNextRef}>
            &#62;
          </div>
        </div>
      </div>
    </Testimonial>
  );
};

export default Carousel;
