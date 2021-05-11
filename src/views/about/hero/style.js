import styled from 'styled-components';
import { mixins } from '@styles';

export const HeroWrapper = styled.section`
  width: 100%;
  padding: 20vw 0 0;
  overflow-x: hidden;
  position: relative;

  span {
    display: inline-block;
  }
`;
export const RowWrapper = styled.div`
  transform: rotate(10deg);
  margin: 0;
`;
export const BigTitle = styled.h1`
  font-size: 28vw;
  white-space: nowrap;

  ${mixins.largeTitle};
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: -10vw;
`;
export const LabelWrapper = styled.div`
  max-width: 23%;
  margin-left: 5vw;
`;
export const LabelText = styled.p`
  ${mixins.smallText};
  margin: 0;
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 50vw;
  height: 70vw;
  left: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
