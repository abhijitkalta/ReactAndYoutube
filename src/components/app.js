import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './searchBar';
import VideoDetail from './videoDetail';
import VideoList from './videoList';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyA0Fve6GJBtThUAOx6Yr2G3VpnnJhrHlik';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo : null
    };
    this.videoSearch('despacito');

  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange = {videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
