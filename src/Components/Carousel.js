import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

import code_icon from '../Assets/code_icon.svg'
import previewPage_icon from '../Assets/PreviewPage_icon.svg'
import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Pagination, Autoplay]);

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

    @media (max-width: 800px) {
        flex: 50% 0 0;
      }
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


    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }

    & .testimonial_column:first-child {
      grid-column: span 2;
      grid-row: span 2;
      height: 650px;
      position: relative;
    }

    & .testimonial_column {
      position: relative;
      width: 100%;
      display: block;
      overflow: hidden;
      min-height: 300px;
      border: 1px solid #2d313d;
      background-size: cover;
      background-position: top;
      transition: all 350ms linear 0s;
      background-color: #fff;
      display: block;

      &:hover {
        /* filter: brightness(0.6); */
        /* background-blend-mode: luminosity;
        background-color: black; */
        box-shadow: 12px 12px 2px 1px #2d313d;
        transition: box-shadow 350ms linear 0s;
        transition: background-position 2.5s linear 0s;
        background-position: bottom;
      }

      
      &:hover .testimonial_column_info{
        bottom: 0;
        transition: all 550ms ease-out 0s;
      }
    }

    & .testimonial_column img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      overflow: hidden;
    }

    & .testimonial_column_category {
      position: absolute;
      top: 0;
      left: 0;
      padding: 1rem;
      font-size: 1.2rem;
      /* background: linear-gradient(180deg,#CF9627 0%,#C67F2A 100%); */
      background-color: #2d313d;
      font-weight: bold;
      border-right: 2px solid #e5a150;
      border-bottom: 2px solid #e5a150;
      /* font-family: "Italiana",serif; */
      color: #fff;
      border-radius: 0px 0px 5px 0px;
      z-index: 9999;
    }

    & .testimonial_column_info {
      background-color: #2d313d;
      max-width: 25rem;
      padding: 4% 5%;
      font-size: 1.2rem;
      font-weight: 500;
      font-family: "Roboto",sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: baseline;
      position: absolute;
      z-index: 999;
      bottom: -26rem;
      right: 0;
      gap: 2rem;
      border-top: 2px solid #e5a150;
      border-left: 2px solid #e5a150;
      border-right: 2px solid #e5a150;
      transition: all 350ms ease;
    }

    & .testimonial_column_info_icon {

      color: #fff;
      text-decoration: underline;
      text-underline-position: under;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: baseline;
      gap: 1rem;
      cursor: pointer;


      img {
        width: 1.5rem;
      }

      a {
        color: #fff;
      }
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

  .skeleton_fix {
    grid-column: span 2;
    grid-row: span 2;
  }

  .react-background {
    background-size: contain !important;
    background-position: center !important;
    background-repeat:  no-repeat;
  }

  .react-loading-skeleton {
    background-color: #d7d7d7 !important;
  }
`;


const Carousel = ({chunked, loading}) => {
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
        autoplay={{
          delay: 6000,
          // disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        className="Testimonial_container"
      >
        {!loading && chunked.length > 0 ?
        <>
            {chunked?.map((data ,i) => (
              <SwiperSlide key={i}>
                <div className="single_testimonial">
                  {data?.map((dane, i) => (
                    <div key={i} className={`testimonial_column + ${dane.type === 'React' ? ' react-background' : ''}` } style={{backgroundImage: `url(${dane.image})`}}>
                      <div className="testimonial_column_category">{dane.type}</div>
                      <div className="testimonial_column_info">
                        {dane.type !== 'Email' ?
                          <>
                          <a href={dane.previewPage} target="_blank" rel="noreferrer" className="testimonial_column_info_icon">
                            <img src={previewPage_icon} alt="Page icon" />
                            <span>Preview a page</span>
                          </a>
                          <a href={dane.githubLink} target="_blank" rel="noreferrer" className="testimonial_column_info_icon">
                            <img src={code_icon} alt="Code icon" />
                            <span>Github</span>
                          </a>
                          </>
                          :
                          <Link to={`/projects/emails/${dane.id}`} className="testimonial_column_info_icon">
                            <img src={code_icon} alt="Emails page" />
                            <span>Preview email</span>
                          </Link>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            )
            )}
        </>
      :
      <>
      <SwiperSlide >
        <div className="single_testimonial">
            <Skeleton className="testimonial_column" containerClassName="skeleton_fix" />
            <Skeleton containerClassName="testimonial_column" style={{height: '100%', display: 'block'}} >
              <div className="testimonial_column_category">Loading...</div>
            </Skeleton>
            <Skeleton containerClassName="testimonial_column"  style={{height: '100%', display: 'block'}} />
            <Skeleton containerClassName="testimonial_column"  style={{height: '100%', display: 'block'}}  />
            <Skeleton containerClassName="testimonial_column"  style={{height: '100%', display: 'block'}} />
        </div>
      </SwiperSlide>
  
      </> 
      
      }
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
