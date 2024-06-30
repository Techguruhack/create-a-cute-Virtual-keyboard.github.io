const myKeys = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'
];

const myMessageBox = document.getElementById('myMessageBox');
const myMessageText = document.getElementById('myMessageText');
const myKeyboard = document.getElementById('myKeyboard');

myKeys.forEach(myKey => {
    const myKeyButton = document.createElement('div');
    myKeyButton.className = 'myKey';
    myKeyButton.textContent = myKey;
    myKeyButton.addEventListener('click', () => {
        myMessageText.textContent += myKey;
    });
    myKeyboard.appendChild(myKeyButton);
});

function myClearMessage() {
    myMessageText.textContent = '';
}