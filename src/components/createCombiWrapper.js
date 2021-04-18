import { createInput } from './createInput.js';
import { createButton } from './createButton.js';
import { createHeader } from './createHeader.js';

export function createCombiWrapper(parent) {
  const container = document.createElement('div');
  container.classList.add('container');
  parent.appendChild(container);

  let input;
  const onInput = (value) => {
    input = value;
  };

  const onClick = () => {
    textField.textContent = input;
  };

  createHeader(container, { title: 'Managing state using callbacks' });
  createInput(container, { onInput });
  createButton(container, { onClick });

  const textField = document.createElement('div');
  container.appendChild(textField);
}
