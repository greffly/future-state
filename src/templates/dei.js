/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import DeiPageTemplate from '../components/DeiPageTemplate';
import Layout from '../components/Layout';

const DeiPage = (props) => {
  const {
    data: {
      markdownRemark: {
        frontmatter: { title, subtitle, meta_title, meta_description },
      },
    },
  } = props;

  return (
    <Layout>
      <DeiPageTemplate
        title={title}
        subtitle={subtitle}
        meta_title={meta_title}
        meta_description={meta_description}
      />
    </Layout>
  );
};

DeiPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default DeiPage;

export const deiPageQuery = graphql`
  query DeiPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
      }
    }
  }
`;
