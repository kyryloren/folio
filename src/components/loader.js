import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { mixins, Overflow } from '@styles';
import { useRandomInterval } from '@hooks';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
  background-color: var(--text);
  color: var(--background);
`;
const Text = styled.p`
  ${mixins.smallText};
  margin: 0;

  span {
    margin-left: 2vw;
  }
`;

const Loader = ({ setIsLoading }) => {
  const [percent, setPercent] = useState(0);
  let minMax = percent < 97 ? [10, 50] : [250, 500];

  let tl = gsap.timeline();
  let sectionContainer = useRef(null);
  let textRef = useRef(null);

  useEffect(() => {
    if (percent === 100) {
      tl.to(textRef, { opacity: 0, ease: 'power4.in', duration: 1, delay: 0.4 }).to(
        sectionContainer,
        {
          height: 0,
          ease: 'power4.inOut',
          duration: 1.2,
          onComplete: () => setIsLoading(false),
        },
      );
    }
  }, [percent]);

  useRandomInterval(() => percent < 100 && setPercent(percent => percent + 1), ...minMax);

  return (
    <LoaderWrapper ref={el => (sectionContainer = el)}>
      <Overflow>
        <Text ref={el => (textRef = el)}>
          Your experience is loading... <span>{percent}%</span>
        </Text>
      </Overflow>
    </LoaderWrapper>
  );
};

export default Loader;
