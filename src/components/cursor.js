import React, { useState, useEffect, useContext } from 'react';
import { CursorContext } from './CursorContext';
import styled from 'styled-components';

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

const StyledImage = styled.img`
  position: absolute;
  width: 20vw;
  transition: opacity 0.3s ease;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
`;
const StyledCursor = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid var(--text);
  border-radius: 100%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 150ms ease;
  transition-property: background-color, opacity, transform, mix-blend-mode, width, height;
  z-index: 9999;
  mix-blend-mode: difference;

  ${props => props.hide && `opacity: 0;`};
  ${props =>
    props.linkHovered &&
    `
    transform: translate(-50%, -50%) scale(1.25);
    background-color: var(--text);
    width: 80px;
    height: 80px;
  `};
  ${props =>
    props.clicked &&
    `
    transform: translate(-50%, -50%) scale(0.9);
    background-color: var(--text);
    width: 50px;
    height: 50px;
  `};
`;

const Cursor = ({ location, loading }) => {
  const { image } = useContext(CursorContext);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setLinkHovered(false);

    setTimeout(() => {
      addEventListeners();
      handleLinkHoverEvents();
      return () => removeEventListeners();
    }, 1000);
  }, [location.pathname, loading]);

  const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseenter', onMouseEnter);
    document.removeEventListener('mouseleave', onMouseLeave);
    document.removeEventListener('mousedown', onMouseDown);
    document.removeEventListener('mouseup', onMouseUp);
  };

  const onMouseMove = e => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const handleLinkHoverEvents = () => {
    document.querySelectorAll('a').forEach(el => {
      el.addEventListener('mouseout', () =>
        el.id === 'cursor_hide' ? setHidden(false) : setLinkHovered(false),
      );
      el.addEventListener('mouseover', () =>
        el.id === 'cursor_hide' ? setHidden(true) : setLinkHovered(true),
      );
    });
  };

  if (typeof navigator !== 'undefined' && isMobile()) return null;

  return (
    <>
      <StyledCursor
        clicked={clicked}
        hide={hidden}
        linkHovered={linkHovered}
        style={{ top: `${position.y}px`, left: `${position.x}px` }}
      />
      <StyledImage
        src={image && image.url}
        alt={image && image.alt}
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
          opacity: image && image.hovering ? 1 : 0,
        }}
      />
    </>
  );
};

export default Cursor;
