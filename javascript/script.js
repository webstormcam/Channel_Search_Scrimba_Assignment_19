const userInput = document.getElementById('userInput')
const enterButton = document.getElementById('enterButton')
const optionDrop = document.getElementById('youtubeChannels')
enterButton.addEventListener('click',searchFunction)


const apiKey = "AIzaSyDVdXSdZC0Ilhfo5vaJThktHwVhuOqz220"
// let endpoint = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet,id&&maxResults=6&channelId=UCcoDpbA4c9HQY0AjKHSlKLg&q="anime"&type=video`
// const channelId = "Replace with channel ID"

//This is for finding the channel
// const endpoint = `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&part=snippet,id&forUsername=Joel`






function searchFunction(){
    const searchText = userInput.value
    const selectedOption = optionDrop.value
    console.log(searchText,selectedOption)
    let endpoint = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet,id&&maxResults=6&channelId=${selectedOption}&q="${searchText}"&type=video`
    userInput.value=""
    fetch(endpoint)
    .then(res=>res.json())
    .then(data=>{
    console.log(data.items)
    //work with the length of data items
})
   
}