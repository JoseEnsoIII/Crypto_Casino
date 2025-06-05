import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 0; /* py-16 */
  background-color: #1a202c; /* bg-gray-900 */
`;

const Container = styled.div`
  max-width: 1280px; /* container */
  margin: 0 auto;
  padding: 0 1rem; /* px-4 */
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem; /* mb-12 */
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.875rem; /* text-3xl */
  color: white;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.25rem; /* md:text-4xl */
  }
`;

const Highlight = styled.span`
  color: #ec4899; /* text-pink-500 */
`;

const Subtitle = styled.p`
  font-size: 1.25rem; /* text-xl */
  color: #d1d5db; /* text-gray-300 */
  max-width: 42rem; /* max-w-2xl */
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background-color: #2d3748; /* bg-gray-800 */
  border-radius: 0.75rem; /* rounded-xl */
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 15px -3px rgba(236, 72, 153, 0.2), 0 4px 6px -2px rgba(236, 72, 153, 0.1); /* hover:shadow-pink-500/20 */
  }
`;

const ImageWrapper = styled.div`
  height: 12rem; /* h-48 */
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 1.5rem; /* p-6 */
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem; /* mb-2 */
`;

const CardTitle = styled.h3`
  font-size: 1.25rem; /* text-xl */
  font-weight: 700;
  color: white;
`;

const CategoryBadge = styled.span`
  background-color: #be185d; /* bg-pink-600 */
  color: white;
  font-size: 0.75rem; /* text-xs */
  padding: 0.25rem 0.5rem; /* px-2 py-1 */
  border-radius: 0.375rem; /* rounded */
`;

const Description = styled.p`
  color: #9ca3af; /* text-gray-400 */
  margin-bottom: 1rem; /* mb-4 */
`;

const PlayButton = styled.button`
  width: 100%;
  background-color: #4a5568; /* bg-gray-700 */
  color: white;
  padding: 0.5rem 0; /* py-2 */
  border-radius: 0.375rem; /* rounded-md */
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ec4899; /* hover:bg-pink-600 */
  }
`;

const ViewAllWrapper = styled.div`
  text-align: center;
  margin-top: 3rem; /* mt-12 */
`;

const ViewAllButton = styled.button`
  background: transparent;
  border: 2px solid #ec4899; /* border-pink-500 */
  color: #ec4899;
  padding: 0.75rem 2rem; /* px-8 py-3 */
  border-radius: 0.375rem; /* rounded-md */
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #ec4899;
    color: white;
  }
`;

const GameCards = () => {
  const games = [
    {
      id: 1,
      title: "Bitcoin Roulette",
      description: "Classic roulette with crypto twist",
      category: "Table Game",
      image: "/images/BTC Roulette.png"
    },
    {
      id: 2,
      title: "Ether Slots",
      description: "5-reel slots with massive jackpots",
      category: "Slots",
      image: "/images/ethereum-slots.jpg"
    },
    {
      id: 3,
      title: "Crypto Blackjack",
      description: "Beat the dealer with crypto payouts",
      category: "Card Game",
      image: "/images/Crypto Blackjack.jpeg"
    }
  ];

  return (
    <Section id="games">
      <Container>
        <Header>
          <Title>
            Featured <Highlight>Games</Highlight>
          </Title>
          <Subtitle>
            Play our most popular crypto-powered games
          </Subtitle>
        </Header>

        <Grid>
          {games.map(game => (
            <Card key={game.id}>
              <ImageWrapper>
                <CardImage src={game.image} alt={game.title} />
              </ImageWrapper>
              <CardBody>
                <CardHeader>
                  <CardTitle>{game.title}</CardTitle>
                  <CategoryBadge>{game.category}</CategoryBadge>
                </CardHeader>
                <Description>{game.description}</Description>
                <PlayButton>Play Now</PlayButton>
              </CardBody>
            </Card>
          ))}
        </Grid>

        <ViewAllWrapper>
          <ViewAllButton>View All Games</ViewAllButton>
        </ViewAllWrapper>
      </Container>
    </Section>
  );
};

export default GameCards;
