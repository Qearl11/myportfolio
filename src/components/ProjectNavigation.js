import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0.5rem 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  height: 70px;

  @media (max-width: 768px) {
    height: 60px;
  }
`;

const NavContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: bold;
  position: relative;
  padding: 0.2rem 0;
  z-index: 1001;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  
  .english {
    font-family: 'Dancing Script', cursive, bold;
    font-size: 2.5rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  &:hover {
    transform: scale(1.1);
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const BackButton = styled(Link)`
  color: #666;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #a78bfa;
  }

  svg {
    font-size: 1.2rem;
  }
`;

const NavButton = styled.button`
  color: #666;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    color: #a78bfa;
    background: rgba(167, 139, 250, 0.1);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const ProjectNavigation = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <NavContainer>
      <NavContent>
        <Logo to="/">
          <span className="english">Rachel Wang</span>
        </Logo>
        <NavButtons>
          <BackButton to="/">
            <ArrowBackIcon />
            首页
          </BackButton>
          {showScrollTop && (
            <NavButton onClick={scrollToTop}>
              <KeyboardArrowUpIcon />
              回到顶部
            </NavButton>
          )}
        </NavButtons>
      </NavContent>
    </NavContainer>
  );
};

export default ProjectNavigation;
