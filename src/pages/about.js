import React from 'react';
import { graphql } from 'gatsby';

import { Hero, About } from '@views/about';

const AboutPage = ({ data }) => {
  return (
    <>
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
