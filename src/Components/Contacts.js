import React, {useRef , useState} from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser'



const Contact = styled.section`
  background-color: #2d313d;
  padding: 10rem 0rem 7rem 0rem;
  border: 5px solid #e5a150;

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

      @media (max-width: 600px) {
        font-size: 4.5rem;
      }

    }

    & h1 {
      @media (max-width: 600px) {
        font-size: 5.6rem;
      }
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

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        width: 90%;
      }

    & .tag {
      margin-bottom: 3rem;

      p {
        margin-bottom: 1.5rem;
      }

      a {
        color: #ffffff;
        text-decoration: none;
      }
    }

    & .email_contact form {
      padding: 3.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      @media (max-width: 800px) {
        padding: 3.5rem 2.5rem;
      }

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
      border: 0;
      color: #fff;
      font-size: 2.4rem;
      font-family: 'Roboto', Arial, Helvetica, sans-serif;
      cursor: pointer;
    }

    & .email_success {
      color: #2d313d;
      text-align: center;
      margin-top: 8rem;

      & img {
        width: 40px;
        display: block;
        margin: 0 auto;
        margin-bottom: 2.5rem;
      }

      &_icon {
      color: green;
    }
    }

    & .input-error {
      color: hsl(0, 100%, 74%);
      font-size: 1.6rem;
    }

    & .error-border {
      border: 1px solid hsl(0, 100%, 74%) !important;
    }
  }
`;

const Contacts = () => {

  const form = useRef()

  const [success, setSuccess] = useState(false)

  // Initialize state for form errors
  const [formErrors, setFormErrors] = useState({
      name: '',
      email: '',
      message: ''
  });

  const sendEmail = (e) => {

    e.preventDefault();

    
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Validate form data
    const errors = {};

    if(!form.current.user_name.value.trim()) {
      errors.name = 'Name is required';
    }

    if(!form.current.user_email.value.trim() && form.current.user_email.value !== pattern) {
      errors.email = 'Correct email is required';
    }

    if(!form.current.message.value.trim()) {
      errors.message = 'Message is required';
    }

    if(Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }


    setSuccess(true)

    emailjs.sendForm('rosiek_contact', 'contact_form', form.current, 'DJyWovMlnxj53-MlN').then((result) => {

      setSuccess(result.text)

      form.current.user_name.value = ''
      form.current.user_email.value = ''
      form.current.message.value = ''

    }, (error) => {
      console.log(error.text)
    })
  }


  return (
    <Contact id="contact">
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
            <a target="_blank" rel="noreferrer" href="tel:+48784446401">+48 784 446 401</a>
          </div>
          <div className="tag">
            <p>
              <strong>Email:</strong>
            </p>
            <a target="_blank" rel="noreferrer" href="mailto:rosiu978@gmail.com">rosiu978@gmail.com</a>
          </div>
          <div className="tag">
            <p>
              <strong>Github:</strong>
            </p>
            <a style={{textDecoration: 'underline'}} target="_blank" rel="noreferrer" href="https://github.com/rosiu98">github.com/rosiu98</a>
          </div>
        </div>
        <div className="email_column">
          <div className="email_contact">
            <form onChange={() => setFormErrors({})} ref={form} onSubmit={sendEmail}>
              {success ?
                <div className="email_success">
                  <img src="https://i.imgur.com/6Y3Q9MZ.png" alt="Success icon" />
                  Thank you, email have been sent succesfuly! <span className="email_success_icon">✔</span></div>
                    :
                <>
                  <input className={formErrors.name && 'error-border'} type="text" name="user_name" placeholder="First Name" />
                  <div className="input-error">{formErrors.name}</div>
                  <input className={formErrors.email && 'error-border'} type="email" name="user_email" placeholder="Email Address" />
                  <div className="input-error">{formErrors.email}</div>
                  <textarea className={formErrors.message && 'error-border'} name="message" rows={10} placeholder="Your Messeage" />
                  <div className="input-error">{formErrors.message}</div>
                  <button type="submit" className="email_header"> Email me 💌</button>
                </>
              }

            </form>
          </div>
        </div>
      </div>
    </Contact>
  );
};

export default Contacts;
