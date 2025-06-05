import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background:  #2d3748;
  color: black;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: none;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.span`
  font-size: 1.75rem;
  font-weight: 700;
  cursor: pointer;
  color:white;
`;

const NavLinks = styled.div`
  display: none;

  @media(min-width: 768px) {
    display: flex;
    gap: 1.5rem;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #ec4899; /* Tailwind pink-400 */
  }
`;

const ConnectButton = styled.button`
  background-color: #db2777; /* Tailwind pink-600 */
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 0.375rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #be185d; /* Tailwind pink-700 */
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Logo href="#">CryptoCasino</Logo>
        <NavLinks>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#games">Games</NavLink>
          <NavLink href="#bonus">Bonus</NavLink>
          <NavLink href="#wallet">Wallet</NavLink>
        </NavLinks>
        <ConnectButton>Connect Wallet</ConnectButton>
      </Container>
    </Nav>
  );
};

export default Navbar;
