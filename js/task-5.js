// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль 
// по кліку на button.change - color і задає це значення кольору текстовим вмістом 
// для span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor().

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Зверни увагу, що функція getRandomHexColor() повертає колір у hex-форматі, 
// в той час як колір фону на < body > буде у форматі rgb.
// Це нормально й не потребує якихось правок.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const color = document.querySelector('.color');
const changeColorBurron = document.querySelector('.change-color');

changeColorBurron.addEventListener('click', () => { 
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
})