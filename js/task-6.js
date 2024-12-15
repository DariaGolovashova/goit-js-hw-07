// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.
// Є input, у який користувач вводить бажану кількість елементів. 
// Після натискання на кнопку Create має рендеритися(додаватися в DOM) 
// колекція з відповідною кількістю елементів і очищатися значення в інпуті.
// При повторному натисканні на кнопку Create поверх старої колекції має рендеритись
// нова.Після натискання на кнопку Destroy колекція елементів має очищатися.



// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Після натискання користувачем на кнопку Create треба провалідувати 
// значення в input, воно має бути в межах від 1 до 100 включно.
// Тільки якщо воно задоволяє умову, мають додаватися нові < div > елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount),
//  яка приймає один параметр — число, що зберігає кількість елементів для рендеру.


// Функція має створювати стільки <div> елементів, скільки вказано 
// в параметрі amount.Усі ці < div > мають додаватися за одну операцію у DOM 
// дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. Використовуй готову 
// функцію getRandomHexColor() для отримання випадкового кольору.


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }


// Для очищення колекції після натискання на кнопку Destroy створи функцію 
// destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені
// елементи.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const buttonCreate = controls.querySelector('[data-create]');
const buttonDestroy = controls.querySelector('[data-destroy]');
const boxexContainer = document.querySelector('#boxes');

function creatBoxes(amount) {
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) { 
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();  
    div.style.margin = '5px';
    elements.push(div);
    size += 10;
    console.log(elements);
  } 
  
    boxexContainer.append(...elements);
}
 
function destroyBoxes() { boxexContainer.innerHTML = ''; }

buttonCreate.addEventListener('click', () => {
  const amount = Number(input.value.trim());
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    creatBoxes(amount);
    input.value = '';
  }
  else { alert('You should enter a number between 1 and 100') }
});

buttonDestroy.addEventListener('click', () => destroyBoxes());
