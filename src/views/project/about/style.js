import styled from 'styled-components';
import { media, mixins } from '@styles';

export const AboutSection = styled.section`
  position: relative;
  padding-top: 10vw;
  padding-bottom: 10vw;
`;
export const Row = styled.div`
  display: flex;
  ${media.tablet`flex-direction: column;`};
`;
export const Col = styled.div`
  flex: ${props => (props.rest ? '50% 0' : '0 50%')};
  ${media.tablet`flex: 100%;`};
`;
export const ContentWrapper = styled.div`
  max-width: 70%;
  a {
    top: 2vw;
    ${media.tablet`font-size: 16px;`};
  }
  ${media.desktop`max-width: 80%;`};
  ${media.tablet`max-width: 100%;`};
`;
export const AboutText = styled.p`
  color: var(--text);
  font-size: ${props => (props.big ? '2.5vw' : '2vw')};
  line-height: 110%;
  margin-top: 0;
  ${props =>
    props.big &&
    `
      text-transform: uppercase;
      font-weight: 500;
    `}
  ${media.tablet`font-size: 36px;`};
  ${media.thone`font-size: 24px;`};
`;
export const ProjectCaption = styled.p`
  ${mixins.smallText};

  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
`;
export const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.margin && media.tablet`margin-top: 8vw;`}
  ${props => props.margin && media.thone`margin-top: 12vw;`}
`;
export const ApproachCol = styled.div`
  margin-top: 5vw;
  ${media.tablet`margin-top: 8vw;`};
`;
export const InformationText = styled.p`
  ${mixins.smallText};
  ${media.desktop`font-size: 1.6vw;`};
  ${media.tablet`font-size: 18px;`};
`;
export const BiggerText = styled.p`
  ${mixins.midText};
  ${media.desktop`font-size: 1.6vw;`};
  ${media.tablet`font-size: 18px;`};
`;
