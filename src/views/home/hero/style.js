import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mixins } from '@styles';

export const HeroWrapper = styled.section`
  width: 100%;
  padding: 10vw 0;

  span {
    display: inline-block;
  }
`;
export const BigTitle = styled(motion.h1)`
  font-size: 19.7vw;

  ${mixins.largeTitle};
`;
export const FlexBetween = styled.div`
  ${mixins.flexBetween};
`;
export const FlexCenter = styled.div`
  ${mixins.flexCenter};

  div :first-child {
    margin-right: 4vw;
  }
`;
export const Label = styled.p`
  font-size: 2vw;

  ${mixins.largeTitle};
`;
export const LabelText = styled.p`
  font-size: 1.5vw;
  margin-top: 0;
`;
