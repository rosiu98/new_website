import React from "react";
import styled from "styled-components";
import Button from "./Button";
import SectionNumber from "./SectionNumber";
import aboutPhoto from "../Assets/about_photo_1.png";
import aboutPhoto2 from "../Assets/about_photo_2.png";

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 5rem;

  h1 {
    margin-top: 8rem;
  }

  & .main_text h1,
  .main_text span,
  .main_text p,
  .main_text a {
    margin-left: 16rem;
  }
`;

const ColumnAbout = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 3rem;
  margin-top: 13.5rem;

  & img {
    width: 100%;
  }

  & .border_text {
    transform: scale(-1, -1);
  }
`;

const Columns2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 13.5rem;

  span {
    margin-top: 16rem;
  }

  & .main_text h1,
  .main_text span,
  .main_text p,
  .main_text a {
    margin-left: 6rem;
  }

  & .about2 {
    display: flex;

    & .border_text {
      align-self: flex-end;
      transform: scale(-1, -1);
    }
  }
`;

const About = () => {
  return (
    <main>
      <Columns>
        <div className="main_text header_text">
          <SectionNumber props={"I."} />
          <h1>About</h1>
          <span>Email Developer | Front-end Developer</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen&nbsp;book.
          </p>
        </div>
        <ColumnAbout>
          <div className="border_text">PERSONAL</div>
          <div>
            <img src={aboutPhoto} alt="Me posing" />
          </div>
        </ColumnAbout>
      </Columns>
      <Columns2>
        <div>
          <img src={aboutPhoto2} alt="Me on the bike" />
        </div>
        <div className="about2">
          <div className="main_text header_text">
            <span>Email Developer | Front-end Developer</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen&nbsp;book.
            </p>
            <Button props={"Click Me"} />
          </div>
          <div className="border_text">INTEREST</div>
        </div>
      </Columns2>
    </main>
  );
};

export default About;
