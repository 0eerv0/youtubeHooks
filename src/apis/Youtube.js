import axios from 'axios'
const KEY ='AIzaSyC5_tjPOSkKIQ1gORHL0Os5fjb_jsBz3Jw'

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: `${KEY}`
    }
})