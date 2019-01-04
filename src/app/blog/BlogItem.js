import React from 'react'
import BlogNav from './shared/BlogNav'
import BlogContent from './shared/BlogContent'


const BlogItem = (props) => (
  <BlogContent limit={150} {...props}>
    <BlogNav
      date={props.date}
      to={{
        pathname: `/blog/${props.path}`,
        state: { props }
      }} />
  </BlogContent>
)
export default BlogItem