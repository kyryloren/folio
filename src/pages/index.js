import React from 'react';
import { graphql } from 'gatsby';

import { Hero } from '@views/home';

const HomePage = ({ data }) => {
  return (
    <>
      <Hero />
    </>
  );
};

export default HomePage;

export const query = graphql`
  {
    hero: file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
