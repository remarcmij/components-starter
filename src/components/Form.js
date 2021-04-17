import createComponent from '../lib/createComponent.js';
import { setInput } from '../store/actions.js';

function Form(parent) {
  const form = createComponent(parent, { tag: 'form' });
  createComponent(form, {
    tag: 'input',
    type: 'text',
    name: 'input',
  });
  createComponent(form, {
    tag: 'button',
    type: 'submit',
    text: 'Submit Form',
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setInput(formData.get('input'));
  });
}

export default Form;
