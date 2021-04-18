import { updateState } from '../store.js';

export function createForm(parent) {
  const form = document.createElement('form');
  parent.appendChild(form);

  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'input';
  form.appendChild(input);

  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = 'Submit';
  form.append(button);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    updateState({ input: formData.get('input') });
  });
}
