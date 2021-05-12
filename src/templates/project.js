import React from 'react';
import { Helmet } from 'react-helmet';
import { SmoothScroll } from '@components';

import { Hero, About } from '@views/project';

const ProjectPage = ({ pageContext, location }) => {
  const { pagination, project } = pageContext;

  return (
    <>
      <Helmet title={project.seo.title} />
      <SmoothScroll callbacks={location} delay />

      <Hero data={project} />
      <About data={project} />
    </>
  );
};

export default ProjectPage;
