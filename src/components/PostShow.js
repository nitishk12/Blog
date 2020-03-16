import React from 'react'
import { connect } from 'react-redux'
import './sidenav.css'

function PostShow(props) {
    console.log(props)
    return (
        <div className="main">
            <h2>Posts</h2>
            <b><hr /></b>
            {props.post &&
                <div className="row mb-5">
                    <div className="col-lg-6 col-md-6 col-12">
                        <h4>{props.user.name}<br /><br /><h6>{props.post.time}</h6></h4>
                        <img className=" rounded img-fluid" src={props.post.image} /><br />
                        <h3>{props.post.title}</h3>
                        <hr />
                        <h4>Comments</h4>
                        <hr />
                        <div>
                            {props.comments &&
                                props.comments.map(comment => {
                                    return <div key={comment.id}><b>{comment.body}</b></div>
                                })
                            }
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <h4 className="text-center">Recent Activities</h4><br />
                        <h4><b>{props.user.name}</b></h4>
                        <div>
                            {props.activities &&
                                props.activities.map(activity => {
                                    return <div key={activity.id}><b>{activity.activity}-{activity.time}<br />
                                    </b></div>
                                })
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const post = state.posts.find(post => post.id == props.match.params.id)

    if (post) {
        const posts = state.posts.filter(post => post.id == post.userId)
        const user = state.users.find(user => user.id == post.userId)
        const comments = state.comments.filter(comment => comment.postId == post.id)
        const activities = state.activities.filter(activity => activity.userId == activity.id)

        return {
            post, user, comments, posts,
            activities
        }
    }
}

export default connect(mapStateToProps)(PostShow)