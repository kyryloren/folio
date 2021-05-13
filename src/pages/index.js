import React from 'react';
import { graphql } from 'gatsby';

import { SmoothScroll, Contact } from '@components';
import { Hero, Projects } from '@views/home';

const HomePage = ({ data, location }) => {
  const doc = data.allDatoCmsProject.nodes;

  return (
    <>
      <SmoothScroll callbacks={location} />

      <Hero data={data} />
      <Projects data={doc} />
      <Contact />
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
