import styled from 'styled-components';
import { mixins, media } from '@styles';

export const HeroWrapper = styled.section`
  width: 100%;
  padding: 15vw 0;
  overflow: hidden;
  position: relative;

  span {
    display: inline-block;
  }
`;
export const RowWrapper = styled.div`
  transform: rotate(-10deg);
  margin-top: -2vw;
`;
export const BigTitle = styled.h1`
  font-size: 28vw;
  white-space: nowrap;

  ${media.phablet`
    ${props => props.crtv && `margin-left: -8vw;`};
    /* ${props => props.loper && `margin-left: -8vw;`}; */
  `};
  ${mixins.largeTitle};
`;
export const FlexBetween = styled.div`
  ${mixins.flexBetween};
`;
export const LabelText = styled.p`
  ${mixins.smallText};
  margin-top: 0;

  ${media.phablet`
    max-width: 80%;
    ${props => props.crtv && `margin-left: auto;`};
  `};
`;
export const ImageWrapper = styled.div`
  position: absolute;
  width: 30vw;
  height: 50vw;
  right: 5vw;
  bottom: 22vw;
`;
