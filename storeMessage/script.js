const btn = document.getElementById('btnExecute');
const lastMessageSpace = document.getElementById('lastMessage');

let lastMessage = '';

function execute() {
    const message = document.getElementById('message').value;

    if (message != '') {
        lastMessage = message;
        lastMessageSpace.innerText = lastMessage;
    } else {
        lastMessageSpace.innerText = 'Não foi escrito nada anteriormente!';
    }
    
    
}

btn.addEventListener('click', execute);