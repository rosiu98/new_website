import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components'
import cvImage from '../Assets/CvImage.png'
import profileImage from '../Assets/cvprofile_image.svg'
import contactIcon from '../Assets/cv_contact_icon.svg'
import skillsIcon from '../Assets/cv_skills_icon.svg'
import workExperienceIcon from '../Assets/cv_workExperience_icon.svg'
import projectIcon from '../Assets/cv_projects_icon.svg'
import educationIcon from '../Assets/cv_education_icon.svg'
import cvPdf from '../Assets/Cv_PawelRosiek.pdf'

const Main = styled.main`
    display: grid;
    align-items: baseline;
    justify-content: center;
    background-color: #F1F1F1;
    padding: 5rem 0;
    grid-template-columns: 1fr;
    min-height: 100vh;
    height: 100%;

    .border_square {
        margin-bottom: 1.5rem;
    }

    .download_cv {
        max-width: 60rem;
        width: 100%;
        margin: 0 auto;
        text-align: right;
        padding: 2rem 0;
        font-size: 1.6rem;
        color: #545454;

        a {
            color: #545454;
            text-decoration: underline;
            font-weight: bold;
        }
    }
`

const ProjectNavigation = styled.nav`
    width: 100%;
    display: flex;
    align-items: baseline;
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

    .profile-image-arrow {
        border: none;
        border-radius: 0;
        display: block;
        height: auto;
        max-width: 45px;
        object-fit: fill;
        outline: none!important;
        width: 45px;
        margin-bottom: 2rem;
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

  @media (max-width: 850px) {
        display: none;
      }
`;


const CvContainer = styled.section`
    width: 100%;
    max-width: 60rem;
    padding: 2rem 0;
    height: 100%;
    margin: 0 auto;
    background-color: #ffffff;
    display: grid;
    grid-template-columns: 22rem 38rem;
    font-family: 'Fira Sans', sans-serif;
    zoom: 1.5;

    
    @media (max-width: 950px) {
           zoom: 1;
      }

      @media (max-width: 520px) {
           zoom: 0.5;
      }


`

const PersonalInformation = styled.div`

    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    


      .cvImage {

        margin-top: 1.5rem;

            img {
                width: 100%;
                max-width: 11.3rem;
                display: block;
            }
        }


        .main_text {
            margin-top: 1rem;
            text-align: center;


            .firstname {
                font-family: 'Fira Sans', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 1.2rem;
                line-height: 1.5rem;
            }

            .surname {
                font-family: 'Cambo';
                font-style: normal;
                font-weight: 400;
                font-size: 3.5rem;
                line-height: 3.9rem;
            }

            .title {
                font-style: normal;
                font-weight: 400;
                font-size: 1.2rem;
                line-height: 1.5rem;
                color: #4569AD;
            }
        }

        .section_title {
            display: grid;
            grid-template-columns: 0.2fr 0.6fr 0.2fr;
            justify-content: center;
            align-items: center;
            width: 100%;


            .border_section {
                height: 1px;
                width: 100%;
                background-color: #A9A9A9;

            }

            .section_title_text {
                text-align: center;
                font-style: normal;
                font-weight: 400;
                font-size: 1.2rem;
                line-height: 1.5rem;
                color: #5C5C5C;
            }
        }

        .profile_icon {
            margin-bottom: 6px;
            text-align: center;

                img {
                    max-width: 2.8rem;
                    width: 100%;
                    display: block;
                    margin: 0 auto;
                }
        }

        .profile_section {
            margin-top: 2rem;
            width: 100%;


            .section_text_main {
                margin-top: 1.5rem;
                margin-bottom: 2rem;
                font-style: normal;
                font-weight: 300;
                font-size: 1rem;
                line-height: 1.2rem;
                text-align: center;

                color: #5C5C5C;
            }
        }


        .contact_section {
            width: 100%;
            color: #5C5C5C;

            .section_contact {
                display: flex;
                width: 100%;
                flex-direction: column;
                gap: 1rem;
                margin: 1.5rem 0 2rem 0;

                &_item {

                    &_main {
                        font-style: normal;
                        font-weight: 400;
                        font-size: 1rem;
                        line-height: 1.2rem;

                        a {
                            color: #5C5C5C;
                            text-decoration: underline;
                        }
                    }

                    &_subtitle {
                        font-style: italic;
                        font-weight: 300;
                        font-size: 0.8rem;
                        line-height: 1rem;
                    }


                }

            }

        }

        .skills_section {
            width: 100%;
            color: #5C5C5C;


            .section_skills {
                margin-top: 2rem;
                margin-bottom: 6.5rem;
                font-style: normal;
                font-weight: 400;
                font-size: 1rem;
                line-height: 1.2rem;
            }
        }

        .legal_section {
            font-style: italic;
            font-weight: 300;
            font-size: 4px;
            line-height: 5px;
            margin-bottom: 4rem;
        }





`

const Expierience = styled.div`
    border-left: 1px solid #A9A9A9;

    .profile_icon {
        margin-bottom: 6px;
        text-align: center;

            img {
                max-width: 2.8rem;
                width: 100%;
                display: block;
                margin: 0 auto;
            }
    }
    
    .section_title {
        display: grid;
        grid-template-columns: 0.2fr 0.6fr 0.2fr;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 2rem;


        .border_section {
            height: 1px;
            width: 100%;
            background-color: #A9A9A9;

        }

        .section_title_text {
            text-align: center;
            font-style: normal;
            font-weight: 700;
            font-size: 1.6rem;
            line-height: 2rem;
            color: #5C5C5C;
        }
    }
    

    .experience_container {
        margin: 0 3.5rem;
    }


    .section_description {
        padding-bottom: 2rem;
        color: #5C5C5C;

        .section_description_title {
            font-style: normal;
            font-weight: 400;
            font-size: 1.2rem;
            line-height: 1.5rem;
            color: #4569AD;
        }

        .section_description_firm {
            font-style: normal;
            font-weight: 700;
            font-size: 1rem;
            line-height: 1.2rem;
        }

        .section_description_timeline {
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.2rem;
            color: #0029BA;
            margin-bottom: 0.5rem;

                a {
                    text-decoration: underline;
                    color: #0029BA;
                }
        }

        .section_description_list {
            font-style: italic;
            font-weight: 300;
            font-size: 0.9rem;
            line-height: 1.1rem;
            margin-left: 1.1rem;

            ul li {
                list-style: disc;
                list-style-position: outside;
            }

            ul li:not(:last-child) {
                margin-bottom: 0.5rem;
            }
        }

        .section_description_education {
            font-style: italic;
            font-weight: 300;
            font-size: 0.9rem;
            line-height: 1.1rem;
            color: #747474;
        }

        .section_description_technology {
            margin-top: 1rem;

            &_title {
                font-style: normal;
                font-weight: 700;
                font-size: 1rem;
                line-height: 1.2rem;
                color: #5C5C5C;
                margin-bottom: 0.5rem;
            }

            &_description {
                font-style: italic;
                font-weight: 400;
                font-size: 0.9rem;
                line-height: 1.1rem;
                color: #747474;
            }
        }

    }

    

`

const CvPage = () => {

    const navigate = useNavigate()

    const goBack = () => {
		navigate(-1);
	}

    useEffect(() => {
            window.scrollTo(0, 0)

    }, [])
  return (
    <Main>
        <div>
        <ProjectNavigation>
            <div className='project_text'>
                <div onClick={goBack} className="goBack">
                    <img className="profile-image-arrow" src="https://i.imgur.com/GsvJocL.png" alt="Arrow back"/>
                </div>
                <span>
                    CV <span className='white'> / </span>  <span className='project_category'> Paweł Rosiek </span>
                </span>
            </div>

            <div>
                <Cta to='/#contact'>Contact me</Cta>
            </div>
        </ProjectNavigation>
        <div className="border_square"></div>
        <div className='download_cv'>
            <a href={cvPdf} download >Download as pdf</a>
        </div>
            <CvContainer>
                <PersonalInformation>
                    <div className='cvImage'>
                        <img src={cvImage} alt='Pawel Rosiek' />
                    </div>
                    <div className='main_text'>
                        <p className='firstname'>
                            Paul
                        </p>
                        <p className='surname'>
                            Rosiek
                        </p>
                        <div className='title'>
                                Frontend/Javascript Developer
                        </div>
                    </div>

                    <div className='profile_section'>
                        <div className='profile_icon'>
                            <img src={profileImage} alt='Profile section' />
                        </div>

                        <div className='section_title'>
                            <div className='border_section'></div>
                            <div className='section_title_text'>PROFILE</div>
                            <div className='border_section'></div>
                        </div>

                        <div className='section_text_main'>
                            <p>
                                Highly motivated self-thought front-end developer. Passionate about software development and ready to work with a team and progress with them.
                            </p>
                        </div>
                    </div>

                    <div className='contact_section'>
                        <div className='profile_icon'>
                            <img src={contactIcon} alt='Contact section' />
                        </div>

                        <div className='section_title'>
                            <div className='border_section'></div>
                            <div className='section_title_text'>CONTACT</div>
                            <div className='border_section'></div>
                        </div>

                        <div className='section_contact'>
                            <div className='section_contact_item'>
                                <p className='section_contact_item_main'>
                                    <a href="tel:48 784 446 401">+48 784 446 401</a>
                                </p>
                                <p className='section_contact_item_subtitle'>Phone Numer</p>
                            </div>

                            <div className='section_contact_item'>
                                <p className='section_contact_item_main'><a href="mailto:rosiu978@gmail.com">rosiu978@gmail.com</a></p>
                                <p className='section_contact_item_subtitle'>Phone Email</p>
                            </div>

                            <div className='section_contact_item'>
                                <p className='section_contact_item_main'><a href="https://github.com/rosiu98" target='_blank' rel="noreferrer">https://github.com/rosiu98</a></p>
                                <p className='section_contact_item_subtitle'>Github</p>
                            </div>
                        </div>
                    </div>

                    <div className='skills_section'>
                        <div className='profile_icon'>
                            <img src={skillsIcon} alt='Skills section' />
                        </div>

                        <div className='section_title'>
                            <div className='border_section'></div>
                            <div className='section_title_text'>Skills</div>
                            <div className='border_section'></div>
                        </div>

                        <div className='section_skills'>
                            <p>
                                JavaScript (ES6, React, Redux, SSJS) <br />
                                HTML <br />
                                CSS, SCSS <br />
                                Email Development <br />
                                FIGMA, Adobe Photoshop, Adobe XD <br />
                                NodeJs (Express) <br />
                                Postgres SQL <br />
                            </p>
                        </div>
                    </div>

                    <div className='legal_section'>
                        <p>
                            I consent to the processing of my personal data for the purposes of the recruitment process in accordance
                            with the Regulation of the European Parliament and of the Council (EU) 2016/679 of 27 April 2016 on the
                            protection of individuals with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46 / EC (GDPR).

                        </p>
                    </div>
                </PersonalInformation>

                <Expierience>
                    <div className='experience_container'>
                        
                        <div className='work_experience_section'>
                            <div className='profile_icon'>
                                <img src={workExperienceIcon} alt='Work Experience section' />
                            </div>
                            <div className='section_title'>
                                <div className='border_section'></div>
                                <div className='section_title_text'>WORK EXPERIANCE</div>
                                <div className='border_section'></div>
                            </div>

                            <div className='section_description'>
                                <div className='section_description_title'>
                                    Marketing Cloud Email Specialist (Salesforce)
                                </div>

                                <div className='section_description_firm'>
                                    EnvertaDigital
                                </div>

                                <div className='section_description_timeline'>
                                    2022 - Present
                                </div>

                                <div className='section_description_list'>
                                    <ul>
                                        <li>
                                            Creating marketing strategy and journey solutions for buisness needs.
                                        </li>
                                        <li>
                                            Working with databases. Segmenting subscribers and implenting automation solutions.
                                        </li>
                                        <li>
                                            Collaborate with cross-department stakeholders including project managers, data administrators, copywriters, and designers to create high-quality solutions.
                                        </li>
                                    </ul>
                                </div>



                            </div>

                            <div className='section_description'>
                                <div className='section_description_title'>
                                    Email Developer
                                </div>

                                <div className='section_description_firm'>
                                    TrackDDB Inc.
                                </div>

                                <div className='section_description_timeline'>
                                    2021 - 2022
                                </div>

                                <div className='section_description_list'>
                                    <ul>
                                        <li>
                                        Develop email templates and review code for dynamic and responsive emails.
                                        </li>
                                        <li>
                                        Consistently meet deadlines to ensure each campaign is properly tested and reviewed by clients and management prior to the requested send dates.
                                        </li>
                                        <li>
                                        Working with databases. Segmenting subscribers and implenting automation solutions. 
                                        </li>
                                        <li>
                                        Collaborate with cross-department stakeholders including project managers, data administrators, copywriters, and designers to create high-quality solutions.
                                        </li>
                                    </ul>
                                </div>



                            </div>

                            <div className='section_description'>
                                <div className='section_description_title'>
                                    Email Developer/Front-end Developer
                                </div>

                                <div className='section_description_firm'>
                                    Performance Art Inc.
                                </div>

                                <div className='section_description_timeline'>
                                    2020 - 2021
                                </div>

                                <div className='section_description_list'>
                                    <ul>
                                        <li>
                                        Creating forms / Landing page / E-mails
                                        </li>
                                        <li>
                                        Maintenance and support of mobile responsive HTML email for customers
                                        </li>
                                        <li>
                                        Assist in the HTML statement email creation, updates and services for customers
                                        </li>
                                        <li>
                                        Coding architectures  for all email programs
                                        </li>
                                    </ul>
                                </div>



                            </div>
                        </div>
                        
                        <div className='projects_section'>
                            <div className='profile_icon'>
                                <img src={projectIcon} alt='Project section' />
                            </div>
                            <div className='section_title'>
                                <div className='border_section'></div>
                                <div className='section_title_text'>PROJECTS</div>
                                <div className='border_section'></div>
                            </div>

                            <div className='section_description'>
                                <div className='section_description_title'>
                                    <span style={{color: '#5C5C5C' , fontWeight: '600'}}>Restaurant Full E-commerce Website</span>
                                </div>
                                <div className='section_description_timeline'>
                                    <a target='_blank' rel="noreferrer" href="https://torandoapp.herokuapp.com">https://torandoapp.herokuapp.com</a>
                                </div>

                                <div className='section_description_list'>
                                    <ul>
                                        <li>
                                            Creating marketing strategy and journey solutions for buisness needs.
                                        </li>
                                        <li>
                                            Working with databases. Segmenting subscribers and implenting automation solutions.
                                        </li>
                                        <li>
                                            Collaborate with cross-department stakeholders including project managers, data administrators, copywriters, and designers to create high-quality solutions.
                                        </li>
                                    </ul>
                                </div>

                                <div className='section_description_technology'>
                                    <p className='section_description_technology_title'>
                                        Technologies:
                                    </p>
                                    <p className='section_description_technology_description'>
                                        React,NodeJs,Express,MongoDb, Google Maps Api, and other small libraries.
                                    </p>
                                </div>



                            </div>

                        </div>

                        <div className='education_section'>
                            <div className='profile_icon'>
                                <img src={educationIcon} alt='Education section' />
                            </div>
                            <div className='section_title'>
                                <div className='border_section'></div>
                                <div className='section_title_text'>EDUCATION</div>
                                <div className='border_section'></div>
                            </div>

                            <div className='section_description'>
                                <div className='section_description_title'>
                                    IT SPECJALIST
                                </div>

                                <div className='section_description_education'>
                                    Electronic Technical School No. 2 in Cracow, Kraków
                                </div>




                            </div>

                        </div>
                        
                    </div>
                </Expierience>
            </CvContainer>
        </div>
    </Main>
  )
}

export default CvPage