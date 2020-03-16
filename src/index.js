import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { startGetUsers } from './actions/users';
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { startGetPost } from './actions/posts';
import { startGetComment } from './actions/comments'
import { startGetActivity } from './actions/activities';
import { startGetPhoto } from './actions/photos';
import { startGetAlbum } from './actions/albums';
import { startGetToDo } from './actions/toDo';

const store = configureStore()
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(startGetUsers())
store.dispatch(startGetPost())
store.dispatch(startGetComment())
store.dispatch(startGetActivity())
store.dispatch(startGetPhoto())
store.dispatch(startGetAlbum())
store.dispatch(startGetToDo())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
