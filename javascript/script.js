const apiKey = "AIzaSyDVdXSdZC0Ilhfo5vaJThktHwVhuOqz220"
const endpoint = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet,id&order=date&maxResults=10&channelId=UCrTNhL_yO3tPTdQ5XgmmWjA`
const channelId = "Replace with channel ID"



fetch(endpoint)
.then(res=>res.json())
.then(data=>{
    console.log(data)
})