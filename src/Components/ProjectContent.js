import React from 'react'
import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'
import ProjectCategory from './ProjectCategory'
import code_icon from '../Assets/code_icon_black.svg'
import previewPage_icon from '../Assets/preview_page_black.svg'
import { Link } from 'react-router-dom'
import SkeletonContent from './SkeletonContent'

const ProjectContentStyles = styled.section`
    width: 100%;
    height: 100%;

    .border_square {
        margin-bottom: 4rem;
    }
`

const ProjectNavigation = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3rem;
    margin-bottom: 5rem;

    .project_text {
        font-family: 'Ropa Sans', sans-serif;
        font-size: 4.1rem;
        color: #000;
    }

    .white {
        color: #fff;
    }

    .project_category {
        color: #CF9627;
    }

`

const Cta = styled(HashLink)`
  display: inline-block;
  padding: 1.5rem 5rem;
  background: linear-gradient(180deg, #CF9627 0%, #C67F2A 100%);
  color: white;
  border-radius: 8px;
  font-size: 2.4rem;
  box-shadow: -5px 6px 5px rgba(0, 0, 0, 0.25);


  @media (max-width: 600px) {
            display: none;
      }
`;


const ProjectContents = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;

    @media (max-width: 1220px) {
            justify-content: center;
    }

    .project_container {
        max-width: 37rem;
        width: 100%;
        background-color: #fff;
        border-radius: 1.5rem;
        padding: 2.5rem;

        @media (max-width: 1220px) {
            flex: 1 0 45%;
      }

      @media (max-width: 550px) {
           flex: auto;
      }


    }

    .project_image {
        background-size: cover;
        outline: 1px solid #D9D9D9;
    height: 20.5rem;
    background-repeat: no-repeat;
    background-position: top center;
    border-radius: 1.5rem;
        overflow: hidden;
    }

    .project_title {
        font-size: 2.6rem;
        font-family: 'Roboto', Helvetica, sans-serif;
        color: #000;
        margin-top: 2.5rem;
        margin-bottom: 1.5rem;
        font-weight: 500;
    }

    .project_copy {
        font-family: 'Roboto', Helvetica, sans-serif;
        font-size: 15px;
        color: #8E8E8E;
        margin-bottom: 1.5rem;
    }

    .project_column_info {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2.5rem;
        margin-top: 2.5rem;
    }

    .project_column_info_icon {

        color: #000;
        text-decoration: underline;
        text-underline-position: under;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: baseline;
        font-size: 1.4rem;
        font-family: 'Inter', 'Roboto', Helvetica, sans-serif;
        gap: 1rem;
        cursor: pointer;
        font-weight: 500;


        img {
        width: 1.5rem;
        }

        a {
        color: #fff;
        }
    }

`

const dataFormatter = (dateStr) => {
    const date = new Date(dateStr);

    // Formatting options
    const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
    };

    // Transforming the date
    const transformedDate = date.toLocaleDateString('en', options);

    return transformedDate
}




const ProjectContent = ({searchParams , data, loading}) => {

  return (
    <ProjectContentStyles>
        <ProjectNavigation>
            <div className='project_text'>
                PROJECTS <span className='white'> / </span> <span className='project_category'> {searchParams.get('category') || 'All'} </span>
            </div>
            <div>
                <Cta to='/#contact'>Contact me</Cta>
                </div>
        </ProjectNavigation>
        <div className="border_square"></div>

        <ProjectContents>
            {!loading || data.length > 0 ? data.map(dane => (
            <div key={dane.id} className='project_container'>
                <div className='project_image' style={{backgroundImage: `url(${dane.image})`}}>
                </div>
                <div title={dane.name} className='project_title'>
                    {dane.name.length > 18 ? dane.name.substring(0, 15) + '...' : dane.name}
                </div>
                <div className='project_copy' >
                    {dane.type === 'Email' ? `A Game-Changing Email Template Crafted in the Depths on ${dataFormatter(dane.created_at)}!` : dane.description}
                </div>
                <ProjectCategory category={dane.type} />

                {dane.type === 'Email' ? (


                <div className='project_column_info'>
                    <Link to={`/projects/emails/${dane.id}`} className="project_column_info_icon">
                        <img src={previewPage_icon} alt="Page icon" />
                        <span>Preview email</span>
                    </Link>
                </div>

                ) : (

                <div className='project_column_info'>
                    <a href={dane.previewPage} target="_blank" rel="noreferrer" className="project_column_info_icon">
                        <img src={previewPage_icon} alt="Page icon" />
                        <span>Preview a page</span>
                    </a>
                    <a href={dane.githubLink} target="_blank" rel="noreferrer" className="project_column_info_icon">
                        <img src={code_icon} alt="Code icon" />
                        <span>Github</span>
                    </a>
                </div>
                )}


            </div>
            )) : 
               <SkeletonContent cards={6} />
            }

        </ProjectContents>

    </ProjectContentStyles>
  )
}

export default ProjectContent