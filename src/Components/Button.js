import React from "react";
import styled from "styled-components";

const Cta = styled.a`
  display: inline-block;
  padding: 1.5rem 5rem;
  background-color: #6a6054;
  color: white;
  border: 1px solid black;
  border-radius: 8px;
  font-size: 24px;
`;

const Button = ({ props }) => {
  return <Cta>{props}</Cta>;
};

export default Button;
