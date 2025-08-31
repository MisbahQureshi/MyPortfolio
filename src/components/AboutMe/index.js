import React from "react";
import styled from "styled-components";

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
    color: #a855f7;
  }
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 20px;
  padding: 40px;
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
        <Title>
          About <span>Me</span>
        </Title>
        <Desc>
          {" "}
          I’m a Full-Stack Software Engineer with a Master’s in Computer Science
          and hands-on experience building scalable web and cloud-based
          applications. My core strengths lie in backend and systems development
          using Java, C# and SQL, complemented by front-end skills in
          JavaScript, React.js, and API integration. I’ve contributed to diverse
          projects across academia, startups, and research labs, whether
          designing database architectures, deploying serverless solutions on
          AWS, or optimizing system performance. I thrive in agile teams and
          take pride in writing clean, maintainable code that solves real-world
          problems. Originally from Pakistan, I’ve gained global exposure
          through the prestigious U.S. Global UGRAD program, working across
          cultures as a student leader and STEM ambassador. My volunteer work
          includes mentoring underrepresented students in tech, organizing
          career counseling sessions, and supporting community-driven
          initiatives. While software is my main focus, my experience in graphic
          design helps me build more intuitive and user-friendly interfaces when
          needed.
        </Desc>
      </Wrapper>
    </Container>
  );
}

export default AboutMe;
