import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { media, mixins } from '@styles';

export const HeroSection = styled.section`
  position: relative;
  padding-top: 10vw;
  padding-bottom: 10vw;
`;
export const ProjectTitle = styled.h1`
  ${mixins.largeTitle};
  font-size: 20vw;
  text-align: center;
  margin: 0;
`;
export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 80vh;
`;
export const StyledImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
`;
