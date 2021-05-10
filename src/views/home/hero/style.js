import styled from 'styled-components';
import { mixins } from '@styles';

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

  ${mixins.largeTitle};
`;
export const FlexBetween = styled.div`
  ${mixins.flexBetween};
`;
export const LabelText = styled.p`
  font-size: 1.5vw;
  margin-top: 0;
`;
export const ImageWrapper = styled.div`
  position: absolute;
  width: 30vw;
  height: 50vw;
  right: 3vw;
  bottom: 22vw;
`;
