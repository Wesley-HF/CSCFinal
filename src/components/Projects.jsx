import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Section = styled.section`
  padding: 20px;
  max-width: 2000px; /* Maximum container width */
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: calc(1.5rem + 0.5vw);
  background-color: #333;
  color: white;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const Subtitle = styled.p`
  font-size: calc(1rem + 0.3vw);
  color: #555;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 90%; /* Ensures responsiveness */
  margin: 0 auto;
`;

const Image = styled.img`
  width: 30%; /* Each image takes up 30% of the container */
  min-width: 350px; /* Ensures a minimum size for smaller screens */
  max-width: 700px; /* Prevents images from becoming too large */
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Subtle zoom effect */
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }
`;

const InfoTextbox = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #444;
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 90%; /* Ensures responsiveness */
  max-width: 2000px; /* Limits the width for readability */
  margin: 20px auto;
  text-align: left;
`;

const InfoText = styled.p`
  font-size: calc(1rem + 0.3vw);
`;

function MyProjects() {
  const [infoText, setInfoText] = useState(
    'Click on an image to learn more about the project.'
  );

  const displayInfo = (type) => {
    if (type === 'project1') {
      setInfoText(
        'Example Project 1: This project involves building a responsive website with dynamic functionality using HTML, CSS, and JavaScript.'
      );
    } else if (type === 'project2') {
      setInfoText(
        'Example Project 2: This project showcases data visualization techniques using React and D3.js for interactive charts.'
      );
    } else if (type === 'project3') {
      setInfoText(
        'Example Project 3: A full-stack web application built with React, Node.js, and MongoDB for managing user data.'
      );
    }
  };

  return (
    <Section>
      <Title>"My" Projects</Title>
      <Subtitle>
        While I don’t have projects to showcase at the moment, this section is reserved as a portfolio for my future endeavors and accomplishments.
      </Subtitle>
      <ImageContainer>
        <Image
          src="/images/Example 1.png"
          alt="Project 1"
          onClick={() => displayInfo('project1')}
        />
        <Image
          src="/images/Example 2.png"
          alt="Project 2"
          onClick={() => displayInfo('project2')}
        />
        <Image
          src="/images/Example 3.png"
          alt="Project 3"
          onClick={() => displayInfo('project3')}
        />
      </ImageContainer>
      <InfoTextbox>
        <InfoText>{infoText}</InfoText>
      </InfoTextbox>
    </Section>
  );
}

export default MyProjects;