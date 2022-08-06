import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import SectionNumber from "./SectionNumber";
import iconEmail from "../Assets/icon_email.png";
import iconServices1 from "../Assets/services_1.png";
import iconServices2 from "../Assets/services_2.png";

const Project = styled.section`
  background-color: #f2f2f2;
  padding-bottom: 20rem;
  overflow: hidden;

  .header_text {
    text-align: center;
    margin-top: -9rem;
    margin-bottom: 6rem;
  }

  .tags {
    display: flex;
    justify-content: center;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 999;
    margin-bottom: 6rem;

    & a {
      border-radius: 1rem;
      padding: 2rem 4rem;
      background-color: white;
      font-size: 1.6rem;
      font-family: Arial, "Roboto", sans-serif;
      font-weight: bold;
      color: #545454;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    & .border_text {
      position: absolute;
      writing-mode: unset;
      z-index: -1;
      margin-left: 45%;
    }
  }

  .services {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 9rem;
    margin-top: 5rem;

    & .border_text {
      transform: scale(-1, -1);
    }

    & .services_box {
      background-color: #6a6054;
      padding: 7rem 0;
      color: white;
      border-radius: 20px 0px 0px 20px;
      display: flex;

      flex: 70% 0 0;

      & .services_text {
        margin-left: 8rem;
        flex: 30% 0 0;

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
        }
      }

      & .services_img {
        position: relative;
        min-width: 440px;
        width: 100%;
        height: 100%;
        & img {
          width: 100%;
          max-width: 550px;
          position: absolute;
          top: -185px;
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
    margin-bottom: 10rem;

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

      & .services_text {
        margin-left: 5rem;
        flex: 40% 0 0;

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
        }
      }

      & .services_img {
        position: relative;
        min-width: 440px;
        width: 100%;
        height: 100%;
        margin-left: 3rem;
        & img {
          width: 100%;
          max-width: 550px;
          position: absolute;
          top: -135px;
        }
      }
    }
  }
`;

const Projects = () => {
  return (
    <Project>
      <SectionNumber props={"II."} />
      <div className="header_text">
        <h1>Projects</h1>
      </div>
      <div className="tags">
        <a>HTML Email</a>
        <a>React JS</a>
        <a>Landing Page</a>
        <a>All</a>
        <div className="border_text">PROJECTS</div>
      </div>
      <Carousel />
      <div className="services">
        <div>
          <div className="border_text">SERVICES</div>
        </div>
        <div className="services_box">
          <div className="services_text">
            <img src={iconEmail} alt="Icon" />
            <h3>Email Development</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting&nbsp;industry.
            </p>
            <a>SEE PROJECTS</a>
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
              Lorem Ipsum is simply dummy text of the printing and
              typesetting&nbsp;industry.
            </p>
            <a>SEE PROJECTS</a>
          </div>
        </div>
      </div>
    </Project>
  );
};

export default Projects;
