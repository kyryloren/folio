import React from 'react';
import { Helmet } from 'react-helmet';

import { Container, mixins, Link, media } from '@styles';
import { SmoothScroll } from '@components';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  ${mixins.flexCenter};
  text-align: center;
  width: 100vw;
  height: 100vh;
`;
const Title = styled.h1`
  font-size: 26vw;
  ${media.thone`font-size: 50vw;`};
  ${mixins.largeTitle};
`;
const Wrapper = styled.div`
  ${mixins.midText};
  a {
    ${mixins.smallText};
  }
`;
const SubTitle = styled.p`
  margin: 0 0 1vw;
`;

const PageNotFound = ({ location }) => {
  return (
    <>
      <Helmet title="Page Not Found" />
      <SmoothScroll callbacks={location} />

      <SectionWrapper>
        <Container>
          <Title>404</Title>
          <Wrapper>
            <SubTitle>We couldn't find that page</SubTitle>
            <Link to="/">Return home</Link>
          </Wrapper>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default PageNotFound;
