import React from "react";
import styled from "styled-components";

const Contact = styled.section`
  background-color: #2d313d;
  padding: 10rem 0rem 7rem 0rem;

  .header_text {
    text-align: center;
    color: #ffffff;
    position: relative;
    margin: 8rem 0rem 10rem 0rem;

    & .border_text {
      writing-mode: unset;
      -webkit-text-stroke: 0.5px #ffffff;
      position: absolute;
      top: 0%;
      left: 50%;
      transform: translate(-15%, -65%);
    }
  }

  .columns {
    display: grid;
    width: 80%;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    color: #ffffff;
    font-size: 2.4rem;
    font-family: "Roboto", Arial, Helvetica, sans-serif;

    & .tag {
      margin-bottom: 3rem;
    }

    & .email_contact form {
      padding: 3.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      & input,
      textarea {
        padding: 2rem;
        border-radius: 5px;
        border: 1px inset #00000042;
        outline: none;
        overflow: visible;
        width: 100%;
        font-family: "Roboto";
      }
    }

    & .email_contact {
      background-color: #f2f2f2;
      border-radius: 15px;
      min-height: 500px;
    }

    & .email_header {
      padding: 1.5rem;
      background-color: #6a6054;
      border-radius: 10px;
      text-align: center;
      margin-top: 1rem;
    }
  }
`;

const Contacts = () => {
  return (
    <Contact>
      <div className="header_text">
        <h1>Let’s have a talk</h1>
        <div className="border_text">CONTACT</div>
      </div>
      <div className="columns">
        <div className="text_column">
          <div className="tag">
            <p>
              <strong>Phone:</strong>
            </p>
            <p>+48 784 446 401</p>
          </div>
          <div className="tag">
            <p>
              <strong>Email:</strong>
            </p>
            <p>rosiu978@gmail.com</p>
          </div>
          <div className="tag">
            <p>
              <strong>Media:</strong>
            </p>
            <p>+48 784 446 401</p>
          </div>
        </div>
        <div className="email_column">
          <div className="email_contact">
            <form action="">
              <input type="text" placeholder="First Name" />
              <div className="input-error"></div>
              <input type="text" placeholder="Email Address" />
              <div className="input-error"></div>
              <textarea rows={10} placeholder="Your Messeage" />
              <div className="input-error"></div>
              <div className="email_header">Email me 💌</div>
            </form>
          </div>
        </div>
      </div>
    </Contact>
  );
};

export default Contacts;
