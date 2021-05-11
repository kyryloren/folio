import styled from 'styled-components';
import { Link } from 'gatsby';
import { mixins, media } from '@styles';

export const ProjectsSection = styled.section`
  position: relative;
  width: 100%;
  padding: 10vw 0;
`;
export const ContentWrapper = styled.div`
  margin-left: -4vw;

  ${media.phablet`
    margin-left: 0;
    padding-top: 5vw;
  `};
`;
export const ContentContainer = styled.div`
  max-width: 75%;

  ${media.phablet`max-width: 100%;`};
`;
export const ParaWrapper = styled.div`
  ${mixins.smallText};
  max-width: 80%;
`;
export const TitleWrapper = styled.div`
  display: flex;
`;
export const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Title = styled.h1`
  font-size: 9vw;

  ${mixins.largeTitle};
`;
export const ParaText = styled.p`
  font-size: inherit;
  text-indent: 8vw;
  text-transform: uppercase;
  line-height: 110%;
  margin-bottom: 6vw;
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 40vw;
  height: 100vw;
  left: 0;
  ${media.phablet`width: 89vw;`};

  img,
  div {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const ProjectWrapper = styled(Link)`
  ${mixins.flexBetween};
  padding: 10vw 0;
  color: inherit;
  text-decoration: none;
  ${media.phablet`flex-direction: column;`};

  :nth-child(2n) {
    flex-direction: row-reverse;
    ${media.phablet`flex-direction: column;`};

    ${ContentWrapper} {
      display: flex;
      justify-content: flex-end;
      margin-right: -4vw;

      ${media.phablet`margin-right: 0;`};
    }

    ${TitleWrapper} {
      justify-content: flex-end;

      ${media.phablet`justify-content: unset;`};
    }

    ${ContentContainer} {
      margin-left: auto;
    }

    ${FlexEnd} {
      justify-content: flex-start;

      ${media.phablet`justify-content: flex-end;`};
    }
  }
`;
