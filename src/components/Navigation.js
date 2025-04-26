import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0.1rem 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
`;

const NavContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: bold;
  position: relative;
  padding: 0.2rem 0;
  
  .chinese {
    font-family: 'ZCOOL XiaoWei', serif;
  }
  
  .english {
    font-family: 'Dancing Script', cursive, bold;
    margin-left: 0.5rem;
    font-size: 2.5rem;
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
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #666;
  text-decoration: none;
  padding: 0.5rem 0;
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #a78bfa, #ddd6fe);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #a78bfa;
    
    &::after {
      width: 100%;
    }
  }
  
  &.active {
    color: #a78bfa;
    
    &::after {
      width: 100%;
    }
  }
`;

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { id: 'home', label: '首页', path: '/' },
    { id: 'projects', label: '作品集', path: '/#projects' },
    { id: 'about', label: '关于我', path: '/#about' },
    { id: 'contact', label: '联系方式', path: '/#contact' }
  ];

  return (
    <NavContainer>
      <NavContent>
        <Logo to="/">
          <span className="english">Rachel</span>
          <span className="english"> Wang</span>
        </Logo>
        <NavLinks>
          {navItems.map(item => (
            <NavLink 
              key={item.id}
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

export default Navigation;
