import React from 'react';
import { Container } from '@styles';
import { HeroSection, ProjectTitle, ImageWrapper, StyledImage } from './style';

const Hero = ({ data }) => {
  return (
    <HeroSection>
      <Container>
        <ProjectTitle>{data.title}</ProjectTitle>
        <ImageWrapper>
          <StyledImage
            data-scroll
            data-scroll-speed={-1}
            image={data.cover.gatsbyImageData}
            alt={data.cover.alt}
          />
        </ImageWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
