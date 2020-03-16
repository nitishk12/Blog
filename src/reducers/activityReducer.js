const initialActivityState = []

const activityReducer = (state = initialActivityState, action) => {
    switch (action.type) {
        case 'SHOW_ACTIVITY': {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}
export default activityReducer