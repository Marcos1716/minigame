// * submit button, Input answer and show answer

const questionsAns = document.querySelector('.question-ans');
// questionsAns.setAttribute('data-before', 'hi');
const inputAns = document.querySelector('.input-ans');
const btnSubmit = document.querySelector('.btn-submit');

// questions selector
const questionNum = document.querySelector('.question-num');
const questionText = document.querySelector('.question-text');

// button category
const btnContainer = document.querySelector('.btn-container');

// category title
const categTitle = document.querySelector('.category-title');

let currentItem = 0;

let currentData = tags;

// ANCHOR FUNCTIONS

// * Category function
const showCategory = function (dataName, contentText) {
  currentData = dataName;
  categTitle.textContent = contentText;
  display(currentData, currentItem);
};

//* display questions
const display = function (data, current) {
  const items = data[current];
  questionNum.textContent = `Question: ${items.num}`;
  questionText.textContent = items.question;
};

//* display buttons and change the quiz
const displayButtons = function () {
  const categories = displayBtn
    .map((item) => {
      return `<button class="btn-category" data-id="${item}"><span class='btn-span'>${item}</span></button>`;
    })
    .join('');

  btnContainer.innerHTML = categories;
  // *selector
  const btnCategory = btnContainer.querySelectorAll('.btn-category');

  btnCategory.forEach((btns) => {
    btns.addEventListener('click', (e) => {
      const categ = e.currentTarget.dataset.id;
      currentItem = 0;
      inputAns.value = '';
      if (categ === 'Tags') {
        showCategory(tags, 'tags');
      } else if (categ === 'Attributes') {
        showCategory(attributes, 'attributes');
      } else if (categ === 'Entities') {
        showCategory(entity, 'Entities');
      }
    });

    // * button highlight

    const btnHl = btns.querySelector('.btn-span');
    btnHl.addEventListener('click', function () {
      btnCategory.forEach(function (item) {
        if (item !== btns) {
          item.classList.remove('btn-highlight');
        }
      });

      btns.classList.add('btn-highlight');
    });
  });
};

window.addEventListener('DOMContentLoaded', function () {
  display(currentData, currentItem);
  displayButtons();
});

btnSubmit.addEventListener('click', function () {
  const current = currentData[currentItem];

  const inputtedAnswer = inputAns.value.trim();
  if (inputtedAnswer === current.answer || inputtedAnswer === current.answer2) {
    questionsAns.setAttribute('data-before', `${current.display}`);
    btnSubmit.style.pointerEvents = 'none';

    setTimeout(function () {
      currentItem++;

      if (currentItem > currentData.length - 1) {
        currentItem = currentData.length - 1;
      }

      display(currentData, currentItem);
      inputAns.value = '';

      questionsAns.setAttribute('data-before', '');
      btnSubmit.style.pointerEvents = 'auto';
    }, 2000);

    console.log(currentItem);
  } else {
  }
});
