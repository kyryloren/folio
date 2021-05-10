import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const ExternalLink = styled.a`
  color: var(--text);
  pointer-events: auto;
  text-decoration: none;
  font-size: inherit;
  position: relative;
  cursor: pointer;
  z-index: 2;
  text-transform: uppercase;
  :after,
  :before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transition: transform 1.1s cubic-bezier(0.19, 1, 0.22, 1);
  }
  :before {
    transition-delay: 0s;
    transform: scaleX(0);
    transform-origin: left;
  }
  :after {
    transform-origin: right;
  }
  :after,
  :hover:before {
    transition-delay: 0.25s;
  }
  :hover:before {
    transform: scaleX(1);
  }
  :hover:after {
    transition-delay: 0s;
    transform: scaleX(0);
  }
`;
const InternalLink = styled(GatsbyLink)`
  color: var(--text);
  pointer-events: auto;
  text-decoration: none;
  font-size: inherit;
  position: relative;
  cursor: pointer;
  z-index: 2;
  text-transform: uppercase;
  :after,
  :before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transition: transform 1.1s cubic-bezier(0.19, 1, 0.22, 1);
  }
  :before {
    transition-delay: 0s;
    transform: scaleX(0);
    transform-origin: left;
  }
  :after {
    transform-origin: right;
  }
  :after,
  :hover:before {
    transition-delay: 0.25s;
  }
  :hover:before {
    transform: scaleX(1);
  }
  :hover:after {
    transition-delay: 0s;
    transform: scaleX(0);
  }
`;

const Link = props => {
  const { href, to, target, children, ...rest } = props;

  if (to)
    return (
      <InternalLink to={to} {...rest}>
        {children}
      </InternalLink>
    );

  if (href)
    return (
      <ExternalLink
        href={href}
        target={target || '_blank'}
        rel={!target ? 'noopener noreferrer' : undefined}
        {...rest}>
        {children}
      </ExternalLink>
    );

  return;
};

export default Link;
