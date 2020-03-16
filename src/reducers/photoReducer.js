const initialPhotoState = []

const photoReducer = (state = initialPhotoState, action) => {
    switch (action.type) {
        case 'SHOW_PHOTO': {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}
export default photoReducer