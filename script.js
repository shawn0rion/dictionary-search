const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('.search-btn');
const audioBtn = document.querySelector('.audio-btn');

// search events 
searchInput.addEventListener('keydown', event => {
    if (event.key === 'Enter' && event.target.value !== ''){
        const data = search();
        displayData(data...);
    }
})

searchBtn.addEventListener('click', event => {
    if (searchInput.value !== ''){
        const data = search();
        displayData(data...);
    }
})

// return and fix overlapping audio playback on > 1 click
audioBtn.addEventListener('click', event => {
    const audio = event.target.querySelector('audio');
    if(audio.src !== ''){
        audio.play();
    }
})

// parse and return word data
async function search(url, term){
    // update the search query
    fetch(url + term)
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch(error => {
        console.log(error);
    })
}

// select the word, type, definition, audio, pronunciation, example
function displayData(word, type, definition, example, pronunciation){
    const domWord = document.querySelector('.word');
    domWord.textContent = word;
    const domType = document.querySelector('.type');
    domType.textContent = type;
    const domDefinition = document.querySelector('.definition');
    domDefinition.textContent = definition;
    const domExample = document.querySelector('.example');
    domExample.textContent = example;
    const domPronunciation = document.querySelector('.pronunciation');
    domPronunciation.src = pronunciation;
}