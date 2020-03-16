import axios from 'axios'

export const setToDo = (todos) => {
    return { type: 'SHOW_TODO', payload: todos }
}

export const startGetToDo = () => {
    return (dispatch) => {
        axios.get('https://panorbit.in/api/todo.json')
            .then(response => {
                const todos = response.data.todo
                console.log(todos)
                dispatch(setToDo(todos))
            })
    }
}