import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  // background: rgba(255, 255, 255, 0.95);
  background: #f8f5ff;
  backdrop-filter: blur(8px);
  padding: 1rem 0;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -1px 20px rgba(0, 0, 0, 0.05);
`;

const FooterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FooterText = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin: 0;
  text-align: center;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const FooterLink = styled(Link)`
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #a78bfa;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          {new Date().getFullYear()} Xuechun Wang
        </FooterText>
        
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
