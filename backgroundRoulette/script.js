let colorName = document.getElementById('txtColor');
let colorObject = document.getElementsByTagName('main')[0];
const btn = document.getElementById('btnExecute');

const color = ['white', 'red', 'blue', 'yellow', 'orange', 'purple', 'green', 'cyan', 'pink'];

function switchColor() {
    let colorValue = color[Math.floor(Math.random() * color.length)];

    colorName.innerText = colorValue;
    colorObject.style.backgroundColor = colorValue;
}

btn.addEventListener('click', switchColor);