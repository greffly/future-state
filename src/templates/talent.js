/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import TalentPageTemplate from '../components/TalentPageTemplate';
import Layout from '../components/Layout';

const TalentPage = (props) => {
  const {
    data: {
      markdownRemark: {
        frontmatter: {
          title,
          subtitle,
          meta_title,
          meta_description,
          why_us,
          talent_members,
          roundedImageClassName,
          quotes,
          talent_quote,
        },
      },
    },
  } = props;

  return (
    <Layout>
      <TalentPageTemplate
        title={title}
        subtitle={subtitle}
        meta_title={meta_title}
        meta_description={meta_description}
        why_us={why_us}
        talent_members={talent_members}
        roundedImageClassName={roundedImageClassName}
        quotes={quotes}
        talent_quote={talent_quote}
      />
    </Layout>
  );
};

TalentPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default TalentPage;

export const talentPageQuery = graphql`
  query TalentPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        heading
        why_us
        talent_members {
          members {
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            name
            role
            title
          }
        }
        roundedImageClassName
        quotes {
          blurbs {
            author
            title
            text
          }
        }
        talent_quote
      }
    }
  }
`;
