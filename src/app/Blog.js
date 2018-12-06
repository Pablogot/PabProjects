import React from 'react'
import * as contentful from 'contentful'
import BlogItem from './blog/BlogItem';
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent'


class Blog extends React.Component {
    state = {
        posts: []
    }
    client = contentful.createClient({
        space: '0v3t2s88y22c',
        accessToken: 'ddca4149951f9ea7524b7374fba81d25ed594c512d16b5d1a0e5ff48f7bec1d9'
    })
    componentDidMount() {
        this.fetchPosts().then(this.setPosts);
    }
    fetchPosts = () => this.client.getEntries()
    setPosts = response => {
        this.setState({
            posts: response.items
        })
    }
    render() {
        const { posts } = this.state;
        return (
            <>
                <PageHeader color="is-info" title="Lorem Blogging">
                From its medieval origins to the <strong>digital</strong> era, learn everything there is to know about the ubiquitous lorem ipsum passage.
                </PageHeader>
                <PageContent>
                    {
                        posts.length >= 0 && posts
                            .map(
                                ({ fields }, key) => <BlogItem key={key} {...fields} />
                            )
                    }
                </PageContent>
                
            </>
        )
    }
}
export default Blog