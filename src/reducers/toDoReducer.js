const initialToDoState = []

const toDoReducer = (state = initialToDoState, action) => {
    switch (action.type) {
        case 'SHOW_TODO': {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}
export default toDoReducer