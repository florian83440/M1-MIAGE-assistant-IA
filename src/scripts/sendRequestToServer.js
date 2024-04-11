const endpointURL = 'http://localhost:3001/chat';

window.onload = init;

function init() {
    // Ecouteur sur le bouton
    const buttonElement = document.querySelector('#btnSendRequest');
    buttonElement.onclick = sendRequest;
}

// Envoi d'une requête POST à l'API de notre serveur
async function sendRequest() {
    const inputElement = document.querySelector('#inputPrint');
    const max_token = 1;
    // const temperature = document.querySelector('#temperature').value

    const prompt = inputElement.value;

    if (prompt === '') return;

    const promptData = new FormData();
    promptData.append('prompt', prompt);
    promptData.append('max_tokens', max_token);
    // promptData.append('temperature', temperature);

    /*const response = await fetch(endpointURL, {
        method: 'POST',
        body: promptData
    });

    const data = await response.json();

    console.log(data);*/

    document.querySelector('.mainTitle').style.display = 'none';
    document.querySelector('.mainPrint').style.display = 'block';

    const outputElement = document.querySelector('.mainPrint');
    const pElement = document.createElement('div');

    const headers = ["Michel Buffa", "Michel Syska", "Leo Donati"];
    const header = headers[Math.floor(Math.random() * headers.length)] + " : ";

    // let messageToShow = data.choices[0].message.content;
    let messageToShow = "test";

    pElement.innerHTML = `<div style="text-align: left;"><span style="width: 200px;"><b>You : </b></span>${prompt}</div>`;
    pElement.innerHTML += `<div style="text-align: left;"><span style="width: 200px;"><b>${header}</b></span>${messageToShow}</div>`;
    outputElement.append(pElement);

    inputElement.value = '';
}