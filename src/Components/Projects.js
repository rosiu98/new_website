import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import SectionNumber from "./SectionNumber";
import Services from "./Services";
import manualContent from "./manualContent";

const Project = styled.section`
  background-color: #ececec;
  padding-bottom: 20rem;
  overflow: hidden;

  @media (max-width: 1500px) {
    padding-bottom: 8rem;
  }

  @media (max-width: 1250px) {
    padding-bottom: 2rem;
  }

  .header_text {
    text-align: center;
    margin-top: -9rem;
    margin-bottom: 6rem;

    @media (max-width: 800px) {
        margin-top: 2rem;
      }
  }

  .tags {
    display: flex;
    justify-content: center;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 999;
    margin-bottom: 6rem;
    flex-wrap: wrap;

    @media (max-width: 800px) {
        gap: 2.5rem;
      }

    .active {
        background: linear-gradient(180deg,#CF9627 0%,#C67F2A 100%) !important;
    }  

    & span {
      border-radius: 1rem;
      padding: 2rem 4rem;
      background-color: #2d313d;
      
      font-size: 1.6rem;
      font-family: Arial, "Roboto", sans-serif;
      font-weight: bold;
      cursor: pointer;
      color: white;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


      @media (max-width: 800px) {
        font-size: 1.4rem;
        padding: 1.5rem 3rem;
      }

    }

    & .border_text {
      position: absolute;
      writing-mode: unset;
      z-index: -1;
      margin-left: 45%;

      @media (max-width: 800px) {
        display: none;
      }
    }
  }

`;

const Projects = () => {

  const [chunked, setChunked] = useState([])
  const [selectedType, setSelectedType] = useState('All')
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await fetch('https://email-app.website/api/v1/profile/20');
      const result = await response.json();
      let emailsResults = result.rows.filter(row => row.contentblock === null || undefined)

      manualContent.forEach(content => emailsResults = [content, ...emailsResults])

      // emailsResults = [manualContent, ...emailsResults]

      if (selectedType && selectedType !== 'All') {
        emailsResults = emailsResults.filter(row => row.type === selectedType)
      }

      console.log(emailsResults)

      const chunkData = () => {
        const chinkSize = 5;
        const newArray = [];
    
        for (let i = 0 ; i < emailsResults.length; i += chinkSize) {
          const chunk = emailsResults.slice(i, i + chinkSize);
          newArray.push(chunk)
        }
    
        setChunked(newArray)
      }

      chunkData()
      
    }

    fetchData()
    setTimeout(() => setLoading(false), 1000) 
  
  },[selectedType])


  // console.log(chunked)

  const ChangeType = (type) => {

    setSelectedType(type)

  }

  // console.log(loading)



  return (
    <Project id="projects">
      <SectionNumber props={"II."} />
      <div className="header_text">
        <h1>Projects</h1>
      </div>
      <div className="tags">
        <span className={selectedType === 'All' || '' ? 'active' : '' } onClick={() => ChangeType('All')}>All</span>
        <span className={selectedType === 'Email' && 'active'} onClick={() =>  ChangeType('Email')}>HTML&nbsp;Email</span>
        <span className={selectedType === 'React' && 'active'} onClick={() => ChangeType('React')}>React&nbsp;JS</span>
        <span className={selectedType === 'Landing Page' && 'active'} onClick={() => ChangeType('Landing Page')}>Landing&nbsp;Page</span>
        <div className="border_text">PROJECTS</div>
      </div>
      <Carousel chunked={chunked} loading={loading} />
      <Services/>
    </Project>
  );
};

export default Projects;
