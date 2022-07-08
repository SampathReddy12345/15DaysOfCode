import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Album from './Components/Album'
import Albums from './Components/Albums'
import Nav from './Components/Nav'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [
        {id: 1, artist: "Allu Sirish", album_title: "Mella Mellaga", album_cover: "Music Sid Sriram", songs: "Sound Track1",img:"https://www.mirchi9.com/wp-content/uploads/2019/05/ABCD-Movie-Review-1.jpg"},
        {id: 2, artist: "Akkineni Akhil", album_title: "Yevevo", album_cover: "Music Jonita Gandhi", songs: "Sound Track2",img:"https://www.miindia.com/miimages/events/dec17/hello-movie.jpg"},
        {id: 3, artist: "Ram Charan", album_title: "Neethoney", album_cover: "Music Hiphop Tamizha", songs: "Sound Track3",img:"https://i.pinimg.com/originals/ad/ce/39/adce39addd5767012811eca1301cf49c.jpg"},
        {id: 4, artist: "Sai Pallavi", album_title: "Saranga Dariya", album_cover: "Music Mangli", songs: "Sound Track4",img:"https://1.bp.blogspot.com/-IArLFSILFC8/XkVRa01m2oI/AAAAAAAAGqM/YYCLxd9hQL06Iv3EzCf7ejCfR3fBx8-uwCLcBGAsYHQ/s1600/sai-pallavi-love-story-telugu-movie.png"}
      ],
      errorMsg: ''
    }
  }
  render(){
  return (
    <div className="App">
      <Nav />
        <div className="container">
          <div className="row">
            <Album />
          </div>
          <div className="row">
            <div className="col-sm-3">
            <Albums albums={this.state.albums} />
            </div>
           
          </div>
        </div>
    </div>
  );
}
}
export default App;
