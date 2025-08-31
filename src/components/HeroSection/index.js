
import React from 'react'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Hello, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon,AboutMeButton, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/newImg.jpeg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faBehanceSquare } from '@fortawesome/free-brands-svg-icons';

const HeroSection = () => {
    return (
        <div id="home">
            <HeroContainer>
                
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                    <Hello>Hello</Hello>
                        <Title>I'm <b>{Bio.name}</b></Title>
                        <TextLoop>
                            <b>a</b>
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                       
                        <SocialMediaIcons>
                            <SocialMediaIcon href={Bio.linkedin} target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </SocialMediaIcon>
                            <SocialMediaIcon href={Bio.github} target="_blank">
                                <FontAwesomeIcon icon={faGithubSquare} />
                            </SocialMediaIcon>
                            <SocialMediaIcon href={Bio.behance} target="_blank">
                                <FontAwesomeIcon icon={faBehanceSquare} />
                            </SocialMediaIcon>
                        </SocialMediaIcons>
                        
                        <AboutMeButton href="#about" target=''>About me</AboutMeButton>
                        <ResumeButton href={Bio.resume} target='display'>My Resume</ResumeButton>
                        
                        
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                    <Img src={HeroImg} alt="hero-image" />
                        
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection
