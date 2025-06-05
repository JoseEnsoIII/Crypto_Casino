import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Section = styled.section`
  padding: 4rem 1rem;
  background-color: #2d3748; /* bg-gray-800 */
`;

const Container = styled.div`
  max-width: 28rem;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.5rem;
  }

  p {
    color: #d1d5db; /* text-gray-300 */
  }
`;

const Form = styled.form`
  background-color: #374151; /* bg-gray-700 */
  padding: 2rem;
  border-radius: 0.75rem;
`;

const FieldGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #d1d5db; /* text-gray-300 */
`;

const Input = styled.input`
  width: 92%;
  background-color: #1f2937; /* bg-gray-800 */
  border: 1px solid #4b5563;
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
  color: white;
  outline: none;
  &:focus {
    border-color: #ec4899;
    box-shadow: 0 0 0 2px #ec4899;
  }
`;

const Select = styled.select`
  width: 100%;
  background-color: #1f2937; /* bg-gray-800 */
  border: 1px solid #4b5563;
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
  color: white;
  outline: none;
  &:focus {
    border-color: #ec4899;
    box-shadow: 0 0 0 2px #ec4899;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #ec4899;
  color: white;
  font-weight: 700;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0.75 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: #db2777;
  }
`;

const TermsText = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  color: #9ca3af;
  font-size: 0.875rem;
`;

const SuccessBox = styled.div`
  background-color: #374151;
  border-radius: 0.75rem;
  padding: 2rem;
  text-align: center;

  .icon {
    color: #34d399;
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.5rem;
  }

  p {
    color: #d1d5db;
    margin-bottom: 1.5rem;
  }
`;

const WalletForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    walletAddress: '',
    amount: '0.1'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      localStorage.setItem('cryptoCasinoDeposit', JSON.stringify(formData));
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <Section id="wallet">
        <Container>
          <SuccessBox>
            <div className="icon">✓</div>
            <h3>Deposit Successful!</h3>
            <p>Your deposit of {formData.amount} ETH has been received. Enjoy your gaming!</p>
            <Button onClick={() => setIsSubmitted(false)}>Make Another Deposit</Button>
          </SuccessBox>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="wallet">
      <Container>
        <Header>
          <h2>Crypto Wallet</h2>
          <p>Deposit funds to start playing</p>
        </Header>

        <Form onSubmit={handleSubmit}>
          <FieldGroup>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="walletAddress">Wallet Address</Label>
            <Input
              type="text"
              id="walletAddress"
              name="walletAddress"
              value={formData.walletAddress}
              onChange={handleChange}
              placeholder="0x..."
              required
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="amount">Amount (ETH)</Label>
            <Select
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            >
              <option value="0.1">0.1 ETH</option>
              <option value="0.5">0.5 ETH</option>
              <option value="1">1 ETH</option>
              <option value="5">5 ETH</option>
            </Select>
          </FieldGroup>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Processing...' : 'Deposit Now'}
          </Button>
        </Form>

        <TermsText>
          <p>By depositing, you agree to our Terms of Service</p>
        </TermsText>
      </Container>
    </Section>
  );
};

export default WalletForm;
