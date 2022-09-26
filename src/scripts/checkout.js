'use strict';

const card = document.getElementById('card');
const paypal = document.getElementById('paypal');

card.addEventListener('click', () => {
  card.classList.add('checkout__card--active');
  paypal.classList.remove('checkout__card--active');
});

paypal.addEventListener('click', () => {
  paypal.classList.add('checkout__card--active');
  card.classList.remove('checkout__card--active');
});

const button = document.getElementById('button1');

button.addEventListener('click', () => {
  document.querySelector('.checkout').classList.add('checkout--active');
  document.querySelector('.basket').classList.remove('basket--active');
  document.querySelector('.page').classList.remove('page--blured');

  const finish = document.querySelector('.basket__finish-price').textContent;

  const newFinish = finish.replace('$ ', '');

  document.querySelector('.checkout__change').textContent = `USD ${newFinish}`;
});

const coCross = document.querySelector('.checkout__cross');

coCross.addEventListener('click', () => {
  document.querySelector('.checkout').classList.remove('checkout--active');
});
