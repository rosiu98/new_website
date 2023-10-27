import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Categories from '../Components/Categories'
import ProjectContent from '../Components/ProjectContent'
import '../indexProject.css';
import { useSearchParams } from 'react-router-dom';
import manualContent from '../Components/manualContent';
import globalApi from '../globalApi';


const Main = styled.main`
    display: grid;
    align-items: baseline;
    background-color: #F1F1F1;
    padding: 5rem 0;
    grid-template-columns: 25rem 1fr;
    gap: 7rem;
    min-height: 100vh;
    height: 100%;

    @media (max-width: 1220px) {
        grid-template-columns: 1fr;
      }
`




const ProjectsPage = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(true)

    const [data , setData] = useState([])
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`${globalApi}/profile/20`);
        const result = await response.json();
        let emailsResults = result.rows.filter(row => row.contentblock === null || undefined)
  
        manualContent.forEach(content => emailsResults = [content, ...emailsResults])
  
        if (searchParams.get('category') && searchParams.get('category') === 'Websites') {
          emailsResults = emailsResults.filter(row => row.type === 'React' || row.type === 'Landing Page')
        } else if (searchParams.get('category') && searchParams.get('category') !== 'All') {
          emailsResults = emailsResults.filter(row => row.type === searchParams.get('category'))
        }

        setData(emailsResults)
        setLoading(false)
        
      }
  
      fetchData()
    
    },[searchParams])

    useEffect(() => {
        
      window.scrollTo(0, 0)
 }, [searchParams])


  return (
    <Main>
        <Categories searchParams={searchParams} setSearchParams={setSearchParams}/>
        <ProjectContent data={data} loading={loading} searchParams={searchParams} />
    </Main>
  )
}

export default ProjectsPage