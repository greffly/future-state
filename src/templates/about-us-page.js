/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import AboutUsTemplate from '../components/AboutUsTemplate';
import Layout from '../components/Layout';

const AboutUs = (props) => {
  const {
    data: {
      markdownRemark: {
        frontmatter: {
          title,
          meta_title,
          meta_description,
          values,
          quotes,
          diversity,
          teamMembers,
        },
      },
    },
  } = props;

  return (
    <Layout>
      <AboutUsTemplate
        title={title}
        meta_title={meta_title}
        meta_description={meta_description}
        values={values}
        quotes={quotes}
        diversity={diversity}
        teamMembers={teamMembers}
      />
    </Layout>
  );
};

AboutUs.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default AboutUs;

export const aboutUsQuery = graphql`
  query AboutUs($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        values
        quotes {
          blurbs {
            author
            title
            text
          }
        }
        diversity
        teamMembers {
          members {
            name
            title
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
          }
        }
      }
    }
  }
`;
