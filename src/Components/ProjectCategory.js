import React from 'react'
import styled from 'styled-components'
import react_icon from '../Assets/logos_react_small.svg'

const Category = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center; */
    display: inline-block;
    padding: 0.5rem 1rem;
    background: ${props => props.react ? "#242938" : props.email ? "#FDE4DE" : "#E8FDDE" };
    color: ${props => props.react ? "#FFFFFF" : props.email ? "#EB775D" : "#3FBC3C" };
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 1.1rem;
    border-radius: 4px;

    img {
        width: 10px;
    }

`


const ProjectCategory = ({category}) => {
  return (
    <>
        {category === 'React' && 
          <Category react>
            <img src={react_icon} alt="react icon" />
            <span>&nbsp;&nbsp;React</span>
          </Category>
        }

        {category === 'Email' && 
          <Category email>
            <span>HTML Email</span>
          </Category>
        }

        {category === 'Landing Page' && 
          <Category>
            <span>Landing Page</span>
          </Category>
        }
    
    </>
  )
}

export default ProjectCategory