import React, { useEffect, useState, useRef } from 'react';
import { useCurtainsEvent, useCurtains } from 'react-curtains';
import { gsap } from 'gsap';
import { HeroWrapper, BigTitle, RowWrapper, FlexBetween, LabelText, ImageWrapper } from './style';
import SinglePlane from './SinglePlane';
import { Container, Overflow } from '@styles';

const Hero = ({ data }) => {
  const planesDeformations = useRef(0);
  const [planes, setPlanes] = useState([]);
  let scrollEffect = 0;
  let lineWords = useRef([]);
  let opacityAnim = useRef([]);
  let tl = gsap.timeline();

  useEffect(() => {
    tl.staggerFromTo(
      lineWords.current,
      1.8,
      { yPercent: 100, rotationZ: 90, rotationY: 90 },
      { yPercent: 0, rotationX: 0, rotationY: 0, rotationZ: 0, ease: 'power3.inOut', delay: 1 },
      0.2,
    ).staggerFromTo(
      opacityAnim.current,
      2,
      { opacity: 0 },
      { opacity: 1, ease: 'power3.inOut', delay: 1 },
      0.2,
      '-=3',
    );
  }, [tl]);

  useCurtainsEvent(
    'onRender',
    curtains => {
      // update our planes deformation
      // increase/decrease the effect
      planesDeformations.current = curtains.lerp(planesDeformations.current, 0, 0.075);

      // update planes deformations
      planes.forEach(plane => {
        plane.uniforms.planeDeformation.value = planesDeformations.current;
      });
    },
    [planes],
  );

  useCurtainsEvent('onRender', curtains => {
    if (window.scroll.isMobile) {
      scrollEffect = curtains.lerp(scrollEffect, 0, 0.05);
    }
  });

  useCurtainsEvent('onScroll', curtains => {
    // get scroll deltas to apply the effect on scroll
    const delta = curtains.getScrollDeltas();

    // invert value for the effect
    delta.y = -delta.y;

    // threshold
    if (delta.y > 60) {
      delta.y = 60;
    } else if (delta.y < -60) {
      delta.y = -60;
    }

    if (Math.abs(delta.y) > Math.abs(planesDeformations.current)) {
      planesDeformations.current = curtains.lerp(planesDeformations.current, delta.y, 0.5);
    }
  });

  useCurtains(curtains => {
    if (!window.scroll.isMobile) {
      window.scroll.on('scroll', func => {
        curtains.disableDrawing();
        curtains.updateScrollValues(func.scroll.x, func.scroll.y);

        curtains.needRender();
      });
    }
  });

  const onPlaneReady = plane => {
    setPlanes(planes => [...planes, plane]);
  };

  return (
    <HeroWrapper>
      <RowWrapper>
        <FlexBetween>
          <Overflow>
            <BigTitle data-scroll data-scroll-speed={1} data-scroll-direction="horizontal">
              <span ref={el => (lineWords.current[0] = el)}>Crtv.</span>
            </BigTitle>
          </Overflow>
          <Overflow>
            <Container>
              <LabelText ref={el => (opacityAnim.current[0] = el)}>
                Creating interactive
                <br />
                web projects since 2016
              </LabelText>
            </Container>
          </Overflow>
        </FlexBetween>
      </RowWrapper>
      <RowWrapper>
        <div style={{ marginLeft: '-8vw' }}>
          <Overflow>
            <BigTitle data-scroll data-scroll-speed={-1} data-scroll-direction="horizontal">
              <span ref={el => (lineWords.current[1] = el)}>Designer</span>
            </BigTitle>
          </Overflow>
        </div>
      </RowWrapper>
      <RowWrapper>
        <Overflow>
          <BigTitle data-scroll data-scroll-speed={2} data-scroll-direction="horizontal">
            <span ref={el => (lineWords.current[2] = el)}>And Deve</span>
          </BigTitle>
        </Overflow>
      </RowWrapper>
      <RowWrapper>
        <Container>
          <FlexBetween>
            <Overflow>
              <LabelText ref={el => (opacityAnim.current[1] = el)}>
                Working world
                <br />
                wide babyyyy
              </LabelText>
            </Overflow>
            <Overflow>
              <BigTitle data-scroll data-scroll-speed={-1} data-scroll-direction="horizontal">
                <span ref={el => (lineWords.current[3] = el)}>Loper</span>
              </BigTitle>
            </Overflow>
          </FlexBetween>
        </Container>
      </RowWrapper>
      <div data-scroll data-scroll-speed={2} style={{ zIndex: 2 }}>
        <Overflow>
          <ImageWrapper ref={el => (opacityAnim.current[2] = el)}>
            <SinglePlane onPlaneReady={onPlaneReady} />
          </ImageWrapper>
        </Overflow>
      </div>
      <RowWrapper>
        <Overflow>
          <BigTitle data-scroll data-scroll-speed={1} data-scroll-direction="horizontal">
            <span ref={el => (lineWords.current[4] = el)}>Based</span>
          </BigTitle>
        </Overflow>
      </RowWrapper>
      <RowWrapper>
        <Overflow>
          <BigTitle data-scroll data-scroll-speed={-1} data-scroll-direction="horizontal">
            <span ref={el => (lineWords.current[5] = el)}>In NYC</span>
          </BigTitle>
        </Overflow>
      </RowWrapper>
    </HeroWrapper>
  );
};

export default Hero;
