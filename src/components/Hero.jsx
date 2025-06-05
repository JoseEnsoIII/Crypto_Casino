import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: linear-gradient(to bottom, #111827, #1f2937); /* from-gray-900 to-gray-800 */
  color: white;
  padding: 5rem 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  flex: 1;
  margin-bottom: 2.5rem;

  @media(min-width: 768px) {
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

const Heading = styled.h1`
  font-size: 2.25rem; /* 4xl */
  font-weight: 700;
  margin-bottom: 1rem;
  color:white;

  @media(min-width: 768px) {
    font-size: 3.75rem; /* 6xl */
  }
`;

const Highlight = styled.span`
  color: #ec4899; /* pink-500 */
`;

const Subtext = styled.p`
  font-size: 1.25rem; /* xl */
  margin-bottom: 2rem;
  color: #d1d5db; /* gray-300 */
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media(min-width: 640px) {
    flex-direction: row;
  }
`;

const ButtonPrimary = styled.button`
  background-color: #db2777; /* pink-600 */
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  font-weight: 700;
  font-size: 1.125rem; /* lg */
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #be185d; /* pink-700 */
  }
`;

const ButtonSecondary = styled.button`
  background: transparent;
  border: 2px solid #ec4899; /* pink-500 */
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  font-weight: 700;
  font-size: 1.125rem;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ec4899;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
`;

const CirclePink = styled.div`
  width: 20rem;
  height: 20rem;
  background-color: #831843; /* pink-900 */
  border-radius: 50%;
  opacity: 0.2;
  position: absolute;
  top: -2.5rem;
  left: -2.5rem;
  z-index: 0;

  @media(min-width: 768px) {
    width: 20rem;
    height: 20rem;
  }
`;

const CirclePurple = styled.div`
  width: 20rem;
  height: 20rem;
  background-color: #4c1d95; /* purple-900 */
  border-radius: 50%;
  opacity: 0.2;
  position: absolute;
  bottom: -2.5rem;
  right: -2.5rem;
  z-index: 0;

  @media(min-width: 768px) {
    width: 20rem;
    height: 20rem;
  }
`;

const Image = styled.img`
  position: relative;
  z-index: 10;
  width: 20rem;
  height: 20rem;
  object-fit: contain;
  border-radius: 5%;

  @media(min-width: 768px) {
    width: 20rem;
    height: 20rem;
  }
`;

const Banner = () => {
  return (
    <Section id="home">
      <Container>
        <Content>
          <Heading>
            Your <Highlight>Crypto Casino</Highlight> Adventure Starts Here
          </Heading>
          <Subtext>
            Play, win, and withdraw instantly with cryptocurrency. No banks, no delays.
          </Subtext>
          <ButtonGroup>
            <ButtonPrimary>Get Started</ButtonPrimary>
            <ButtonSecondary>Learn More</ButtonSecondary>
          </ButtonGroup>
        </Content>
        <ImageWrapper>
          <CirclePink />
          <CirclePurple />
          <Image
  src="/images/casino.png"
  alt="Crypto Casino"
/>

        </ImageWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
