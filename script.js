const inputText = document.querySelector('#inputText');
const btnTranslate = document.querySelector('#btn-translate');
const outputText = document.querySelector('#outputText');

const url = `https://api.funtranslations.com/translate/shakespeare.json`;

const translationURL = (text) => {
    return url + '?text=' + text;
};

const errorHandler = (error) => {
    console.log('Error =', error);
};

const clickHandler = () => {
    fetch(translationURL(inputText.value))
        .then((response) => response.json())
        .then((json) => {
            console.log(json.contents.translated);
            outputText.innerText = json.contents.translated;
        })
        .catch(errorHandler);
};

btnTranslate.addEventListener('click', clickHandler);
