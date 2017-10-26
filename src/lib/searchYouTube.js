var searchYouTube = (options, callback) => {
  // TOD
  options['part'] = 'snippet';
  options['key'] = window.YOUTUBE_API_KEY;
  options['maxResults'] = 5;
  
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    dataType: 'json',
    data: options,
    success: function(data) {
      console.log(data.items);
      console.log('SUCCESS');
      callback(data.items);
    },
    error: function(data) {
      console.log(options);
      console.log('ERROR');
    },
   
  });
};

window.searchYouTube = searchYouTube;





       // key: 'AIzaSyAxqRfmlsNEgTTfymTt8pgi90ZjghZQ4sI',
       // chart: 'mostPopular',
       // q: query,
       // maxResults: 5,
       // part: 'snippet'