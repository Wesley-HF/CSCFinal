import React from 'react';
import styled from 'styled-components';

// Styled Components
const Section = styled.section`
  padding: 20px;
  line-height: 1.6;
`;

const Title = styled.h1`
  font-size: calc(2rem + 1vw); /* Scales with viewport width */
  color: #333;
  text-align: center; /* Centers the title for better visual hierarchy */
  margin-bottom: 20px; /* Adds spacing below the title */
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Ensures content stacks vertically in rows */
  gap: 20px; /* Adds spacing between rows */
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;

  /* Ensure content wraps properly on smaller screens */
  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on small screens */
  }
`;

const ProfileImage = styled.img`
  flex-shrink: 0;
  width: 20%; /* Use a percentage-based width */
  min-width: 400px; /* Ensures a minimum size for smaller screens */
  max-width: 500px; /* Optional: Set a max width */
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DeploymentImage = styled.img`
  flex-shrink: 0;
  width: 20%; /* Use a percentage-based width */
  min-width: 400px; /* Ensures a minimum size for smaller screens */
  max-width: 800px; /* Optional: Set a max width */
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TextWrapper = styled.div`
  flex: 1;

  p {
    text-indent: 2%; /* Indent the first line dynamically */
    margin-bottom: 15px; /* Adds spacing between paragraphs */
    font-size: calc(1rem + 0.5vw); /* Adjust font size based on viewport width */
    line-height: 1.8; /* Improves readability with increased line spacing */
    color: #444; /* Slightly softer color for the text */
  }
`;

function AboutMe() {
  return (
    <Section>
      <Title>About Me</Title>
      <ContentWrapper>
        {/* First Row: Profile Picture and Intro Text */}
        <Row>
          <ProfileImage src="/images/Profile.png" alt="Luis Colorado" />
          <TextWrapper>
            <p>
              My name is Luis Miguel Colorado, and I’m 28 years old, born on October 1, 1996, in Stamford, Connecticut. I come from a diverse background with my mother being Honduran and my father Mexican, though I find myself more closely aligned with my Mexican heritage. I’m currently a junior at Southern, majoring in General Computer Science. Alongside my studies, I work as a chauffeur, primarily driving people get to and from their homes, offices, or the airport.
            </p>
          </TextWrapper>
        </Row>

        {/* Second Row: Military Text and Deployment Image */}
        <Row>
          <TextWrapper>
            <p>
              I knew I wanted to serve in the military throughout high school. My cousin joined during my sophomore year, and my brother enlisted after my junior year, which only strengthened my drive. I joined the United States Marine Corps as an Infantry Machinegunner and was deployed to Afghanistan in 2019, by which time I had reached the rank of Corporal. My brother even deployed with me, and we were stationed at the same base. Sometimes we would be on missions in the same vehicle. As a team leader, I had three people under my command, and while it was a stressful time, I felt prepared for it because of all the training. I truly enjoyed my time there, despite the circumstances. My time in the Marines taught me discipline, resilience, and teamwork—qualities I carry with me every day.
            </p>
          </TextWrapper>
          <DeploymentImage src="/images/deployment.png" alt="Luis in Afghanistan" />
        </Row>
      </ContentWrapper>
    </Section>
  );
}

export default AboutMe;
