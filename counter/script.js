const btns = document.getElementsByClassName('btnAction');
let numberText = document.getElementById('number');

let number = 0;

function count(e) {
    const action = event.target.value;

    switch (action) {
        case 'plus':
            number += 1;
            break;
        case 'minus':
            number -= 1;
            break;
    }

    numberText.textContent = String(number)
};


for (const btn of btns) {
    btn.addEventListener('click', count);
}