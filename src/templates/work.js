/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import WorkPageTemplate from '../components/WorkPageTemplate';
import Layout from '../components/Layout';

const WorkPage = (props) => {
  const {
    data: {
      markdownRemark: {
        frontmatter: {
          title,
          subtitle,
          meta_title,
          meta_description,
          projects,
        },
      },
    },
  } = props;

  return (
    <Layout>
      <WorkPageTemplate
        title={title}
        subtitle={subtitle}
        meta_title={meta_title}
        meta_description={meta_description}
        projects={projects}
      />
    </Layout>
  );
};

WorkPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default WorkPage;

export const workPageQuery = graphql`
  query WorkPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        projects {
          summary {
            company
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            blurb
            services
          }
        }
      }
    }
  }
`;
