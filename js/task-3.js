// Напиши скрипт, який під час набору тексту в інпуті
// input#name - input(подія input) підставляє його поточне значення
// в span#name - output як ім’я для привітання.Обов’язково очищай
// значення в інпуті по краях від пробілів.Якщо інпут порожній
// або містить лише пробіли, то замість імені у спан має підставлятися
// рядок "Anonymous".
// <input type="text" id="name-input"
// placeholder = "Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');
textInput.addEventListener('input', () => { 
    const nameValue = textInput.value.trim();
    textOutput.textContent=nameValue || 'Anonymous'
})
