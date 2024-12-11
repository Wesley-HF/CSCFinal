import React from 'react';
import styled from 'styled-components';

// Styled Components
const Section = styled.section`
  padding: 20px;
  line-height: 1.6;
  max-width: 2000px; /* Matches the Skills section */
  margin: 0 auto; /* Centers the section */
`;

const Title = styled.h2`
  font-size: calc(1.5rem + 0.5vw); /* Responsive title size */
  text-align: center;
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const TextWrapper = styled.div`
  width: 90%;
  text-align: center;
  font-size: calc(1rem + 0.3vw); /* Responsive text size */
  max-width: 1200px; /* Limits overly wide text for readability */
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  width: 90%;
  max-width: 2000px; /* Matches the Skills section */
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease; /* Optional: Smooth zoom on hover */
  }
`;

function Interests() {
  return (
    <Section>
      <Title>Interests</Title>
      <ContentWrapper>
        <TextWrapper>
          <p>
            I’ve always been active, and while I used to enjoy playing soccer—primarily as a left back in indoor fieldhouses—I’ve gradually moved away from it over time. These days, I focus more on working out, especially running and weightlifting, which have become a regular part of my routine. I also love casual games like cornhole and darts, especially when I’m hanging out with my small, close-knit group of friends, who I’ve known for years and consider family.
          </p>
        </TextWrapper>
        <Gallery>
          <Image src="/images/spartan.png" alt="Spartan Race" />
          <Image src="/images/traveling.png" alt="Traveling" />
          <Image src="/images/family.png" alt="Family" />
          <Image src="/images/dog.png" alt="Dog" />
        </Gallery>
      </ContentWrapper>
    </Section>
  );
}

export default Interests;
