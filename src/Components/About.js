import React from "react";
import styled from "styled-components";
import SectionNumber from "./SectionNumber";
import aboutPhoto from "../Assets/about_photo_1.png";
import aboutPhoto2 from "../Assets/about_photo_2.png";

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 5rem;

  @media (max-width: 1200px) {
        gap: 2rem;
    }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  h1 {
    margin-top: 8rem;
  }

  & .main_text h1,
  .main_text span,
  .main_text p,
  .main_text a {
    margin-left: 14rem;

    @media (max-width: 1400px) {
        margin-left:3rem;
        margin-right: 2rem;
    }

    @media (max-width: 900px) {
    margin-left: 0;
    }
  }

  
`;

const ColumnAbout = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 3rem;
  margin-top: 13.5rem;

  @media (max-width: 900px) {
    justify-content: center;
    margin-top:0;
  }

  & img {
    width: 100%;
    border-radius: 10% 0 0 10%;

    @media (max-width: 900px) {
      max-width: 45rem;
    }
  }

  & .border_text {
    transform: scale(-1, -1);

    @media (max-width: 1300px) {
        display: none;
    }
  }
`;

const Columns2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 13.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 7rem;
  }

  span {
    margin-top: 10rem;

    @media (max-width: 900px) {
      margin-top: 2rem;
    }
  }

   & .photo_column {

    margin: auto 0;

    @media (max-width: 900px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  img {
    border-radius: 0 10% 10% 0;
    @media (max-width: 1200px) {
      width: 100%;
    }

    @media (max-width: 900px) {
      max-width: 50rem;
    }
  }

  & .main_text h1,
  .main_text span,
  .main_text p,
  .main_text a {
    margin-left: 6rem;

    @media (max-width: 900px) {
      margin-left: 0;
    }
  }

  & .about2 {
    display: flex;

    ul li {
    list-style-type: "✓";
    list-style-position: outside;
    margin-left: 1.5rem;
    padding-left: 1rem;
  }

  ul li:not(:last-child) {
                margin-bottom: 1rem;
            }

    @media (max-width: 900px) {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }

    & .border_text {
      align-self: flex-end;
      transform: scale(-1, -1);

      @media (max-width: 1300px) {
        display: none;
      }

    }
  }
`;

const About = () => {
  return (
    <main id="about">
      <Columns>
        <div className="main_text header_text">
          <SectionNumber props={"I."} />
          <h1>About</h1>
          <p>
          Dedicated Email Developer and Front-End Developer with a profound passion for crafting immersive digital experiences. With a keen eye for design and a knack for cutting-edge development techniques, I specialize in bringing ideas to life and creating impactful user&nbsp;interfaces.
          </p>
        </div>
        <ColumnAbout>
          <div className="border_text">PERSONAL</div>
          <div >
            <img src={aboutPhoto} alt="Me posing" />
          </div>
        </ColumnAbout>
      </Columns>
      <Columns2>
        <div className="photo_column">
          <img src={aboutPhoto2} alt="Me on the bike" />
        </div>
        <div className="about2">
          <div className="main_text header_text">
            <span>Interest</span>
            <p>
            Fueling my love for motorcycles, I embark on thrilling journeys that push the boundaries of exploration. Join me as I share my passion for two wheels, inspiring others to embrace the freedom of the open&nbsp;road. Let's ride together and create unforgettable memories.
            </p>
            <p>
            <span style={{margin: '0'}}>Fueling the Motorcycle Community:</span>
            </p>
            <p style={{marginBottom: '0'}}>
            <ul>
              <li>Connect with fellow riders and enthusiasts, fostering a supportive community.</li>
              <li>Share stories, tips, and experiences, creating lasting memories and friendships.</li>
              <li>Together, we'll celebrate the joy of motorcycles and inspire others to embark on their own epic&nbsp;journeys.</li>
            </ul>
            </p>
          </div>
          <div className="border_text">INTEREST</div>
        </div>
      </Columns2>
    </main>
  );
};

export default About;
