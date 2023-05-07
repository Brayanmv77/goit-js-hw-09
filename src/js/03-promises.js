import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');

function handleSubmit(event) {
  event.preventDefault();
  const delayValue = +event.target.elements.delay.value;
  const stepValue = +event.target.elements.step.value;
  const amountValue = +event.target.elements.amount.value;

  for (let i = 0; i < amountValue; i++) {
    let position = i + 1;
    setTimeout(() => {
      createPromise(position, delayValue + i * stepValue)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }, position * stepValue);
  }
}

form.addEventListener('submit', handleSubmit);
