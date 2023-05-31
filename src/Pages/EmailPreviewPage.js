import IframeResizer from 'iframe-resizer-react'
import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Select from 'react-select';
import Lottie from "lottie-react"
import loaderAnimation from '../Components/skeleton-loader.json'
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import logo_PR from '../Assets/Logo_PR.svg'
import { Link } from 'react-router-dom';
import all_icon from '../Assets/all_icon.svg'
import emails_icon from '../Assets/email_icon.svg'

import CodeMirror from "@uiw/react-codemirror"
import { dracula } from '@uiw/codemirror-theme-dracula';
import { html as codeMirrorHtml } from "@codemirror/lang-html"


const Main = styled.main`
    display: grid;
    align-items: flex-start;
    background-color: #F1F1F1;
    padding: 5rem 0;
    grid-template-columns: 25rem 1fr;
    gap: 7rem;
    min-height: 100vh;
    height: 100%;

    @media (max-width: 1220px) {
        grid-template-columns: 1fr;
      }

    .border_square {
        margin-bottom: 1.5rem;
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


const CategoriesStyles = styled.div`
    background-color: #ffffff;
    border-radius: 2rem;
    padding-bottom: 35%;
    position: sticky;
    top: 5rem;

    @media (max-width: 1220px) {
        padding-bottom: 1rem;
        top: 0;
        position: unset;
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
            color: #e2a731;
        }

        &.sub_category {
            padding-left: 6.5rem;
            font-size: 1.3rem;
        }

    }
`


const EmailPreviewPage = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [code, setCode] = useState('')
    const [data, setData] = useState([])
    const [loading , setLoading] = useState(true)
    const [width, setWidth] = useState(700)
    const [value, setValue] = useState(true)
    const [select , setSelect] = useState({
        value: "Desktop",
        text: 'Desktop',
        icon: <img src="https://i.imgur.com/c4jDmGP.png" width='16' alt="Desktop"
         />
    })

    const codeEndRef = useRef(null)

    const scrollToBottom = () => {
        codeEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }


    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://email-app.website/api/v1/projects/${id}`);
                const result = await response.json();
                setData(result.rows)
                setCode(result.rows.html_code.replace("<head>", '<head> <script src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.6.0/iframeResizer.contentWindow.min.js"></script>'))
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (value === true) {
            window.scrollTo(0, 0)
        } else {
            setTimeout(scrollToBottom,200)
        }
    }, [value])


    const onResized = data =>  data && setLoading(false)

    const changeView = (e) => {

        if(e.value === select.value) {
            return
        }

        setLoading(true)
        setSelect(e)

        if(e.value === 'Desktop'){
            setWidth(700)
        } else {
            setWidth(400)
        }
    }

    const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: '#F2F3F2', padding: '5px', border: '1px solid black' }),
        placeholder: (styles) => ({ ...styles, color: 'black', fontSize: '1.4rem', fontWeight: '500' }),
        container: (styles) => ({ ...styles, gridRowStart: '1', gridColumnStart: '1', placeSelf: 'baseline', marginBottom: '25px', }),
        option: (styles) => ({ ...styles, padding: '15px'}),
        dropdownIndicator: base => ({
            ...base,
            color: "black",
            '&:hover': {
                color: 'black'
            },
          }),
          indicatorSeparator: base => ({
            ...base,
            display: 'none',
          }),
        
      };

    const listOfView = [
        {
            value: 'Desktop',
            text: `Desktop`,
            icon: <img src="https://i.imgur.com/c4jDmGP.png" width='16' alt="Desktop" />
        },
        {
            value: 'Mobile',
            text: 'Mobile',
            icon: <img src="https://i.imgur.com/RiXLAMx.png" width='16' alt="Mobile" />
        },
    ]


    const goBack = () => {
		navigate(-1);
	}
 


  return (
    <Main>
        <CategoriesStyles>
            <div className='logo_container'>
                <Link to={'/'}>
                <img src={logo_PR} alt='Logo DEV.PR' />
                </Link>
            </div>

            <CategoriesList>
                <div onClick={() => setValue(true)} className={`category_container ${value && 'active'}`}>
                    <img src={all_icon} alt='icon all' />
                    Email Preview
                </div>
                <div onClick={() => setValue(false)} className={`category_container ${!value && 'active'}`}>
                    <img src={emails_icon} alt="icon emails" />
                    Code
                </div>
            </CategoriesList>
        </CategoriesStyles>
        <div className="emailPage-container">
        <ProjectNavigation>
            <div className='project_text'>
                <div onClick={goBack} className="goBack">
                    <img className="profile-image-arrow" src="https://i.imgur.com/GsvJocL.png" alt="Arrow back"/>
                </div>
                <span>
                    EMAILS <span className='white'> / </span>  <span className='project_category'> {data.name} </span>
                </span>
            </div>

            <div>
                <Cta to='/#contact'>Contact me</Cta>
            </div>
        </ProjectNavigation>
        <div className="border_square"></div>
         <div className="pagehref">
            <div className="count-page">
                <img src="https://i.imgur.com/OkJyeVG.png" width={24} height={24} alt="View icon" />&nbsp;
                {Number(data.count) === 0 ? Number(data.count) + 1 : data.count} Views
            </div>
        </div>
            <div className="emailPage-main">
                <div className='emailPage-main-box'>
                    {value ? <>
                        {loading && <div className='emailPage-loading'><Lottie rendererSettings={'preserveAspectRatio'} animationData={loaderAnimation} loop={true}  /></div>}
                       <IframeResizer
                            key={width}
                            sizeHeight={true}
                            sizeWidth={true}
                            checkOrigin={false}
                            heightCalculationMethod={width === 700 ? 'lowestElement' : 'lowestElement'}
                            style={{ width, visibility: loading ? 'hidden' : 'unset'}}
                            onResized={onResized}
                            frameBorder='0'
                            autoResize={true}
                            srcDoc={code} />
                        <div className="emailPage-main-view">
                            <Select
                                placeholder="Select Category"
                                value={select}
                                options={listOfView}
                                inputProps={{ autoComplete: 'off', autoCorrect: 'off', spellCheck: 'off' }}
                                onChange={changeView}
                                styles={colourStyles}
                                getOptionLabel={e => (
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {e.icon}
                                    <span style={{ marginLeft: 5 , fontSize: '1.4rem' , color: 'black', fontWeight: '500'}}>{e.text}</span>
                                </div>
                              )}
                            />  
                        </div>    
                    </> : 
                    <CodeMirror
                    value={code}
                    theme={dracula}
                    extensions={[codeMirrorHtml()]}
                    onChange={(editor, change) => {
                        setCode(editor)
                    }}
                            /> 
                    }
                    <div ref={codeEndRef} />
                </div>
            </div>
            <div>
            </div>
        </div>
    </Main>
  )
}

export default EmailPreviewPage