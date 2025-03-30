import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);


function onSubmit(event) {
  event.preventDefault();
  const { delay, state } = event.currentTarget.elements;
  
  const myPromis = new Promise((resolve, reject) => {

    setTimeout(() => {
      if (state.value === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay.value);
    
  });




  myPromis
    .then(() => {
      iziToast.warning({ message: `✅ Fulfilled promise in ${delay.value} ms`});
    })
    .catch(() => {
      iziToast.warning ({message: `❌ Rejected promise in ${delay.value} ms`});
    });
}
