import React from 'react'
import BlogNav from './shared/BlogNav'
import BlogContent from './shared/BlogContent'


const BlogItem = (props) => (
  <div class="tile is-ancestor">
    <div class="tile is-parent">
        <BlogContent limit={150} {...props}>
          <BlogNav
            date={props.date}
            to={{
              pathname: `/blog/${props.path}`,
              state: { props }
            }} />
        </BlogContent>
    </div>
  </div>
)
export default BlogItem