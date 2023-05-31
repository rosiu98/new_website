import React from "react";
import styled from "styled-components";
import header_image from "../Assets/header_image.png"
import logo from "../Assets/Logo_PR.svg"
import ButtonNew from "./ButtonNew";


const MainHeader= styled.header`
  position: relative;
  padding-bottom: 12rem;

  & .column_header_text {
    display: flex;
    justify-content: end;
    flex-direction:column;
    align-items: end;
    padding-top: 35%;
    position: relative;
    z-index: 999;

    @media (max-width: 900px) {
    padding-top: 5rem;
    }

  }

  & .logo_div {
    text-align:right;
  }
  
  & .main_logo {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 7rem;
    max-width:100%;
    max-width: 13rem;

    @media (max-width: 1400px) {
      max-width: 10rem;
    }

    @media (max-width: 900px) {
      position: relative;
      margin-top:5rem;
      margin-bottom:5rem;
    }
  }


  & .main_image {
    max-width: 100%;
    position: absolute;

    @media (max-width: 1470px) {
      max-width: 85%;
    }

    @media (max-width: 900px) {
      width: 100%;
      max-width:100%;
      position: unset;
    }
  }


  & .main_text {
    max-width: 45%;
    margin-bottom: 10rem;

    @media (max-width: 900px) {
      max-width: 100%
    }
  }

`

const Headerv2 = () => {
  return (
    <MainHeader id="home">
        <div className="logo_div">
          <img className="main_logo" src={logo} alt="Logo DEV R.P" />
        </div>

        <img className="main_image" src={header_image} alt="Moje zdjecie" />
        
        <div className="column_header_text">
          <div className="main_text header_text">
            <h1>Rosiek</h1>
            <span>Email Developer | Front-end Developer</span>
            <p>
            Hello there! I'm Paul Rosiek, an accomplished Email Developer and Front-End Developer who is passionate about creating visually stunning websites that leave a lasting impact. With my expertise in both email marketing and front-end development, I&nbsp;am here to transform your digital presence into a captivating&nbsp;journey.
            </p>
            <ButtonNew link="/projects" props={"Projects"} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <ButtonNew link="/cv" props={"CV"} bg={'#6a6054'} />
          </div>
        </div>
        <div className="border_square">

</div>
    </MainHeader>
    
  );
};

export default Headerv2;
