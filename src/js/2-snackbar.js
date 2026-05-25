import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(event.target.elements.delay.value);
  const state = event.target.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        message: `<span class="toast-icon">✅</span> Fulfilled promise in ${delay}ms`,
        backgroundColor: '#66BB6A',
        messageColor: '#fff',
        messageSize: '16px',
        icon: '',
        close: false,
        progressBar: false,
        position: 'topRight',
        transitionIn: 'fadeIn',
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `<span class="toast-icon">❌</span> Rejected promise in ${delay}ms`,
        backgroundColor: '#EF4040',
        messageColor: '#fff',
        messageSize: '16px',
        icon: '',
        close: false,
        progressBar: false,
        position: 'topRight',
        transitionIn: 'fadeIn',
      });
    });

  event.target.reset();
});
