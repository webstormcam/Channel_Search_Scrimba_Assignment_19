const userInput = document.getElementById('userInput')
const enterButton = document.getElementById('enterButton')
const optionDrop = document.getElementById('youtubeChannels')
const videoOptions = document.getElementById('videoOptions')
enterButton.addEventListener('click',searchFunction)
const apiKey = "AIzaSyDVdXSdZC0Ilhfo5vaJThktHwVhuOqz220"
// let endpoint = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet,id&&maxResults=6&channelId=UCcoDpbA4c9HQY0AjKHSlKLg&q="anime"&type=video`
// const channelId = "Replace with channel ID"

//This is for finding the channel
// const endpoint = `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&part=snippet,id&forUsername=Joel`






function searchFunction(){
    videoOptions.innerHTML =""
    const searchText = userInput.value
    if(userInput.value==""){
        alert('Please type in something to search LOL!')
    } else{
        const selectedOption = optionDrop.value
        let endpoint = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet,id&&maxResults=6&channelId=${selectedOption}&q="${searchText}"&type=video`
        userInput.value=""
        fetch(endpoint)
        .then(res=>res.json())
        .then(data=>{
            if(data.items.length === 0){
                let blankText = `<div class="no-videos-container">
                <p class="no-videos">Sorry there are no videos that match that search, please attempt another search or switch youtube channels.</p>
                </div>`
                videoOptions.style.display="flex"
                videoOptions.style.alignItems="center"
                videoOptions.style.justifyContent="center"
                videoOptions.innerHTML = blankText
            } else{
                for(video of data.items){
                    const newVideo = `<div class="movie-element">
                    <a class="video-links" target="_blank" href="https://www.youtube.com/watch?v=${video.id.videoId}" >
                    <div class="video-image">
                        <img class="video-thumbnail" src="${video.snippet.thumbnails.high.url}" alt="">
                    </div>
                    <div class="video-text">
                        <h3>${video.snippet.title}</h3>
                    </div>
                    </a>
                    </div>`
                    videoOptions.style.display="grid"
                    videoOptions.style.alignItems="flex-start"
                    videoOptions.style.justifyContent="flex-start"
                videoOptions.innerHTML += newVideo
                }
            }
            
    })

    }
   
   
}