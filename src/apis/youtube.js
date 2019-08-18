import axios from 'axios';

const KEY = 'AIzaSyBggoQXA7f3pAVn0U8zwpJ_kuOKnWsu23Q';
const BASE_YOU_TUBE_URL = 'https://www.googleapis.com/youtube/v3';

export default axios.create({
  baseURL: BASE_YOU_TUBE_URL,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
