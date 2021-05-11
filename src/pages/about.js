import React from 'react';
import { graphql } from 'gatsby';

import { SmoothScroll } from '@components';
import { Hero, About } from '@views/about';

const AboutPage = ({ data, location }) => {
  return (
    <>
      <SmoothScroll callbacks={location} />

      <Hero data={data} />
      <About />
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
