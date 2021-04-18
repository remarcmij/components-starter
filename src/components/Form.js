import createElement from '../lib/createElement.js';
import store from '../store.js';

function Form(parent) {
  const form = createElement(parent, { use: 'form' });
  createElement(form, {
    use: 'input',
    type: 'text',
    name: 'input',
  });
  createElement(form, {
    use: 'button',
    type: 'submit',
    text: 'Submit Form',
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    store.updateState({ input: formData.get('input') });
  });
}

export default Form;
