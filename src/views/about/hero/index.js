import React, { useRef, useState, useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useCurtainsEvent, useCurtains, ShaderPass, FXAAPass } from 'react-curtains';
import { firstPassFs, secondPassFs } from '@components/SinglePlane/shaders/post';
import SinglePlane from '@components/SinglePlane';
import HeroImage from '@images/hero.png';

import {
  HeroWrapper,
  RowWrapper,
  BigTitle,
  Row,
  LabelWrapper,
  LabelText,
  ImageWrapper,
} from './style';
import { Container } from '@styles';

const Hero = ({ data }) => {
  const planesDeformations = useRef(0);
  const [mobileImage, setMobileImage] = useState(true);
  const [planes, setPlanes] = useState([]);
  let scrollEffect = 0;

  useEffect(() => {
    if (typeof window !== 'undefined' && window.scroll.scroll) {
      if (window.scroll.scroll.isMobile) {
        setMobileImage(true);
      } else {
        setMobileImage(false);
      }
    }
  }, [mobileImage]);

  useCurtainsEvent(
    'onRender',
    curtains => {
      if (window.scroll.scroll.isMobile) {
        scrollEffect = curtains.lerp(scrollEffect, 0, 0.05);
      }

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
      <Container>
        <RowWrapper>
          <BigTitle data-scroll data-scroll-speed={3} data-scroll-direction="horizontal">
            About me
          </BigTitle>
        </RowWrapper>
        <Row>
          <ImageWrapper>
            {mobileImage ? (
              <GatsbyImage image={data.hero.childImageSharp.gatsbyImageData} />
            ) : (
              <>
                <SinglePlane onPlaneReady={onPlaneReady} image={HeroImage} alt="NYC" />

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
          <LabelWrapper>
            <LabelText>
              "Wow, he looks young! Wait, how old is he? Why did he use this photo it looks awful?"
            </LabelText>
          </LabelWrapper>
        </Row>
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
