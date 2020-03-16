import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import postReducer from '../reducers/postReducer'
import commentReducer from '../reducers/commentReducer'
import activityReducer from '../reducers/activityReducer'
import photoReducer from '../reducers/photoReducer'
import albumReducer from '../reducers/albumReducer'
import toDoReducer from '../reducers/toDoReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        users: userReducer,
        posts: postReducer,
        comments: commentReducer,
        activities: activityReducer,
        photos: photoReducer,
        albums: albumReducer,
        todos: toDoReducer
    }), applyMiddleware(thunk))
    return store
}
export default configureStore