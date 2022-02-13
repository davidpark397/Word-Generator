const wordText = document.querySelector(".word"),
definitionText = document.querySelector(".definition"),
wordButton = document.querySelector("button"),
listenButton = document.querySelector(".listen"),
tweetButton = document.querySelector(".tweet"),
copyButton = document.querySelector(".copy");


// Function for capitalizing first letter in a string
function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


// Function for generating random word
function randomWord(){
    fetch("https://random-word-api.herokuapp.com/word?number=1")
    .then(res => res.json())
    .then(result => {
        wordText.innerText = capFirstLetter(result[0]);

        var defRequestLink = "https://api.dictionaryapi.dev/api/v2/entries/en/" + result[0];
        fetch(defRequestLink)
        .then(res => res.json())
        .then(result => {
            definitionText.innerText = capFirstLetter(result[0]['meanings'][0]['definitions'][0]['definition']);
        })
        .catch(error => {
            definitionText.innerText = "No definition found!";
        })
    })
}


// Enables copying to click board through copy button
copyButton.addEventListener("click", ()=> {
    let wordDef = wordText.innerText + ' : ' + definitionText.innerText;
    navigator.clipboard.writeText(wordDef);
});


// Enables tweeting the word/definition through twitter button
tweetButton.addEventListener("click", ()=> {
    let wordDef = wordText.innerText + ' : ' + definitionText.innerText;
    let tweetUrl = `https://twitter.com/intent/tweet?url=${wordDef}`;
    window.open(tweetUrl, "blank");
});


// Enables listening to word/definition through listen buttom
listenButton.addEventListener("click", ()=> {
    let spokenWord = new SpeechSynthesisUtterance(`${wordText.innerText}`);
    let spokenDef = new SpeechSynthesisUtterance(`${definitionText.innerText}`);
    speechSynthesis.speak(spokenWord);
    speechSynthesis.speak(spokenDef);
});


// Enables word and definition generation
wordButton.addEventListener("click", randomWord);

