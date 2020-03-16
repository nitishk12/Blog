import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './sidenav.css'

function PostList(props) {
    return (
        <div className="main">
            <h2>Posts</h2>
            <b><hr /></b>
            <h2 className="text-center">Listing Post's- {props.posts.length}</h2>
            <div>
                <div className="container mb-5 " >
                    <div >
                        <ul className="list-group" >
                            {props.posts.map(post => {
                                return <li key={post.id}
                                    className="list-group-item card"><Link className="text-muted" to={`/posts/users/${post.id}`}>{post.title}</Link></li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(PostList)