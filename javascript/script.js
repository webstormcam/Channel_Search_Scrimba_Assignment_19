



const apiKey = "AIzaSyDVdXSdZC0Ilhfo5vaJThktHwVhuOqz220"
const endpoint = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet,id&&maxResults=6&channelId=UCcoDpbA4c9HQY0AjKHSlKLg&q="anime"&type=video`
const channelId = "Replace with channel ID"

//This is for finding the channel
// const endpoint = `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&part=snippet,id&forUsername=Joel`



fetch(endpoint)
.then(res=>res.json())
.then(data=>{
    console.log(data)
})