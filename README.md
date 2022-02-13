# Random Word Generator

I created a word and definition generating website. The website has buttons for listening to the word/definition, sharing it to twitter, and copying the text to the clipboard.

I leveraged the random word (https://random-word-api.herokuapp.com/home) and free dictionary (https://dictionaryapi.dev/) APIs. Because the two APIs are distinct, not every word has a definition - the GET request is first sent to the random words API, and the obtained result word is sent as part of the request to the dictionary API.

Access the website here: https://davidpark397.github.io/word-generator/index.html
