import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function UserList(props) {
    return (
        <div className="container mb-5  " >
            <div className="w-50 mx-auto" >
                <ul className="list-group" >
                    {props.users.map(user => {
                        return <li key={user.id}
                            className="list-group-item jumbotron border border-primary"><Link to={`/profile/users/${user.id}`} className="list-group-item list-group-item-action card rounded bg-secondary text-white"><span>{user.name}</span></Link></li>
                    })}
                </ul>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps)(UserList)