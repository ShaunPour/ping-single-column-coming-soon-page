const form = document.querySelector('.notify-form');
const input = document.querySelector('input');
const button = document.querySelector('button');
const msg = document.querySelector('p:first-of-type');

input.focus();

form.addEventListener('keyup', (e) => {

    const test = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input);

    if(!input.value) {
        e.preventDefault();
        msg.textContent = 'This field is required';
        msg.classList.remove('hide');
        msg.classList.add('error-txt');
        input.classList.add('error-input');
        input.classList.remove('error-input-hide');
    } else if (!test) {
        e.preventDefault();
        msg.textContent = 'Please provide a valid email address';
        msg.classList.remove('hide');
        msg.classList.add('error-txt');
        input.classList.add('error-input');
        input.classList.remove('error-input-hide');
    } else {
        msg.classList.add('hide');
        msg.classList.remove('error-txt');
        input.classList.remove('error-input');
        input.classList.add('error-input-hide');
    }
});