import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { media } from '@styles';

export const GallerySection = styled.section`
  position: relative;
  padding-top: 10vw;
  padding-bottom: 10vw;
`;
export const RandomImageContainer = styled.div`
  width: 100%;
  display: flex;
  :nth-child(3n + 1) {
    justify-content: flex-end;
  }
  :not(:first-child) {
    padding-top: 10vw;
  }
`;
export const RandomImage = styled(GatsbyImage)`
  position: relative;
  width: 70%;
  ${media.tablet`width: 100%;`};
`;
