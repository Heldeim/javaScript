const btn = document.getElementById('btnExecute');
let quoteText = document.getElementById('quote');
let nameText = document.getElementById('name');

let content = [
    {
        quote: 'Só sei que nada sei.',
        name: '- Sócrates'
    },
    {
        quote: 'Penso, logo existo.',
        name: '- René Descartes'
    },
    {
        quote: 'O que não me mata, me fortalece.',
        name: '- Friedrich Nietzsche'
    },
    {
        quote: 'Ser ou não ser, eis a questão.',
        name: '- William Shakespeare'
    },
    {
        quote: 'Tudo vale a pena se a alma não é pequena.',
        name: '- Fernando Pessoa'
    },
    {
        quote: 'A única maneira de fazer um excelente trabalho é amar o que você faz.',
        name: '- Steve Jobs'
    },
    {
        quote: 'O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.',
        name: '- Winston Churchill'
    },
    {
        quote: 'Seja a mudança que você quer ver no mundo.',
        name: '- Mahatma Gandhi'
    },
    {
        quote: 'Amar não é olhar um para o outro, é olhar juntos na mesma direção.',
        name: '- Antoine de Saint-Exupéry'
    },
    {
        quote: 'A felicidade não é algo pronto. Ela vem de suas próprias ações.',
        name: '- Dalai Lama'
    }
];

function execute() {
    let quoteSelected = content[Math.floor(Math.random() * content.length)];

    quoteText.textContent = quoteSelected.quote;
    nameText.textContent = quoteSelected.name;
};

btn.addEventListener('click', execute);