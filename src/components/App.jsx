import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: exampleVideoData[0],
      videos: exampleVideoData
    };
    // binding to make 'this' work in callback
    this.orderPizza = this.orderPizza.bind(this);
  }
  // var vids = {};

  // for (var i = 0; i < exampleVideoData.length; i++) {
  //   var curr = exampleVideoData[i];
  //   vids.id = curr.id.videoId;
  //   vids.
  // }
  orderPizza(event, videoObj) {
    event.preventDefault();
    this.setState({
      video: videoObj
    });
    // this.setState((state) => {
    //   return {id: this.state.id, clicked: true};
    //   // we get id from the clicked video
    //   // if clicked is true, use target video id otherwise use 1st video id

    // });
    // console.log(this.state);
    // // console.log(key);
    console.log('grandparent ordering pizza');
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} orderPizza={this.orderPizza}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
