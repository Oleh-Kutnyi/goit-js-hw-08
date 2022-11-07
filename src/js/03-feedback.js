import { throttle } from 'lodash';

const email = document.querySelector('input[type="email"]');
const message = document.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form');

const inputs = JSON.parse(localStorage.getItem('feedback-form-state')) || {
  email: '',
  message: '',
};

email.value = inputs.email || '';
message.value = inputs.message || '';

const inputHandler = name => event => {
  const data = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  data[name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

email.addEventListener('input', throttle(inputHandler('email'), 500));
message.addEventListener('input', throttle(inputHandler('message'), 500));

form.addEventListener('submit', event => {
  event.preventDefault();
  email.value = '';
  message.value = '';
  const data = JSON.parse(localStorage.getItem('feedback-form-state')) || {
    email: '',
    message: '',
  };
  console.log(data);
  localStorage.clear();
});
