import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './sidenav.css'


function UserShow(props) {
    return (
        <BrowserRouter>
            <div>
                <div className="main">
                    <h2>Profile</h2>
                    <b><hr /></b>
                    <div className="row mb-5">
                        <div className="col-lg-6 col-md-6 col-12">
                            <b className="text-center">{props.user.name}</b>
                            <div className="card" style={{ width: '25', height: '25', position: 'relative', overflow: 'hidden' }}>
                                <img className="rounded" src={props.user.profilepicture} />
                            </div><br />
                            <h2>Username : <b>{props.user.username}</b></h2>
                            <h2>e-mail : <b>{props.user.email}</b></h2>
                            <h2>Phone : <b>{props.user.phone}</b></h2>
                            <h2>Website : <b>{props.user.website}</b></h2>
                            <b><hr /></b>
                            <h2 className="text-center">Company</h2><br />
                            <h3>Name : <b>{props.user.company.name}</b></h3>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <br />
                            <h2>Address</h2><br />
                            <h3>Street : <b>{props.user.address.street}</b></h3>
                            <h3>Suite : <b>{props.user.address.suite}</b></h3>
                            <h3>City : <b>{props.user.address.city}</b></h3>
                            <h3>ZipCode : <b>{props.user.address.zipcode}</b></h3>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}
const mapStateToProps = (state, props) => {
    return {
        user: state.users.find(user => user.id == props.match.params.id),
        post: state.posts.find(post => post.userId == props.match.params.id),
    }
}
export default connect(mapStateToProps)(UserShow)