let hexCode = document.getElementById('txtHex');
let colorObject = document.getElementsByTagName('main')[0];
const btn = document.getElementById('btnExecute');

const char = ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

function switchHexCode() {
    let code = '#'

    for (let i = 0; i < 6; i++) {
        let hexValue = char[Math.floor(Math.random() * char.length)];

        code += hexValue
    }

    hexCode.textContent = code;
    colorObject.style.backgroundColor = code;

}
btn.addEventListener('click', switchHexCode);