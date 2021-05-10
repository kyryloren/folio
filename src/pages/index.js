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
    allDatoCmsProject {
      nodes {
        slug
        title
        description
        hero {
          alt
          url(imgixParams: { q: 25 })
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
