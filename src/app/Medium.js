import React from 'react'
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent'
import axios from 'axios'

class Medium extends React.Component {
    state = {
        posts: []
    }
    componentDidMount() {
        this.fetchPosts().then(this.setPosts)
    }
    fetchPosts = () => axios.get(`https://cors.now.sh/https://us-central1-aaronklaser-1.cloudfunctions.net/medium?username=@aaron.klaser`)

    setPosts = ({ data }) => {
        const { Post } = data.payload.references
        const posts = Object.values(Post).map(({ id, title, createdAt, virtuals, uniqueSlug }) => Object.assign({}, {
            title,
            createdAt,
            subtitle: virtuals.subtitle,
            image: virtuals.previewImage.imageId ? `https://cdn-images-1.medium.com/max/800/${virtuals.previewImage.imageId}` : null,
            url: `https://medium.com/@aaron.klaser/${uniqueSlug}`
        })
        )
        this.setState({
            posts
        })
    }
    render() {
        return (
            <div>
                <PageHeader color="is-dark" title="Medium">
                    My medium feed<br /><br />
                    <a className="button is-inverted is-outlined" href="https://medium.com/@aaron.klaser" target="_blank">
                        View My Medium
            <span className="icon" style={{ marginLeft: 5 }}>
                            <i className="fab fa-lg fa-medium"></i>
                        </span>
                    </a>
                </PageHeader>
                <PageContent>
                    <pre>{JSON.stringify(this.state.posts, null, 2)}</pre>
                </PageContent>
            </div>
        )
    }
}
export default Medium