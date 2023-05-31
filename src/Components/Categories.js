import React from 'react'
import styled from 'styled-components'
import logo_PR from '../Assets/Logo_PR.svg'
import all_icon from '../Assets/all_icon.svg'
import emails_icon from '../Assets/email_icon.svg'
import websites_icon from '../Assets/website_icon.svg'
import react_icon from '../Assets/react_category_icon.svg'
import landingPage_icon from '../Assets/Landing_page_icon.svg'
import { Link } from 'react-router-dom'

const CategoriesStyles = styled.div`
    background-color: #ffffff;
    border-radius: 2rem;
    padding-bottom: 35%;
    position: sticky;
    top: 5rem;

    @media (max-width: 800px) {
        position: unset;
      }


    @media (max-width: 1220px) {
        padding-bottom: 1rem;
        top: 0;
      }

    .logo_container {
        width: 100%;
        text-align: center;
        padding-top: 4rem;
        padding-bottom: 5rem;

        img {
            max-width: 9rem;
            margin: 0 auto;
        }

        @media (max-width: 1220px) {
        
            padding-top: 2rem;
            padding-bottom: 0;

            img {
                max-width: 4rem;
            }
      }
    }

`

const CategoriesList = styled.div`
    display: flex;
    flex-direction: column;

    .category_container {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        padding-left: 2rem;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        width: 100%;
        font-size: 1.5rem;
        font-family: 'Roboto', Helvetica, sans-serif;
        font-weight: 500;
        cursor: pointer;
        color: #404040;

        img {
            max-width: 2.4rem;
        }

        &:hover {
            background-color: #f7f7f7;
        }

        &.active {
            background: linear-gradient(90.93deg, rgba(207, 150, 39, 0) 0.8%, rgba(198, 127, 42, 0.25) 84.69%);
            border-right: 4px solid #CB8B28;
            /* color: #000; */
            color: #e2a731;
        }

        &.sub_category {
            padding-left: 6.5rem;
            font-size: 1.3rem;
        }

    }
`

const Categories = ({searchParams, setSearchParams}) => {

    const categoryHandler = (category) => {
         const search = {
            category
          }
    
        setSearchParams(search, { replace: true });
      }

    // console.log(searchParams.get('category'))

  return (
    <CategoriesStyles>
        <div className='logo_container'>
            <Link to={'/'}>
            <img src={logo_PR} alt='Logo DEV.PR' />
            </Link>
        </div>

        <CategoriesList>
            <div onClick={(e) => categoryHandler('All')} className={`category_container ${(searchParams.get('category') === 'All' || searchParams.get('category') === null) && 'active'}  `}>
                <img src={all_icon} alt='icon all' />
                All
            </div>
            <div onClick={() => categoryHandler('Email')}  className={`category_container ${searchParams.get('category') === 'Email' && 'active'}  `}>
                <img src={emails_icon} alt="icon emails" />
                Emails
            </div>
            <div onClick={() => categoryHandler('Websites')}  className={`category_container ${searchParams.get('category') === 'Websites' && 'active'}  `}>
                <img src={websites_icon} alt="icon websites" />
                Websites
            </div>
                {(searchParams.get('category') === 'Websites' || searchParams.get('category') === 'React' || searchParams.get('category') === 'Landing Page') && (
                    <>
                                    <div onClick={() => categoryHandler('React')}  className={`category_container ${searchParams.get('category') === 'React' && 'active'} sub_category `}>
                                    <img src={react_icon} alt="icon react" />
                                    React
                                </div>
                                <div onClick={() => categoryHandler('Landing Page')}  className={`category_container ${searchParams.get('category') === 'Landing Page' && 'active'} sub_category `}>
                                    <img src={landingPage_icon} alt="icon landing page" />
                                    Landing Page
                                </div>
                    </>
                )}
            
        </CategoriesList>
    </CategoriesStyles>
  )
}

export default Categories