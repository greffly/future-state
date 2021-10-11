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
          value_quote,
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
        value_quote={value_quote}
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
        value_quote
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
            linkedin
            email
            image {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
  }
`;
