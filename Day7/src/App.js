// import logo from './logo.svg';
import React, { Component } from 'react'
import AddAlbum from './Components/AddAlbum'
// import Album from './Components/Album'
import Albums from './Components/Albums';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      // albums: [
      //   {id: 1, artist: "Vijay T", album_title: "Master", album_cover: "Music Anirudh R", songs: "Sound Track1"},
      //   {id: 2, artist: "Naveen Polishetty", album_title: "Jathirathnalu", album_cover: "Music Radhan", songs: "Sound Track2"},
      //   {id: 3, artist: "Suriya", album_title: "Aakasam Nee Haddura", album_cover: "Music G. V. Prakash", songs: "Sound Track3"},
      // ],
      albums: [
        {id: 1, artist: "Allu Sirish", album_title: "Mella Mellaga", album_cover: "Music Sid Sriram", songs: "Sound Track1",img:"https://www.mirchi9.com/wp-content/uploads/2019/05/ABCD-Movie-Review-1.jpg"},
        {id: 2, artist: "Akkineni Akhil", album_title: "Yevevo", album_cover: "Music Jonita Gandhi", songs: "Sound Track2",img:"https://www.miindia.com/miimages/events/dec17/hello-movie.jpg"},
        {id: 3, artist: "Ram Charan", album_title: "Neethoney", album_cover: "Music Hiphop Tamizha", songs: "Sound Track3",img:"https://i.pinimg.com/originals/ad/ce/39/adce39addd5767012811eca1301cf49c.jpg"},
        {id: 4, artist: "Sai Pallavi", album_title: "Saranga Dariya", album_cover: "Music Mangli", songs: "Sound Track4",img:"https://1.bp.blogspot.com/-IArLFSILFC8/XkVRa01m2oI/AAAAAAAAGqM/YYCLxd9hQL06Iv3EzCf7ejCfR3fBx8-uwCLcBGAsYHQ/s1600/sai-pallavi-love-story-telugu-movie.png"}
      ],
      errorMsg: ''
    }
    this.receiver = this.receiver.bind(this)
    this.delete = this.delete.bind(this)
  }
  
  receiver = () => {
    let { albums, obj } = this.state;
    albums.push(obj);
    console.log('Hi from receiver method = pushed new album');
  }
  delete(){
    let { albums, obj } = this.state;
    albums.pop(obj);
    console.log('Hi from receiver method = pushed new album');
    console.log('Hi from delete method');
  }
  render() {
    return (
      
      <div className="App">
        <AddAlbum receiveFunc = {this.receiver}/>
        {/* <Album artist={this.state.artist} album_title={this.state.album_title} album_cover={this.state.album_cover}/> */}
        <Albums albums={this.state.albums} deleteFunc={this.delete}/> 
      </div>
      
    )
  }
}

export default App
