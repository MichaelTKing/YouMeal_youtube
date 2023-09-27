
// открывание и закрывание меню
document.querySelector('.order__wrap-title').addEventListener('click', () => {
  document.querySelector('.order').classList.toggle('order__open');
});

document.querySelector('.order__close').addEventListener('click', () => {
  document.querySelector('.order').classList.remove('order__open');
});
//---------------------- открытие и закрытие модалок ---------------------------------------------------------
const openModalButtons = document.querySelectorAll('.product__detail, .modul-product__img');
const closeModalButtons = document.querySelectorAll('.modal__close');
const modal = document.querySelector('.modal.modal__product');
const openDeliveryButton = document.querySelector('.order__submit');
const deliveryModal = document.querySelector('.modal.modal__delivery');

function openModal() {
  modal.classList.add('modal__open');
}

function closeModal() {
  modal.classList.remove('modal__open');
}

openModalButtons.forEach(function(button) {
  button.addEventListener('click', openModal);
});

closeModalButtons.forEach(function(button) {
  button.addEventListener('click', closeModal);
});

function openDelivery() {
  deliveryModal.classList.add('modal__open');
}

function closeDelivery() {
  deliveryModal.classList.remove('modal__open');
}

openDeliveryButton.addEventListener('click', openDelivery);
closeModalButtons.forEach(function(button) {
  button.addEventListener('click', closeDelivery);
});
//------------------------- колличество одного и того же товара--------------------
const countElements = document.querySelectorAll('.count');

countElements.forEach(countElement => {
  const minusButton = countElement.querySelector('.count__minus');
  const plusButton = countElement.querySelector('.count__plus');
  const amountElement = countElement.querySelector('.count__amount');

  let amount = parseInt(amountElement.textContent);

  minusButton.addEventListener('click', () => {
    if (amount > 1) {
      amount--;
      amountElement.textContent = amount;
    }
  });

  plusButton.addEventListener('click', () => {
    amount++;
    amountElement.textContent = amount;
  });
});