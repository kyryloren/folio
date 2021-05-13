import React, { useEffect, useState, useRef } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useCurtainsEvent, useCurtains, ShaderPass, FXAAPass } from 'react-curtains';
import { firstPassFs, secondPassFs } from '@components/SinglePlane/shaders/post';
import SinglePlane from '@components/SinglePlane';
import NYCImage from '@images/nyc.jpg';
import { gsap } from 'gsap';

import { HeroWrapper, BigTitle, RowWrapper, FlexBetween, LabelText, ImageWrapper } from './style';
import { Overflow } from '@styles';

const Hero = ({ data }) => {
  const planesDeformations = useRef(0);
  const [mobileView, setMobileView] = useState(true);
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
      { yPercent: 0, rotationX: 0, rotationY: 0, rotationZ: 0, ease: 'power3.inOut' },
      0.2,
    ).staggerFromTo(
      opacityAnim.current,
      2,
      { opacity: 0 },
      { opacity: 1, ease: 'power3.inOut' },
      0.2,
      '-=3',
    );
  }, [tl]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.scroll.scroll) {
      if (window.scroll.scroll.isMobile) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    }
  }, [setMobileView]);

  useCurtainsEvent(
    'onRender',
    curtains => {
      if (window.scroll.scroll.isMobile) {
        scrollEffect = curtains.lerp(scrollEffect, 0, 0.05);
      }

      // update our planes deformation
      // increase/decrease the effect
      planesDeformations.current = curtains.lerp(planesDeformations.current, 0, 0.5);

      // update planes deformations
      planes.forEach(plane => {
        plane.uniforms.planeDeformation.value = planesDeformations.current;
      });
    },
    [planes],
  );

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

  useCurtainsEvent('onContextLost', curtains => {
    curtains.restoreContext();
  });

  useCurtains(curtains => {
    if (!window.scroll.scroll.isMobile) {
      curtains.disableDrawing();

      window.scroll.on('scroll', func => {
        curtains.updateScrollValues(func.scroll.x, func.scroll.y);

        curtains.needRender();
      });
    }
  });

  const onPlaneReady = plane => {
    setPlanes(planes => [...planes, plane]);
  };

  // post processing
  const firstPassUniforms = {
    timer: {
      name: 'uTimer',
      type: '1f',
      value: 0,
    },
    displacement: {
      name: 'uDisplacement',
      type: '1f',
      value: 0,
    },
  };

  const secondPassUniforms = {
    scrollEffect: {
      name: 'uScrollEffect',
      type: '1f',
      value: 0,
    },
  };

  const onFirstPassReady = shaderPass => {
    shaderPass.loader.loadImage('https://www.curtainsjs.com/examples/medias/displacement.jpg', {
      sampler: 'displacementTexture',
    });
  };

  const onFirstPassRender = shaderPass => {
    // update the uniforms
    shaderPass.uniforms.timer.value++;
    shaderPass.uniforms.displacement.value = planesDeformations.current / 60;
  };

  const onSecondPassRender = shaderPass => {
    // update the uniforms
    shaderPass.uniforms.scrollEffect.value = Math.abs(planesDeformations.current);
  };

  return (
    <HeroWrapper>
      <RowWrapper>
        <FlexBetween>
          <Overflow>
            <BigTitle data-scroll data-scroll-speed={1} data-scroll-direction="horizontal" crtv>
              <span ref={el => (lineWords.current[0] = el)}>Crtv.</span>
            </BigTitle>
          </Overflow>
          <Overflow>
            <LabelText ref={el => (opacityAnim.current[0] = el)} crtv>
              Creating interactive
              <br />
              web projects since 2016
            </LabelText>
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
        <FlexBetween>
          <Overflow>
            <LabelText ref={el => (opacityAnim.current[1] = el)}>
              Working world
              <br />
              wide babyyyy
            </LabelText>
          </Overflow>
          <Overflow>
            <BigTitle data-scroll data-scroll-speed={-2} data-scroll-direction="horizontal" loper>
              <span ref={el => (lineWords.current[3] = el)}>Loper</span>
            </BigTitle>
          </Overflow>
        </FlexBetween>
      </RowWrapper>
      <div style={{ zIndex: 2 }}>
        <Overflow>
          <ImageWrapper ref={el => (opacityAnim.current[2] = el)}>
            {mobileView ? (
              <GatsbyImage image={data.nyc.childImageSharp.gatsbyImageData} alt="NYC" />
            ) : (
              <>
                <SinglePlane onPlaneReady={onPlaneReady} image={NYCImage} alt="NYC" />

                <ShaderPass
                  fragmentShader={firstPassFs}
                  uniforms={firstPassUniforms}
                  onReady={onFirstPassReady}
                  onRender={onFirstPassRender}
                />

                <ShaderPass
                  fragmentShader={secondPassFs}
                  uniforms={secondPassUniforms}
                  onRender={onSecondPassRender}
                />

                <FXAAPass />
              </>
            )}
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
