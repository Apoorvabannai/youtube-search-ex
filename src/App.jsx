import React, { Component } from 'react';
import YoutubeResults from './apis/youtube';
import './App.css';
import  SearchBar from './components/SearchBar/SearchBar';
import  VideoDetail from './components/VideoDetail/VideoDetail';
import  VideoList from './components/VideoList/VideoList';

class App extends Component {
  state = { videos: [], videoSelected: null };
  onTermSubmit = async (term) => {
    const response = await YoutubeResults.get('/search', {
      params:{
        q: term
      }
    });
    this.setState({ videos: response.data.items, videoSelected: response.data.items[0] });
  };

  onVideoSelect = (video) => {
    this.setState({videoSelected: video});
  };
  
  componentDidMount(){
    this.onTermSubmit('ganesh maharaj')
  }

  render (){

    return(
      <div className='ui container'>
        <div className='search-bar'>
          < SearchBar onTermSubmit={ this.onTermSubmit }/>
        </div>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='video-detail eleven wide column'>
              < VideoDetail video={this.state.videoSelected}/>
            </div>
            <div className='video-list five wide column'>
              < VideoList onVideoSelect={this.onVideoSelect} videos={ this.state.videos }/>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;
