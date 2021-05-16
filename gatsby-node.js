const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allDatoCmsProject(sort: { fields: position, order: ASC }) {
        nodes {
          id
          slug
          seo {
            title
          }
          title
          cover {
            gatsbyImageData(layout: FULL_WIDTH)
            alt
          }
          about
          services
          preview
          link
          challenge
          approach
          showResult
          result
          gallery {
            gatsbyImageData(layout: FULL_WIDTH)
            url
          }
        }
      }
    }
  `);

  const allPages = await graphql(`
    {
      allDatoCmsProject(sort: { fields: position, order: ASC }) {
        edges {
          node {
            id
            slug
            title
            cover {
              url
              alt
            }
          }
        }
      }
    }
  `);

  pages.data.allDatoCmsProject.nodes.forEach(node => {
    function getPagination(projects, currentProject) {
      let elements = [];

      projects.forEach((project, index) => {
        const isThisPage = project.node.slug === currentProject.slug;

        if (isThisPage) {
          const next = index + 1 === projects.length ? projects[0].node : projects[index + 1].node;
          const previous =
            index === 0 ? projects[projects.length - 1].node : projects[index - 1].node;

          elements.push({ next, previous });
        }
      });

      return elements;
    }

    let paginationObject = getPagination(allPages.data.allDatoCmsProject.edges, node);

    createPage({
      path: `/${node.slug}`,
      component: path.resolve(__dirname, 'src/templates/project.js'),
      context: {
        project: node,
        pagination: paginationObject,
      },
    });
  });
};

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@views': path.resolve(__dirname, 'src/views'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
      },
    },
  });

  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
