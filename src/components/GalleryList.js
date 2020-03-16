import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './sidenav.css'

function GalleryList(props) {
    return (
        <div className="jumbotron">
            <h2 className="text-center"><b>Albums</b></h2><br /><hr />
            <div className="w-50 mx-auto col-md-6" >
                <ul className="list-group " >
                    {props.albums.map(album => {
                        return <li key={album.id}
                            className="card"><Link to={`/profile/gallery/album/${album.id}`} className="list-group-item list-group-item-action card"><span>{album.title}</span></Link></li>
                    })}
                </ul>
            </div>
        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        albums: state.albums
    }
}
export default connect(mapStateToProps)(GalleryList)