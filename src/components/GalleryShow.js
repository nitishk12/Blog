import React from 'react'
import { connect } from 'react-redux'
import './sidenav.css'

function GalleryShow(props) {
    return (
        <div className="main">
            <h2>gallery = {props.photos.length}</h2>
            <div>
                {props.photos.map(photo => {
                    return <div className="col-md-6" key={photo.id}><img className="card rounded img-fluid img-responsive" style={{ maxWidth: '100%', height: 'auto' }} src={photo.url} /><br />
                        <br />
                    </div>
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        photos: state.photos.filter(photo => photo.albumId == props.match.params.id)
    }
}
export default connect(mapStateToProps)(GalleryShow)