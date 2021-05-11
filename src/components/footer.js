import React from 'react';
import { media } from '@styles';
import styled from 'styled-components';

const FixedWrapper = styled.div`
  position: relative;
`;
const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 2.75vw;
`;
const StyledText = styled.span`
  color: var(--text);
  font-size: 1.1vw;
  user-select: none;
  ${media.tablet`font-size: 16px;`};
`;

const Footer = () => {
  const d = new Date();
  const y = d.getFullYear();

  return (
    <FixedWrapper>
      <StyledFooter>
        <small>
          <StyledText>&copy; {y}</StyledText>
        </small>
      </StyledFooter>
    </FixedWrapper>
  );
};

export default Footer;
