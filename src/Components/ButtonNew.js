import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cta = styled(Link)`
  display: inline-block;
  padding: 1.5rem 5rem;
  background: linear-gradient(180deg, #CF9627 0%, #C67F2A 100%);
  color: white;
  border-radius: 8px;
  font-size: 24px;
  box-shadow: -5px 6px 5px rgba(0, 0, 0, 0.25);
`;

const ButtonNew = ({ props , link , bg }) => {
  return <Cta style={{background: bg}} to={link}>{props}</Cta>;
};

export default ButtonNew;
