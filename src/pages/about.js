import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import { SmoothScroll, Contact } from '@components';
import { Hero, About } from '@views/about';

const AboutPage = ({ data, location }) => {
  return (
    <>
      <Helmet title="About" />
      <SmoothScroll callbacks={location} />

      <Hero data={data} />
      <About />
      <Contact />
    </>
  );
};

export default AboutPage;

export const query = graphql`
  {
    hero: file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
