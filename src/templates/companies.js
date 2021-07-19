/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import CompanyPageTemplate from '../components/CompanyPageTemplate';
import Layout from '../components/Layout';

const CompanyPage = (props) => {
  const {
    data: {
      markdownRemark: {
        frontmatter: {
          title,
          subtitle,
          meta_title,
          meta_description,
          save_time,
          talent_members,
          roundedImageClassName,
          quotes,
          we_find_your_person,
        },
      },
    },
  } = props;

  return (
    <Layout>
      <CompanyPageTemplate
        title={title}
        subtitle={subtitle}
        meta_title={meta_title}
        meta_description={meta_description}
        save_time={save_time}
        talent_members={talent_members}
        roundedImageClassName={roundedImageClassName}
        quotes={quotes}
        we_find_your_person={we_find_your_person}
      />
    </Layout>
  );
};

CompanyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default CompanyPage;

export const companyPageQuery = graphql`
  query CompanyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        heading
        save_time
        talent_members {
          members {
            photo
            name
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
        we_find_your_person
      }
    }
  }
`;
