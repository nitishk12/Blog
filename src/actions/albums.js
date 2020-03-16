import axios from 'axios'

export const setAlbum = (albums) => {
    return { type: 'SHOW_ALBUM', payload: albums }
}

export const startGetAlbum = () => {
    return (dispatch) => {
        axios.get('https://panorbit.in/api/albums.json')
            .then(response => {
                const albums = response.data.album
                console.log(albums)
                dispatch(setAlbum(albums))
            })
    }
}