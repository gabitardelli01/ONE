function processText(action) {
    const inputText = document.getElementById('inputText').value;
    let resultText;
    if (action === 'encode') {
        resultText = btoa(inputText); // Codifica o texto usando Base64
    } else if (action === 'decode') {
        resultText = atob(inputText); // Decodifica o texto usando Base64
    }
    localStorage.setItem('resultText', resultText);
    addToHistory(inputText, resultText);
    window.location.href = 'result.html';
}

function addToHistory(input, output) {
    const history = document.getElementById('history');
    const listItem = document.createElement('li');
    listItem.textContent = `Input: ${input} - Output: ${output}`;
    history.appendChild(listItem);
    localStorage.setItem('history', history.innerHTML);
}