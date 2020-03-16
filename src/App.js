import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import UserList from './components/UserList'
import UserShow from './components/UserShow'
import ToDoList from './components/ToDoList'
import GalleryList from './components/GalleryList'
import GalleryShow from './components/GalleryShow'
import PostList from './components/PostList'
import PostShow from './components/PostShow'
import './components/sidenav.css'

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <div className="sidenav">
          <Link to={`/`}>Profile</Link>
          <Link to={`/posts/users`} >Post</Link>
          <Link to={`/profile/gallery`} >Gallery</Link>
          <Link to={`/profile/todo`}>ToDo</Link>
        </div>

        <Switch>
          <Route path="/" component={UserList} exact={true} />
          <Route path="/profile/users/:id" component={UserShow} exact={true} />
          <Route path="/posts/users" component={PostList} exact={true} />
          <Route path="/posts/users/:id" component={PostShow} exact={true} />
          <Route path="/profile/gallery" component={GalleryList} exact={true} />
          <Route path="/profile/gallery/album/:id" component={GalleryShow} exact={true} />
          <Route path="/profile/todo" component={ToDoList} exact={true} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App
