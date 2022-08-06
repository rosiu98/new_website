import React from "react";
import styled from "styled-components";
import header_main from "../Assets/header_main.png";
import Button from "./Button";

const Columns = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  clip-path: polygon(10% 0%, 100% 0, 100% 100%, 0 100%, 0 13%);

  & .main_image {
    width: 100%;
    height: 100%;
    filter: brightness(0.7);
  }
`;

const ColumnsText = styled.div`
  background-color: #f2f2f2;

  & .main {
    margin-left: 8rem;
    position: relative;
    height: 100%;
  }

  nav {
    display: flex;
    gap: 4rem;
    font-size: 24px;
    justify-content: flex-end;
    margin-right: 7rem;
    margin-top: 5rem;

    & a {
      color: black;
    }
  }

  & .main_text {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(0%, -50%);

    p {
      margin-right: 7rem;
    }
  }
`;

const Header = () => {
  return (
    <Columns>
      <div>
        <img className="main_image" src={header_main} alt="Moje zdjecie" />
      </div>
      <ColumnsText>
        <div className="main">
          <nav>
            <a>About</a>
            <a>Projects</a>
            <a>Contact</a>
          </nav>
          <div className="main_text header_text">
            <h1>Rosiek</h1>
            <span>Email Developer | Front-end Developer</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen&nbsp;book.
            </p>
            <Button props={"Click Me"} />
          </div>
        </div>
      </ColumnsText>
    </Columns>
  );
};

export default Header;
