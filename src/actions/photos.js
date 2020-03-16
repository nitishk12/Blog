import axios from 'axios'

export const setPhoto = (photos) => {
    return { type: 'SHOW_PHOTO', payload: photos }
}

export const startGetPhoto = () => {
    return (dispatch) => {
        axios.get('https://panorbit.in/api/photos.json')
            .then(response => {
                const photos = response.data.albums
                console.log(photos)
                dispatch(setPhoto(photos))
            })
    }
}