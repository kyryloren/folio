import styled from 'styled-components';
import { mixins, media } from '@styles';

export const AboutSection = styled.section`
  position: relative;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -15vw;
`;
export const TextWrapper = styled.div`
  max-width: 55%;
`;
export const Text = styled.p`
  ${mixins.midText};
`;
export const SmallTextWrapper = styled.div`
  max-width: 85%;
  padding-top: 3vw;

  ${media.thone`max-width: 100%;`};
`;
export const SmallText = styled.p`
  ${mixins.smallText};
  margin: ${props => (props.mt ? `3vw 0 0` : 0)};

  ${props => props.indent && `text-indent: 8vw;`};
`;
export const Row = styled.div`
  padding-top: 15vw;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  grid-gap: 10vw;

  ${media.thone`
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
    grid-gap: 16px;
  `};
`;
export const Award = styled.div`
  ${mixins.flexBetween};
  border-top: 2px solid var(--text);
  border-bottom: 2px solid var(--text);
  padding: 2vw 0;
`;
