import React from 'react';
import { Helmet } from 'react-helmet';
import { SmoothScroll } from '@components';

import { Container } from '@styles';
import { Line } from '@views/project/style';
import { Hero, About, Gallery, Pagination } from '@views/project';

const ProjectPage = ({ pageContext, location }) => {
  const { pagination, project } = pageContext;

  return (
    <>
      <Helmet title={project.seo.title} />
      <SmoothScroll callbacks={location} delay />

      <Hero data={project} />
      <About data={project} />
      <Gallery data={project} />
      <Container>
        <Line />
      </Container>
      <Pagination data={pagination[0]} />
    </>
  );
};

export default ProjectPage;
