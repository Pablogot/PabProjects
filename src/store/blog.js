import * as contentful from 'contentful'
import * as actions from './blog/actions'
const client = contentful.createClient({
    space: '0v3t2s88y22c',
    accessToken: 'ddca4149951f9ea7524b7374fba81d25ed594c512d16b5d1a0e5ff48f7bec1d9'
})
export function loadBlog() {
  return dispatch => {
    dispatch(actions.blogLoading())
    return client.getEntries()
      .then(({items}) => {
        dispatch(actions.loadBlogSuccess(items))
      })
      .catch(error => {
        console.log(error)
        dispatch(actions.blogLoading(false))
      })
  }
}