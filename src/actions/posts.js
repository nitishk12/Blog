import axios from 'axios'

export const setPost = (posts) => {
    return { type: 'SHOW_POST', payload: posts }
}

export const startGetPost = () => {
    return (dispatch) => {
        axios.get('https://panorbit.in/api/posts.json')
            .then(response => {
                const posts = response.data.posts
                // console.log(posts)
                dispatch(setPost(posts))
            })
    }
}