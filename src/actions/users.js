import axios from 'axios'

export const setUser = (users) => {
    return { type: 'SET_USER', payload: users }
}

export const startGetUsers = () => {
    return (dispatch) => {
        axios.get('https://panorbit.in/api/users.json')
            .then(response => {
                const users = response.data.users
                // console.log(users)
                dispatch(setUser(users))
            })
    }
}