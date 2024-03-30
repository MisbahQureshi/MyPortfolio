import React from 'react'
import styled from 'styled-components'


const Container = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`;

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`;

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 70px;
  color: ${({ theme }) => theme.text_primary};
  span {
    color: #BE1ADB; 
  }
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
font-size: 20px;
padding:40px;
  line-height: 32px;
  margin-bottom: 22px;
  color: #6b7280;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

function AboutMe() {
  return (
    <Container id="about">
      <Wrapper>
        <Title>About <span>Me</span></Title>
        <Desc>With a Bachelor's degree in Software Engineering and experience as a Software Engineer, I bring technical expertise and a strong work ethic to every project. In addition to my software engineering skills, I am proficient in various programming languages. I also have experience working with LaTeX, making me a versatile and well-rounded software engineer. I am also skilled in graphic design, with a focus on logos, social media posts, and animations. I am proficient in Adobe Illustrator, Photoshop, After Effects, and Filmora, allowing me to create visually stunning designs that communicate a message effectively. As a UGRAD Alumna, I have demonstrated my dedication to learning and improving my skills. I am always looking for opportunities to expand my knowledge and contribute to my team. I bring my unique blend of skills to every project, ensuring that the end result is not only technically sound, but also aesthetically pleasing.
        </Desc>
      </Wrapper>
    </Container>
  )
}

export default AboutMe