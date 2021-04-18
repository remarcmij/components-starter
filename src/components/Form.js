import createComponent from '../lib/createComponent.js';
import store from '../store.js';

function Form(parent) {
  const form = createComponent(parent, { use: 'form' });
  createComponent(form, {
    use: 'input',
    type: 'text',
    name: 'input',
  });
  createComponent(form, {
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
