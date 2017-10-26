class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { // <-- THIS HAS TO BE STATE. INVESTIGATE LATER (rerendering on StateChange)
      select: false,
      selectedVideo: window.exampleVideoData[1],
      selectedVideos: window.exampleVideoData
    };
  }
  
  selected (clickedVid) { // function for selecting videos from video list
    console.log('was clicked', clickedVid);
    this.setState({selectedVideo: clickedVid});
  }
  changedVids (vids) {
    this.selected(vids[0]);
    this.setState({selectedVideos: vids});
  }
  
  render() {
    return (
    
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search videos = {this.changedVids.bind(this)}/> {/*Adding video rendering to search*/}
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.selectedVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos = {this.state.selectedVideos} select = {this.selected.bind(this)}/>
          </div>
        </div>
      </div>
    
    );
    
    
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;









