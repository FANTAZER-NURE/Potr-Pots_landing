'use strict';

const icon = document.getElementById('header-burger');

for (let i = 1; i <= 6; i++) {
  const item = document.getElementById(`item${i}`);

  item.addEventListener('click', () => {
    document.getElementById('menu-container').classList.toggle('menu-opened');
  });
}

const item1 = document.getElementById('item1');

item1.addEventListener('click', () => {
  document.querySelector('.basket').classList.add('basket--active');
  document.querySelector('.page').classList.add('page--blured');
});

icon.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

const bag = document.querySelector('.header__link--bag');
const shopButton = document.querySelector('.header__button');
const basketCross = document.querySelector('.basket__cross');

bag.addEventListener('click', () => {
  document.querySelector('.basket').classList.add('basket--active');
  document.querySelector('.page').classList.add('page--blured');
});

shopButton.addEventListener('click', () => {
  document.querySelector('.basket').classList.add('basket--active');
  document.querySelector('.page').classList.add('page--blured');
});

basketCross.addEventListener('click', () => {
  document.querySelector('.basket').classList.remove('basket--active');
  document.querySelector('.page').classList.remove('page--blured');
});

for (let i = 1; i <= 5; i++) {
  const plus = document.querySelector(`.materials__plus--${i}`);

  plus.addEventListener('click', () => {
    const popup = document.querySelector(`.materials__popup--${i}`);

    popup.classList.toggle('materials__popup--active');
    plus.classList.toggle('materials__plus--active');
  });
}

for (let i = 1; i <= 2; i++) {
  const minus = document.querySelector(`.minus${i}`);
  const plus = document.querySelector(`.mobilePlus${i}`);
  const text = document.querySelector(`.basket__change${i}`);
  let counter = 0;
  const unit = document.querySelector(`.basket__unit-price${i}`).textContent;
  const total = document.querySelector(`.basket__total-price${i}`);

  const price1 = unit.replace('$ ', '');
  const price = price1.replace(',', '.');

  minus.addEventListener('click', () => {
    if (counter > 0) {
      counter--;

      text.textContent = counter;
      total.textContent = `$ ${counter * parseFloat(price)}`;

      const final = document.querySelector(`.basket__finish-price`).textContent;
      const finalText = document.querySelector(`.basket__finish-price`);
      const final1 = final.replace('$ ', '');
      let final2 = parseFloat(final1.replace(',', '.'));

      final2 -= parseFloat(price);
      finalText.textContent = `$ ${final2}`;
    }
  });

  plus.addEventListener('click', () => {
    if (counter >= 0) {
      counter++;

      text.textContent = counter;
      total.textContent = `$ ${counter * parseFloat(price)}`;

      const final = document.querySelector(`.basket__finish-price`).textContent;
      const finalText = document.querySelector(`.basket__finish-price`);
      const final1 = final.replace('$ ', '');
      let final2 = parseFloat(final1.replace(',', '.'));

      final2 += parseFloat(price);
      finalText.textContent = `$ ${final2}`;
    }
  });
}
