import axios from 'axios'

export const setComment = (comments) => {
    return { type: 'SHOW_COMMENT', payload: comments }
}

export const startGetComment = () => {
    return (dispatch) => {
        axios.get('https://panorbit.in/api/comments.json')
            .then(response => {
                const comments = response.data.comments
                console.log(comments)
                dispatch(setComment(comments))
            })
    }
}