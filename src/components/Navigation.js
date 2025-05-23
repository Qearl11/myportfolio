import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';

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

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    height: auto;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    padding: 1rem 2rem;
    gap: 0;
    z-index: 999;
    align-items: flex-end;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(167, 139, 250, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
      z-index: -1;
    }

    &::after {
      content: '';
      position: absolute;
      top: 1rem;
      right: 2rem;
      width: 120px;
      height: 200px;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      z-index: -1;
    }
  }
`;

const NavLink = styled.a`
  color: #666;
  text-decoration: none;
  padding: 0.5rem 0;
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s ease;
  cursor: pointer;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 1rem;
    width: 150px;
    text-align: right;
    
    &:hover {
      color: #a78bfa;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #a78bfa, #ddd6fe);
    transition: width 0.3s ease;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
  
  &:hover {
    color: #a78bfa;
    
    &::after {
      width: 100%;
    }
  }
  
  &.active {
    &:hover {
      color: #a78bfa;
      
      &::after {
        width: 100%;
      }
    }
  }
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

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  z-index: 1001;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
  
  &:hover {
    color: #a78bfa;
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isResumePage = location.pathname === '/resume' || location.pathname === '/chat';

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = '/#/';
      localStorage.setItem('scrollTarget', sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 80; // 导航栏高度加一些额外空间
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navHeight,
          behavior: 'smooth'
        });
        localStorage.setItem('scrollTarget', sectionId);
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && localStorage.getItem('scrollTarget')) {
      const sectionId = localStorage.getItem('scrollTarget');
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 80; // 导航栏高度加一些额外空间
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navHeight,
          behavior: 'smooth'
        });
      }
    }
  }, [location.pathname]);

  const navItems = [
    { id: 'projects', label: '项目', onClick: () => scrollToSection('projects') },
    { id: 'about', label: '关于我', onClick: () => scrollToSection('about') },
    { id: 'contact', label: '联系方式', onClick: () => scrollToSection('contact') },
  ];

  const handleHomeClick = () => {
    localStorage.removeItem('scrollTarget');
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <NavContainer>
      <NavContent>
        <Logo to="/" onClick={handleHomeClick}>
          <span className="english">Rachel Wang</span>
        </Logo>

        {!isResumePage && (
          <MenuButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </MenuButton>
        )}
        {isResumePage ? (
          <BackButton to="/" onClick={() => localStorage.removeItem('scrollTarget')}>
            <ArrowBackIcon />
            首页
          </BackButton>
        ) : (
          <NavLinks isOpen={isOpen}>
            {navItems.map(item => (
              <NavLink 
                key={item.id}
                onClick={item.onClick}
                className={location.pathname === '/' && localStorage.getItem('scrollTarget') === item.id ? 'active' : ''}
              >
                {item.label}
              </NavLink>
            ))}
          </NavLinks>
        )}
      </NavContent>
    </NavContainer>
  );
};

export default Navigation;
