import { createForm } from './createForm.js';
import { createTextField } from './createTextField.js';
import { createHeader } from './createHeader.js';

export function createFormWrapper(parent) {
  const container = document.createElement('div');
  container.classList.add('container');
  parent.appendChild(container);

  createHeader(container, { title: 'Simple form' });
  createForm(container);
  createTextField(container);
}
