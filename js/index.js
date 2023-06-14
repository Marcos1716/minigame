const btnContainer = document.querySelectorAll('.btn-container');

const displayButton = (dataBtn) => {
  btnContainer.forEach(function (btnCon) {
    const ids = btnCon.dataset.id;
    const filters = dataBtn.filter((item) => item.id === ids);

    const buttons = filters
      .map((item) => {
        return `   <a href="${item.src1}" class="btn-link learn">${item.learn}</a>
  <a href="${item.scr2}" class="btn-link reference">${item.reference}</a>
  <a href="${item.practice}" class="btn-link quiz">${item.try} </a>`;
      })
      .join('');

    btnCon.innerHTML = buttons;
  });
};

window.addEventListener('DOMContentLoaded', function () {
  displayButton(dataButton);
});
