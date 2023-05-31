import React from "react";
import styled from "styled-components";

const Section = styled.div`
  font-size: 12.8rem;
  padding: 6rem 8rem;
  color: #ffffff;
  background: linear-gradient(180deg, #CF9627 0%, #C67F2A 100%);
  font-family: "Italiana", serif;
  text-shadow: 0px 4px 5px rgb(0 0 0 / 40%);
  display: inline-block;
  border-radius: 0 0 5rem 0;
  margin-top: -1px;

  @media (max-width: 1000px) {
      padding: 4rem 6rem;
      font-size: 6rem;
    }
`;

const SectionNumber = ({ props }) => {
  return <Section>{props}</Section>;
};

export default SectionNumber;
