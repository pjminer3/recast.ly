
var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onKeyPress={ (key) => {
      if (key.charCode === 13) {
        window.searchYouTube({q: $('.form-control').val()}, props.videos);
      }
    }}/>
    <button className="btn hidden-sm-down" onClick={() => { window.searchYouTube({q: $('.form-control').val()}, props.videos); } } >
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;


// onKeyPress={ (key) => { if (key.charCode === 13) { window.searchYouTube({q: $('.form-control').val()}, props.videos); } 