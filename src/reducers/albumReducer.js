const initialAlbumState = []

const albumReducer = (state = initialAlbumState, action) => {
    switch (action.type) {
        case 'SHOW_ALBUM': {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}
export default albumReducer