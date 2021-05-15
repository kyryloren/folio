import React, { useState, useRef, useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ShaderPass, FXAAPass } from 'react-curtains';
import { firstPassFs, secondPassFs } from '@components/SinglePlane/shaders/post';
import SinglePlane from '@components/SinglePlane';

import {
  ProjectsSection,
  ProjectWrapper,
  ImageWrapper,
  ContentWrapper,
  ContentContainer,
  Title,
  TitleWrapper,
  ParaText,
  ParaWrapper,
} from './style';
import { Link } from '@styles';

const Projects = ({ data }) => {
  console.log(data);
  const planesDeformations = useRef(0);
  const [mobileView, setMobileView] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.scroll.scroll) {
      if (window.scroll.scroll.isMobile) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    }
  }, [setMobileView]);

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
    <ProjectsSection>
      {data.map((node, i) => (
        <ProjectWrapper key={i} to={`/${node.slug}`}>
          <div style={{ zIndex: 1 }}>
            <ImageWrapper>
              {mobileView ? (
                <GatsbyImage image={node.hero.gatsbyImageData} alt={node.hero.alt} />
              ) : (
                <>
                  <SinglePlane image={node.hero.url} alt={node.hero.alt} />

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
          </div>
          <ContentWrapper>
            <ContentContainer>
              <TitleWrapper>
                <Title>{node.title}</Title>
              </TitleWrapper>
              <ParaWrapper>
                <ParaText>{node.description}</ParaText>
                <Link to={`/${node.slug}`}>Preview project</Link>
              </ParaWrapper>
            </ContentContainer>
          </ContentWrapper>
        </ProjectWrapper>
      ))}
    </ProjectsSection>
  );
};

export default Projects;
