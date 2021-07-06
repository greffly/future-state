/* eslint-disable semi */
import React from 'react';
import { Link } from 'gatsby';

const OurWork = (props) => {
  const { posts } = props;

  return (
    <section className='section is-large has-background-grey'>
      <h1 className='has-text-weight-light is-size-2-desktop'>
        OUR <strong>WORK</strong>
      </h1>
      {/* {posts
        .filter((post) => post.node.frontmatter.templateKey === 'article-page')
        .map(({ node: post }) => (
          <div
            className='content'
            style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
            key={post.id}
          >
            <p>
              <Link className='has-text-primary' to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
              <span> &bull; </span>
              <small>{post.frontmatter.date}</small>
            </p>
            <p>
              {post.excerpt}
              <br />
              <br /> */}
      <button className='button is-white has-text-primary'>
        MORE PROJECTS →
      </button>
      {/* </p>
          </div>
        ))} */}
    </section>
  );
};

export default OurWork;
