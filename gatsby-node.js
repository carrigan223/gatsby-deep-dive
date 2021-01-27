//using gatsby node we are pulling data from datoCMS for page creation of our projects 
const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(`./src/templates/project.js`);

  const query = `{
    projects:allDatoCmsTitle {
      edges {
        node {
          title
          slug
          description
        }
        next {
          slug
        }
      }
    }
  }`;

  const result = await graphql(query);

  const projects = result.data.projects.edges;

  const createProjectPage = (project) => {
    const next = project.next || projects[0].node;
    createPage({
      path: `/projects/${project.node.slug}`,
      component: projectTemplate,
      context: {
        nextSlug: next.slug,
        ...project.node,
      },
    });
  };

  projects.forEach(createProjectPage);
};
