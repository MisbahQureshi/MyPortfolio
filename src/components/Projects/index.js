
import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider, MoreButtonContainer, MoreButton } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards.jsx'
import { projects } from '../../data/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithubSquare, faBehanceSquare } from '@fortawesome/free-brands-svg-icons';



const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>My <span>Projects</span></Title>
        <Desc>
          
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'software' ?
            <ToggleButton active value="software" onClick={() => setToggle('software')}>Software</ToggleButton>
            :
            <ToggleButton value="software" onClick={() => setToggle('software')}>Software</ToggleButton>
          }
          <Divider />
          {toggle === 'design' ?
            <ToggleButton active value="design" onClick={() => setToggle('design')}>Design</ToggleButton>
            :
            <ToggleButton value="design" onClick={() => setToggle('design')}>Design</ToggleButton>
          }
          
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
        <Desc>
          To view more projects:
        </Desc>
        <MoreButtonContainer>
        <MoreButton href="https://github.com/MisbahQureshi"> <FontAwesomeIcon icon={faGithubSquare} /> GitHub</MoreButton>
        <MoreButton href="https://www.behance.net/misbahqureshi2"><FontAwesomeIcon icon={faBehanceSquare} /> Behance</MoreButton></MoreButtonContainer>
        
      </Wrapper>
    </Container>
  )
}

export default Projects
