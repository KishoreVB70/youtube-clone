const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
export const YOUTUBE_POPULAR_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=AU&maxResults=19&key="+apiKey
export const YOUTUBE_CHANNEL_BASE_API = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics"