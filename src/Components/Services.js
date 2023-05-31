import React from "react";
import styled from "styled-components";
import iconEmail from "../Assets/icon_email.png";
import iconServices1 from "../Assets/services_1.png";
import iconServices2 from "../Assets/services_2.png";
import { Link } from "react-router-dom";

const Service = styled.section`


  .services {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 9rem;
    margin-top: 5rem;

    & .border_text {
      transform: scale(-1, -1);

      @media (max-width: 1050px) {
        display: none;
      }
    }

    & .services_box {
      background-color: #6a6054;
      padding: 7rem 0;
      color: white;
      border-radius: 20px 0px 0px 20px;
      display: flex;

      flex: 70% 0 0;

      @media (max-width: 850px) {
        flex: 95% 0 0;
      }

      & .services_text {
        margin-left: 8rem;
        flex: 30% 0 0;

        @media (max-width: 600px) {
        flex: 65% 0 0;
        margin-left: 4rem;
      }

        & img {
          width: 100%;
          max-width: 40px;
        }

        & h3 {
          font-size: 3.2rem;
          font-weight: bold;
          font-family: "Roboto", Arial, sans-serif;
          margin: 3rem 0;
        }

        & p {
          font-family: Arial, "Roboto", sans-serif;
          font-size: 1.6rem;
          line-height: 3rem;
          max-width: 320px;
          margin-bottom: 8rem;
        }

        & a {
          font-size: 2rem;
          line-height: 2.6rem;
          font-family: "Roboto", Arial, sans-serif;
          text-decoration: underline;
          color: #fff;
          text-underline-position: under;
        }
      }

      & .services_img {
        position: relative;
        min-width: 440px;
        width: 100%;
        height: 100%;
        @media (max-width: 800px) {
            min-width: unset;
          }

        & img {
          width: 100%;
          max-width: 550px;
          position: absolute;
          top: -185px;

          @media (max-width: 1200px) {
            top: -80px;
          }
        }
      }
    }
  }

  .services2 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 9rem;
    margin-top: 5rem;
    margin-bottom: 8rem;

    & .border_text {
      transform: scale(-1, -1);

    }

    & .services_box {
      background-color: #2d313d;
      padding: 7rem 0;
      color: white;
      border-radius: 0px 20px 20px 0px;
      display: flex;

      flex: 70% 0 0;

      @media (max-width: 1050px) {
            flex: 95% 0 0;
          }

      & .services_text {
        margin-left: 5rem;
        flex: 40% 0 0;
        padding-right:2rem;

        @media (max-width: 1200px) {
            flex: 50% 0 0;
          }

        @media (max-width: 600px) {
            flex: 65% 0 0;
            margin-left: 3rem;
          }  

          

        & img {
          width: 100%;
          max-width: 40px;
        }

        & h3 {
          font-size: 3.2rem;
          font-weight: bold;
          font-family: "Roboto", Arial, sans-serif;
          margin: 3rem 0;
        }

        & p {
          font-family: Arial, "Roboto", sans-serif;
          font-size: 1.6rem;
          line-height: 3rem;
          max-width: 320px;
          margin-bottom: 8rem;
        }

        & a {
          font-size: 2rem;
          font-family: "Roboto", Arial, sans-serif;
          text-decoration: underline;
          color: #fff;
          text-underline-position: under;
        }
      }

      & .services_img {
        position: relative;
        min-width: 440px;
        width: 100%;
        height: 100%;
        margin-left: 3rem;

        @media (max-width: 1300px) {
            min-width: unset;
          }

        & img {
          width: 100%;
          max-width: 550px;
          position: absolute;
          top: -135px;

          @media (max-width: 1200px) {
            top: -85px;
          }
        }
      }
    }
  }
`;

const Services = () => {
  return (
    <Service id="services">
      <div className="services">
        <div>
          <div className="border_text">SERVICES</div>
        </div>
        <div className="services_box">
          <div className="services_text">
            <img src={iconEmail} alt="Icon" />
            <h3>Email Development</h3>
            <p>
            Experience the Artistry of Email Development: Join me for a captivating preview.
            </p>
            <Link to='/projects?category=Email'>EMAIL PORTFOLIO</Link>
          </div>
          <div className="services_img">
            <img src={iconServices1} alt="Services icon" />
          </div>
        </div>
      </div>
      <div className="services2">
        <div className="services_box">
          <div className="services_img">
            <img src={iconServices2} alt="Services icon" />
          </div>
          <div className="services_text">
            <img src={iconEmail} alt="Icon" />
            <h3>Web Development</h3>
            <p>
              Step into Digital Excellence: Preview my awe-inspiring website development portfolio today.
            </p>
            <Link to='/projects?category=Websites'>WEB PORTFOLIO</Link>
          </div>
        </div>
      </div>
    </Service>
  );
};

export default Services;
