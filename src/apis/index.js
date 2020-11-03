import axios from 'axios';

const KEY = 'AIzaSyCC3B-JuNhHT6QauJsXdJMWCg1wnub4TuY';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})

const params = {
  part: 'snippet',
  maxResults: 40,
  key: KEY,
  regionCode: 'JP',
  type: 'video',
}

export const fetchPopularDate = async () => {
  return await youtube.get('./videos', {
    params: {
      ...params,
      chart: 'mostPopular'
    }
  })
}

export const fetchSelectData = async (id) => {
  return await youtube.get('videos', {
    params: {
      ...params,
      id
    }
  })
}