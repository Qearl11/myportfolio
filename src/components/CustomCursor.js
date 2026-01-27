import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const CursorCircle = styled.div`
  width: 35px;
  height: 35px;
  border: 2.2px solid #7E8093;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s, transform 0.1s ease, opacity 0.3s, background-color 0.3s;
  opacity: 0.7;
  box-shadow: 0 0 15px 3px rgba(126, 128, 147, 0.5);
  overflow: hidden;
`;

const CustomCursor = () => {
  const location = useLocation();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Function to handle link hover events
  const handleLinkHoverEvents = () => {
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => setLinkHovered(true));
      el.addEventListener('mouseleave', () => setLinkHovered(false));
    });
  };

  // Setup mouse movement tracking
  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  // Setup link hover detection - rerun this when location changes
  useEffect(() => {
    setLinkHovered(false); // Reset hover state on page change
    
    // Use a small delay to ensure the DOM is fully updated after navigation
    const timer = setTimeout(() => {
      handleLinkHoverEvents();
    }, 100);
    
    return () => {
      clearTimeout(timer);
      // Clean up all previous event listeners to prevent memory leaks
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', () => setLinkHovered(true));
        el.removeEventListener('mouseleave', () => setLinkHovered(false));
      });
    };
  }, [location]); // This effect runs when the location (page) changes

  const cursorCircleStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: `${linkHovered ? 50 : 35}px`,
    height: `${linkHovered ? 50 : 35}px`,
    opacity: hidden ? 0 : (linkHovered ? 0.6 : 0.7),
    borderColor: clicked ? '#9E89A0' : '#7E8093',
    backgroundColor: linkHovered ? 'rgba(174, 152, 182, 0.5)' : 'transparent',
    boxShadow: clicked 
      ? '0 0 20px 4px rgba(158, 137, 160, 0.6)' 
      : (linkHovered 
        ? '0 0 22px 5px rgba(174, 152, 182, 0.5)' 
        : '0 0 15px 3px rgba(126, 128, 147, 0.5)')
  };

  return (
    <CursorCircle style={cursorCircleStyle} />
  );
};

export default CustomCursor;
