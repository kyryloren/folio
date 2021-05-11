import React from 'react';
import { graphql } from 'gatsby';

import { Hero, Projects } from '@views/home';

const HomePage = ({ data }) => {
  const doc = data.allDatoCmsProject.nodes;

  return (
    <>
      <Hero data={data} />
      <Projects data={doc} />
    </>
  );
};

export default HomePage;

export const query = graphql`
  {
    allDatoCmsProject(sort: { fields: meta___firstPublishedAt, order: DESC }) {
      nodes {
        slug
        title
        description
        hero {
          gatsbyImageData(layout: FULL_WIDTH)
          alt
          url
        }
      }
    }
    nyc: file(relativePath: { eq: "nyc.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
