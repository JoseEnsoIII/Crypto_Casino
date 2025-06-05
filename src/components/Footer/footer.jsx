import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #1a202c; /* bg-gray-900 */
  color: white;
  padding: 3rem 0; /* py-12 */
`;

const Container = styled.div`
  max-width: 1280px; /* container max width */
  margin: 0 auto;
  padding: 0 1rem; /* px-4 */
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Logo = styled.h3`
  font-size: 1.5rem; /* text-2xl */
  font-weight: 700;
  margin-bottom: 1rem; /* mb-4 */
  background: linear-gradient(to right, #a78bfa, #ec4899); /* from-purple-400 to-pink-600 */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TextGray = styled.p`
  color: #9ca3af; /* text-gray-400 */
`;

const SectionTitle = styled.h4`
  font-size: 1.125rem; /* text-lg */
  font-weight: 600;
  margin-bottom: 1rem; /* mb-4 */
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  row-gap: 0.5rem; /* space-y-2 */
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;

  a {
    color: #9ca3af; /* text-gray-400 */
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ec4899; /* hover:text-pink-400 */
    }
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid #1f2937; /* border-gray-800 */
  margin-top: 2rem; /* mt-8 */
  padding-top: 2rem; /* pt-8 */
  text-align: center;
  color: #6b7280; /* text-gray-500 */
  font-size: 0.875rem; /* text-sm */
`;

const BottomTextSmall = styled.p`
  margin-top: 0.5rem; /* mt-2 */
  font-size: 0.75rem; /* smaller text-sm */
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Grid>
          <div>
            <Logo>CryptoCasino</Logo>
            <TextGray>
              The premier cryptocurrency gambling experience with instant payouts and provably fair games.
            </TextGray>
          </div>

          <div>
            <SectionTitle>Quick Links</SectionTitle>
            <List>
              {['Home', 'Games', 'Promotions', 'FAQ'].map((item) => (
                <ListItem key={item}>
                  <a href="#">{item}</a>
                </ListItem>
              ))}
            </List>
          </div>

          <div>
            <SectionTitle>Games</SectionTitle>
            <List>
              {['Slots', 'Blackjack', 'Roulette', 'Poker'].map((item) => (
                <ListItem key={item}>
                  <a href="#">{item}</a>
                </ListItem>
              ))}
            </List>
          </div>

          <div>
            <SectionTitle>Support</SectionTitle>
            <List>
              {['Contact Us', 'Privacy Policy', 'Terms & Conditions', 'Responsible Gaming'].map((item) => (
                <ListItem key={item}>
                  <a href="#">{item}</a>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>

        <BottomBar>
          <p>© {new Date().getFullYear()} CryptoCasino. All rights reserved.</p>
          <BottomTextSmall>This is a demo site for assessment purposes only.</BottomTextSmall>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
