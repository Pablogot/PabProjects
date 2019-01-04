import React from 'react'
import { connect } from 'react-redux'

import * as contentful from 'contentful'
import BlogItem from './blog/BlogItem'
import PageHeader from './components/PageHeader'
import Loader from './Loader'
import { Tile } from 'bloomer'

class Blog extends React.Component {
    
    render() {
        const { posts, loading } = this.props.blog
        
        return (
            <>
                <PageHeader color="is-light" title="Lorem Blogging">
                    From its medieval origins to the <strong>digital</strong> era, learn everything there is to know about the ubiquitous lorem ipsum passage.
                </PageHeader>
                {
                    loading ?
                        <Loader className="has-text-primary"></Loader>
                        :
                        <Tile isAncestor>
                            <Tile isSize={4} isChild></Tile>
                            {
                                posts.map(
                                        ({ fields }, key) =>  (
                                            <Tile isSize={4} isChild>
                                                <BlogItem key={key} {...fields}/>
                                            </Tile>
                                        )
                                    )
                            }
                            
                        </Tile>
                }
            </>
        )
    }
}
function mapStateToProps(state, ownProps) {
    return {
        blog: state.blog
    }
}
export default connect(mapStateToProps)(Blog)