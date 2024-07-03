const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
export const YOUTUBE_POPULAR_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key="+apiKey
