import React, { Component } from 'react'
import Album from './Album';
import '../App.css';

export class Albums extends Component {
    constructor(props) {
		super(props)
    }
    render() {
        return (
            <div className = "three-cards">
                {/* pass array directly from app */}
                {this.props.albums.map(album => {
                return (<ul>
                    <img alt="example" src={album.img} width="300" height="380" />
                    <li>{album.id}</li>
                    <li>{album.artist}</li>
                    <li>{album.album_title}</li>
                    <li>{album.album_cover}</li>


                    </ul>)
            })}

            </div>
        )
    }
}

export default Albums
