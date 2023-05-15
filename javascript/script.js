



const apiKey = "AIzaSyDVdXSdZC0Ilhfo5vaJThktHwVhuOqz220"
const endpoint = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet,id&&maxResults=10&channelId=UCoLrcjPV5PbUrUyXq5mjc_A&q="Blue"&type=video`
const channelId = "Replace with channel ID"

//This is for finding the channel
// const endpoint = `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&part=snippet,id&forUsername=MLB`



fetch(endpoint)
.then(res=>res.json())
.then(data=>{
    console.log(data)
})