import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 1rem; /* py-16 px-4 */
  background-color: #2d3748; /* bg-gray-800 */
`;

const Container = styled.div`
  max-width: 72rem; /* max-w-6xl */
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.875rem; /* text-3xl */
  margin-bottom: 1.5rem; /* mb-6 */
  color: white;
`;

const BonusBox = styled.div`
  max-width: 42rem; /* max-w-2xl */
  margin: 0 auto;
  background: linear-gradient(to right, #fbbf24, #fde68a); /* from-yellow-500 to-yellow-300 */
  color: black;
  padding: 2rem; /* p-8 */
  border-radius: 0.5rem; /* rounded-lg */
`;

const BonusAmount = styled.h3`
  font-weight: 700;
  font-size: 2.25rem; /* text-4xl */
  margin-bottom: 0.5rem; /* mb-2 */
`;

const BonusDetails = styled.p`
  font-size: 1.25rem; /* text-xl */
  margin-bottom: 1rem; /* mb-4 */
`;

const Terms = styled.p`
  font-size: 0.875rem; /* text-sm */
`;

export default function BonusSection() {
  return (
    <Section>
      <Container>
        <Title>Exclusive Welcome Bonus</Title>
        <BonusBox>
          <BonusAmount>200% up to $1,000</BonusAmount>
          <BonusDetails>+ 100 Free Spins</BonusDetails>
          <Terms>Min. deposit: 0.001 BTC. T&C apply.</Terms>
        </BonusBox>
      </Container>
    </Section>
  );
}
